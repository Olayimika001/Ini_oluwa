<script setup lang="ts">
import { ref } from 'vue'
import { useShop } from '../composables/useShop'

const { showToast } = useShop()

const email = ref('')
const submittedEmail = ref('')
const isSubmitted = ref(false)

function handleSubmit() {
  if (email.value && email.value.includes('@')) {
    submittedEmail.value = email.value
    isSubmitted.value = true
    email.value = ''
    showToast('Collector invitation confirmed.')
  }
}
</script>

<template>
  <section class="py-16 md:py-20 bg-surface-container border-b border-surface-container-highest">
    <div class="max-w-3xl mx-auto px-5 md:px-8 text-center space-y-6">
      <span class="font-label-caps text-label-caps uppercase tracking-widest text-on-tertiary-container block">
        Studio Notes
      </span>
      <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
        Stay Close to the Art.
      </h2>
      <p class="font-body-md text-secondary max-w-xl mx-auto">
        Hear when new works join the catalogue. Ini Oluwa’s studio notes are occasional — the same address listed in the 2026 art catalogue.
      </p>

      <!-- Newsletter Form -->
      <form
        id="newsletter-form"
        class="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        @submit.prevent="handleSubmit"
      >
        <input
          id="newsletter-email"
          v-model="email"
          type="email"
          required
          placeholder="Enter your email address"
          class="flex-1 bg-surface border border-surface-container-highest px-4 py-3 font-body-sm text-primary placeholder-secondary focus:border-primary focus:outline-none transition-colors"
        />
        <button
          type="submit"
          class="bg-primary-container text-on-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-wider hover:bg-on-tertiary-container transition-colors duration-200 cursor-pointer"
        >
          Join Registry
        </button>
      </form>

      <p id="newsletter-status" class="font-caption text-caption text-secondary mt-2">
        <span v-if="isSubmitted" class="text-on-tertiary-container font-medium block">
          Thank you. {{ submittedEmail }} has been added to Ini Oluwa’s studio list.
        </span>
        <span v-else>
          For direct inquiries: heyyinioluwa@gmail.com
        </span>
      </p>
    </div>
  </section>
</template>
