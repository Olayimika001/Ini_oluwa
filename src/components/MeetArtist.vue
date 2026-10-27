<script setup lang="ts">
const stats = [
  { value: 'Ink & Acrylic', label: 'On paper and canvas' },
  { value: '48 Works', label: 'Selected Works 2026' },
  { value: '$50 Signed Prints', label: 'For each painting' }
]
</script>

<template>
  <section id="meet-artist" class="py-16 md:py-24 bg-surface border-b border-surface-container-highest">
    <div class="max-w-7xl mx-auto px-5 md:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        <div class="lg:col-span-5 order-2 lg:order-1">
          <div class="bg-surface-container p-4 border border-surface-container-highest">
            <div class="overflow-hidden border border-surface-container-highest">
              <img
                src="/catalogue/artist.jpg"
                alt="Ini Oluwa"
                class="w-full object-contain"
              />
            </div>
            <p class="font-caption text-caption text-secondary mt-3 text-center">
              Ini Oluwa · 2026 catalogue
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container">
            Artist Statement
          </span>
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Ini Oluwa
          </h2>

          <div class="space-y-4 font-body-lg text-secondary">
            <p>
              “I have always been drawn to the idea of solitude, intimacy, and the human condition. This has led me to naturally desire an expression of themes around what it means to be an individual, and the different seminal experiences that shape us; especially how these experiences manifest as ordinary in the moment.”
            </p>
            <p>
              “These are themes that resonate in classics I long admired, but not in a way that was familiar, not in a way that seemed complete. Hence, this series. Using ink and acrylic on paper and canvas, I narrate intimacy, solitude, betrayal in the way I feel it at home!”
            </p>
          </div>

          <div class="pt-4 flex items-center gap-6">
            <div class="font-headline-sm italic text-2xl text-primary tracking-wide border-b border-secondary/40 pb-1">
              Ini Oluwa
            </div>
            <span class="font-label-caps text-[11px] text-secondary uppercase tracking-widest">
              Selected Works · 2026
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-surface-container-highest">
            <div v-for="stat in stats" :key="stat.label">
              <span class="block font-headline-sm text-base text-primary">{{ stat.value }}</span>
              <span class="font-caption text-secondary">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
