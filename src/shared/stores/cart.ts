import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const isCartVisible = ref(false);

  return { isCartVisible };
});
