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
    <button class="flex flex-col items-center gap-2 p-2 text-center" @click="navigate">
      <Component :is="icon" v-bind="$attrs" class="aspect-square h-12 w-12 rounded-full bg-white p-2" />
      <div class="text-sm">
        {{ title }}
      </div>
    </button>
  </router-link>
</template>
