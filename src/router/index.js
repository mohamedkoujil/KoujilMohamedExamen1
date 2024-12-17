import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/exercici1'
    },
    {
      path: '/exercici1',
      name: 'exercici1',
      component: () => import('@/views/Exercici1View.vue'),
      children: [
        {
          name: 'detallProducte',
          path: ':productId',
          component: ProductDetail,
          props: true
        }
      ]
    },
    {
      path: '/exercici2',
      name: 'exercici2',
      component: () => import('@/views/Exercici2View.vue')
    },
    {
      path: '/exercici3',
      name: 'exercici3',
      component: () => import('@/views/Exercici3View.vue')
    }
  ]
})

export default router
