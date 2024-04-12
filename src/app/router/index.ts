import { createRouter, createWebHistory } from 'vue-router';
import { MainPage } from '@/pages/main-page';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage,
    },
    {
      path: '/favorite',
      name: 'favoriteProducts',
      component: () => import('@/pages/favorite-products/favorite-products.vue'),
    },
  ],
});

export default router;
