<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { UserCart } from '@/widgets/user-cart';
  import { AppHeader } from '@/widgets/app-header';
  import { useCartStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';

  const cartStore = useCartStore();
  const { isCartVisible } = storeToRefs(cartStore);
</script>

<template>
  <div class="mx-auto my-14 w-4/5 rounded-xl bg-white shadow-2xl">
    <app-header />
    <main class="wrapper relative p-10">
      <RouterView />
    </main>
  </div>

  <user-cart v-if="isCartVisible" />
</template>

<style scoped>
  .wrapper {
    min-height: calc(100vh - 112px - 133px);
  }
</style>
