<script setup lang="ts">
import { computed, ref } from 'vue'
import { PRODUCTS } from '../data/products'
import { useShop } from '../composables/useShop'
import type { WorkMedium } from '../types'

const { openQuickView, addToBag } = useShop()

const filters: { id: 'all' | WorkMedium; label: string }[] = [
  { id: 'all', label: 'All works' },
  { id: 'primed-paper', label: 'Primed paper' },
  { id: 'canvas', label: 'Canvas' },
  { id: 'paper', label: 'Paper' }
]

const activeFilter = ref<'all' | WorkMedium>('all')
const showAll = ref(false)

const filteredWorks = computed(() => {
  if (activeFilter.value === 'all') return PRODUCTS
  return PRODUCTS.filter(p => p.medium === activeFilter.value)
})

const visibleWorks = computed(() => {
  if (showAll.value) return filteredWorks.value
  return filteredWorks.value.slice(0, 4)
})

function setFilter(filterId: 'all' | WorkMedium) {
  activeFilter.value = filterId
  showAll.value = false
}

function toggleShowAll() {
  if (showAll.value) {
    showAll.value = false
    const el = document.getElementById('featured-collection')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    showAll.value = true
  }
}
</script>

<template>
  <section id="featured-collection" class="py-16 md:py-24 bg-surface-container-low border-b border-surface-container-highest">
    <div class="max-w-7xl mx-auto px-5 md:px-16">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container block mb-2">
            Selected Works 2026
          </span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            The Catalogue
          </h2>
        </div>
        <p class="font-body-md text-secondary max-w-md">
          Forty-eight original works in ink, white charcoal, and acrylic — available as unique pieces from the 2026 catalogue. Signed Prints are available for each painting at $50 each.
        </p>
      </div>

      <!-- Prints Announcement Highlight -->
      <div class="mb-8 p-4 bg-surface border border-surface-container-highest flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-[18px]">verified</span>
          </div>
          <div>
            <span class="font-label-caps text-label-caps uppercase text-primary tracking-wider font-semibold block">
              Signed Prints Available for Each Painting
            </span>
            <span class="font-body-sm text-secondary text-xs">
              Signed Prints are available for each painting at $50 each.
            </span>
          </div>
        </div>
        <div class="inline-flex items-center gap-2 bg-surface-container px-3 py-1.5 border border-surface-container-highest self-start sm:self-auto shrink-0">
          <span class="font-label-caps text-[11px] text-secondary uppercase tracking-wider">Signed Prints</span>
          <span class="font-headline-sm text-lg font-bold text-primary">$50</span>
          <span class="font-caption text-[11px] text-secondary">each</span>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          class="px-3 py-1.5 border font-label-caps text-[11px] uppercase tracking-wider cursor-pointer transition-colors"
          :class="activeFilter === filter.id
            ? 'border-primary bg-primary-container text-on-primary'
            : 'border-surface-container-highest bg-surface text-primary hover:border-primary'"
          @click="setFilter(filter.id)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <article
          v-for="product in visibleWorks"
          :key="product.id"
          class="product-card group bg-surface border border-surface-container-highest p-4 flex flex-col justify-between hover:border-primary transition-colors duration-200"
        >
          <div>
            <div class="relative bg-surface-container overflow-hidden border border-surface-container-highest aspect-[4/5] mb-4">
              <img
                :src="product.imgSrc"
                :alt="product.imgAlt"
                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <!-- <span class="absolute top-3 left-3 bg-surface/95 border border-surface-container-highest px-2 py-0.5 text-label-caps font-label-caps text-[10px] text-primary uppercase">
                {{ product.badge }}
              </span> -->

              <button
                class="absolute bottom-3 right-3 bg-surface/90 hover:bg-primary hover:text-on-primary text-primary p-2 border border-surface-container-highest transition-colors duration-150 flex items-center justify-center cursor-pointer"
                title="Quick View"
                aria-label="Quick View"
                @click="openQuickView(product)"
              >
                <span class="material-symbols-outlined text-[18px]">visibility</span>
              </button>
            </div>

            <div class="flex justify-between items-baseline mb-1 gap-3">
              <h3 class="font-headline-sm text-lg font-medium text-primary">
                {{ product.title }}
              </h3>
              <span class="font-body-md font-semibold text-primary shrink-0">
                ${{ product.price.toLocaleString() }}
              </span>
            </div>

            <div class="flex justify-between items-center text-caption text-secondary/90 mb-4">
              <span class="truncate mr-2">{{ product.specs }}</span>
              <!-- <span class="font-label-caps text-on-tertiary-container font-semibold uppercase text-[10px] tracking-wider shrink-0 bg-surface-container px-1.5 py-0.5 border border-surface-container-highest">
                Print $50
              </span> -->
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-2">
            <button
              class="w-full bg-surface hover:bg-primary-container text-primary hover:text-on-primary border border-primary py-2.5 px-2 font-label-caps text-[11px] uppercase tracking-wider transition-colors duration-150 cursor-pointer text-center"
              title="Add Original to Bag"
              @click="addToBag(product, product.options[0], product.price)"
            >
              Original
            </button>
            <button
              class="w-full bg-primary-container hover:bg-on-tertiary-container text-on-primary border border-primary py-2.5 px-2 font-label-caps text-[11px] uppercase tracking-wider transition-colors duration-150 cursor-pointer text-center"
              title="Add $50 Signed Print to Bag"
              @click="addToBag(product, 'Signed Print ($50)', 50)"
            >
              Signed Print
            </button>
          </div>
        </article>
      </div>

      <!-- View All / Show Less Button -->
      <div v-if="filteredWorks.length > 4" class="mt-12 flex justify-center">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-8 py-3.5 border border-primary bg-primary-container text-on-primary hover:bg-on-tertiary-container font-label-caps text-label-caps uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-sm"
          @click="toggleShowAll"
        >
          <span>{{ showAll ? 'Show Less' : 'View All' }}</span>
          <span
            class="material-symbols-outlined text-[18px] transition-transform duration-200"
            :class="{ 'rotate-180': showAll }"
          >
            expand_more
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
