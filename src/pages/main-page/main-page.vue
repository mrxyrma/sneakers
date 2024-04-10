<script setup lang="ts">
  import { AppHeader } from '@/widgets/app-header';
  import { ProductList } from '@/widgets/product-list';
  import { UserCart } from '@/widgets/user-cart';
  import { useCartStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';

  const cartStore = useCartStore();
  const { isCartVisible } = storeToRefs(cartStore);
</script>

<template>
  <div class="mx-auto my-20 w-4/5 rounded-xl bg-white shadow-2xl">
    <app-header />
    <product-list />
    <user-cart v-if="isCartVisible" />
  </div>
</template>
