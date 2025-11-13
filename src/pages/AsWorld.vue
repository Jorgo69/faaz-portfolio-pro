<template>
  <div class="w-full">
    <!-- Hero Section minimaliste -->
    <section class="relative h-[60vh] lg:h-[70vh] flex items-center justify-center bg-primary text-white">
      <div class="text-center px-4 animate-fade-in-up">
        <h1 class="text-5xl lg:text-7xl font-heading font-bold mb-6">
          Notre Univers Créatif
        </h1>
        <p class="text-xl lg:text-2xl text-accent max-w-2xl mx-auto">
          Découvrez notre approche unique de la photographie et de la vidéo
        </p>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
    
    <!-- Sections alternées -->
    <AlternatingSection :items="contentItems" />
    
    <!-- CTA Final Section -->
    <section class="bg-primary text-white py-24">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6">
          Prêt à créer ensemble ?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Chaque projet est une nouvelle aventure. Discutons de la vôtre.
        </p>
        <router-link 
          to="/faaz-contact"
          class="inline-flex items-center px-10 py-5 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 group"
        >
          Démarrer un projet
          <svg class="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import AlternatingSection from '../components/AlternatingSection.vue'
import { alternatingContent } from '../data/alternatingContent'

const contentItems = alternatingContent
</script>