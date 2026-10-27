<script setup lang="ts">
const values = [
  {
    icon: 'brush',
    title: 'Originals & Signed Prints',
    desc: 'Each piece is available as a unique original from the 2026 catalogue. Signed prints are available for each painting at $50 each.',
    footer: 'Signed Prints $50 each'
  },
  {
    icon: 'palette',
    title: 'Ink & Acrylic',
    desc: 'Works in ink, white charcoal, and acrylic on primed paper, paper, and canvas — the materials named in Ini Oluwa’s statement.',
    footer: 'Paper and canvas'
  },
  {
    icon: 'auto_stories',
    title: 'A Complete Series',
    desc: 'Themes of solitude, intimacy, and the human condition, told in a way that felt familiar and complete — hence this series.',
    footer: 'Selected Works 2026'
  },
  {
    icon: 'forum',
    title: 'Instagram Conversations',
    desc: 'Orders and inquiries continue directly with Ini Oluwa via Instagram DM (@ini.oluwa). Have an open conversation about framing, delivery, and any questions without payment processors.',
    footer: 'Instagram @ini.oluwa'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-surface-container-low border-b border-surface-container-highest">
    <div class="max-w-7xl mx-auto px-5 md:px-16">
      <div class="text-center max-w-xl mx-auto mb-16">
        <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container block mb-2">
          The Practice
        </span>
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Values &amp; Craft
        </h2>
        <p class="font-body-md text-secondary mt-3">
          Using ink and acrylic on paper and canvas, Ini Oluwa narrates intimacy, solitude, and betrayal in the way he feels it at home.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="val in values"
          :key="val.title"
          class="bg-surface p-6 border border-surface-container-highest flex flex-col justify-between"
        >
          <div>
            <div class="w-10 h-10 mb-4 bg-surface-container flex items-center justify-center border border-surface-container-highest text-primary">
              <span class="material-symbols-outlined">{{ val.icon }}</span>
            </div>
            <h3 class="font-headline-sm text-base font-semibold text-primary mb-2">
              {{ val.title }}
            </h3>
            <p class="font-body-sm text-secondary">
              {{ val.desc }}
            </p>
          </div>
          <span class="font-label-caps text-[10px] text-secondary uppercase tracking-widest mt-6 block border-t border-surface-container-highest pt-2">
            {{ val.footer }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
