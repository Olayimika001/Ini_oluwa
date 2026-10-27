import { ref, computed } from 'vue'
import type { Product, CartItem } from '../types'

const cart = ref<CartItem[]>([])

const isCartOpen = ref(false)
const isNavOpen = ref(false)
const quickViewProduct = ref<Product | null>(null)
const selectedQuickViewVariant = ref<string>('')
const toastMessage = ref('')
const isToastVisible = ref(false)
let toastTimeout: number | undefined

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
    }
  }

  function updateCartQuantity(index: number, delta: number) {
    const item = cart.value[index]
    if (!item) return
    item.quantity += delta
    if (item.quantity <= 0) {
      cart.value.splice(index, 1)
    }
  }

  function removeCartItem(index: number) {
    if (cart.value[index]) {
      cart.value.splice(index, 1)
    }
  }

  function checkout() {
    if (cart.value.length === 0) return
    const formattedSubtotal = cartSubtotal.value.toFixed(2)
    alert(
      `Inquiry checkout for $${formattedSubtotal}. In a production store you will be directed to pay, or you can reach Ini Oluwa at heyyinioluwa@gmail.com.`
    )
  }

  return {
    cart,
    isCartOpen,
    isNavOpen,
    quickViewProduct,
    selectedQuickViewVariant,
    toastMessage,
    isToastVisible,
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
    showToast,
    checkout
  }
}
