<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-5xl font-heading font-bold text-center mb-8 animate-fade-in-up">
        {{ t('biography.title') }}
      </h1>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="animate-fade-in-up">
          <img 
            src="/images/sample-1.jpg" 
            alt="Barakell Beni"
            class="rounded-lg shadow-2xl w-full h-auto"
            loading="lazy"
          />
        </div>
        
        <div class="space-y-6 animate-fade-in-up">
          <p class="text-lg text-muted leading-relaxed">
            {{ t('biography.intro') }}
          </p>
          
          <p class="text-lg text-muted leading-relaxed">
            {{ t('biography.body') }}
          </p>
          
          <div class="pt-6">
            <h3 class="text-2xl font-heading font-bold mb-4">Spécialités</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="text-accent mr-3 text-2xl">✓</span>
                <span>Photographie de portrait artistique</span>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3 text-2xl">✓</span>
                <span>Production de clips musicaux</span>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3 text-2xl">✓</span>
                <span>Couverture d'événements premium</span>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3 text-2xl">✓</span>
                <span>Campagnes commerciales & mode</span>
              </li>
            </ul>
          </div>
          
          <div class="pt-6">
            <router-link 
              to="/faaz-contact" 
              class="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300"
            >
              Travaillons ensemble
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
````