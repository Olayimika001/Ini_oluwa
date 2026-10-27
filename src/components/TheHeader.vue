<script setup lang="ts">
import { useShop } from '../composables/useShop'

const { openNav, openCart, cartTotalCount } = useShop()
</script>

<template>
  <header class="docked full-width top-0 sticky z-40 bg-surface/90 backdrop-blur-md border-b border-surface-container-highest transition-colors duration-150">
    <!-- Announcement Bar for $50 Signed Prints -->
    <div class="bg-primary-container text-on-primary py-1.5 px-4 text-center border-b border-surface-container-highest">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[11px] font-label-caps uppercase tracking-widest">
        <span>Signed Prints are available for each painting at $50 each</span>
        <span class="hidden sm:inline text-on-tertiary-container">·</span>
        <a href="#featured-collection" class="hidden sm:inline underline underline-offset-2 hover:text-on-tertiary-container transition-colors">Browse Catalogue</a>
      </div>
    </div>

    <div class="flex justify-between items-center w-full px-5 md:px-16 max-w-7xl mx-auto h-16 md:h-20">
      <!-- Leading: Drawer Menu Button -->
      <button
        id="btn-open-drawer"
        aria-label="Open Navigation Menu"
        class="p-2 -ml-2 text-primary hover:text-on-tertiary-container transition-opacity duration-150 active:opacity-70 focus:outline-none flex items-center justify-center cursor-pointer"
        @click="openNav"
      >
        <span class="material-symbols-outlined text-[24px]">menu</span>
      </button>

      <!-- Brand / Wordmark -->
      <a
        href="#"
        class="text-headline-sm font-headline-sm tracking-wider text-primary uppercase text-center focus:outline-none hover:opacity-85 transition-opacity"
      >
        INI OLUWA
      </a>

      <!-- Trailing: Shopping Cart Toggle Button -->
      <button
        id="btn-open-cart"
        aria-label="Open Cart"
        class="p-2 -mr-2 text-primary hover:text-on-tertiary-container transition-opacity duration-150 active:opacity-70 focus:outline-none relative flex items-center justify-center cursor-pointer"
        @click="openCart"
      >
        <span class="material-symbols-outlined text-[24px]">shopping_bag</span>
        <!-- Live Counter Badge -->
        <span
          id="header-cart-badge"
          class="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-label-caps font-bold px-1.5 py-0.5 min-w-[18px] text-center leading-tight transition-transform duration-200"
          :class="{ 'scale-110': cartTotalCount > 0 }"
        >
          {{ cartTotalCount }}
        </span>
      </button>
    </div>
  </header>
</template>
