<script setup lang="ts">
  import { computed } from 'vue';
  import { useProductsStore } from '@/shared/stores';
  import { addToCart, removeFromCart } from '@/shared/api';

  type Props = {
    cartId: number | null;
    id: number;
  };

  const props = defineProps<Props>();

  const productsStore = useProductsStore();

  const src = computed(() => (props.cartId ? '/checked.svg' : '/plus.svg'));

  function onToggleAddition() {
    if (props.cartId) {
      try {
        removeFromCart(props.cartId).then(
          res => (productsStore.products.find(item => item.id === props.id)!.cartId = null)
        );
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        addToCart(props.id).then(res => (productsStore.products.find(item => item.id === props.id)!.cartId = res.id));
      } catch (e) {
        console.error(e);
      }
    }
  }
</script>

<template>
  <img
    :src="src"
    alt="Добавить в корзину"
    title="Добавить в корзину"
    @click="onToggleAddition"
    :data-cy="`add-to-cart-${id}`"
  />
</template>
