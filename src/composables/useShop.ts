import { ref, computed } from 'vue'
import type { Product, CartItem } from '../types'

const cart = ref<CartItem[]>([])

const isCartOpen = ref(false)
const isNavOpen = ref(false)
const quickViewProduct = ref<Product | null>(null)
const selectedQuickViewVariant = ref<string>('')
const toastMessage = ref('')
const isToastVisible = ref(false)
const isOrderCopied = ref(false)
const orderMessage = ref('')
let toastTimeout: number | undefined

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch (e) {
    console.warn('Clipboard API error:', e)
  }

  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.left = '-9999px'
    textarea.style.top = '-9999px'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const successful = document.execCommand('copy')
    document.body.removeChild(textarea)
    return successful
  } catch (err) {
    console.error('Fallback copy failed', err)
    return false
  }
}

function generateOrderMessage(items: CartItem[], total: number): string {
  const artworkLines = items
    .map(
      (item, i) =>
        `${i + 1}. "${item.title}" — ${item.variant} ($${item.price.toLocaleString()} × ${item.quantity} = $${(item.price * item.quantity).toLocaleString()})`
    )
    .join('\n')

  return `Hello Ini Oluwa (@ini.oluwa)!

I would like to order / inquire about the following artwork(s) from your 2026 catalogue:

${artworkLines}

Total Subtotal: $${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

I'd like to discuss framing, shipping, availability, and any other details with you here on Instagram!`
}

export function useShop() {
  const cartTotalCount = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const cartSubtotal = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })

  function showToast(message: string) {
    toastMessage.value = message
    isToastVisible.value = true

    if (toastTimeout) clearTimeout(toastTimeout)
    toastTimeout = window.setTimeout(() => {
      isToastVisible.value = false
    }, 3200)
  }

  function openCart() {
    isCartOpen.value = true
    isNavOpen.value = false
    document.body.style.overflow = 'hidden'
  }

  function closeCart() {
    isCartOpen.value = false
    if (!quickViewProduct.value) {
      document.body.style.overflow = ''
    }
  }

  function toggleCart() {
    if (isCartOpen.value) {
      closeCart()
    } else {
      openCart()
    }
  }

  function openNav() {
    isNavOpen.value = true
    isCartOpen.value = false
    document.body.style.overflow = 'hidden'
  }

  function closeNav() {
    isNavOpen.value = false
    if (!quickViewProduct.value) {
      document.body.style.overflow = ''
    }
  }

  function openQuickView(product: Product) {
    quickViewProduct.value = product
    selectedQuickViewVariant.value = product.options[0] || ''
    document.body.style.overflow = 'hidden'
  }

  function closeQuickView() {
    quickViewProduct.value = null
    if (!isCartOpen.value && !isNavOpen.value) {
      document.body.style.overflow = ''
    }
  }

  function selectQuickViewVariant(variant: string) {
    selectedQuickViewVariant.value = variant
  }

  function addToBag(product: Product, variant?: string, priceOverride?: number) {
    const chosenVariant = variant || product.options[0] || 'Original'
    const isPrint = chosenVariant.toLowerCase().includes('print')
    const itemPrice = priceOverride !== undefined
      ? priceOverride
      : (isPrint ? (product.printPrice ?? 50) : product.price)

    const existingIndex = cart.value.findIndex(
      item => item.id === product.id && item.variant === chosenVariant
    )

    const existingItem = existingIndex > -1 ? cart.value[existingIndex] : undefined

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.value.push({
        id: product.id,
        title: product.title,
        price: itemPrice,
        variant: chosenVariant,
        quantity: 1,
        imgSrc: product.imgSrc,
        imageAlt: product.imgAlt
      })
    }

    showToast(`${product.title} (${chosenVariant}) added to bag.`)
  }

  function addQuickViewToBag() {
    if (quickViewProduct.value) {
      const isPrint = selectedQuickViewVariant.value.toLowerCase().includes('print')
      const price = isPrint ? (quickViewProduct.value.printPrice ?? 50) : quickViewProduct.value.price
      addToBag(quickViewProduct.value, selectedQuickViewVariant.value, price)
      closeQuickView()
      openCart()
    }
  }

  function updateCartQuantity(index: number, delta: number) {
    const item = cart.value[index]
    if (!item) return
    item.quantity += delta
    if (item.quantity <= 0) {
      cart.value.splice(index, 1)
    }
    isOrderCopied.value = false
  }

  function removeCartItem(index: number) {
    if (cart.value[index]) {
      cart.value.splice(index, 1)
      isOrderCopied.value = false
    }
  }

  function clearCart() {
    cart.value = []
    isOrderCopied.value = false
    orderMessage.value = ''
  }

  async function copyOrderMessage(): Promise<boolean> {
    if (cart.value.length === 0) return false
    const message = generateOrderMessage(cart.value, cartSubtotal.value)
    orderMessage.value = message
    const copied = await copyToClipboard(message)
    if (copied) {
      isOrderCopied.value = true
      showToast('Order details copied to clipboard!')
    }
    return copied
  }

  async function orderViaInstagram() {
    if (cart.value.length === 0) return

    const message = generateOrderMessage(cart.value, cartSubtotal.value)
    orderMessage.value = message
    const copied = await copyToClipboard(message)
    if (copied) {
      isOrderCopied.value = true
    }

    // Direct link to Ini Oluwa's Instagram DM with URL encoded message parameter
    const igUrl = `https://ig.me/m/ini.oluwa?text=${encodeURIComponent(message)}`
    window.open(igUrl, '_blank', 'noopener,noreferrer')

    showToast('Artwork list copied! Paste in @ini.oluwa DM to send.')
  }

  function orderViaWhatsApp() {
    if (cart.value.length === 0) return

    const message = generateOrderMessage(cart.value, cartSubtotal.value)
    orderMessage.value = message

    // WhatsApp natively pre-populates the input box so you can send immediately without pasting
    const waUrl = `https://wa.me/2348138659176?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    showToast('Opening WhatsApp with order pre-filled...')
  }

  async function checkout() {
    await orderViaInstagram()
  }

  return {
    cart,
    isCartOpen,
    isNavOpen,
    quickViewProduct,
    selectedQuickViewVariant,
    toastMessage,
    isToastVisible,
    isOrderCopied,
    orderMessage,
    cartTotalCount,
    cartSubtotal,
    openCart,
    closeCart,
    toggleCart,
    openNav,
    closeNav,
    openQuickView,
    closeQuickView,
    selectQuickViewVariant,
    addToBag,
    addQuickViewToBag,
    updateCartQuantity,
    removeCartItem,
    clearCart,
    copyOrderMessage,
    orderViaInstagram,
    orderViaWhatsApp,
    showToast,
    checkout
  }
}
