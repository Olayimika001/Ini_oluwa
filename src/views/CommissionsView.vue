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
        <div style="width: 80px; height: 1px; background: #A89B8F; margin: 0 auto 3rem;"></div>

        <!-- Contact Buttons for Commission -->
        <div style="margin-bottom: 3rem;">
          <p style="font-family: 'Montserrat', sans-serif; font-size: 0.9rem; font-weight: 300; color: #5A5A5A; margin-bottom: 1.5rem; letter-spacing: 0.02em;">
            Ready to commission your artwork?
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a
              href="https://instagram.com/ini.oluwa"
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                background: #2B2B2B;
                color: #E8E4DF;
                text-decoration: none;
                font-family: 'Montserrat', sans-serif;
                font-size: 0.8rem;
                font-weight: 400;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                transition: all 0.3s;
                border: 1px solid #2B2B2B;
              "
              class="commission-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Commission via Instagram
            </a>
            <a
              href="https://wa.me/2348138659176?text=Hi%2C%20I'm%20interested%20in%20commissioning%20an%20artwork.%20I'd%20like%20to%20discuss%20sizes%20and%20details."
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                background: transparent;
                color: #2B2B2B;
                text-decoration: none;
                font-family: 'Montserrat', sans-serif;
                font-size: 0.8rem;
                font-weight: 400;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                transition: all 0.3s;
                border: 1px solid #2B2B2B;
              "
              class="commission-btn-outline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Commission via WhatsApp
            </a>
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
.commission-btn:hover {
  background: #1A1A1A;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(43, 43, 43, 0.2);
}

.commission-btn-outline:hover {
  background: #2B2B2B;
  color: #E8E4DF;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(43, 43, 43, 0.2);
}

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

  .commission-btn,
  .commission-btn-outline {
    width: 100%;
    justify-content: center;
  }
}
</style>
