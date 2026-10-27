<script setup lang="ts">
const editorialPhotos = [
  {
    location: 'Selected Works 2026',
    description: 'A catalogue work lived with, framed at home.',
    imgSrc: '/catalogue/selected-works.jpg',
    imgAlt: 'Framed Ini Oluwa drawing installed in a domestic interior, from the 2026 selected works catalogue.'
  },
  {
    location: 'Yoruba Gothic',
    description: 'Ink and acrylic on paper, 12 × 16 inches.',
    imgSrc: '/catalogue/works/work-22.jpg',
    imgAlt: 'Yoruba Gothic by Ini Oluwa.'
  },
  {
    location: 'Ìfenukonu',
    description: 'Intimacy narrated in ink and acrylic.',
    imgSrc: '/catalogue/works/work-24.jpg',
    imgAlt: 'Ìfenukonu by Ini Oluwa.'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-surface border-b border-surface-container-highest">
    <div class="max-w-7xl mx-auto px-5 md:px-16">
      <div class="max-w-2xl mb-12">
        <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container block mb-2">
          Living With Art
        </span>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Made to Be Lived With.
        </h2>
        <p class="font-body-md text-secondary mt-3">
          Works from the 2026 catalogue, drawn from home, classics, and the ordinary moments that shape an individual.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="photo in editorialPhotos"
          :key="photo.location"
          class="space-y-4"
        >
          <div class="bg-surface-container p-3 border border-surface-container-highest">
            <img
              :src="photo.imgSrc"
              :alt="photo.imgAlt"
              class="w-full object-contain"
            />
          </div>
          <p class="font-caption text-caption text-secondary">
            <strong class="text-primary font-medium">{{ photo.location }}</strong> — {{ photo.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
