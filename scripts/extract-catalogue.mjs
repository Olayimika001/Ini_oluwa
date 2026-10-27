import { createCanvas } from '@napi-rs/canvas'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import fs from 'node:fs'
import path from 'node:path'

const pdfPath =
  'C:\\Users\\ymari\\.cursor\\projects\\c-Users-ymari-Ini-oluwa-prints-and-merchandise\\attachments\\9eafc206-40bc-407a-b6ad-13ac74e0fca9\\Ini_Oluwa_-_Art_Catalogue..pdf'
const outDir = path.join(process.cwd(), 'public', 'catalogue')

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    return { canvas, context }
  }
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width
    canvasAndContext.canvas.height = height
  }
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0
    canvasAndContext.canvas.height = 0
    canvasAndContext.canvas = null
    canvasAndContext.context = null
  }
}

fs.mkdirSync(outDir, { recursive: true })

const data = new Uint8Array(fs.readFileSync(pdfPath))
const loadingTask = getDocument({
  data,
  disableFontFace: true,
  verbosity: 0,
  canvasFactory: new NodeCanvasFactory(),
  isEvalSupported: false,
  useSystemFonts: true
})

const pdf = await loadingTask.promise
console.log(`pages: ${pdf.numPages}`)

const scale = 1.6

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i)
  const viewport = page.getViewport({ scale })
  const canvasFactory = new NodeCanvasFactory()
  const canvasAndContext = canvasFactory.create(viewport.width, viewport.height)

  await page.render({
    canvasContext: canvasAndContext.context,
    viewport,
    canvasFactory
  }).promise

  const buffer = canvasAndContext.canvas.toBuffer('image/jpeg', 82)
  const file = path.join(outDir, `page-${String(i).padStart(2, '0')}.jpg`)
  fs.writeFileSync(file, buffer)
  console.log(`wrote ${file} (${Math.round(buffer.length / 1024)}kb ${Math.round(viewport.width)}x${Math.round(viewport.height)})`)
  canvasFactory.destroy(canvasAndContext)
}

console.log('done')
process.exit(0)
