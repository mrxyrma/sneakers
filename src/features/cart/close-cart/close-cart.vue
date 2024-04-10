<script setup lang="ts">
  import { useCartStore } from '@/shared/stores';

  const cartStore = useCartStore();

  function hideCart() {
    cartStore.isCartVisible = false;
  }
</script>

<template>
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="rotate-180 cursor-pointer opacity-50 transition hover:-translate-x-0.5 hover:opacity-100"
    @click="hideCart"
  >
    <path
      d="M1 7H14.7143"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.71436 1L14.7144 7L8.71436 13"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
