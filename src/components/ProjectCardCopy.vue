<template>
  <div 
    class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
    @click="$emit('click')"
  >
    <!-- Image ou vidéo miniature -->
    <template v-if="project.type === 'video'">
      <div class="relative">
        <img
          v-if="videoThumb"
          :src="videoThumb"
          :alt="project.title"
          class="w-full h-64 object-cover"
        />
        <video
          v-else
          ref="videoRef"
          :src="project.video"
          class="w-full h-64 object-cover"
          preload="metadata"
          muted
          playsinline
        ></video>
        <!-- Icône Lecture -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-black/50 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="none"
              class="w-10 h-10 opacity-80 group-hover:opacity-100 transition"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <img 
        :src="project.thumb || project.image" 
        :srcset="`${project.thumb || project.image} 400w, ${project.image} 800w`"
        :sizes="`(max-width: 768px) 400px, 800px`"
        :alt="project.title"
        class="w-full h-64 object-cover"
        loading="lazy"
      />
    </template>
    
    <!-- Overlay infos -->
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
    
    <!-- Badge catégorie -->
    <div class="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
      {{ categoryLabel }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

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

// Capture d’image vidéo si aucune miniature fournie
const videoThumb = ref(null)
const videoRef = ref(null)

onMounted(() => {
  if (props.project.type === 'video' && !props.project.thumb && videoRef.value) {
    const video = videoRef.value
    video.addEventListener('loadeddata', () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        videoThumb.value = canvas.toDataURL('image/jpeg')
      } catch (e) {
        console.warn('Impossible de générer la miniature vidéo', e)
      }
    })
  }
})
</script>
