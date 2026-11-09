<script setup lang="ts">
// Commissions pricing page
</script>

<template>
  <div class="page-shell no-hero">
    <section style="background: #E8E4DF; min-height: 100vh; padding: 5rem var(--space-page-x); display: flex; align-items: center; justify-content: center;">
      <div style="max-width: 650px; width: 100%; text-align: center;">
        <!-- Title -->
        <h1 style="font-family: 'Cormorant Garamond', 'Georgia', serif; font-weight: 300; font-size: 4rem; color: #2B2B2B; margin-bottom: 0.5rem; letter-spacing: 0.02em;">
          Ini Oluwa
        </h1>
        <p style="font-family: 'Montserrat', sans-serif; font-weight: 300; font-size: 0.95rem; color: #5A5A5A; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 3rem;">
          COMMISSIONS
        </p>

        <!-- Divider -->
        <div style="width: 80px; height: 1px; background: #A89B8F; margin: 0 auto 3rem;"></div>

        <!-- Pricing Table -->
        <div style="margin-bottom: 3rem;">
          <!-- Table Header -->
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #D4CFC9;">
            <div style="font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 400; color: #5A5A5A; letter-spacing: 0.1em; text-transform: uppercase;">
              SIZE (INCHES)
            </div>
            <div style="font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 400; color: #5A5A5A; letter-spacing: 0.1em; text-transform: uppercase;">
              PRICE (USD)
            </div>
            <div style="font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 400; color: #5A5A5A; letter-spacing: 0.1em; text-transform: uppercase;">
              PRICE (NGN)
            </div>
          </div>

          <!-- Table Rows -->
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid #E8E4DF;">
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              12 × 16
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              $500
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              ₦650,000
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid #E8E4DF;">
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              15 × 20
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              $750
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              ₦975,000
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid #E8E4DF;">
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              18 × 24
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              $1,000
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              ₦1,300,000
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding: 2rem 0; border-bottom: 1px solid #E8E4DF;">
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              24 × 32
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              $1,500
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              ₦1,950,000
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; padding: 2rem 0;">
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              30 × 40
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              $2,000
            </div>
            <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 300; color: #2B2B2B;">
              ₦2,600,000
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div style="width: 80px; height: 1px; background: #A89B8F; margin: 0 auto 2rem;"></div>

        <!-- Footer Text -->
        <p style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-style: italic; font-weight: 300; color: #5A5A5A; line-height: 1.8;">
          All artworks come with a certificate of authenticity<br>signed by the artist.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Mobile Styles */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem !important;
  }

  section {
    padding: 3rem 1.5rem !important;
  }

  div[style*="grid-template-columns: 1fr 1fr 1fr"] {
    gap: 1rem !important;
  }

  div[style*="font-size: 1.5rem"] {
    font-size: 1.1rem !important;
  }

  div[style*="font-size: 0.7rem"] {
    font-size: 0.65rem !important;
  }
}
</style>
