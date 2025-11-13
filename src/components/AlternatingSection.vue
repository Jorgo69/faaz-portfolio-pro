<!-- Section alternée avec effet B&W hover - style Asuka Spirit -->
<template>
  <section class="w-full">
    <div 
      v-for="(item, index) in items" 
      :key="item.id"
      class="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]"
      :class="{ 'lg:grid-flow-dense': index % 2 === 1 }"
    >
      <!-- Media (Image ou Vidéo) -->
      <div 
        class="relative overflow-hidden group"
        :class="index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'"
      >
        <!-- Image -->
        <img 
          v-if="item.type === 'image'"
          :src="item.media"
          :srcset="`${item.media} 800w, ${item.mediaLarge || item.media} 1600w`"
          sizes="(max-width: 1024px) 100vw, 50vw"
          :alt="item.title"
          class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
          loading="lazy"
        />
        
        <!-- Vidéo -->
        <video 
          v-else-if="item.type === 'video'"
          :src="item.media"
        
          :poster="item.poster"
          class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
          autoplay
          loop
          muted
          playsinline
        ></video>
        
        <!-- Overlay sombre au hover -->
        <div class="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-700"></div>
      </div>
      
      <!-- Contenu texte -->
      <div 
        class="flex items-center justify-center p-8 lg:p-16 bg-white"
        :class="index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'"
      >
        <div class="max-w-xl space-y-6 animate-fade-in-up">
          <!-- Catégorie -->
          <span 
            v-if="item.category"
            class="inline-block text-accent text-sm font-semibold tracking-widest uppercase"
          >
            {{ item.category }}
          </span>
          
          <!-- Titre -->
          <h2 class="text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
            {{ item.title }}
          </h2>
          
          <!-- Sous-titre -->
          <p 
            v-if="item.subtitle"
            class="text-xl text-accent font-medium"
          >
            {{ item.subtitle }}
          </p>
          
          <!-- Description -->
          <p class="text-lg text-muted leading-relaxed">
            {{ item.description }}
          </p>
          
          <!-- Liste de points (optionnel) -->
          <ul v-if="item.features && item.features.length" class="space-y-3">
            <li 
              v-for="(feature, idx) in item.features" 
              :key="idx"
              class="flex items-start"
            >
              <svg class="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-muted">{{ feature }}</span>
            </li>
          </ul>
          
          <!-- CTA Button -->
          <div v-if="item.cta" class="pt-4">
            <router-link 
              v-if="item.cta.internal"
              :to="item.cta.link"
              class="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105 group"
            >
              {{ item.cta.text }}
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            
            <a 
              v-else
              :href="item.cta.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105 group"
            >
              {{ item.cta.text }}
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
          
          <!-- Stats/Metrics (optionnel) -->
          <div v-if="item.stats && item.stats.length" class="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div 
              v-for="(stat, idx) in item.stats" 
              :key="idx"
              class="text-center"
            >
              <div class="text-3xl font-heading font-bold text-accent">{{ stat.value }}</div>
              <div class="text-sm text-muted mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => 
        item.id && 
        item.title && 
        item.description && 
        item.media &&
        ['image', 'video'].includes(item.type)
      )
    }
  }
})
</script>

<style scoped>
/* Animation fade-in personnalisée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

/* Smooth scroll pour les sections */
section {
  scroll-snap-align: start;
}
</style>