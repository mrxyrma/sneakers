<script setup lang="ts">
  import { computed, ref } from 'vue';

  const isFavorite = ref(false);
  const src = computed(() => (isFavorite.value ? '/like-1.svg' : '/like-2.svg'));

  function onToggleFavorite(): void {
    isFavorite.value = !isFavorite.value;
  }
</script>

<template>
  <img
    :src="src"
    alt="Добавить в избранное"
    class="absolute"
    @click="onToggleFavorite"
  />
</template>
