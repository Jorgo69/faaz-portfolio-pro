<template>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard 
        v-for="project in filteredProjects" 
        :key="project.id"
        :project="project"
        @click="openLightbox(project)"
      />
    </div>
    
    <!-- Lightbox Modal -->
    <transition name="fade">
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-5xl w-full" @click.stop>
          <!-- Bouton fermer -->
          <button 
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-white text-4xl hover:text-accent transition z-10"
            aria-label="Fermer"
          > 
            ✕
          </button>
          
          <!-- Contenu média -->
          <div class="bg-black rounded-lg overflow-hidden">
            <!-- Vidéo locale -->
            <template v-if="selectedProject.type === 'video'">
              <video 
                controls
                autoplay
                class="w-full max-h-[70vh] object-contain"
                :key="selectedProject.id"
              >
                <source :src="selectedProject.video" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </template>
            
            <!-- YouTube -->
            <template v-else-if="selectedProject.type === 'youtube'">
              <div class="relative pb-[56.25%] h-0">
                <iframe
                  :src="`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`"
                  class="absolute top-0 left-0 w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </template>
            
            <!-- Vimeo -->
            <template v-else-if="selectedProject.type === 'vimeo'">
              <div class="relative pb-[56.25%] h-0">
                <iframe
                  :src="`https://player.vimeo.com/video/${selectedProject.videoId}?autoplay=1`"
                  class="absolute top-0 left-0 w-full h-full"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </template>
            
            <!-- Image -->
            <template v-else-if="selectedProject.type === 'image'">
              <img 
                :src="selectedProject.image" 
                :alt="selectedProject.title"
                class="w-full max-h-[70vh] object-contain rounded-lg"
                loading="lazy"
              />
            </template>
          </div>
          
          <!-- Informations projet -->
          <div class="mt-6 text-white text-center">
            <h3 class="text-3xl font-heading font-bold mb-2">{{ selectedProject.title }}</h3>
            <p class="text-accent mb-2">{{ t('gallery.client') }}: {{ selectedProject.client }}</p>
            <p class="text-gray-400 text-sm mb-2">{{ t('gallery.date') }}: {{ formatDate(selectedProject.date) }}</p>
            <p class="mt-4 text-gray-300 max-w-2xl mx-auto">{{ selectedProject.description }}</p>
          </div>
          
          <!-- Navigation arrows -->
          <button 
            v-if="filteredProjects.length > 1"
            @click.stop="previousProject"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-accent transition bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Précédent"
          >
            ‹
          </button>
          <button 
            v-if="filteredProjects.length > 1"
            @click.stop="nextProject"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-accent transition bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Suivant"
          >
            ›
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    default: null
  }
})

const { t } = useI18n()
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (!props.category) return props.projects
  return props.projects.filter(p => p.category === props.category)
})

const openLightbox = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const currentIndex = computed(() => {
  return filteredProjects.value.findIndex(p => p.id === selectedProject.value?.id)
})

const previousProject = () => {
  const newIndex = currentIndex.value > 0 
    ? currentIndex.value - 1 
    : filteredProjects.value.length - 1
  selectedProject.value = filteredProjects.value[newIndex]
}

const nextProject = () => {
  const newIndex = currentIndex.value < filteredProjects.value.length - 1 
    ? currentIndex.value + 1 
    : 0
  selectedProject.value = filteredProjects.value[newIndex]
}

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Support navigation clavier
watch(selectedProject, (newVal) => {
  if (newVal) {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') previousProject()
      if (e.key === 'ArrowRight') nextProject()
    }
    
    document.addEventListener('keydown', handleKeydown)
    
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>