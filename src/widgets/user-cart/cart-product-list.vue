<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import RemoveFromCart from '@/features/product-card/remove-from-cart.vue';
  import MakeOrder from '@/features/cart/make-order.vue';
</script>

<template>
  <div class="flex flex-col flex-auto justify-between">
    <ul class="grid gap-2">
      <product-card-template
        v-for="i in 3"
        :key="i"
        name="Мужские Кроссовки Nike Blazer Mid Suede"
        img-url="/sneakers/sneakers-2.jpg"
        price="12999"
        placement="cart"
      >
        <template #add|remove-from-cart>
          <remove-from-cart />
        </template>
      </product-card-template>
    </ul>
    <make-order />
  </div>
</template>
