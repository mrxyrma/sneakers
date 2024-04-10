<script setup lang="ts">
  import { AppHeader } from '@/widgets/app-header';
  import { ProductList } from '@/widgets/product-list';
  import { UserCart } from '@/widgets/user-cart';
</script>

<template>
  <div class="mx-auto rounded-xl shadow-2xl w-4/5 bg-white my-20">
    <app-header />
    <product-list />
    <user-cart />
  </div>
</template>
