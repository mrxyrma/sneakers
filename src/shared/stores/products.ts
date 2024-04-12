import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import type { ProductItem } from '@/shared/types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductItem[]>([]);
  const filters = reactive({
    sortBy: '',
    query: '',
  });

  return { products, filters };
});
