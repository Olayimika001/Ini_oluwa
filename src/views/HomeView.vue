<script setup lang="ts">
import { PRODUCTS } from "../data/products";
import { useShop } from "../composables/useShop";
import { useRouter } from "vue-router";

const { openQuickView } = useShop();
const router = useRouter();

// First 6 featured artworks for home page grid
const featuredWorks = PRODUCTS.slice(0, 6);

// Navigation handler for hero section links
const navigateTo = (path: string) => {
  if (path === "#about") {
    // Scroll to about section on current page
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Use Vue Router for other pages
    router.push(path);
  }
};
</script>

<template>
  <div class="page-shell has-hero">
    <!-- HERO SECTION - Full viewport with always-visible side menu -->
    <section
      class="hero-section"
      style="
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        background: #000;
      "
    >
      <!-- Full-screen Background Image - Black & White -->
      <div
        style="
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <img
          src="/catalogue/ini-oluwa-studio.jpeg"
          alt="Ini Oluwa in studio"
          style="width: 100%; height: auto; filter: grayscale(100%)"
        />
      </div>

      <!-- DESKTOP: RIGHT SIDE NAVIGATION PANEL - Always visible -->
      <div
        class="desktop-nav-panel"
        style="
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 250px;
          background: transparent;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
        "
      >
        <!-- Navigation Links -->
        <nav style="display: flex; flex-direction: column; gap: 2.5rem">
          <button
            @click="navigateTo('#about')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.3rem;
              font-weight: 400;
              letter-spacing: 0.02em;
              transition: opacity 0.3s;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            "
            class="nav-link-hover"
          >
            About
          </button>
          <button
            @click="navigateTo('/catalog')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.3rem;
              font-weight: 400;
              letter-spacing: 0.02em;
              transition: opacity 0.3s;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            "
            class="nav-link-hover"
          >
            Catalog
          </button>
          <button
            @click="navigateTo('/delivery')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.3rem;
              font-weight: 400;
              letter-spacing: 0.02em;
              transition: opacity 0.3s;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            "
            class="nav-link-hover"
          >
            Delivery and payment
          </button>
          <button
            @click="navigateTo('/contacts')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.3rem;
              font-weight: 400;
              letter-spacing: 0.02em;
              transition: opacity 0.3s;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            "
            class="nav-link-hover"
          >
            Contacts
          </button>
        </nav>
      </div>

      <!-- MOBILE: Navigation links overlaid on center-right (transparent) -->
      <div
        class="mobile-nav-overlay"
        style="
          position: absolute;
          top: 50%;
          right: 1.5rem;
          transform: translateY(-25%);
          z-index: 10;
          display: none;
        "
      >
        <nav
          style="
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            align-items: flex-start;
          "
        >
          <button
            @click="navigateTo('#about')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.1rem;
              font-weight: 300;
              letter-spacing: 0.02em;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
              transition: opacity 0.3s;
            "
            class="nav-link-hover"
          >
            About
          </button>
          <button
            @click="navigateTo('/catalog')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.1rem;
              font-weight: 300;
              letter-spacing: 0.02em;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
              transition: opacity 0.3s;
            "
            class="nav-link-hover"
          >
            Catalog
          </button>
          <button
            @click="navigateTo('/delivery')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.1rem;
              font-weight: 300;
              letter-spacing: 0.02em;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
              transition: opacity 0.3s;
            "
            class="nav-link-hover"
          >
            Delivery and payment
          </button>
          <button
            @click="navigateTo('/contacts')"
            style="
              background: none;
              border: none;
              padding: 0;
              text-align: left;
              cursor: pointer;
              color: white;
              text-decoration: none;
              font-size: 1.1rem;
              font-weight: 300;
              letter-spacing: 0.02em;
              text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
              transition: opacity 0.3s;
            "
            class="nav-link-hover"
          >
            Contacts
          </button>
        </nav>
      </div>
    </section>

    <!-- FEATURED ARTWORKS GRID - 2 rows x 3 columns -->
    <section style="background: #4a4a4a; padding: 4rem var(--space-page-x)">
      <div style="max-width: 1200px; margin: 0 auto">
        <div
          style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          "
        >
          <div
            v-for="work in featuredWorks"
            :key="work.id"
            @click="openQuickView(work)"
            style="cursor: pointer; position: relative"
          >
            <!-- Artwork Image -->
            <div
              style="
                position: relative;
                background: #2b2b2b;
                aspect-ratio: 3/4;
                overflow: hidden;
              "
            >
              <img
                :src="work.imgSrc"
                :alt="work.imgAlt"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: opacity 0.3s;
                "
                class="artwork-hover"
              />
            </div>

            <!-- Artwork Info -->
            <div style="margin-top: 0.75rem">
              <div
                style="
                  font-size: 0.75rem;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  font-weight: 400;
                  margin-bottom: 0.25rem;
                "
              >
                {{ work.title }}
              </div>
              <div
                style="font-size: 0.7rem; color: var(--color-text-secondary)"
              >
                ${{ work.price.toLocaleString() }}
              </div>
            </div>
          </div>
        </div>

        <!-- MORE button centered -->
        <div style="text-align: center; margin-top: 3rem">
          <button @click="navigateTo('/catalog')" class="more-btn">more</button>
        </div>
      </div>
    </section>

    <!-- ABOUT THE ARTIST SECTION -->
    <section
      id="about"
      class="about-section"
      style="
        background: var(--color-bg-darker);
        padding: 5rem var(--space-page-x);
      "
    >
      <div style="max-width: 1400px; margin: 0 auto">
        <div
          class="about-grid"
          style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          "
        >
          <!-- Left Column - Text Content -->
          <div class="about-text">
            <h2
              style="
                font-family: var(--font-display);
                font-weight: 200;
                font-size: 2.5rem;
                margin-bottom: 2.5rem;
                color: white;
                letter-spacing: 0.02em;
              "
            >
              About the artist
            </h2>

            <div
              style="
                color: rgba(255, 255, 255, 0.85);
                font-size: 0.95rem;
                line-height: 1.8;
                font-weight: 300;
              "
            >
              <p style="margin-bottom: 1.5rem; font-size: 1.5rem">
                I have always been drawn to the idea of solitude, intimacy, and
                the human condition. This has led me to naturally desire an
                expression of themes around what it means to be an individual,
                and the different seminal experiences that shape us; especially
                how these experiences manifest as ordinary in the moment. These
                are themes that resonate in classics I long admired, but not in
                a way that was familiar, not in a way that seemed complete.
                Hence, this series. Using ink and acrylic on paper and canvas, I
                narrate intimacy, solitude, betrayal in the way I feel it at
                home!” 
              </p>

              <p style="margin-bottom: 0; font-size: 1.1rem">
                -Ini Oluwa
              </p>
            </div>
          </div>

          <!-- Right Column - Artist Photo -->
          <div class="about-image">
            <img
              src="/catalogue/ini-oluwa-outdoor.jpeg"
              alt="Ini Oluwa"
              style="
                width: 100%;
                height: auto;
                object-fit: cover;
                filter: grayscale(100%);
              "
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.artwork-hover:hover {
  opacity: 0.8;
}

.nav-link-hover:hover {
  opacity: 0.7;
}

.more-btn {
  display: inline-block;
  padding: 0.75rem 2.5rem;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  font-size: 0.75rem;
  text-transform: lowercase;
  letter-spacing: 0.05em;
  transition: all 0.3s;
}

.more-btn:hover {
  background: white;
  color: #4a4a4a;
}

/* Mobile Styles */
@media (max-width: 768px) {
  /* Hero section - keep full height on mobile */
  .hero-section {
    height: 100vh !important;
  }

  /* Hide desktop side navigation panel on mobile */
  .desktop-nav-panel {
    display: none !important;
  }

  /* Show mobile navigation overlay in center-right */
  .mobile-nav-overlay {
    display: block !important;
  }

  /* Featured artworks - 1 column on mobile (stacked vertically) */
  div[style*="grid-template-columns: repeat(3, 1fr)"] {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }

  /* Reduce padding on mobile sections */
  section[style*="padding: 4rem"] {
    padding: 2.5rem 1.5rem !important;
  }

  section[style*="padding: 5rem"] {
    padding: 3rem 1.5rem !important;
  }

  /* About section - image on top, text below on mobile */
  .about-section {
    padding: 0 !important;
  }

  .about-grid {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }

  .about-image {
    order: 1 !important;
    width: 100% !important;
  }

  .about-image img {
    max-height: 400px !important;
    object-position: center !important;
  }

  .about-text {
    order: 2 !important;
    padding: 3rem 1.5rem 4rem !important;
  }

  .about-text h2 {
    font-size: 2rem !important;
    margin-bottom: 2rem !important;
  }

  /* Artist statement quote */
  p[style*="font-size: 1.1rem"] {
    font-size: 1rem !important;
  }

  /* Artwork info - larger text on mobile */
  div[style*="font-size: 0.75rem"] {
    font-size: 0.85rem !important;
  }

  div[style*="font-size: 0.7rem"] {
    font-size: 0.8rem !important;
  }
}

/* Tablet Styles */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Featured artworks - 2 columns on tablet */
  div[style*="grid-template-columns: repeat(3, 1fr)"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* Hide desktop side nav on tablet */
  .desktop-nav-panel {
    display: none !important;
  }

  /* Hide mobile nav overlay on tablet (use hamburger menu instead) */
  .mobile-nav-overlay {
    display: none !important;
  }

  /* About section - stack on tablet too */
  .about-grid {
    grid-template-columns: 1fr !important;
  }

  .about-image {
    order: 1 !important;
  }

  .about-text {
    order: 2 !important;
  }
}
</style>
