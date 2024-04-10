<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <img
      src="/package-icon.png"
      alt="Корзина пуста"
      class="w-36 mx-auto"
    />
    <h4 class="font-semibold text-lg">Корзина пустая</h4>
    <p class="text-center mb-5">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
    <slot></slot>
  </div>
</template>
