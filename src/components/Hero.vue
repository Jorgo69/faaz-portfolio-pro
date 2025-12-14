<template>
  <section class="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-black text-white overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 bg-[url('https://i.pinimg.com/736x/c6/55/2a/c6552aca7d9c81d82f204a59324fd316.jpg')] bg-cover bg-center"></div>
    </div>
    
    <div class="relative z-10 text-center px-4 animate-fade-in-up">
      <h1 class="text-5xl md:text-7xl font-heading font-bold mb-6">
        {{ t('hero.title') }}
      </h1>
      <p class="text-xl md:text-2xl text-accent mb-8">
        {{ t('hero.subtitle') }}
      </p>
      <router-link 
        to="/photographie" 
        class="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300"
      >
        {{ t('hero.cta') }}
      </router-link>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>