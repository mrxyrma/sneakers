<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import { AddToCart } from '@/features/product-card/';
  import { AddToFavorite } from '@/features/product-card';
  import { reactive, ref, watchEffect } from 'vue';
  import { getItems } from '@/shared/api';
  import { vAutoAnimate } from '@formkit/auto-animate';
  import type { ProductItem, QueryParams } from '@/shared/types';
  import { useCartStore } from '@/shared/stores';

  const cartStore = useCartStore();

  const items = ref<ProductItem[]>([]);
  const filters = reactive({
    sortBy: 'id',
    query: '',
  });

  watchEffect(async () => {
    const params: QueryParams = {
      sortBy: filters.sortBy,
    };

    if (filters.query) {
      params.title = `*${filters.query}*`;
    }

    items.value = await getItems(params);
  });
</script>

<template>
  <main class="p-10">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl font-bold">Все кроссовки</h2>
      <div class="flex gap-4">
        <select
          v-model="filters.sortBy"
          class="rounded-md border px-2 py-2 outline-none"
        >
          <option
            disabled
            value="id"
          >
            Отсортировать
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
            v-model="filters.query"
            class="rounded-md border px-2 py-1 pl-8 outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
    <ul
      class="product-list grid gap-5 pt-7"
      v-auto-animate
    >
      <product-card-template
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        placement="list"
      >
        <template #add-to-favorite>
          <add-to-favorite />
        </template>
        <template #add|remove-from-cart>
          <add-to-cart :item="item" />
        </template>
      </product-card-template>
    </ul>
  </main>
</template>

<style scoped>
  .product-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
