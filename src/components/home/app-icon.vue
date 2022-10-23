<script setup lang="ts">
import type { Component } from 'vue'
const props = defineProps<{
  icon?: Component
  image?: string
  title: string
  to?: string
  action?: Function
}>()

const router = useRouter()
function handleClick() {
  if (props.to)
    router.push(props.to)
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
  <button class="flex flex-col items-center gap-2 rounded-md p-2 text-center" @click="handleClick">
    <Component :is="icon" v-if="icon" v-bind="$attrs" class="aspect-square h-12 w-12 rounded-full p-2 text-white" />
    <img v-else-if="image" :src="image" class="aspect-square h-12 w-12 rounded-full">
    <div class="text-sm transition-colors">
      {{ title }}
    </div>
  </button>
</template>
