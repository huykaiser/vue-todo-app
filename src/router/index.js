import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import AboutView from '@/views/AboutView.vue'
import TestingView from '@/views/TestingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodosView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView
    },
  ]
})

export default router
