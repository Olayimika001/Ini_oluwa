<script setup lang="ts">
import { useShop } from '../composables/useShop'

const {
  cart,
  isCartOpen,
  closeCart,
  cartTotalCount,
  cartSubtotal,
  updateCartQuantity,
  removeCartItem,
  checkout
} = useShop()
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
          <span class="font-label-caps text-label-caps uppercase text-secondary tracking-wider">Subtotal</span>
          <span id="cart-subtotal-price" class="font-headline-sm text-headline-sm text-primary">
            ${{ cartSubtotal.toFixed(2) }}
          </span>
        </div>
        <p class="text-caption text-secondary text-[11px]">
          Shipping and studio arrangements confirmed after inquiry.
        </p>

        <button
          id="btn-checkout"
          class="w-full bg-primary-container text-on-primary py-3.5 px-6 font-label-caps text-label-caps uppercase tracking-wider hover:bg-on-tertiary-container transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="cart.length === 0"
          @click="checkout"
        >
          Proceed to Checkout
        </button>

        <button
          id="btn-continue-shopping"
          class="w-full text-center text-secondary hover:text-primary font-label-caps text-[11px] uppercase tracking-wider underline underline-offset-4 pt-1 cursor-pointer"
          @click="closeCart"
        >
          Continue Browsing
        </button>
      </div>
    </aside>
  </div>
</template>
