<script setup lang="ts">
  import { CloseCart } from '@/features/cart';
  import { EmptyCart } from '@/entities/empty-cart';
  import CartProductList from './cart-product-list.vue';
  import { useCartStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';

  const cartStore = useCartStore();
  const { isCartEmpty } = storeToRefs(cartStore);
</script>

<template>
  <div class="fixed left-0 top-0 h-full w-full bg-black opacity-40"></div>
  <div class="fixed right-0 top-0 flex h-full w-96 flex-col gap-4 bg-white p-5">
    <div class="flex items-center gap-3">
      <close-cart />
      <h2 class="text-xl font-semibold">Корзина</h2>
    </div>

    <empty-cart v-if="isCartEmpty" />

    <cart-product-list v-if="!isCartEmpty" />
  </div>
</template>
