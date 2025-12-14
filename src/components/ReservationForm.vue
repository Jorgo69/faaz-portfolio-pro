<template>
  <div class="max-w-6xl mx-auto">
    <!-- En-tête avec design moderne -->
    <div class="text-center mb-12 animate-fade-in-up">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-6">
        <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>
      <h2 class="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
        {{ t('contact.title') }}
      </h2>
      <p class="text-lg md:text-xl text-muted max-w-2xl mx-auto">
        {{ t('contact.subtitle') }}
      </p>
    </div>

    <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">
      <!-- Formulaire (60%) -->
      <div class="lg:col-span-3">

        <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 animate-fade-in-up">
          <div class="space-y-6">
            <!-- Nom & Email sur la même ligne (desktop) -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Nom -->
              <div class="space-y-2">
                <label for="name" class="flex items-center text-sm font-semibold text-primary">
                  <svg class="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  {{ t('contact.name') }}
                </label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all duration-200 outline-none"
                  :class="{ 'border-red-500 bg-red-50': errors.name }"
                />
                <transition name="slide-down">
                  <span v-if="errors.name" class="text-red-500 text-xs flex items-center mt-1">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    {{ errors.name }}
                  </span>
                </transition>
              </div>

              <!-- Email -->
              <div class="space-y-2">
                <label for="email" class="flex items-center text-sm font-semibold text-primary">
                  <svg class="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  {{ t('contact.email') }}
                </label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all duration-200 outline-none"
                  :class="{ 'border-red-500 bg-red-50': errors.email }"
                />
                <transition name="slide-down">
                  <span v-if="errors.email" class="text-red-500 text-xs flex items-center mt-1">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    {{ errors.email }}
                  </span>
                </transition>
              </div>
            </div>

            <!-- Téléphone (optionnel) -->
            <div class="space-y-2">
              <label for="phone" class="flex items-center text-sm font-semibold text-primary">
                <svg class="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {{ t('contact.phone') }}
                <span class="ml-2 text-xs text-gray-400 font-normal">({{ t('contact.optional') }})</span>
              </label>
              <input 
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="+229 01 67 66 60 70"
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all duration-200 outline-none"
              />
            </div>

            <!-- Type de projet -->
            <div class="space-y-2">
              <label for="project-type" class="flex items-center text-sm font-semibold text-primary">
                <svg class="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                {{ t('contact.projectType') }}
              </label>
              <select 
                id="project-type"
                v-model="form.projectType"
                required
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all duration-200 outline-none cursor-pointer"
              >
                <option value="" disabled>{{ t('contact.selectType') }}</option>
                <option value="photography">{{ t('contact.types.photography') }}</option>
                <option value="video">{{ t('contact.types.video') }}</option>
                <option value="event">{{ t('contact.types.event') }}</option>
                <option value="commercial">{{ t('contact.types.commercial') }}</option>
                <option value="other">{{ t('contact.types.other') }}</option>
              </select>
            </div>

            <!-- Budget (optionnel) -->
            <div class="space-y-2">
              <label for="budget" class="flex items-center text-sm font-semibold text-primary">
                <svg class="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ t('contact.budget') }}
                <span class="ml-2 text-xs text-gray-400 font-normal">({{ t('contact.optional') }})</span>
              </label>
              <select 
                id="budget"
                v-model="form.budget"
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all duration-200 outline-none cursor-pointer"
              >
                <option value="">{{ t('contact.selectBudget') }}</option>
                <option value="< 500€">< 500€ soit 100. 000 XOF </option>
                <option value="500€ - 1000€">500€ - 1000€ soit 100. 000 - 250. 000 XOF </option>
                <option value="1000€ - 2500€">1000€ - 2500€ soit 250. 000 - 750. 000 XOF</option>
                <option value="2500€ - 5000€">2500€ - 5000€ soit 800. 000 - 950. 000 XOF</option>
                <option value="> 5000€">> 5000€ soit 1. 000. 000 - 1. 250. 000 XOF</option>
              </select>
            </div>

            <!-- Message -->
            <div class="space-y-2">
              <label for="message" class="flex items-center text-sm font-semibold text-primary">
                <svg class="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                </svg>
                {{ t('contact.message') }}
              </label>
              <textarea 
                id="message"
                v-model="form.message"
                rows="6"
                required
                :placeholder="t('contact.messagePlaceholder')"
                class="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white transition-all duration-200 outline-none resize-none"
                :class="{ 'border-red-500 bg-red-50': errors.message }"
              ></textarea>
              <transition name="slide-down">
                <span v-if="errors.message" class="text-red-500 text-xs flex items-center mt-1">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  {{ errors.message }}
                </span>
              </transition>
              <p class="text-xs text-gray-400 mt-1">{{ form.message.length }}/500 caractères</p>
            </div>

            <!-- Bouton Submit -->
            <button 
              type="submit"
              :disabled="loading"
              class="group relative w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
            >
              <span class="relative z-10 flex items-center justify-center">
                <svg v-if="!loading" class="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <svg v-else class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                {{ loading ? t('contact.sending') : t('contact.submit') }}
              </span>
              <div class="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </form>

        <!-- Message de succès -->
        <transition name="slide-up">
          <div v-if="successMessage" class="mt-6 p-6 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-start animate-fade-in-up">
            <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <h4 class="font-semibold mb-1">{{ t('contact.success') }}</h4>
              <p class="text-sm text-green-700">{{ t('contact.successDetails') }}</p>
            </div>
          </div>
        </transition>

      </div>


      <!-- Informations de contact (40%) -->
      <div class="lg:col-span-2 space-y-6 animate-fade-in-up" style="animation-delay: 0.2s">

        <!-- FAQ Rapide -->
        <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <h3 class="text-lg font-heading font-bold text-primary mb-4">{{ t('contact.faq') }}</h3>
          <div class="space-y-3 text-sm">
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer text-muted hover:text-primary transition">
                <span>{{ t('contact.faqQ1') }}</span>
                <svg class="w-4 h-4 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p class="mt-2 text-muted pl-1">{{ t('contact.faqA1') }}</p>
            </details>
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer text-muted hover:text-primary transition">
                <span>{{ t('contact.faqQ2') }}</span>
                <svg class="w-4 h-4 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p class="mt-2 text-muted pl-1">{{ t('contact.faqA2') }}</p>
            </details>
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer text-muted hover:text-primary transition">
                <span>{{ t('contact.faqQ3') }}</span>
                <svg class="w-4 h-4 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p class="mt-2 text-muted pl-1">{{ t('contact.faqA3') }}</p>
            </details>
          </div>
        </div>

        <!-- Call to Action alternatif -->
        <div class="bg-gradient-to-br from-accent to-yellow-500 p-6 rounded-2xl shadow-xl text-primary">
          <h3 class="text-xl font-heading font-bold mb-2">{{ t('contact.urgentProject') }}</h3>
          <p class="text-sm mb-4 opacity-90">{{ t('contact.urgentText') }}</p>
          <a 
            href="https://wa.me/22901676660670" 
            target="_blank" 
            rel="noopener"
            class="inline-flex items-center bg-white text-primary font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Direct
          </a>
        </div>


        <!-- Carte informations -->
        <div class="bg-gradient-to-br from-primary to-gray-900 text-white p-8 rounded-2xl shadow-xl">
          <h3 class="text-2xl font-heading font-bold mb-6">{{ t('contact.info') }}</h3>
          
          <div class="space-y-6">
            <!-- Email -->
            <a href="mailto:faaz@videaste.com" class="flex items-start group hover:translate-x-2 transition-transform">
              <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent/30 transition">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Email</h4>
                <p class="text-gray-300 text-sm">faaz@videaste.com</p>
              </div>
            </a>

            <!-- Téléphone -->
            <a href="tel:+22901676660670" class="flex items-start group hover:translate-x-2 transition-transform">
              <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent/30 transition">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('contact.phone') }}</h4>
                <p class="text-gray-300 text-sm">+229 01 67 66 60 70</p>
              </div>
            </a>

            <!-- Localisation -->
            <div class="flex items-start group hover:translate-x-2 transition-transform">
              <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent/30 transition">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ t('contact.location') }}</h4>
                <p class="text-gray-300 text-sm">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
          </div>

          <!-- Horaires -->
          <div class="mt-8 pt-6 border-t border-white/10">
            <h4 class="font-semibold mb-3">{{ t('contact.hours') }}</h4>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex justify-between">
                <span>{{ t('contact.weekdays') }}</span>
                <span class="text-accent font-medium">9h - 18h</span>
              </div>
              <div class="flex justify-between">
                <span>{{ t('contact.weekend') }}</span>
                <span class="text-accent font-medium">{{ t('contact.onAppointment') }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Réseaux sociaux -->
        <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <h3 class="text-lg font-heading font-bold text-primary mb-4">{{ t('contact.followMe') }}</h3>
          <div class="flex space-x-3">
            <a href="https://instagram.com" target="_blank" rel="noopener" class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform group">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

        
        


    </div>
  </div>

  

</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
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
    errors.name = t('contact.errors.nameShort')
    valid = false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = t('contact.errors.emailInvalid')
    valid = false
  }
  
  if (form.message.length < 10) {
    errors.message = t('contact.errors.messageShort')
    valid = false
  }
  
  if (form.message.length > 500) {
    errors.message = t('contact.errors.messageLong')
    valid = false
  }
  
  return valid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  loading.value = true
  
  try {
    // Simuler envoi API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // TODO: Remplacer par fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    console.log('Formulaire envoyé:', form)
    
    successMessage.value = true
    
    // Reset form
    Object.keys(form).forEach(key => form[key] = '')
    
    // Scroll vers le message de succès
    setTimeout(() => {
      document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
    
    // Masquer le message après 8 secondes
    setTimeout(() => {
      successMessage.value = false
    }, 8000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    errors.message = t('contact.errors.sendFailed')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Animations personnalisées */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Style des details/summary */
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  list-style: none;
}

details[open] > summary {
  color: var(--primary);
  font-weight: 500;
}

/* Amélioration des focus pour accessibilité */
input:focus,
textarea:focus,
select:focus {
  outline: none;
}

/* Style du bouton submit avec overlay */
button[type="submit"] {
  position: relative;
  overflow: hidden;
}

button[type="submit"]:not(:disabled):hover {
  box-shadow: 0 10px 25px -5px rgba(212, 175, 55, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-fade-in-up {
    animation-delay: 0s !important;
  }
}
</style>