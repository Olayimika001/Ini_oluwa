<script setup lang="ts">
import { Transition } from 'vue'
import { useShop } from '../composables/useShop'

const {
  cart,
  isCartOpen,
  closeCart,
  cartTotalCount,
  cartSubtotal,
  updateCartQuantity,
  removeCartItem,
  orderViaInstagram,
  orderViaWhatsApp
} = useShop()
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="fade">
      <div
        v-if="isCartOpen"
        class="modal-backdrop"
        @click="closeCart"
      >
        <!-- Cart Modal (white background) -->
        <div class="modal-panel" @click.stop>
          <!-- Close Button -->
          <button
            class="modal-close"
            @click="closeCart"
            aria-label="Close cart"
          >
            ×
          </button>

          <!-- Title -->
          <h2 class="modal-title">Your order:</h2>

          <!-- Empty State -->
          <div
            v-if="cart.length === 0"
            style="text-align: center; padding: 3rem 0; color: #999;"
          >
            <p>Your cart is empty</p>
          </div>

          <!-- Cart Items -->
          <div v-else>
            <!-- Items List -->
            <div style="margin-bottom: 2rem;">
              <div
                v-for="(item, index) in cart"
                :key="`${item.id}-${item.variant}`"
                style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid #eee; align-items: center;"
              >
                <!-- Thumbnail -->
                <div style="width: 60px; height: 80px; flex-shrink: 0; background: #f5f5f5;">
                  <img
                    :src="item.imgSrc"
                    :alt="item.title"
                    style="width: 100%; height: 100%; object-fit: cover;"
                  />
                </div>

                <!-- Info -->
                <div style="flex: 1;">
                  <div style="font-weight: 500; margin-bottom: 0.25rem; color: #333;">
                    {{ item.title }}
                  </div>
                  <div style="font-size: 0.85rem; color: #666;">
                    {{ item.variant }}
                  </div>
                  <div style="font-size: 0.85rem; color: #333; margin-top: 0.5rem;">
                    $ {{ item.price.toLocaleString() }}
                  </div>
                </div>

                <!-- Quantity Controls -->
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <button
                    @click="updateCartQuantity(index, -1)"
                    style="border: 1px solid #ddd; background: white; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #333;"
                  >
                    −
                  </button>
                  <span style="min-width: 2rem; text-align: center; color: #333;">{{ item.quantity }}</span>
                  <button
                    @click="updateCartQuantity(index, 1)"
                    style="border: 1px solid #ddd; background: white; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #333;"
                  >
                    +
                  </button>
                </div>

                <!-- Remove -->
                <button
                  @click="removeCartItem(index)"
                  style="background: none; border: 0; color: #999; cursor: pointer; font-size: 1.5rem; line-height: 1; padding: 0.25rem;"
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>
            </div>

            <!-- Total -->
            <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-top: 2px solid #333; font-weight: 500; color: #333;">
              <span>Total</span>
              <span>$ {{ cartSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</span>
            </div>

            <!-- Checkout Buttons -->
            <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
              <button
                @click="orderViaInstagram"
                style="width: 100%; padding: 1rem; background: #333; color: white; border: 0; font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-size: 0.85rem;"
              >
                Order via Instagram
              </button>
              <button
                @click="orderViaWhatsApp"
                style="width: 100%; padding: 1rem; background: transparent; color: #333; border: 1px solid #333; font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-size: 0.85rem;"
              >
                Order via WhatsApp
              </button>
            </div>

            <!-- Note -->
            <p style="margin-top: 1.5rem; font-size: 0.75rem; color: #666; text-align: center;">
              Continue with Instagram DM or WhatsApp to finalize your order
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--duration) var(--ease);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
