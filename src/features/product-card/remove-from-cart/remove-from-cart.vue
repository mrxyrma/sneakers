<script setup lang="ts">
  import { useProductsStore } from '@/shared/stores';
  import { removeFromCart } from '@/shared/api';

  type Props = {
    cartId: number | null;
    id: number;
  };

  const props = defineProps<Props>();

  const productsStore = useProductsStore();

  function remove() {
    try {
      removeFromCart(props.cartId!).then(
        res => (productsStore.products.find(item => item.id === props.id)!.cartId = null)
      );
    } catch (e) {
      console.error(e);
    }
  }
</script>

<template>
  <img
    src="/close.svg"
    alt="Удалить из корзины"
    @click="remove"
  />
</template>
