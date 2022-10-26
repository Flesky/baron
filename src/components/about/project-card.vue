<script setup lang="ts">
const props = defineProps<{
  banner?: string

  title: string
  subtitle?: string

  icon: string
  iconPadding?: boolean
  description: string
}>()
</script>

<template>
  <div class="card mt-3 flex flex-col gap-3">
    <img
      v-if="banner" :src="banner" alt="`${title} banner`"
    >
    <div class="flex gap-3">
      <img :src="icon" class="h-12 w-12 rounded-xl bg-gray-5 dark:bg-gray-d5" :class="{ 'p-2': iconPadding }" :alt="`${title} icon`">
      <div class="flex flex-col justify-center">
        <h2 class="font-medium">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="light text-sm">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
