<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import NavDrawer from './components/NavDrawer.vue'
import CartDrawer from './components/CartDrawer.vue'
import QuickViewModal from './components/QuickViewModal.vue'
import ToastNotification from './components/ToastNotification.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="page-shell">
    <!-- Header Navigation -->
    <TheHeader />

    <!-- Navigation Drawer Slide-Over -->
    <NavDrawer />

    <!-- Shopping Bag Slide-Over -->
    <CartDrawer />

    <!-- Quick View Product Modal -->
    <QuickViewModal />

    <!-- Floating Action Toast -->
    <ToastNotification />

    <!-- Main Content (Router View) -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
