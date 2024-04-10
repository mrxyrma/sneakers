<script setup lang="ts">
  import { useCartStore } from '@/shared/stores';

  type Props = {
    id: number;
  };

  defineProps<Props>();

  const cartStore = useCartStore();

  function removeFromCart(id: number): void {
    cartStore.itemsInCart = cartStore.itemsInCart.filter(item => item.id !== id);
  }
</script>

<template>
  <img
    src="/close.svg"
    alt="Удалить из корзины"
    @click="() => removeFromCart(id)"
  />
</template>
