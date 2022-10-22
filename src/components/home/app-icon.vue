<script setup lang="ts">
import type { Component } from 'vue'
defineProps<{
  icon: Component
  title: string
  to: string
}>()
</script>

<template>
  <router-link v-slot="{ navigate }" :to="`/${to}`" custom>
    <button class="flex flex-col items-center gap-2 rounded-md p-2 text-center" @click="navigate">
      <Component :is="icon" v-bind="$attrs" class="aspect-square h-12 w-12 rounded-full bg-white p-2 text-white" />
      <div class="text-sm text-black">
        {{ title }}
      </div>
    </button>
  </router-link>
</template>
