<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import { RemoveFromCart } from '@/features/product-card';
  import MakeOrder from '@/features/cart/make-order/make-order.vue';
  import { useProductsStore } from '@/shared/stores';
  import { vAutoAnimate } from '@formkit/auto-animate';
  import { computed } from 'vue';

  const productsStore = useProductsStore();
  const productsInCart = computed(() => productsStore.products.filter(item => item.cartId));
</script>

<template>
  <div class="flex flex-auto flex-col justify-between">
    <ul
      class="grid gap-2"
      v-auto-animate
    >
      <product-card-template
        v-for="product in productsInCart"
        :key="product.id"
        :title="product.title"
        :image-url="product.imageUrl"
        :price="product.price"
        placement="cart"
      >
        <template #add|remove-from-cart>
          <remove-from-cart
            :cart-id="product.cartId"
            :id="product.id"
          />
        </template>
      </product-card-template>
    </ul>
    <make-order />
  </div>
</template>
