<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-5xl font-heading font-bold text-center mb-4 animate-fade-in-up">
      {{ t('clips.title') }}
    </h1>
    <p class="text-xl text-muted text-center mb-12 animate-fade-in-up">
      {{ t('clips.description') }}
    </p>
    
    <GalleryGrid :projects="clipsProjects" type="video" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import GalleryGrid from '../components/GalleryGrid.vue'
import { projects } from '../data/projects'

const { t } = useI18n()

const clipsProjects = computed(() => {
  return projects.filter(p => p.category === 'clips')
})
</script>
