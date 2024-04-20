<script setup lang="ts">
  import { computed } from 'vue';

  type Props = {
    title: string;
    price: number;
    imageUrl: string;
    placement: 'cart' | 'list';
  };

  const props = defineProps<Props>();

  const isList = computed(() => props.placement === 'list');
  const stylesByPlacement = computed(() =>
    isList.value ? 'hover:-translate-y-2 hover:shadow-xl transition' : 'two-columns'
  );
</script>

<template>
  <li
    class="grid cursor-pointer gap-2 rounded-2xl border p-5"
    :class="stylesByPlacement"
    data-cy="product-card"
  >
    <div>
      <slot name="add-to-favorite"></slot>
      <img
        :src="imageUrl"
        alt="Фото товара"
        class="mx-auto max-h-48 object-contain"
      />
    </div>
    <div class="flex flex-col justify-between gap-1">
      <div>{{ title }}</div>
      <div class="flex items-center justify-between">
        <div>
          <p
            v-if="isList"
            class="uppercase text-slate-300"
            data-cy="price"
          >
            Цена:
          </p>
          <p class="font-bold">{{ price }} руб.</p>
        </div>
        <slot name="add|remove-from-cart"></slot>
      </div>
    </div>
  </li>
</template>

<style scoped>
  .two-columns {
    grid-template-columns: 90px 1fr;
  }
</style>
