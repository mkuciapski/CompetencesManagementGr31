import { createRouter, createWebHistory } from 'vue-router'
import Competences from '../views/Competences.vue'
import Lecture from '../views/Lecture.vue'
import Computed from '../views/Computed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Competences,
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: Lecture,
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
  ],
})

export default router
