<script setup lang="ts">
import { useShop } from '../composables/useShop'

const { toastMessage, isToastVisible, openCart } = useShop()
</script>

<template>
  <div
    id="toast-notification"
    class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-primary-container text-on-primary px-5 py-3.5 shadow-2xl flex items-center justify-between gap-3 transition-all duration-300 max-w-sm"
    :class="isToastVisible
      ? 'translate-y-0 opacity-100 pointer-events-auto'
      : 'translate-y-20 opacity-0 pointer-events-none'"
  >
    <div class="flex items-center gap-3 min-w-0">
      <span class="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0">
        check_circle
      </span>
      <div class="min-w-0">
        <p class="font-label-caps text-[11px] uppercase tracking-wider">Bag Updated</p>
        <p id="toast-item-name" class="font-body-sm text-[12px] text-surface-container-highest opacity-90 truncate">
          {{ toastMessage }}
        </p>
      </div>
    </div>
    <button
      type="button"
      class="ml-2 pl-3 border-l border-surface-container-highest/30 text-on-tertiary-container hover:text-white font-label-caps text-[11px] uppercase tracking-wider cursor-pointer whitespace-nowrap shrink-0"
      @click="openCart"
    >
      View Bag
    </button>
  </div>
</template>
