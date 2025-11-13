<template>
  <div 
    class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
    @click="$emit('click')"
  >
    <!-- Thumbnail avec badge vidéo si nécessaire -->
    <div class="relative">
      <img 
        :src="project.thumb" 
        :srcset="project.image ? `${project.thumb} 400w, ${project.image} 800w` : project.thumb"
        :sizes="`(max-width: 768px) 400px, 800px`"
        :alt="project.title"
        class="w-full h-64 object-cover"
        loading="lazy"
      />
      
      <!-- Badge Play pour vidéos -->
      <div 
        v-if="isVideo"
        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"
      >
        <div class="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition">
          <svg class="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
    
    <!-- Overlay hover avec infos -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
      <h3 class="text-white text-xl font-heading font-bold mb-2">
        {{ project.title }}
      </h3>
      <p class="text-accent text-sm mb-1">
        {{ project.client }}
      </p>
      <p class="text-gray-300 text-sm">
        {{ formatDate(project.date) }}
      </p>
    </div>
    
    <!-- Category badge -->
    <div class="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
      {{ categoryLabel }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

const isVideo = computed(() => {
  return ['video', 'youtube', 'vimeo'].includes(props.project.type)
})

const categoryLabel = computed(() => {
  const labels = {
    photography: 'Photo',
    clips: 'Vidéo',
    event: 'Événement'
  }
  return labels[props.project.category] || props.project.category
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })
}
</script>