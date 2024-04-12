<script setup lang="ts">
  import { ProductList } from '@/widgets/product-list';
  import { SortAndSearch } from '@/features/sort-and-search/ui';
</script>

<template>
  <main class="p-10">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-bold">Все кроссовки</h2>
      <sort-and-search />
    </div>
    <product-list />
  </main>
</template>
