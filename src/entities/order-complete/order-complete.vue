<script setup lang="ts">
  type Props = {
    orderId: number;
  };
  
  defineProps<Props>();
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center gap-2">
    <img
      src="/order-success-icon.png"
      alt="Корзина пуста"
      class="mx-auto w-24"
    />
    <h3 class="text-lg font-semibold text-emerald-500">Заказ оформлен!</h3>
    <p class="mb-5 text-center">Ваш заказ #{{ orderId }} скоро будет передан курьерской доставке</p>
  </div>
</template>
