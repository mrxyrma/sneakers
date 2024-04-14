<script setup lang="ts">
  import { AppButton } from '@/shared/ui';
  import { addOrder, removeFromCart } from '@/shared/api';
  import { useCartStore, useProductsStore } from '@/shared/stores';

  type Emits = {
    (event: 'orderComplete', orderId: number): void;
  };

  const emit = defineEmits<Emits>();

  const productsStore = useProductsStore();
  const cartStore = useCartStore();

  const makeOrder = async () => {
    try {
      await addOrder(cartStore.productsInCart).then(res => emit('orderComplete', res.id));
      cartStore.productsInCart.forEach(item => removeFromCart(item.cartId!));
      productsStore.products = productsStore.products.map(item => (item.cartId ? { ...item, cartId: null } : item));
    } catch (e) {
      console.error(e);
    }
  };
</script>

<template>
  <app-button
    @click="makeOrder"
    text="Оформить заказ"
  />
</template>
