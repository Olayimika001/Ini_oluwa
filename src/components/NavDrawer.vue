<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useShop } from '../composables/useShop'
import { Transition } from 'vue'

const { isNavOpen, closeNav } = useShop()
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop - only shows when menu is open, clicking closes menu -->
    <Transition name="fade">
      <div
        v-if="isNavOpen"
        class="fixed inset-0 z-40"
        @click="closeNav"
        style="background: transparent;"
      ></div>
    </Transition>

    <!-- Slide-out Menu Panel - Full height with close button -->
    <div
      class="nav-menu"
      :class="{ 'is-open': isNavOpen }"
    >
      <!-- Close Button -->
      <button 
        @click="closeNav"
        class="nav-close-btn"
        aria-label="Close menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <!-- Navigation Links -->
      <nav>
        <a href="/#about" class="nav-link" @click="closeNav">
          About
        </a>
        <RouterLink to="/catalog" class="nav-link" @click="closeNav">
          Catalog
        </RouterLink>
        <RouterLink to="/delivery" class="nav-link" @click="closeNav">
          Delivery and payment
        </RouterLink>
        <RouterLink to="/contacts" class="nav-link" @click="closeNav">
          Contacts
        </RouterLink>
      </nav>

      <!-- Footer branding at bottom -->
      <div class="nav-menu-footer">
        <div style="font-weight: 400; color: var(--color-text); margin-bottom: 0.75rem; font-size: 0.85rem;">
          INI OLUWA
        </div>
        <div style="display: flex; gap: 1.25rem; font-size: 0.75rem;">
          <a href="https://instagram.com/ini.oluwa" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; opacity: 0.8;">
            Instagram
          </a>
          <a href="https://wa.me/2348138659176" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; opacity: 0.8;">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.nav-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--duration) var(--ease);
  z-index: 10;
}

.nav-close-btn:hover {
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--duration) var(--ease);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
