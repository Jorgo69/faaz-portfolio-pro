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
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl w-full" @click.stop>
          <button 
                @click="closeLightbox"
                class="absolute top-4 right-4 text-white text-4xl hover:text-accent transition"
                aria-label="Fermer"
                > 
                × 
            </button>
        <!-- <img 
        :src="selectedProject.image" 
        :alt="selectedProject.title"
        class="w-full h-auto rounded-lg shadow-2xl"
        loading="lazy"
      /> -->

       <!-- Image ou vidéo -->
      <template v-if="selectedProject.type === 'video'">
        <video 
          controls
          autoplay
          class="w-full h-auto rounded-lg shadow-2xl"
          loading="lazy"
        >
          <source :src="selectedProject.video" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </template>

      <template v-if="selectedProject.type === 'image'">
        <img 
          :src="selectedProject.image" 
          :alt="selectedProject.title"
          class="w-full h-auto rounded-lg shadow-2xl"
          loading="lazy"
        />
      </template>
      
      <div class="mt-6 text-white text-center">
        <h3 class="text-3xl font-heading font-bold mb-2">{{ selectedProject.title }}</h3>
        <p class="text-accent mb-2">{{ t('gallery.client') }}: {{ selectedProject.client }}</p>
        <p class="text-muted">{{ t('gallery.date') }}: {{ formatDate(selectedProject.date) }}</p>
        <p class="mt-4 text-gray-300">{{ selectedProject.description }}</p>
        <p class="mt-4 text-gray-300">{{ selectedProject.type }}</p>
      </div>
      
      <!-- Navigation arrows -->
      <button 
        @click.stop="previousProject"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-900 text-5xl hover:text-accent transition"
        aria-label="Précédent"
      >
        ‹
      </button>
      <button 
        @click.stop="nextProject"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-900 text-5xl hover:text-accent transition"
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
import { ref, computed } from 'vue'
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