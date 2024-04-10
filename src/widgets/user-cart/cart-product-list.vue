<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import { RemoveFromCart } from '@/features/product-card';
  import MakeOrder from '@/features/cart/make-order/make-order.vue';
  import { useCartStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';
  import type { ProductItem } from '@/shared/types';

  const cartStore = useCartStore();
  const { itemsInCart } = storeToRefs(cartStore);
</script>

<template>
  <div class="flex flex-auto flex-col justify-between">
    <ul class="grid gap-2">
      <product-card-template
        v-for="item in itemsInCart"
        :key="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        placement="cart"
      >
        <template #add|remove-from-cart>
          <remove-from-cart :id="item.id" />
        </template>
      </product-card-template>
    </ul>
    <make-order />
  </div>
</template>
