import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Biography from '../pages/Biography.vue'
import Photography from '../pages/Photography.vue'
import Clips from '../pages/Clips.vue'
import Event from '../pages/Event.vue'
import Contact from '../pages/Contact.vue'
import AsWorld from '../pages/AsWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Accueil' }
  },
  {
    path: '/biographie-faaz',
    name: 'Biography',
    component: Biography,
    meta: { title: 'Biographie' }
  },
  {
    path: '/photographie',
    name: 'Photography',
    component: Photography,
    meta: { title: 'Photographie' }
  },
  {
    path: '/clips-video-professionnels',
    name: 'Clips',
    component: Clips,
    meta: { title: 'Clips Vidéo' }
  },
  {
    path: '/couverture-evenement',
    name: 'Event',
    component: Event,
    meta: { title: 'Couverture Événement' }
  },
  {
    path: '/faaz-contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact' }
  },
  {
    path: '/as-world',
    name: 'AsWorld',
    component: AsWorld,
    meta: { title: 'Notre Univers' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} – Faaz` || 'Fa2z'
  next()
})

export default router