<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <tab class="m-0.5 flex flex-col items-center justify-evenly rounded text-center text-gray-11 ui-selected:text-gray-12 dark:text-gray-d11  ui-selected:dark:text-gray-d12">
    <slot />
    <div class="text-sm leading-none">
      {{ label }}
    </div>
  </tab>
</template>
