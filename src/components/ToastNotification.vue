<script setup lang="ts">
import { Transition } from 'vue'
import { useShop } from '../composables/useShop'

const { toastMessage, isToastVisible } = useShop()
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isToastVisible"
        style="position: fixed; bottom: 2rem; right: 2rem; z-index: 100; background: white; color: #333; padding: 1rem 1.5rem; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); max-width: 90vw; border: 1px solid #ddd;"
      >
        {{ toastMessage }}
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
