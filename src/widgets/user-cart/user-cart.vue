<script setup lang="ts">
  import { CloseCart } from '@/features/cart';
  import { EmptyCart } from '@/entities/empty-cart';
  import CartProductList from './cart-product-list.vue';
  import { useCartStore } from '@/shared/stores';
  import { computed, ref } from 'vue';
  import { OrderComplete } from '@/entities/order-complete';

  const cartStore = useCartStore();

  const orderId = ref<number>();

  const isCartEmpty = computed(() => !cartStore.productsInCart.length);

  const handleOrderCompletion = (orderNumber: number) => (orderId.value = orderNumber);
  const clearOrderId = () => (orderId.value = undefined);
</script>

<template>
  <div class="fixed left-0 top-0 h-full w-full bg-black opacity-40"></div>
  <div class="fixed right-0 top-0 flex h-full w-96 flex-col gap-4 bg-white p-5">
    <div class="flex items-center gap-3">
      <close-cart
        @click="clearOrderId"
        data-cy="close-cart"
      />
      <h2 class="text-xl font-semibold">Корзина</h2>
    </div>

    <empty-cart
      v-if="isCartEmpty && !orderId"
      data-cy="empty-cart"
    />

    <cart-product-list
      v-if="!isCartEmpty && !orderId"
      @order-complete="handleOrderCompletion"
      data-cy="cart-product-list"
    />

    <order-complete
      :order-id="orderId"
      v-if="orderId"
      data-cy="order-complete"
    />
  </div>
</template>
