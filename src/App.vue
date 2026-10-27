<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import NavDrawer from './components/NavDrawer.vue'
import CartDrawer from './components/CartDrawer.vue'
import QuickViewModal from './components/QuickViewModal.vue'
import ToastNotification from './components/ToastNotification.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturedCollection from './components/FeaturedCollection.vue'
import ShopCategories from './components/ShopCategories.vue'
import ArtworkStory from './components/ArtworkStory.vue'
import ArtInRealLife from './components/ArtInRealLife.vue'
import ValuesSection from './components/ValuesSection.vue'
import MeetArtist from './components/MeetArtist.vue'
import NewsletterSection from './components/NewsletterSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-surface text-on-surface antialiased font-body-md selection:bg-surface-container-highest selection:text-primary">
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

    <!-- Main Content Flow -->
    <main>
      <HeroSection />
      <FeaturedCollection />
      <ShopCategories />
      <ArtworkStory />
      <ArtInRealLife />
      <ValuesSection />
      <MeetArtist />
      <NewsletterSection />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
