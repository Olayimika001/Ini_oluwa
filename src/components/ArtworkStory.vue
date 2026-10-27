<script setup lang="ts">
import { PRODUCTS } from '../data/products'
import { useShop } from '../composables/useShop'

const { addToBag, openCart } = useShop()

function acquireFeatured() {
  const prod = PRODUCTS.find(p => p.id === 1)
  if (prod) {
    addToBag(prod, prod.options[0], prod.price)
    openCart()
  }
}

function orderFeaturedPrint() {
  const prod = PRODUCTS.find(p => p.id === 1)
  if (prod) {
    addToBag(prod, 'Signed Print ($50)', 50)
    openCart()
  }
}
</script>

<template>
  <section id="artwork-story" class="py-16 md:py-24 bg-surface-container-low border-b border-surface-container-highest">
    <div class="max-w-7xl mx-auto px-5 md:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        <div class="lg:col-span-7">
          <div class="bg-surface p-4 md:p-8 border border-surface-container-highest">
            <div class="relative bg-surface-container border border-surface-container-highest">
              <img
                src="/catalogue/works/work-01.jpg"
                alt="Ìfẹnukonu III by Ini Oluwa"
                class="w-full object-contain"
              />
            </div>
            <div class="mt-4 flex justify-between items-center text-caption text-secondary">
              <span>Ink, white charcoal, &amp; acrylic on primed paper</span>
              <span>18 × 24 inches · 2026</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            From the Series
          </span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            More Than an Image. A Story.
          </h2>

          <div class="space-y-4 font-body-md text-secondary">
            <p>
              <em class="font-headline-sm text-primary text-base">Ìfẹnukonu III</em> sits at the heart of Ini Oluwa’s 2026 series: a narration of intimacy as it is felt at home — ordinary in the moment, and complete in a way the classics he long admired never quite were.
            </p>
            <p>
              Using ink, white charcoal, and acrylic on primed paper, the work holds solitude and closeness in the same frame: two figures, a drum, a balcony, and the quiet charge of being seen.
            </p>
          </div>

          <div class="border-t border-b border-surface-container-highest py-4 space-y-2">
            <h4 class="font-label-caps text-label-caps uppercase tracking-wider text-primary">
              Original &amp; Signed Prints Available
            </h4>
            <p class="font-caption text-secondary leading-relaxed">
              Available as the unique original work ($1,000) or as a signed print for $50. Signed prints are available for each painting at $50 each. All orders and conversations continue directly in Instagram DM (<strong>@ini.oluwa</strong>) to discuss framing, shipping, and availability.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <button
              class="bg-surface hover:bg-primary-container text-primary hover:text-on-primary border border-primary py-3.5 px-6 font-label-caps text-label-caps uppercase tracking-wider transition-colors duration-200 cursor-pointer"
              @click="acquireFeatured"
            >
              Acquire Original — $1,000
            </button>
            <button
              class="bg-primary-container text-on-primary py-3.5 px-6 font-label-caps text-label-caps uppercase tracking-wider hover:bg-on-tertiary-container transition-colors duration-200 cursor-pointer"
              @click="orderFeaturedPrint"
            >
              Order Signed Print — $50
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
