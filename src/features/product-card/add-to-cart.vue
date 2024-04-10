<script setup lang="ts">
  import { computed, ref } from 'vue';

  const isAdded = ref(false);
  const src = computed(() => (isAdded.value ? '/checked.svg' : '/plus.svg'));

  function onToggleAdd(): void {
    isAdded.value = !isAdded.value;
  }
</script>

<template>
  <img
    :src="src"
    alt="Добавить в корзину"
    title="Добавить в корзину"
    @click="onToggleAdd"
  />
</template>
