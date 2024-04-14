<script setup lang="ts">
  import { useProductsStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  import { fetchProducts } from '@/features/sort-and-search/model';
  import { AppLoader } from '@/shared/ui';
  import MainPageContent from './main-page-content.vue';

  const productStore = useProductsStore();
  const { isLoading } = storeToRefs(productStore);

  onMounted(fetchProducts);
</script>

<template>
  <app-loader v-if="isLoading" />
  <main-page-content v-if="!isLoading" />
</template>
