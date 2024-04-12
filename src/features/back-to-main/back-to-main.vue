<script setup lang="ts">
  import { AppButton } from '@/shared/ui';
</script>

<template>
  <router-link :to="{ name: 'mainPage' }">
    <app-button text="Вернуться на главную" />
  </router-link>
</template>
