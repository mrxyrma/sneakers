<script setup lang="ts">
  import { AppHeader } from '@/shared/app-header';
  import { ProductList } from '@/widgets/product-list';
</script>

<template>
  <div class="mx-auto rounded-xl shadow-2xl w-4/5 bg-white my-20">
    <app-header />
    <product-list />
  </div>
</template>
