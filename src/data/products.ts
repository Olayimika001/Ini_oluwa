import type { Product, WorkMedium } from '../types'

function work(
  id: number,
  title: string,
  price: number,
  medium: WorkMedium,
  material: string,
  size: string
): Product {
  return {
    id,
    title,
    price,
    printPrice: 50,
    badge: 'Original & $50 Signed Print',
    medium,
    specs: `${material} · ${size} · 2026`,
    desc: `Original work by Ini Oluwa from the 2026 selected works catalogue (${material}; ${size}). Signed prints are available for each painting at $50 each.`,
    imgSrc: `/catalogue/works/work-${String(id).padStart(2, '0')}.jpg`,
    imgAlt: `${title} by Ini Oluwa, ${material}, ${size}, 2026`,
    options: [`Original (${size})`, 'Signed Print ($50)']
  }
}

const PRIMED = 'Ink, white charcoal, & acrylic on primed paper'
const CANVAS = 'Ink & acrylic on canvas'
const PAPER = 'Ink & acrylic on paper'

export const PRODUCTS: Product[] = [
  work(1, 'Ìfẹnukonu III', 1000, 'primed-paper', PRIMED, '18 × 24 inches'),
  work(2, 'Ìṣẹ̀dá', 1200, 'primed-paper', PRIMED, '18 × 24 inches'),
  work(3, 'Yánhànhàn', 1000, 'primed-paper', PRIMED, '18 × 24 inches'),
  work(4, 'T’ọkọ T’ìyàwó', 1000, 'primed-paper', PRIMED, '18 × 24 inches'),
  work(5, 'Àníkẹ́', 1000, 'primed-paper', PRIMED, '18 × 24 inches'),
  work(6, 'Sisí Ẹlẹ́mu', 300, 'canvas', CANVAS, '12 × 16 inches'),
  work(7, 'Bébì mi', 500, 'canvas', CANVAS, '12 × 16 inches'),
  work(8, 'Ìjàkadì', 500, 'canvas', CANVAS, '12 × 16 inches'),
  work(9, 'Máìtíìlọ', 500, 'canvas', CANVAS, '12 × 16 inches'),
  work(10, 'Mọ́remí àt’ọba Ugbo', 500, 'canvas', CANVAS, '12 × 16 inches'),
  work(11, 'Ìyàmi àt’ọmọ II', 1000, 'canvas', CANVAS, '24 × 30 inches'),
  work(12, 'Láì s’álárinà (Ìfenukonu II)', 500, 'paper', PAPER, '12 × 16 inches'),
  work(13, 'Odù', 250, 'paper', PAPER, '12 × 16 inches'),
  work(14, 'Safatọ Múńdì', 500, 'paper', PAPER, '12 × 16 inches'),
  work(15, 'Ìyàmi àt’ọmọ', 500, 'paper', PAPER, '12 × 16 inches'),
  work(16, 'Ìkúńlẹ̀ Abiyamọ', 500, 'paper', PAPER, '12 × 16 inches'),
  work(17, 'Animal Farm', 300, 'paper', PAPER, '12 × 16 inches'),
  work(18, 'How Not to be Misunderstood', 400, 'paper', PAPER, '12 × 16 inches'),
  work(19, 'Anana’s World', 500, 'paper', PAPER, '12 × 16 inches'),
  work(20, 'Ọmọkùnrin', 500, 'paper', PAPER, '12 × 16 inches'),
  work(21, 'Portrait of Mama T', 300, 'paper', PAPER, '12 × 16 inches'),
  work(22, 'Yoruba Gothic', 500, 'paper', PAPER, '12 × 16 inches'),
  work(23, 'Titi with a Stoat', 500, 'paper', PAPER, '12 × 16 inches'),
  work(24, 'Ìfenukonu', 500, 'paper', PAPER, '12 × 16 inches'),
  work(25, 'Madame Adetoun Bola-Araba 1', 400, 'paper', PAPER, '12 × 16 inches'),
  work(26, 'Dami’s Mother', 300, 'paper', PAPER, '12 × 16 inches'),
  work(27, 'Mama Lisabi', 500, 'paper', PAPER, '12 × 16 inches'),
  work(28, 'Oshone with a Pearl Earring', 500, 'paper', PAPER, '12 × 16 inches'),
  work(29, '020 / Leslie', 300, 'paper', PAPER, '12 × 16 inches'),
  work(30, '019 / Exie', 300, 'paper', PAPER, '12 × 16 inches'),
  work(31, '018 / Saléwá', 300, 'paper', PAPER, '12 × 16 inches'),
  work(32, '017 / Emmanuella', 300, 'paper', PAPER, '12 × 16 inches'),
  work(33, '016 / Yemi', 300, 'paper', PAPER, '12 × 16 inches'),
  work(34, '015 / A Kiss to Build a Dream On', 500, 'paper', PAPER, '12 × 16 inches'),
  work(35, '014 / Zee', 300, 'paper', PAPER, '12 × 16 inches'),
  work(36, '013 / Lief', 500, 'paper', PAPER, '12 × 16 inches'),
  work(37, '012 / Kween', 300, 'paper', PAPER, '12 × 16 inches'),
  work(38, '011 / Shaniqua', 300, 'paper', PAPER, '12 × 16 inches'),
  work(39, '010 / The Girl Next Door', 300, 'paper', PAPER, '12 × 16 inches'),
  work(40, '009 / Reminds me of Her', 500, 'paper', PAPER, '12 × 16 inches'),
  work(41, '008 / Me & You, Maybe', 500, 'paper', PAPER, '12 × 16 inches'),
  work(42, '007 / Ella', 300, 'paper', PAPER, '12 × 16 inches'),
  work(43, '006 / Jane', 300, 'paper', PAPER, '12 × 16 inches'),
  work(44, '005 / Omozele', 300, 'paper', PAPER, '12 × 16 inches'),
  work(45, '004 / Zainab', 300, 'paper', PAPER, '12 × 16 inches'),
  work(46, '003 / Tee', 300, 'paper', PAPER, '12 × 16 inches'),
  work(47, '002 / Hummingbird III', 500, 'paper', PAPER, '12 × 16 inches'),
  work(48, '001 / A Journey Into Your Soul V', 300, 'paper', PAPER, '12 × 16 inches')
]
