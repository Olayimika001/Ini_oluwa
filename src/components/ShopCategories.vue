<script setup lang="ts">
const categories = [
  {
    medium: 'Medium 01',
    title: 'Primed Paper',
    desc: 'Ink, white charcoal, and acrylic on primed paper. Larger 18 × 24 inch works from the 2026 series.',
    linkText: 'View primed paper',
    href: '#featured-collection',
    imgSrc: '/catalogue/works/work-01.jpg',
    imgAlt: 'Ìfẹnukonu III, ink, white charcoal, and acrylic on primed paper by Ini Oluwa.'
  },
  {
    medium: 'Medium 02',
    title: 'Canvas',
    desc: 'Ink and acrylic on canvas, from intimate 12 × 16 inch studies to 24 × 30 inch works.',
    linkText: 'View canvas',
    href: '#featured-collection',
    imgSrc: '/catalogue/works/work-06.jpg',
    imgAlt: 'Sisí Ẹlẹ́mu, ink and acrylic on canvas by Ini Oluwa.'
  },
  {
    medium: 'Medium 03',
    title: 'Paper',
    desc: 'Ink and acrylic on paper — portraits, homages, and numbered studies at 12 × 16 inches.',
    linkText: 'View paper works',
    href: '#featured-collection',
    imgSrc: '/catalogue/works/work-31.jpg',
    imgAlt: '018 / Saléwá, ink and acrylic on paper by Ini Oluwa.'
  }
]
</script>

<template>
  <section id="shop-categories" class="py-16 md:py-24 bg-surface border-b border-surface-container-highest">
    <div class="max-w-7xl mx-auto px-5 md:px-16">
      <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container block mb-2">
            Catalogue Mediums
          </span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Shop by Medium
          </h2>
        </div>
        <p class="font-body-md text-secondary max-w-md">
          Original works in three distinct mediums. Signed prints are available for each painting at $50 each.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="group relative bg-surface-container-high border border-surface-container-highest p-6 md:p-8 flex flex-col justify-between hover:border-primary transition-all duration-300"
        >
          <div class="aspect-[4/3] overflow-hidden bg-surface-container border border-surface-container-highest mb-6">
            <img
              :src="cat.imgSrc"
              :alt="cat.imgAlt"
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div>
            <span class="font-label-caps text-[10px] text-secondary uppercase tracking-widest">
              {{ cat.medium }}
            </span>
            <h3 class="font-headline-sm text-headline-sm text-primary mt-1 mb-2">
              {{ cat.title }}
            </h3>
            <p class="font-body-md text-secondary mb-6">
              {{ cat.desc }}
            </p>
            <a
              :href="cat.href"
              class="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-wider text-primary border-b border-primary pb-1 group-hover:text-on-tertiary-container group-hover:border-on-tertiary-container transition-colors duration-150"
            >
              {{ cat.linkText }}
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
