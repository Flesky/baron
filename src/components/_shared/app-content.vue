<script setup lang="ts">
import { TabPanel } from '@headlessui/vue'

defineProps<{
  embedded?: boolean
}>()

const hasHeader = inject('has-header', false)
const hasTabs = inject('has-tabs', false)
</script>

<template>
  <Component
    :is="hasTabs ? TabPanel : 'main'"
    class="flex w-full grow flex-col"
    :class="{ 'max-w-screen-sm': !embedded, 'mt-12': hasHeader }"
    :as="hasTabs ? 'main' : undefined"
  >
    <slot />
  </Component>
</template>
