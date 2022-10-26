<script setup lang="ts">
import { TabPanel } from '@headlessui/vue'

defineProps<{
  embedded?: boolean
}>()

const hasTabs = inject('has-tabs', false)
</script>

<template>
  <Component
    :is="hasTabs ? TabPanel : 'main'"
    class="flex w-full grow flex-col overflow-y-auto"
    :class="{ 'max-w-screen-sm': !embedded }"
    :as="hasTabs ? 'main' : undefined"
  >
    <slot />
  </Component>
</template>
