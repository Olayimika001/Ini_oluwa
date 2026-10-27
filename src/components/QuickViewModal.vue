<script setup lang="ts">
import { computed } from 'vue'
import { useShop } from '../composables/useShop'

const {
  quickViewProduct,
  selectedQuickViewVariant,
  closeQuickView,
  selectQuickViewVariant,
  addQuickViewToBag
} = useShop()

const isPrintSelected = computed(() => {
  return selectedQuickViewVariant.value.toLowerCase().includes('print')
})

const currentPrice = computed(() => {
  if (!quickViewProduct.value) return 0
  if (isPrintSelected.value) {
    return quickViewProduct.value.printPrice ?? 50
  }
  return quickViewProduct.value.price
})
</script>

<template>
  <div
    id="quickview-backdrop"
    class="fixed inset-0 bg-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300"
    :class="quickViewProduct ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    @click.self="closeQuickView"
  >
    <div
      v-if="quickViewProduct"
      id="quickview-modal"
      class="bg-surface max-w-2xl w-full border border-surface-container-highest shadow-2xl transition-all duration-300 max-h-[795px] overflow-y-auto"
      :class="quickViewProduct ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
    >
      <div class="relative p-6 md:p-8">
        <button
          id="btn-close-quickview"
          aria-label="Close product preview"
          class="absolute top-5 right-5 text-secondary hover:text-primary cursor-pointer p-1"
          @click="closeQuickView"
        >
          <span class="material-symbols-outlined">close</span>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          <!-- Modal Image Frame -->
          <div class="bg-surface-container p-4 border border-surface-container-highest flex items-center justify-center">
            <img
              id="qv-image"
              :src="quickViewProduct.imgSrc"
              :alt="quickViewProduct.imgAlt"
              class="w-full h-72 object-contain"
            />
          </div>

          <!-- Modal Details -->
          <div class="flex flex-col justify-between">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span
                  id="qv-badge"
                  class="inline-block border border-surface-container-highest bg-surface-container-low px-2 py-0.5 text-label-caps font-label-caps text-[10px] text-primary uppercase"
                >
                  {{ isPrintSelected ? 'Archival Fine Art Print' : 'Unique Original Work' }}
                </span>
                <span
                  v-if="!isPrintSelected"
                  class="inline-block border border-on-tertiary-container/30 bg-surface px-2 py-0.5 text-label-caps font-label-caps text-[10px] text-on-tertiary-container uppercase"
                >
                  $50 Prints Available
                </span>
              </div>

              <h3 id="qv-title" class="font-headline-sm text-headline-sm text-primary mb-1">
                {{ quickViewProduct.title }}
              </h3>

              <div class="flex items-baseline gap-3 mb-3">
                <p id="qv-price" class="font-body-md text-primary font-bold text-2xl">
                  ${{ currentPrice.toLocaleString() }}
                </p>
                <span class="text-caption text-secondary">
                  {{ isPrintSelected ? 'Archival print ($50)' : 'Original piece' }}
                </span>
              </div>

              <p id="qv-desc" class="font-body-sm text-body-sm text-secondary mb-5">
                {{ quickViewProduct.desc }}
              </p>

              <!-- Option Selectors -->
              <div class="mb-6">
                <label class="block font-label-caps text-label-caps uppercase text-secondary mb-2 tracking-wider">
                  Select Format
                </label>
                <div id="qv-size-group" class="flex flex-col gap-2">
                  <button
                    v-for="opt in quickViewProduct.options"
                    :key="opt"
                    type="button"
                    class="qv-size-btn border px-3 py-2 font-label-caps text-[11px] cursor-pointer transition-colors text-left flex justify-between items-center"
                    :class="selectedQuickViewVariant === opt
                      ? 'border-primary bg-primary-container text-on-primary font-semibold'
                      : 'border-surface-container-highest bg-surface text-primary hover:border-primary'"
                    @click="selectQuickViewVariant(opt)"
                  >
                    <span>{{ opt }}</span>
                    <span class="text-xs">
                      {{ opt.toLowerCase().includes('print') ? '$50' : `$${quickViewProduct.price.toLocaleString()}` }}
                    </span>
                  </button>
                </div>
              </div>

              <!-- Archival Note -->
              <div class="border-t border-b border-surface-container-highest py-2.5 mb-6 text-caption font-caption text-secondary">
                <template v-if="isPrintSelected">
                  Museum-grade archival fine art print on heavy cotton rag paper. Available for each artwork in the 2026 catalogue for $50.
                </template>
                <template v-else>
                  Unique original from the 2026 selected works catalogue. Archival fine art prints of this work are also available for $50.
                </template>
              </div>
            </div>

            <button
              id="qv-add-to-cart-btn"
              class="w-full bg-primary-container text-on-primary py-3 px-6 font-label-caps text-label-caps uppercase tracking-wider hover:bg-on-tertiary-container transition-colors duration-200 cursor-pointer"
              @click="addQuickViewToBag"
            >
              Add {{ isPrintSelected ? 'Print ($50)' : 'Original' }} to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
