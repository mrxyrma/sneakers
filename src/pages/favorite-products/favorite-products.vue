<script setup lang="ts">
  import { NoSavedProducts } from '@/entities/no-saved-products';
  import { BackToMain } from '@/features/back-to-main';
  import { computed, onMounted } from 'vue';
  import { useProductsStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';
  import { fetchProducts } from '@/features/sort-and-search/model';
  import { AppLoader } from '@/shared/ui';
  import FavoriteProductsContent from './favorite-products-content.vue';

  const productsStore = useProductsStore();
  const { products, isLoading } = storeToRefs(productsStore);

  const favoriteProducts = computed(() => products.value.filter(item => item.favId));
  const isFavoriteProductsExist = computed(() => favoriteProducts.value.length > 0);

  onMounted(() => {
    if (!products.value.length) {
      fetchProducts();
    }
  });
</script>

<template>
  <app-loader v-if="isLoading" />

  <no-saved-products v-if="!isFavoriteProductsExist && !isLoading">
    <back-to-main />
  </no-saved-products>

  <favorite-products-content v-if="isFavoriteProductsExist && !isLoading" />
</template>
