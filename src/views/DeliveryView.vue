<script setup lang="ts">
// Delivery and Payment information page - Koronskaya style
</script>

<template>
  <div class="page-shell no-hero">
    <!-- PAYMENT Section -->
    <section class="delivery-section" style="background: var(--color-bg); padding: 5rem var(--space-page-x);">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div class="section-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
          <!-- Left Column - Payment Content -->
          <div class="text-content">
            <h1 class="section-title" style="font-family: var(--font-display); font-weight: 200; font-size: 3rem; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 4rem; color: white;">
              PAYMENT
            </h1>

            <!-- Online Payment -->
            <div style="margin-bottom: 3rem;">
              <h2 style="font-family: var(--font-display); font-weight: 300; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.5rem; color: white;">
                ONLINE PAYMENT
              </h2>
              <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 1rem;">
                • You can purchase a painting from the catalog's page using the "Buy Now" button. The payment is made through Paystack.
              </div>
              <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 1rem;">
                • To pay from another country, contact the artist on Instagram <a href="https://instagram.com/ini.oluwa" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3);">@ini.oluwa</a>, or by email <a href="mailto:heyyinioluwa@gmail.com" style="color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3);">heyyinioluwa@gmail.com</a>
              </div>
              <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.8;">
                The transfer is carried out using bank transfer, Instagram DM or WhatsApp. Transfers within Nigeria are carried out in naira at the current exchange rate.
              </div>
            </div>

            <!-- Payment in Cash -->
            <div>
              <h2 style="font-family: var(--font-display); font-weight: 300; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.5rem; color: white;">
                PAYMENT IN CASH
              </h2>
              <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.8;">
               You can pay and buy the painting at the address: Ile-ife, Nigeria. Contact via Instagram or email for exact location.
              </div>
            </div>
          </div>

          <!-- Right Column - City Image -->
          <div class="image-content" style="position: relative;">
            <img 
              src="/catalogue/works/work-01.jpg" 
              alt="Artwork"
              style="width: 100%; height: auto; object-fit: cover; aspect-ratio: 4/3;"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- DELIVERY Section -->
    <section class="delivery-section" style="background: #2B2B2B; padding: 5rem var(--space-page-x);">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div class="section-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
          <!-- Left Column - City Image -->
          <div class="image-content" style="position: relative;">
            <img 
              src="/catalogue/works/work-02.jpg" 
              alt="Artwork"
              style="width: 100%; height: auto; object-fit: cover; aspect-ratio: 4/3;"
            />
          </div>

          <!-- Right Column - Delivery Content -->
          <div class="text-content">
            <h1 class="section-title" style="font-family: var(--font-display); font-weight: 200; font-size: 3rem; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 4rem; color: white;">
              DELIVERY
            </h1>

            <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 3rem;">
              Delivery is carried out all over the world. The painting is delivered in a tube. Delivery time around the world is about 3-4 weeks
            </div>

            <!-- Pickup -->
            <div>
              <h2 style="font-family: var(--font-display); font-weight: 300; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.5rem; color: white;">
                PICKUP
              </h2>
              <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.8;">
                You can pick up your order at the address: Ile-ife, Nigeria. Contact via Instagram <a href="https://instagram.com/ini.oluwa" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.3);">@ini.oluwa</a> or email for exact pickup location and scheduling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Mobile Layout - Image first, then text content */
@media (max-width: 768px) {
  .delivery-section {
    padding: 0 !important;
  }
  
  .section-grid {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }
  
  /* Image always comes first on mobile */
  .image-content {
    order: 1 !important;
    width: 100% !important;
    margin: 0 !important;
  }
  
  .image-content img {
    width: 100% !important;
    aspect-ratio: 16/9 !important;
  }
  
  /* Text content comes second */
  .text-content {
    order: 2 !important;
    padding: 2.5rem 1.5rem !important;
  }
  
  .section-title {
    font-size: 2rem !important;
    margin-bottom: 2rem !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .section-grid {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
  }
  
  .image-content {
    order: 1 !important;
  }
  
  .text-content {
    order: 2 !important;
  }
}
</style>
