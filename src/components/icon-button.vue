<template>
  <button v-bind="$attrs" class="rounded-full p-2 active:brightness-90 active:backdrop-brightness-90">
    <slot />
  </button>
</template>
