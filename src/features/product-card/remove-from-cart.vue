<script setup lang="ts">
  function onRemoveFromCart(): void {
    console.log('Removed');
  }
</script>

<template #add-to-cart>
  <img
    src="/close.svg"
    alt="Удалить из корзины"
    @click="onRemoveFromCart"
  />
</template>
