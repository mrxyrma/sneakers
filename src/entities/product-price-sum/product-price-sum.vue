<script setup lang="ts">
  import { useProductsStore } from '@/shared/stores';

  const productsStore = useProductsStore();
</script>

<template>
  <div class="flex">
    <p>Итого:</p>
    <span class="grow border-b-2 border-dotted border-gray-300"></span>
    <p data-cy="cart-price-sum">{{ productsStore.priceSum }} руб.</p>
  </div>
</template>
