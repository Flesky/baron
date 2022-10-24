<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])
const data = useVModel(props, 'modelValue', emit)
</script>

<template>
  <input v-model="data" class="rounded border border-gray-7 bg-gray-3 py-1 px-2 text-sm ring-blue-7 transition focus:border-blue-7 focus:outline-none focus:ring-1">
</template>
