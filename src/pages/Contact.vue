
<template>
  <div class="container mx-auto px-4 py-16">
    <ReservationForm />
    
    <div class="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
      <div class="animate-fade-in-up">
        <div class="text-accent text-4xl mb-4">📧</div>
        <h3 class="font-heading font-bold text-xl mb-2">Email</h3>
        <p class="text-muted">faaz@videaste.com</p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.1s">
        <div class="text-accent text-4xl mb-4">📱</div>
        <h3 class="font-heading font-bold text-xl mb-2">Téléphone</h3>
        <p class="text-muted">+229 01 67 66 60 70</p>
      </div>
      
      <div class="animate-fade-in-up" style="animation-delay: 0.2s">
        <div class="text-accent text-4xl mb-4">📍</div>
        <h3 class="font-heading font-bold text-xl mb-2">Localisation</h3>
        <p class="text-muted">Abidjan, Cote d'ivoire </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ReservationForm from '../components/ReservationForm.vue'
</script>