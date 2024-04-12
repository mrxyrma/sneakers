<script setup lang="ts">
  import { computed } from 'vue';
  import { addToFavorites, removeFromFavorites } from '@/shared/api';
  import { useProductsStore } from '@/shared/stores';

  type Props = {
    favId: number | null;
    id: number;
    index: number;
  };

  const props = defineProps<Props>();

  const productsStore = useProductsStore();

  const src = computed(() => (props.favId ? '/like-2.svg' : '/like-1.svg'));

  function onToggleFavorite() {
    if (props.favId) {
      try {
        removeFromFavorites(props.favId).then(res => {
          productsStore.products[props.index].favId = null;
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        addToFavorites(props.id).then(res => {
          productsStore.products[props.index].favId = res.id;
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
</script>

<template>
  <img
    :src="src"
    alt="Добавить в избранное"
    title="Добавить в избранное"
    class="absolute"
    @click="onToggleFavorite"
  />
</template>
