import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import type { ProductItem } from '@/shared/types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductItem[]>([]);
  const filters = reactive({
    sortBy: '',
    query: '',
  });

  const priceSum = computed(() => products.value.filter(item => item.cartId).reduce((acc, cur) => acc + cur.price, 0));

  return { products, filters, priceSum };
});
