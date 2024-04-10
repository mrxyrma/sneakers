<script setup lang="ts">
  import { computed } from 'vue';
  import { useCartStore } from '@/shared/stores';
  import type { ProductItem } from '@/shared/types';

  type Props = {
    item: ProductItem;
  };

  const props = defineProps<Props>();

  const cartStore = useCartStore();

  const src = computed(() => (cartStore.itemsInCart.includes(props.item) ? '/checked.svg' : '/plus.svg'));

  function onToggleAddition(item: ProductItem): void {
    if (!cartStore.itemsInCart.includes(item)) {
      cartStore.itemsInCart.push(item);
    } else {
      cartStore.itemsInCart = cartStore.itemsInCart.filter(i => i.id !== item.id);
    }
  }
</script>

<template>
  <img
    :src="src"
    alt="Добавить в корзину"
    title="Добавить в корзину"
    @click="() => onToggleAddition(item)"
  />
</template>
