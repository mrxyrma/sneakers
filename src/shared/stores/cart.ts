import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useProductsStore } from '@/shared/stores/products';

export const useCartStore = defineStore('cart', () => {
  const productsStore = useProductsStore();

  const isCartVisible = ref(false);

  const productsInCart = computed(() => productsStore.products.filter(item => item.cartId));

  return { isCartVisible, productsInCart };
});
