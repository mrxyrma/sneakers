<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import { AddToCart } from '@/features/product-card/';
  import { AddToFavorite } from '@/features/product-card';
  import { vAutoAnimate } from '@formkit/auto-animate';
  import type { ProductItem } from '@/shared/types';

  type Props = {
    products: ProductItem[];
  };

  defineProps<Props>();
</script>

<template>
  <ul
    class="product-list grid gap-5"
    v-auto-animate
  >
    <product-card-template
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image-url="product.imageUrl"
      :price="product.price"
      placement="list"
    >
      <template #add-to-favorite>
        <add-to-favorite
          :id="product.id"
          :fav-id="product.favId"
        />
      </template>
      <template #add|remove-from-cart>
        <add-to-cart
          :id="product.id"
          :cart-id="product.cartId"
        />
      </template>
    </product-card-template>
  </ul>
</template>

<style scoped>
  .product-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
