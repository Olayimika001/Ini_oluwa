<script setup lang="ts">
const catalogLinks = [
  { label: 'Selected Works', href: '#featured-collection' },
  { label: 'Shop by Medium', href: '#shop-categories' },
  { label: 'From the Series', href: '#artwork-story' },
  { label: 'Artist Statement', href: '#meet-artist' }
]

const serviceLinks = [
  { label: 'Instagram DM @ini.oluwa', href: 'https://ig.me/m/ini.oluwa' },
  { label: 'Instagram Profile @ini.oluwa', href: 'https://instagram.com/ini.oluwa' },
  { label: 'Email studio', href: 'mailto:heyyinioluwa@gmail.com' },
  { label: 'Call +234 813 865 9176', href: 'tel:+2348138659176' }
]
</script>

<template>
  <footer class="w-full bg-surface-container-high border-t border-surface-container-highest">
    <div class="w-full px-6 py-16 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div class="space-y-4 max-w-sm">
        <span class="text-headline-md font-headline-md text-primary tracking-wider uppercase block">
          INI OLUWA
        </span>
        <p class="font-body-sm text-body-sm text-secondary">
          Art catalogue and portfolio. Original ink and acrylic works on paper and canvas — intimacy, solitude, and the human condition. Signed prints are available for each painting at $50 each.
        </p>
        <div class="pt-2 flex items-center gap-4">
          <a class="font-label-caps text-label-caps uppercase text-primary hover:text-on-tertiary-container transition-colors" href="https://instagram.com/ini.oluwa" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <span class="text-secondary">·</span>
          <a class="font-label-caps text-label-caps uppercase text-primary hover:text-on-tertiary-container transition-colors" href="mailto:heyyinioluwa@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div class="space-y-3">
        <h4 class="font-label-caps text-label-caps uppercase tracking-wider text-primary">
          Catalogue
        </h4>
        <ul class="space-y-2 text-body-sm text-secondary">
          <li v-for="link in catalogLinks" :key="link.label">
            <a
              :href="link.href"
              class="hover:text-on-tertiary-container underline underline-offset-4 transition-colors duration-150"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <div class="space-y-3">
        <h4 class="font-label-caps text-label-caps uppercase tracking-wider text-primary">
          Studio
        </h4>
        <ul class="space-y-2 text-body-sm text-secondary">
          <li v-for="link in serviceLinks" :key="link.label">
            <a
              :href="link.href"
              class="hover:text-on-tertiary-container underline underline-offset-4 transition-colors duration-150"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-surface-container-highest px-6 md:px-16 py-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-caption text-secondary">
      <p>© 2026 INI OLUWA. ALL RIGHTS RESERVED.</p>
      <p>heyyinioluwa@gmail.com · +234 813 865 9176 · @ini.oluwa</p>
    </div>
  </footer>
</template>
