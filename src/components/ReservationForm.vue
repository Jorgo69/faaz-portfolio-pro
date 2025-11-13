<template>
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
    <h2 class="text-3xl font-heading font-bold text-primary mb-6 text-center">
      {{ t('contact.title') }}
    </h2>
    <p class="text-muted text-center mb-8">{{ t('contact.subtitle') }}</p>
    
    <div class="space-y-6">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-semibold text-primary mb-2">
          {{ t('contact.name') }}
        </label>
        <input 
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition"
          :class="{ 'border-red-500': errors.name }"
        />
        <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
      </div>
      
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-semibold text-primary mb-2">
          {{ t('contact.email') }}
        </label>
        <input 
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition"
          :class="{ 'border-red-500': errors.email }"
        />
        <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
      </div>
      
      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-semibold text-primary mb-2">
          {{ t('contact.message') }}
        </label>
        <textarea 
          id="message"
          v-model="form.message"
          rows="6"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
          :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
      </div>
      
      <!-- Submit Button -->
      <button 
        type="submit"
        :disabled="loading"
        class="w-full bg-accent text-primary font-semibold py-4 rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? t('gallery.loading') : t('contact.submit') }}
      </button>
    </div>
    
    <!-- Success Message -->
    <transition name="fade">
      <div v-if="successMessage" class="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
        {{ t('contact.success') }}
      </div>
    </transition>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: null,
  email: null,
  message: null
})

const loading = ref(false)
const successMessage = ref(false)

const validateForm = () => {
  let valid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = null)
  
  if (form.name.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères'
    valid = false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = 'Email invalide'
    valid = false
  }
  
  if (form.message.length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères'
    valid = false
  }
  
  return valid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  loading.value = true
  
  try {
    // Simuler envoi API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // TODO: Remplacer par fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    
    successMessage.value = true
    
    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    
    setTimeout(() => {
      successMessage.value = false
    }, 5000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
````