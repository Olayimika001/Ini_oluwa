<script setup lang="ts">
import { useShop } from '../composables/useShop'

const { isNavOpen, closeNav } = useShop()

const navLinks = [
  { href: '#featured-collection', icon: 'palette', label: 'Selected Works', primary: true },
  { href: '#shop-categories', icon: 'layers', label: 'Shop by Medium', primary: false },
  { href: '#artwork-story', icon: 'auto_stories', label: 'From the Series', primary: false },
  { href: '#meet-artist', icon: 'person', label: 'Artist Statement', primary: false }
]

function handleNavClick() {
  closeNav()
}
</script>

<template>
  <div>
    <!-- Backdrop -->
    <div
      id="drawer-backdrop"
      class="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 transition-opacity duration-300"
      :class="isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="closeNav"
    />

    <!-- Navigation Drawer Panel -->
    <aside
      id="nav-drawer"
      aria-label="Main Navigation"
      class="fixed inset-y-0 left-0 w-80 max-w-[85vw] z-50 bg-surface-container-low border-r border-surface-container-highest shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between p-8"
      :class="isNavOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div>
        <div class="flex items-center justify-between pb-6 border-b border-surface-container-highest">
          <span class="text-headline-md font-headline-md text-primary uppercase tracking-widest text-lg">
            INI OLUWA
          </span>
          <button
            id="btn-close-drawer"
            aria-label="Close Navigation Menu"
            class="p-1 text-secondary hover:text-primary focus:outline-none cursor-pointer"
            @click="closeNav"
          >
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav class="mt-4 flex flex-col">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="drawer-nav-link flex items-center gap-4 uppercase tracking-wider py-4 border-b transition-colors duration-150"
            :class="link.primary 
              ? 'text-primary font-label-caps border-surface-container-highest hover:text-on-tertiary-container' 
              : 'text-secondary font-label-caps border-surface-container-highest/60 hover:text-on-tertiary-container'"
            @click="handleNavClick"
          >
            <span class="material-symbols-outlined">{{ link.icon }}</span>
            <span>{{ link.label }}</span>
          </a>
        </nav>

        <div class="mt-6 p-4 bg-surface border border-surface-container-highest">
          <span class="font-label-caps uppercase text-[10px] text-on-tertiary-container tracking-wider font-semibold block">
            Signed Prints
          </span>
          <p class="font-caption text-secondary text-xs mt-1">
            Signed prints are available for each painting at $50 each.
          </p>
        </div>
      </div>

      <div class="pt-6 border-t border-surface-container-highest text-secondary text-caption space-y-2">
        <p class="font-label-caps uppercase tracking-widest text-primary text-[10px]">
          Ini Oluwa · Selected Works 2026
        </p>
        <p>heyyinioluwa@gmail.com · +234 813 865 9176 · Instagram @ini.oluwa</p>
      </div>
    </aside>
  </div>
</template>
