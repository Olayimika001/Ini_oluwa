<script setup lang="ts">
import { Transition } from 'vue'
import { useShop } from '../composables/useShop'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
  quickViewProduct,
  selectedQuickViewVariant,
  closeQuickView,
  selectQuickViewVariant,
  addQuickViewToBag
} = useShop()

// Handle commission selection
const handleAddToBag = () => {
  if (selectedQuickViewVariant.value && selectedQuickViewVariant.value.includes('Commission')) {
    closeQuickView()
    router.push('/commissions')
  } else {
    addQuickViewToBag()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="quickViewProduct"
        class="modal-backdrop"
        @click="closeQuickView"
      >
        <div class="modal-panel" @click.stop>
          <!-- Close Button -->
          <button
            class="modal-close"
            @click="closeQuickView"
          >
            ×
          </button>

          <!-- Image Side -->
          <div class="modal-image-side">
            <img
              :src="quickViewProduct.imgSrc"
              :alt="quickViewProduct.imgAlt"
              style="width: 100%; height: auto; max-height: 600px; object-fit: contain;"
            />
          </div>

          <!-- Info Side -->
          <div class="modal-info-side">
            <div>
              <h2 style="font-family: var(--font-display); font-weight: 400; font-size: 1.5rem; color: #333; margin-bottom: 0.5rem;">
                {{ quickViewProduct.title }}
              </h2>
              <div style="font-size: 0.85rem; color: #666; margin-bottom: 1rem;">
                {{ quickViewProduct.specs }}
              </div>
            </div>

            <div style="padding: 1.5rem 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
              <p style="font-size: 0.9rem; color: #666; line-height: 1.7;">
                {{ quickViewProduct.desc }}
              </p>
            </div>

            <!-- Variant Selection -->
            <div v-if="quickViewProduct.options.length > 1">
              <label style="display: block; font-size: 0.75rem; color: #999; text-transform: uppercase; margin-bottom: 0.75rem;">
                Select Option
              </label>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <button
                  v-for="option in quickViewProduct.options"
                  :key="option"
                  @click="selectQuickViewVariant(option)"
                  style="border: 1px solid #ddd; padding: 0.75rem 1rem; background: white; text-align: left; cursor: pointer; transition: all 0.2s; font-size: 0.85rem; color: #333;"
                  :style="{
                    borderColor: selectedQuickViewVariant === option ? '#333' : '#ddd',
                    background: selectedQuickViewVariant === option ? '#f9f9f9' : 'white'
                  }"
                >
                  {{ option }}
                </button>
              </div>
            </div>

            <!-- Price -->
            <div v-if="!selectedQuickViewVariant?.includes('Commission')" style="font-size: 1.75rem; font-weight: 500; color: #333;">
              ${{ selectedQuickViewVariant?.toLowerCase().includes('print') 
                  ? (quickViewProduct.printPrice ?? 80) 
                  : quickViewProduct.price 
              }}
            </div>
            <div v-else style="font-size: 1rem; font-weight: 400; color: #666; padding: 1rem 0;">
              View commission pricing page for size options and rates
            </div>

            <!-- Add to Cart Button -->
            <button
              @click="handleAddToBag"
              style="width: 100%; padding: 1rem; background: #333; color: white; border: 0; font-family: var(--font-display); text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; font-size: 0.85rem;"
            >
              {{ selectedQuickViewVariant?.includes('Commission') ? 'View Commission Pricing' : 'Add to Cart' }}
            </button>

            <p style="font-size: 0.75rem; color: #999; text-align: center;">
              Orders continue via Instagram DM or WhatsApp
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-panel {
  max-width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0;
  overflow: hidden;
  position: relative;
}

.modal-image-side {
  background: #f5f5f5;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-info-side {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--duration) var(--ease);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile Styles */
@media (max-width: 900px) {
  .modal-panel {
    grid-template-columns: 1fr !important;
    max-height: 90vh !important;
    overflow-y: auto !important;
    width: 95vw !important;
    margin: 0 auto;
  }
  
  .modal-close {
    position: fixed !important;
    top: 1.5rem !important;
    right: 1.5rem !important;
    background: white !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    z-index: 100 !important;
  }
  
  .modal-image-side {
    padding: 1.5rem !important;
  }
  
  .modal-info-side {
    padding: 1.5rem !important;
  }
}
</style>
