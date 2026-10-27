<script setup lang="ts">
import { computed } from 'vue'
import { useShop } from '../composables/useShop'

const {
  cart,
  isCartOpen,
  closeCart,
  cartTotalCount,
  cartSubtotal,
  updateCartQuantity,
  removeCartItem,
  clearCart,
  copyOrderMessage,
  isOrderCopied,
  orderMessage,
  orderViaInstagram,
  orderViaWhatsApp,
  checkout
} = useShop()

const mailtoLink = computed(() => {
  const subject = encodeURIComponent('Art Catalogue Order & Inquiry — Ini Oluwa')
  const body = encodeURIComponent(
    orderMessage.value ||
    'Hello Ini Oluwa,\n\nI would like to inquire about collecting works from your 2026 catalogue.'
  )
  return `mailto:heyyinioluwa@gmail.com?subject=${subject}&body=${body}`
})
</script>

<template>
  <div>
    <!-- Backdrop -->
    <div
      id="cart-backdrop"
      class="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 transition-opacity duration-300"
      :class="isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeCart"
    />

    <!-- Shopping Bag Slide-Over Panel -->
    <aside
      id="cart-drawer"
      aria-label="Shopping Bag"
      class="fixed inset-y-0 right-0 w-full sm:w-96 max-w-full z-50 bg-surface-container-low border-l border-surface-container-highest shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between"
      :class="isCartOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Cart Header -->
      <div class="p-6 border-b border-surface-container-highest flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="font-headline-sm text-headline-sm text-primary">Your Bag</span>
          <span id="cart-total-badge" class="font-label-caps text-[11px] text-secondary bg-surface-container px-2 py-0.5">
            ({{ cartTotalCount }} {{ cartTotalCount === 1 ? 'item' : 'items' }})
          </span>
        </div>
        <button
          id="btn-close-cart"
          aria-label="Close Cart"
          class="p-1 text-secondary hover:text-primary focus:outline-none cursor-pointer"
          @click="closeCart"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Cart Items Scroll Area -->
      <div id="cart-items-container" class="flex-1 overflow-y-auto p-6 space-y-5">
        <!-- Empty State -->
        <div
          v-if="cart.length === 0"
          class="h-64 flex flex-col items-center justify-center text-center p-6 space-y-3"
        >
          <span class="material-symbols-outlined text-[36px] text-secondary">shopping_bag</span>
          <p class="font-headline-sm text-base text-primary">Your bag is empty.</p>
          <p class="font-caption text-secondary">Explore selected works from the 2026 catalogue.</p>
        </div>

        <!-- Populated Cart Items -->
        <div
          v-for="(item, index) in cart"
          :key="`${item.id}-${item.variant}`"
          class="flex gap-4 pb-5 border-b border-surface-container-highest"
        >
          <div class="w-16 h-20 bg-surface-container border border-surface-container-highest flex-shrink-0 overflow-hidden">
            <img
              :src="item.imgSrc"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start">
                <h4 class="font-headline-sm text-sm text-primary font-medium">{{ item.title }}</h4>
                <button
                  class="text-secondary hover:text-error text-caption p-1 cursor-pointer transition-colors"
                  title="Remove item"
                  @click="removeCartItem(index)"
                >
                  <span class="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
              <p class="font-caption text-secondary text-[11px]">{{ item.variant }}</p>
            </div>

            <div class="flex justify-between items-center mt-2">
              <div class="flex items-center border border-surface-container-highest bg-surface">
                <button
                  class="px-2 py-0.5 text-secondary hover:text-primary text-xs cursor-pointer select-none"
                  @click="updateCartQuantity(index, -1)"
                >
                  -
                </button>
                <span class="px-2 font-label-caps text-xs">{{ item.quantity }}</span>
                <button
                  class="px-2 py-0.5 text-secondary hover:text-primary text-xs cursor-pointer select-none"
                  @click="updateCartQuantity(index, 1)"
                >
                  +
                </button>
              </div>
              <span class="font-body-sm font-semibold text-primary text-sm">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Footer & Checkout -->
      <div class="p-6 bg-surface-container border-t border-surface-container-highest space-y-4">
        <div class="flex justify-between items-baseline">
          <span class="font-label-caps text-label-caps uppercase text-secondary tracking-wider">Estimated Total</span>
          <span id="cart-subtotal-price" class="font-headline-sm text-headline-sm text-primary">
            ${{ cartSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </span>
        </div>

        <!-- Direct Conversation Note -->
        <div class="bg-surface p-3.5 border border-surface-container-highest text-caption text-secondary space-y-1.5">
          <div class="flex items-center gap-1.5 font-label-caps uppercase text-primary font-semibold text-[10px] tracking-wider">
            <span class="material-symbols-outlined text-[16px] text-on-tertiary-container">forum</span>
            <span>Direct Artist Orders</span>
          </div>
          <p class="text-[12px] leading-relaxed">
            No payment taken online. Orders and conversations continue directly with Ini Oluwa.
          </p>
        </div>

        <!-- Checkout Buttons -->
        <div class="space-y-2">
          <!-- WhatsApp: 100% pre-filled instant send! -->
          <button
            id="btn-checkout-whatsapp"
            type="button"
            class="w-full bg-[#1b5e20] hover:bg-[#2e7d32] text-white py-3.5 px-4 font-label-caps text-label-caps uppercase tracking-wider transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 shadow-sm"
            :disabled="cart.length === 0"
            @click="orderViaWhatsApp"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Order via WhatsApp (Instant Pre-Filled)</span>
          </button>

          <!-- Instagram DM Button -->
          <button
            id="btn-checkout-instagram"
            type="button"
            class="w-full bg-primary-container text-on-primary py-3.5 px-4 font-label-caps text-label-caps uppercase tracking-wider hover:bg-on-tertiary-container transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 shadow-sm"
            :disabled="cart.length === 0"
            @click="orderViaInstagram"
          >
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Continue to Instagram DM</span>
          </button>
        </div>

        <!-- Order Copied Confirmation Card -->
        <div v-if="isOrderCopied" class="p-3 bg-surface border border-primary space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-primary">
            <span class="flex items-center gap-1.5 text-on-tertiary-container">
              <span class="material-symbols-outlined text-[16px]">content_paste</span>
              <span>Order copied to clipboard!</span>
            </span>
            <span class="text-[10px] text-secondary font-label-caps uppercase">Ready to paste</span>
          </div>
          <p class="text-[11px] text-secondary leading-relaxed">
            Note: Instagram's security system blocks websites from auto-typing into private DM boxes, so your order was automatically copied to your clipboard. <strong>Tap "Paste" in @ini.oluwa's DM to send instantly!</strong>
          </p>
          <div class="flex gap-2 pt-1">
            <a
              href="https://ig.me/m/ini.oluwa"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 text-center py-2 bg-primary text-on-primary text-[10px] font-label-caps uppercase tracking-wider hover:bg-on-tertiary-container transition-colors"
            >
              Open Instagram DM
            </a>
            <button
              type="button"
              class="px-2.5 py-2 border border-surface-container-highest hover:border-primary text-[10px] font-label-caps uppercase tracking-wider cursor-pointer transition-colors"
              @click="copyOrderMessage"
            >
              Copy Again
            </button>
          </div>
        </div>

        <!-- Alternative Contact Links -->
        <div class="space-y-2 pt-1 text-center">
          <a
            :href="mailtoLink"
            class="block text-[11px] font-label-caps text-secondary hover:text-primary uppercase tracking-wider underline underline-offset-4 transition-colors"
          >
            Or order via Email (heyyinioluwa@gmail.com)
          </a>
          <div class="flex justify-between items-center text-caption text-secondary pt-2 border-t border-surface-container-highest">
            <button
              type="button"
              class="hover:text-error underline underline-offset-2 cursor-pointer transition-colors"
              @click="clearCart"
            >
              Clear Bag
            </button>
            <button
              id="btn-continue-shopping"
              type="button"
              class="hover:text-primary underline underline-offset-2 cursor-pointer transition-colors"
              @click="closeCart"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
