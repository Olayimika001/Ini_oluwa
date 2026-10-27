import { createCanvas } from '@napi-rs/canvas'
import { getDocument, OPS } from 'pdfjs-dist/legacy/build/pdf.mjs'
import fs from 'node:fs'
import path from 'node:path'

const pdfPath =
  'C:\\Users\\ymari\\.cursor\\projects\\c-Users-ymari-Ini-oluwa-prints-and-merchandise\\attachments\\9eafc206-40bc-407a-b6ad-13ac74e0fca9\\Ini_Oluwa_-_Art_Catalogue..pdf'
const outDir = path.join(process.cwd(), 'public', 'catalogue', 'works')
fs.mkdirSync(outDir, { recursive: true })

const data = new Uint8Array(fs.readFileSync(pdfPath))
const pdf = await getDocument({
  data,
  disableFontFace: true,
  verbosity: 0,
  isEvalSupported: false,
  useSystemFonts: true
}).promise

function saveRgb(name, img) {
  const canvas = createCanvas(img.width, img.height)
  const ctx = canvas.getContext('2d')
  const imageData = ctx.createImageData(img.width, img.height)
  const src = img.data
  const kind = img.kind
  // 1=GRAYSCALE_1BPP 2=RGB_24BPP 3=RGBA_32BPP
  if (kind === 3) {
    imageData.data.set(src)
  } else if (kind === 2) {
    let si = 0
    for (let di = 0; di < imageData.data.length; di += 4) {
      imageData.data[di] = src[si++]
      imageData.data[di + 1] = src[si++]
      imageData.data[di + 2] = src[si++]
      imageData.data[di + 3] = 255
    }
  } else {
    let si = 0
    for (let di = 0; di < imageData.data.length; di += 4) {
      const v = src[si++]
      imageData.data[di] = v
      imageData.data[di + 1] = v
      imageData.data[di + 2] = v
      imageData.data[di + 3] = 255
    }
  }
  ctx.putImageData(imageData, 0, 0)
  const file = path.join(outDir, name)
  fs.writeFileSync(file, canvas.toBuffer('image/jpeg', 88))
  return file
}

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i)
  const opList = await page.getOperatorList()
  let n = 0
  for (let j = 0; j < opList.fnArray.length; j++) {
    if (opList.fnArray[j] === OPS.paintImageXObject || opList.fnArray[j] === OPS.paintInlineImageXObject) {
      const imgName = opList.argsArray[j][0]
      try {
        const img = await new Promise((resolve, reject) => {
          page.objs.get(imgName, (obj) => (obj ? resolve(obj) : reject(new Error('empty'))))
        })
        if (img && img.width > 80 && img.height > 80) {
          n++
          const file = saveRgb(`p${String(i).padStart(2, '0')}-${n}-${img.width}x${img.height}.jpg`, img)
          console.log(`page ${i} image ${n}: ${img.width}x${img.height} kind=${img.kind} -> ${path.basename(file)}`)
        }
      } catch (err) {
        console.log(`page ${i} skip ${imgName}: ${err.message}`)
      }
    }
  }
}

console.log('done')
process.exit(0)
