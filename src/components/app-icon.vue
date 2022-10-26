<script setup lang="ts">
import type { Component } from 'vue'
const props = defineProps<{
  icon: object | string
  title: string
  to?: string
  action?: Function
}>()

const router = props.to ? useRouter() : undefined

function handleClick() {
  if (props.to)
    router!.push(props.to)
  else if (props.action)
    props.action()
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <button class="flex grow flex-col items-center gap-1.5  rounded-md py-2 text-center" @click="handleClick">
    <span v-if="typeof icon === 'object'" v-bind="$attrs" class="rounded-full p-2  text-white">
      <Component :is="icon" class="aspect-square h-8 w-8" />
    </span>
    <img v-else :alt="`${title} icon`" :src="icon" class="aspect-square h-12 w-12 rounded-full">
    <span class="text-sm transition-colors">
      {{ title }}
    </span>
  </button>
</template>
