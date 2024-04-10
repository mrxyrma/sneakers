<script setup lang="ts">
  type Props = {
    text: string;
  };

  defineProps<Props>();
</script>

<template>
  <button
    class="rounded-xl text-white bg-emerald-400 py-2 px-5 transition hover:bg-emerald-500 active:bg-emerald-600 disabled:bg-slate-300"
  >
    {{ text }}
  </button>
</template>
