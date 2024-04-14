<script setup lang="ts">
  import { useCartStore, useProductsStore } from '@/shared/stores';

  const cartStore = useCartStore();
  const productStore = useProductsStore();

  function showCart() {
    cartStore.isCartVisible = true;
    document.querySelector('body')!.style.overflow = 'hidden';
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
        <img
          src="/cart.svg"
          alt="Корзина"
        />
        <b>{{ productStore.priceSum }} руб.</b>
      </li>
      <router-link :to="{ name: 'favoriteProducts' }">
        <li class="flex cursor-pointer gap-2 text-gray-500 hover:text-black">
          <img
            src="/heart.svg"
            alt="Закладки"
          />
          <span>Закладки</span>
        </li>
      </router-link>
      <li class="flex cursor-pointer gap-2 text-gray-500 hover:text-black">
        <img
          src="/profile.svg"
          alt="Профиль пользователя"
        />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
