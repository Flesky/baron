<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()

const slots = useSlots()
if (slots.header || props.title)
  provide('hasHeader', true)
</script>

<template>
  <main class="absolute inset-0 flex min-h-full flex-col items-center bg-gray-1 pt-8 pb-12 dark:bg-gray-d1">
    <header
      v-if="$slots.header || title" class="fixed top-0 h-20 w-full shrink-0 items-center border-b border-gray-4 bg-gray-2 pt-8 text-lg dark:border-gray-d4 dark:bg-gray-d2"
      :class="$slots.header ? 'flex justify-center gap-2' : 'grid'"
    >
      <slot name="header">
        <div class="col-start-1 row-start-1 flex justify-start">
          <slot name="actionLeft" />
        </div>
        <div class="col-start-1 row-start-1 flex justify-center text-center">
          {{ title }}
        </div>
        <div class="col-start-1 row-start-1 flex justify-end">
          <slot name="actionRight" />
        </div>
      </slot>
    </header>
    <slot />
    <footer v-if="$slots.footer" class="fixed bottom-0 grid h-[6.5rem] w-full shrink-0 border-t bg-gray-4 pb-10 dark:border-t dark:border-gray-d4 dark:bg-gray-d2">
      <slot name="footer" />
    </footer>
  </main>
</template>
