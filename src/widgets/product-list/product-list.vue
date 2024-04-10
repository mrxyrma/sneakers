<script setup lang="ts">
  import { ProductCardTemplate } from '@/entities/product-card-template';
  import AddToCart from '@/features/product-card/add-to-cart.vue';
  import AddToFavorite from '@/features/product-card/add-to-favorite.vue';
</script>

<template>
  <main class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold">Все кроссовки</h2>
      <div class="flex gap-4">
        <select class="py-2 px-2 border rounded-md outline-none">
          <option>По названию</option>
          <option>По возрастанию цены</option>
          <option>По убыванию цены</option>
        </select>
        <div class="flex relative">
          <img
            src="/search.svg"
            alt="Поиск"
            class="absolute top-2.5 left-2.5"
          />
          <input
            type="text"
            placeholder="Поиск..."
            class="rounded-md border outline-none focus:border-gray-400 py-1 pl-8 px-2"
          />
        </div>
      </div>
    </div>
    <ul class="grid gap-5 pt-7 product-list">
      <product-card-template
        v-for="i in 12"
        :key="i"
        name="Мужские Кроссовки Nike Blazer Mid Suede"
        img-url="/sneakers/sneakers-1.jpg"
        price="12999"
        placement="list"
      >
        <template #add-to-favorite>
          <add-to-favorite />
        </template>
        <template #add|remove-from-cart>
          <add-to-cart />
        </template>
      </product-card-template>
    </ul>
  </main>
</template>

<style scoped>
  .product-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>
