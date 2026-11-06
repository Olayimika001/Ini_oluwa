<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useShop } from '../composables/useShop'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const route = useRoute()
const { openNav, openCart, cartTotalCount } = useShop()
const isScrolled = ref(false)

// Check if we're on a page that should show cart in header (home page only)
const showCartInHeader = computed(() => {
  return route.path === '/'
})

// Check if we should hide cart completely (delivery and contacts pages)
const hideCart = computed(() => {
  return route.path === '/delivery' || route.path === '/contacts'
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <!-- Wordmark / Logo -->
    <RouterLink to="/" class="wordmark">
      INI OLUWA
    </RouterLink>

    <!-- Header Actions -->
    <div class="header-actions">
      <!-- Shopping Cart Button - ONLY on home page -->
      <button
        v-if="showCartInHeader && !hideCart"
        class="icon-btn"
        :class="{ 'is-scrolled': isScrolled }"
        aria-label="Open shopping cart"
        @click="openCart"
      >
        <svg width="22" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 7V5C5 2.79086 6.79086 1 9 1H11C13.2091 1 15 2.79086 15 5V7M1 7H19L18 21H2L1 7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
        <span v-if="cartTotalCount > 0" class="bag-count">{{ cartTotalCount }}</span>
      </button>

      <!-- Hamburger Menu Button - shows on scroll OR on non-home pages -->
      <button
        v-if="isScrolled || !showCartInHeader"
        class="nav-mobile-btn"
        aria-label="Open menu"
        @click="openNav"
      >
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </header>

  <!-- Fixed Shopping Bag - Bottom Right (NOT on home page, and NOT on delivery/contacts) -->
  <button
    v-if="!showCartInHeader && !hideCart"
    class="fixed-cart-btn"
    aria-label="Open shopping cart"
    @click="openCart"
  >
    <svg width="24" height="26" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7V5C5 2.79086 6.79086 1 9 1H11C13.2091 1 15 2.79086 15 5V7M1 7H19L18 21H2L1 7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
    <span v-if="cartTotalCount > 0" class="fixed-cart-badge">{{ cartTotalCount }}</span>
  </button>
</template>
