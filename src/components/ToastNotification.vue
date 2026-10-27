<script setup lang="ts">
import { useShop } from '../composables/useShop'

const { toastMessage, isToastVisible } = useShop()
</script>

<template>
  <div
    id="toast-notification"
    class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-primary-container text-on-primary px-5 py-3.5 shadow-2xl flex items-center gap-3 transition-all duration-300"
    :class="isToastVisible
      ? 'translate-y-0 opacity-100 pointer-events-auto'
      : 'translate-y-20 opacity-0 pointer-events-none'"
  >
    <span class="material-symbols-outlined text-on-tertiary-container text-[20px]">
      check_circle
    </span>
    <div>
      <p class="font-label-caps text-[11px] uppercase tracking-wider">Added to Bag</p>
      <p id="toast-item-name" class="font-body-sm text-[12px] text-surface-container-highest opacity-90">
        {{ toastMessage }}
      </p>
    </div>
  </div>
</template>
