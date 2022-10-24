<script setup lang="ts">
const hasHeader = inject('hasHeader', false)
</script>

<template>
  <div class="flex w-full max-w-screen-sm grow flex-col" :class="{ 'pt-12': hasHeader }">
    <slot />
  </div>
</template>
