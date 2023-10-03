import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/TodolistView.vue')
    },
    {
      path: '/addtodolist',
      name: 'addtodolist',
      component: () => import('../views/addToDoListView.vue')
    }
  ]
})

export default router