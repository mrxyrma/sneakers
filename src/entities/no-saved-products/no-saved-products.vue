<template>
  <div class="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
    <img
      src="/emoji-1.png"
      alt=":("
      class="mb-2 w-14"
    />
    <h3 class="font-semibold">Закладок нет</h3>
    <p class="mb-5 text-slate-400">Вы ещё ничего не добавили в закладки</p>
    <slot></slot>
  </div>
</template>
