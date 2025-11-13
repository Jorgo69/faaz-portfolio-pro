<template>
  <header class="bg-primary text-white shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-heading font-bold text-accent">
        {{ app }}
      </router-link>
      
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-8 items-center">
        <li v-for="link in navLinks" :key="link.path">
          <router-link 
            :to="link.path" 
            class="hover:text-accent transition duration-300"
            active-class="text-accent font-semibold"
          >
            {{ t(link.label) }}
          </router-link>
        </li>
        <li>
          <button 
            @click="toggleLocale" 
            class="px-3 py-1 border border-accent rounded hover:bg-accent hover:text-primary transition duration-300"
          >
            {{ locale === 'fr' ? 'EN' : 'FR' }}
          </button>
        </li>
      </ul>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="menuOpen = !menuOpen" 
        class="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            v-if="!menuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>
    
    <!-- Mobile Menu -->
    <transition name="slide">
      <ul v-if="menuOpen" class="md:hidden bg-primary border-t border-accent/30 py-4">
        <li v-for="link in navLinks" :key="link.path" class="px-4 py-2">
          <router-link 
            :to="link.path" 
            class="block hover:text-accent transition"
            @click="menuOpen = false"
          >
            {{ t(link.label) }}
          </router-link>
        </li>
        <li class="px-4 py-2">
          <button 
            @click="toggleLocale" 
            class="w-full text-left px-3 py-1 border border-accent rounded"
          >
            {{ locale === 'fr' ? 'English' : 'Français' }}
          </button>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const app = import.meta.env.VITE_APP_NAME;

const { t, locale } = useI18n()
const menuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'nav.home' },
  { path: '/biographie-faaz', label: 'nav.biography' },
  { path: '/photographie', label: 'nav.photography' },
  { path: '/clips-video-professionnels', label: 'nav.clips' },
  { path: '/couverture-evenement', label: 'nav.event' },
  { path: '/faaz-contact', label: 'nav.contact' }
]

const toggleLocale = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>