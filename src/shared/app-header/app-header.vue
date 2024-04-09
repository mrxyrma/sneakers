<script setup lang="ts"></script>

<template>
  <header class="border-b border-b-slate-300 flex justify-between p-10">
    <div class="flex items-center gap-4">
      <img
        src="/logo.png"
        alt="Логотип магазина"
        class="w-12"
      />
      <div>
        <h1 class="uppercase font-bold text-xl">Иван да лапти</h1>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-4">
      <li class="flex gap-2 cursor-pointer text-gray-500 hover:text-black">
        <img src="/cart.svg" />
        <b>1205 руб.</b>
      </li>
      <li class="flex gap-2 cursor-pointer text-gray-500 hover:text-black">
        <img src="/heart.svg" />
        <span>Закладки</span>
      </li>
      <li class="flex gap-2 cursor-pointer text-gray-500 hover:text-black">
        <img src="/profile.svg" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
