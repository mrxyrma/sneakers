<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import { RemoveFromCart } from '@/features/product-card';
  import MakeOrder from '@/features/cart/make-order/make-order.vue';
  import { useCartStore } from '@/shared/stores';
  import { vAutoAnimate } from '@formkit/auto-animate';
  import { ProductPriceSum } from '@/entities/product-price-sum';

  type Emits = {
    (event: 'orderComplete', orderId: number): void;
  };

  const emit = defineEmits<Emits>();

  const cartStore = useCartStore();

  const orderComplete = (orderId: number) => {
    emit('orderComplete', orderId);
  };
</script>

<template>
  <div class="flex flex-auto flex-col gap-3">
    <ul
      class="-mr-5 flex h-1 grow flex-col gap-2 overflow-scroll pb-2 pr-5"
      v-auto-animate
    >
      <product-card-template
        v-for="product in cartStore.productsInCart"
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
    <product-price-sum />
    <make-order @order-complete="orderComplete" />
  </div>
</template>
