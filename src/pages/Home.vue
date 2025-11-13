<template>
  <div>
    <Hero />
    
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-heading font-bold text-center mb-12 animate-fade-in-up">
        Projets Récents
      </h2>
      <GalleryGrid :projects="recentProjects" />
      
      <div class="text-center mt-12">
        <router-link 
          to="/photographie" 
          class="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent hover:text-primary transition duration-300"
        >
          Voir toute la galerie
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'
import GalleryGrid from '../components/GalleryGrid.vue'
import { projects } from '../data/projects'

const recentProjects = computed(() => {
  return projects.slice(0, 6)
})
</script>
````