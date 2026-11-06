<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <!-- Social Links -->
      <div>
        <div class="footer-links">
          <a href="https://instagram.com/ini.oluwa" target="_blank" rel="noopener noreferrer" class="footer-link">
            Instagram
          </a>
          <a href="https://wa.me/2348138659176" target="_blank" rel="noopener noreferrer" class="footer-link">
            WhatsApp
          </a>
          <a href="mailto:heyyinioluwa@gmail.com" class="footer-link">
            heyyinioluwa@gmail.com
          </a>
        </div>
      </div>

      <!-- Navigation Links -->
      <div>
        <div class="footer-title">Navigation</div>
        <div class="footer-links">
          <RouterLink to="/" class="footer-link">About</RouterLink>
          <RouterLink to="/catalog" class="footer-link">Catalog</RouterLink>
          <RouterLink to="/delivery" class="footer-link">Delivery and payment</RouterLink>
          <RouterLink to="/contacts" class="footer-link">Contacts</RouterLink>
        </div>
      </div>

      <!-- Copyright -->
      <div>
        <div class="footer-copyright">
          © Ini Oluwa, {{ new Date().getFullYear() }}
        </div>
        <div style="margin-top: 1rem;">
          <RouterLink to="/privacy" class="footer-link">Privacy policy</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
