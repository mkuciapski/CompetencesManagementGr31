import { createRouter, createWebHistory } from 'vue-router'
import Competences from '../views/Competences.vue'
import Computed from '../views/Computed.vue'
import WatchEffect from '../views/WatchEffect.vue'
import CourseOpinions from '@/views/CourseOpinions.vue'
import Events from '@/views/Events.vue'

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
      component: () => import('../views/Lecture.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
    {
      path: '/watchEffect',
      name: 'watchEffect',
      component: WatchEffect,
    },
    {
      path: '/courseOpinions',
      name: 'courseOpinions',
      component: CourseOpinions,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
  ],
})

export default router
