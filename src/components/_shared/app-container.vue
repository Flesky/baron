<script setup lang="ts">
const props = defineProps<{
  title?: string
  tabs?: number
}>()

const slots = useSlots()
const hasHeader = slots.header || props.title
if (hasHeader)
  provide('has-header', true)
const hasFooter = slots.footer
if (hasFooter)
  provide('has-tabs', true)

const gridColumns = `grid-template-columns: repeat(${props.tabs || 0}, minmax(0, 1fr));`
</script>

<template>
  <div class="absolute inset-0 flex min-h-full flex-col items-center bg-gray-1 pt-8 pb-12 dark:bg-gray-d1">
    <header
      v-if="hasHeader" class="top-0 flex h-20 border-b px-2 pt-8"
    >
      <div
        class="w-full max-w-screen-sm items-center"
        :class="$slots.header ? 'flex justify-center gap-2' : 'grid'"
      >
        <slot name="header">
          <div class="col-start-1 row-start-1 flex justify-start">
            <slot name="actionLeft" />
          </div>
          <div class="col-start-1 row-start-1 flex justify-center text-center text-lg font-medium">
            {{ title }}
          </div>
          <div class="col-start-1 row-start-1 flex justify-end ">
            <slot name="actionRight" />
          </div>
        </slot>
      </div>
    </header>
    <tab-group>
      <tab-panels as="template">
        <slot />
      </tab-panels>
      <footer v-if="hasFooter" class="bottom-0 flex h-[6.5rem] border-t px-2 pb-12">
        <tab-list class="grid max-w-screen-sm grow auto-cols-fr grid-flow-col">
          <slot name="footer" />
        </tab-list>
      </footer>
    </tab-group>
  </div>
</template>

<style scoped>
header, footer {
  @apply fixed w-full shrink-0 justify-center bg-gray-2 border-gray-4 dark:border-t dark:border-gray-d4 dark:bg-gray-d2
}
</style>
