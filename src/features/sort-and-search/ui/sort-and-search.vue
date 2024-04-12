<script setup lang="ts">
  import { useProductsStore } from '@/shared/stores';
  import { storeToRefs } from 'pinia';
  import debounce from 'lodash.debounce';
  import { watch } from 'vue';
  import { fetchProducts } from '@/features/sort-and-search/model';

  const productStore = useProductsStore();
  const { filters } = storeToRefs(productStore);

  const inputHandler = debounce((e: InputEvent) => (filters.value.query = (<HTMLInputElement>e.target).value), 500);

  watch(filters.value, fetchProducts);
</script>

<template>
  <div class="flex gap-4">
    <select
      v-model="filters.sortBy"
      class="rounded-md border px-2 py-2 outline-none"
    >
      <option
        disabled
        value=""
      >
        Сортировка
      </option>
      <option value="title">По названию</option>
      <option value="price">По возрастанию цены</option>
      <option value="-price">По убыванию цены</option>
    </select>
    <div class="relative flex">
      <img
        src="/search.svg"
        alt="Поиск"
        class="absolute left-2.5 top-2.5"
      />
      <input
        type="text"
        placeholder="Поиск..."
        :value="filters.query"
        @input="inputHandler"
        class="rounded-md border px-2 py-1 pl-8 outline-none focus:border-gray-400"
      />
    </div>
  </div>
</template>
