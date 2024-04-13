<script setup lang="ts">
  import { NoSavedProducts } from '@/entities/no-saved-products';
  import { BackToMain } from '@/features/back-to-main';
  import { computed, onMounted } from 'vue';
  import { useProductsStore } from '@/shared/stores';
  import { ProductList } from '@/widgets/product-list';
  import { storeToRefs } from 'pinia';
  import { fetchProducts } from '@/features/sort-and-search/model';

  const productsStore = useProductsStore();
  const { products } = storeToRefs(productsStore);

  const favoriteProducts = computed(() => products.value.filter(item => item.favId));
  const isFavoriteProductsExist = computed(() => favoriteProducts.value.length > 0);

  onMounted(() => {
    if (!productsStore.products.length) {
      fetchProducts();
    }
  });
</script>

<template>
  <no-saved-products v-if="!isFavoriteProductsExist">
    <back-to-main />
  </no-saved-products>

  <div v-if="isFavoriteProductsExist">
    <div class="flex items-center gap-3 pb-7">
      <router-link
        :to="{ name: 'mainPage' }"
        class="flex h-8 w-8 justify-center rounded border-2 border-slate-100 p-1 hover:border-slate-200 active:border-slate-300"
      >
        <img
          src="/arrow-right.svg"
          alt="Назад"
          class="h-full rotate-180"
        />
      </router-link>

      <h2 class="text-3xl font-bold">Мои закладки</h2>
    </div>
    <product-list :products="favoriteProducts" />
  </div>
</template>
