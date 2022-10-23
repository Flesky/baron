<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <main class="absolute inset-0 flex min-h-full flex-col items-center bg-white pt-8 pb-12 dark:bg-black">
    <header v-if="title" class="fixed top-0 grid h-20 w-full shrink-0 items-center border-b bg-gray-50 pt-8 text-lg dark:border-gray-800 dark:bg-gray-900">
      <div class="col-start-1 flex justify-start">
        <slot name="actionLeft" />
      </div>
      <div class="col-start-1 flex justify-center">
        {{ title }}
      </div>
      <div class="col-start-1 flex justify-end">
        <slot name="actionRight" />
      </div>
    </header>
    <slot />
    <footer v-if="$slots.footer" class="fixed bottom-0 grid h-[6.5rem] w-full shrink-0 border-t bg-gray-50 pb-10 dark:border-t dark:border-gray-800 dark:bg-gray-900">
      <slot name="footer" />
    </footer>
  </main>
</template>
