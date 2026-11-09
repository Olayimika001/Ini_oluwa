<script setup lang="ts">
import { ref, computed } from 'vue'
import { PRODUCTS } from '../data/products'
import { useShop } from '../composables/useShop'
import type { WorkMedium } from '../types'

const { openQuickView } = useShop()

// Filter state
const activeFilter = ref<'all' | WorkMedium>('all')

// Pagination state
const currentPage = ref(1)
const itemsPerPage = 8

// Filtered products
const filteredProducts = computed(() => {
  if (activeFilter.value === 'all') return PRODUCTS
  return PRODUCTS.filter(p => p.medium === activeFilter.value)
})

// Total pages
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// Paginated products
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

// Page numbers to display
const displayedPages = computed(() => {
  const pages: (number | string)[] = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Always show first page
    pages.push(1)
    
    if (current > 3) {
      pages.push('...')
    }
    
    // Show pages around current
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i)
    }
    
    if (current < total - 2) {
      pages.push('...')
    }
    
    // Always show last page
    pages.push(total)
  }
  
  return pages
})

const setFilter = (filter: 'all' | WorkMedium) => {
  activeFilter.value = filter
  currentPage.value = 1 // Reset to first page when filter changes
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1)
  }
}
</script>

<template>
  <div class="page-shell no-hero">
    <section style="background: #4A4A4A; min-height: 100vh; padding: 3rem var(--space-page-x) 5rem;">
      <div style="max-width: 1400px; margin: 0 auto;">
        <!-- Page Title -->
        <h1 style="font-family: var(--font-display); font-weight: 200; font-size: 2rem; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 3rem; color: white;">
          CATALOG
        </h1>

        <!-- Catalog Grid - 3 columns, 8 items per page -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem 2rem; margin-bottom: 4rem; min-height: 600px;">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            style="position: relative; cursor: pointer;"
            @click="openQuickView(product)"
          >
            <!-- Image Container with Add Button -->
            <div style="position: relative; background: #2B2B2B; aspect-ratio: 3/4; overflow: hidden; margin-bottom: 0.75rem;">
              <img
                :src="product.imgSrc"
                :alt="product.imgAlt"
                :style="{
                  width: '100%',
                  height: '100%',
                  objectFit: product.id === 5 ? 'contain' : 'cover',
                  transition: 'opacity 0.3s'
                }"
                class="catalog-img-hover"
              />
              
              <!-- SOLD Badge (top right) -->
              <div
                v-if="product.originalSold"
                style="position: absolute; top: 0.75rem; right: 0.75rem; background: white; color: #333; padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;"
              >
                sold
              </div>
              
              <!-- Add to Cart Button (top right) - only show if not sold -->
              <button
                v-else
                @click.stop="openQuickView(product)"
                style="position: absolute; top: 0.75rem; right: 0.75rem; background: white; border: 0; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0; transition: opacity 0.3s; color: #333; font-size: 1.25rem; font-weight: 300;"
                class="add-btn"
                aria-label="Add to cart"
              >
                🛒
              </button>
            </div>

            <!-- Artwork Info -->
            <div>
              <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: white; margin-bottom: 0.35rem; font-weight: 400;">
                {{ product.title }}
              </div>
              <div style="font-size: 0.8rem; color: #999; margin-bottom: 0.35rem;">
                oil on canvas
              </div>
              <div v-if="product.originalSold" style="font-size: 0.75rem; color: var(--color-accent); font-weight: 400;">
                Original SOLD · Print: $80
              </div>
              <template v-else>
                <div style="font-size: 0.75rem; color: var(--color-accent); font-weight: 400;">
                  Buy: ${{ product.price.toLocaleString() }}
                </div>
                <div style="font-size: 0.7rem; color: #ccc; margin-top: 0.25rem;">
                  Print: $80
                </div>
              </template>
            </div>
          </div>
        </div>

        <!-- Pagination - Working -->
        <div style="display: flex; justify-content: center; gap: 1rem; align-items: center; color: white; font-size: 0.85rem;">
          <!-- Previous Button -->
          <button 
            @click="prevPage"
            :disabled="currentPage === 1"
            :style="{
              background: 'transparent',
              border: 0,
              color: currentPage === 1 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.7)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              padding: '0.5rem',
              transition: 'color 0.3s'
            }"
          >
            ←
          </button>

          <!-- Page Numbers -->
          <template v-for="(page, index) in displayedPages" :key="index">
            <button
              v-if="page !== '...'"
              @click="goToPage(page as number)"
              :style="{
                background: 'transparent',
                border: 0,
                color: currentPage === page ? 'white' : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                padding: '0.5rem',
                textDecoration: currentPage === page ? 'underline' : 'none',
                fontWeight: currentPage === page ? '500' : '300',
                transition: 'all 0.3s'
              }"
            >
              {{ page }}
            </button>
            <span v-else style="color: rgba(255,255,255,0.5); padding: 0 0.25rem;">...</span>
          </template>

          <!-- Next Button -->
          <button 
            @click="nextPage"
            :disabled="currentPage === totalPages"
            :style="{
              background: 'transparent',
              border: 0,
              color: currentPage === totalPages ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.7)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              padding: '0.5rem',
              transition: 'color 0.3s'
            }"
          >
            →
          </button>
        </div>

        <!-- Results Count -->
        <div style="text-align: center; margin-top: 2rem; color: rgba(255,255,255,0.6); font-size: 0.8rem;">
          Showing {{ (currentPage - 1) * itemsPerPage + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredProducts.length) }} of {{ filteredProducts.length }} artworks
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.catalog-img-hover:hover {
  opacity: 0.85;
}

.catalog-img-hover:hover ~ .add-btn,
div:hover .add-btn {
  opacity: 1;
}

@media (max-width: 1024px) {
  div[style*="grid-template-columns: repeat(3"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 640px) {
  div[style*="grid-template-columns: repeat(3"] {
    grid-template-columns: 1fr !important;
  }
}
</style>
