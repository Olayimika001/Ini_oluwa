<script setup lang="ts">
// Contacts page - Koronskaya style with overlay text
</script>

<template>
  <div class="page-shell no-hero">
    <section style="position: relative; min-height: 100vh; background: var(--color-bg); overflow: hidden; display: block;">
      <!-- Background Portrait Image (Desktop) / Top Image (Mobile) -->
      <div class="image-container" style="position: absolute; inset: 0; width: 100%; height: 100%;">
        <img 
          src="/catalogue/artist.jpg" 
          alt="Ini Oluwa"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>

      <!-- Overlay Contact Information (Desktop) / Content Below (Mobile) -->
      <div class="text-container" style="position: relative; z-index: 10; padding: 5rem var(--space-page-x); display: flex; flex-direction: column; justify-content: center; min-height: 100vh;">
        <div style="max-width: 450px; background: rgba(0, 0, 0, 0.6); padding: 3rem 2.5rem; backdrop-filter: blur(8px);">
          <h1 style="font-family: var(--font-display); font-weight: 300; font-size: 2.5rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 2.5rem; color: white;">
            CONTACTS
          </h1>

          <!-- Artist Name -->
          <div style="margin-bottom: 2rem;">
            <div style="font-size: 1.15rem; color: white; font-weight: 400;">
              Ini Oluwa
            </div>
          </div>

          <!-- Workshop Location -->
          <div style="margin-bottom: 2rem;">
            <div style="font-size: 1rem; color: white; line-height: 1.7; font-weight: 300;">
              Workshop: Lagos, Nigeria. Contact for exact location and studio visit scheduling.
            </div>
          </div>

          <!-- Social Links -->
          <div style="margin-bottom: 1.25rem;">
            <a 
              href="https://vk.com/inioluwa" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="contact-link"
            >
              VK
            </a>
          </div>
          <div style="margin-bottom: 1.25rem;">
            <a 
              href="https://instagram.com/ini.oluwa" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="contact-link"
            >
              Instagram
            </a>
          </div>

          <!-- Email -->
          <div>
            <a 
              href="mailto:heyyinioluwa@gmail.com" 
              class="contact-link"
            >
              heyyinioluwa@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: opacity 0.3s;
  display: inline-block;
}

.contact-link:hover {
  opacity: 0.8;
}

/* Mobile Layout - Image on top, text below */
@media (max-width: 768px) {
  section {
    display: flex !important;
    flex-direction: column !important;
    min-height: auto !important;
  }
  
  .image-container {
    position: relative !important;
    inset: auto !important;
    height: 40vh !important;
    min-height: 300px !important;
    order: 1;
  }
  
  .text-container {
    position: relative !important;
    order: 2;
    background: var(--color-bg) !important;
    padding: 2.5rem 1.5rem 3rem !important;
    min-height: auto !important;
    justify-content: flex-start !important;
  }
  
  .text-container > div {
    max-width: 100% !important;
    background: transparent !important;
    padding: 0 !important;
  }
  
  .text-container h1 {
    font-size: 2rem !important;
    margin-bottom: 2rem !important;
  }
}
</style>
