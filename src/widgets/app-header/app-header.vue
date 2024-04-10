<script setup lang="ts">
  import { useCartStore } from '@/shared/stores';
  import { computed } from 'vue';

  const cartStore = useCartStore();

  const priceSum = computed(() => cartStore.itemsInCart.reduce((acc, cur) => acc + cur.price, 0));

  function showCart() {
    cartStore.isCartVisible = true;
  }
</script>

<template>
  <header class="flex justify-between border-b border-b-slate-300 p-10">
    <div class="flex items-center gap-4">
      <img
        src="/logo.png"
        alt="Логотип магазина"
        class="w-12"
      />
      <div>
        <h1 class="text-xl font-bold uppercase">Иван да лапти</h1>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-4">
      <li
        class="flex cursor-pointer gap-2 text-gray-500 hover:text-black"
        @click="showCart"
      >
        <img src="/cart.svg" />
        <b>{{ priceSum }} руб.</b>
      </li>
      <li class="flex cursor-pointer gap-2 text-gray-500 hover:text-black">
        <img src="/heart.svg" />
        <span>Закладки</span>
      </li>
      <li class="flex cursor-pointer gap-2 text-gray-500 hover:text-black">
        <img src="/profile.svg" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
