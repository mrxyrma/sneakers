import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ProductItem } from '@/shared/types';

export const useCartStore = defineStore('cart', () => {
  const isCartVisible = ref(false);
  const itemsInCart = ref<ProductItem[]>([]);

  const isCartEmpty = computed(() => itemsInCart.value.length === 0);
  
  return { isCartVisible, itemsInCart, isCartEmpty };
});
