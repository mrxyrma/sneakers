<script setup lang="ts">
  import { NoSavedProducts } from '@/entities/no-saved-products';
  import { BackToMain } from '@/features/back-to-main';
  import { watchEffect } from 'vue';
  import { getFavorites } from '@/shared/api';

  watchEffect(async () => {
    try {
      const ids = await getFavorites();
      console.log(ids);
    } catch (e) {}
  });
</script>

<template>
  <no-saved-products>
    <back-to-main />
  </no-saved-products>
</template>
