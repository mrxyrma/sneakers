<script setup lang="ts">
  import { computed } from 'vue';

  type Props = {
    name: string;
    price: number;
    imgUrl: string;
    placement: 'cart' | 'list';
  };

  const props = defineProps<Props>();

  const isList = computed(() => props.placement === 'list');
  const stylesByPlacement = computed(() =>
    isList.value ? 'hover:-translate-y-2 hover:shadow-xl transition' : 'two-columns'
  );
</script>

<template>
  <div
    class="grid gap-2 rounded-2xl p-5 border cursor-pointer"
    :class="stylesByPlacement"
  >
    <div>
      <slot name="add-to-favorite"></slot>
      <img
        :src="imgUrl"
        alt="Фото товара"
      />
    </div>
    <div>
      <div>{{ name }}</div>
      <div class="flex items-center justify-between">
        <div>
          <p
            v-if="isList"
            class="uppercase text-slate-300"
          >
            Цена:
          </p>
          <p class="font-bold">{{ price }} руб.</p>
        </div>
        <slot name="add|remove-from-cart"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .two-columns {
    grid-template-columns: 90px 1fr;
  }
</style>
