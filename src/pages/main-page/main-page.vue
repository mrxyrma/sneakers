<script setup lang="ts">
  import { ProductList } from '@/widgets/product-list';
  import { SortAndSearch } from '@/features/sort-and-search/ui';
  import { useProductsStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  import { fetchProducts } from '@/features/sort-and-search/model';

  const productStore = useProductsStore();
  const { products } = storeToRefs(productStore);

  onMounted(fetchProducts);
</script>

<template>
  <div class="flex items-center justify-between pb-7">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>
    <sort-and-search />
  </div>
  <product-list :products="products" />
</template>
