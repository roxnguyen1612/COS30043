import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnitView from '../views/UnitView.vue'
import TaskView from '../views/TaskView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unit',
    name: 'unit',
    component: UnitView
  },
  {
    path: '/task',
    name: 'task',
    component: TaskView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
