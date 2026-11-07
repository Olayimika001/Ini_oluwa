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
  originalSold?: boolean // true if original is sold, only prints available
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

export type OrderChannel = 'whatsapp' | 'instagram' | 'email'

export interface OrderDetails {
  fullName: string
  phone: string
  address: string
  note: string
  channel: OrderChannel
  privacyAccepted: boolean
}
