<script setup lang="ts">
  import ComeBack from '@/features/cart/come-back.vue';
  import { CloseCart } from '@/features/cart';
  import { EmptyCart } from '@/entities/empty-cart';
  import CartProductList from './cart-product-list.vue';
</script>

<template>
  <div class="fixed top-0 left-0 bg-black opacity-40 h-full w-full"></div>
  <div class="fixed top-0 right-0 h-full w-96 bg-white p-5 flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <close-cart />
      <h2 class="font-semibold text-xl">Корзина</h2>
    </div>

    <empty-cart v-if="false">
      <come-back />
    </empty-cart>

    <cart-product-list v-if="true" />
  </div>
</template>
