export type WorkMedium = 'primed-paper' | 'canvas' | 'paper'

export interface Product {
  id: number
  title: string
  price: number
  printPrice?: number
  badge: string
  medium: WorkMedium
  specs?: string
  desc: string
  imgSrc: string
  imgAlt: string
  options: string[]
}

export interface CartItem {
  id: number
  title: string
  price: number
  variant: string
  quantity: number
  imgSrc: string
  imageAlt: string
}
