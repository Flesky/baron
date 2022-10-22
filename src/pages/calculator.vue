<script setup lang="ts">
import { vOnLongPress } from '@vueuse/components'
import { addDependencies, create, divideDependencies, evaluateDependencies, multiplyDependencies, subtractDependencies } from 'mathjs/number'

const keys = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
]
const query = ref<string>('')
const { evaluate } = create({
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  evaluateDependencies,
})

function handleClick(key: string) {
  if (key === '=') {
    if (query.value.trim())
      query.value = evaluate(query.value).toString()
  }
  else { query.value += key }
}
function handleBackspace() {
  query.value = query.value.slice(0, -1)
}
function handleClear() {
  query.value = ''
}
</script>

<template>
  <app-shell class="flex-col gap-2 bg-white p-4">
    <div class="grow break-words py-4 text-right text-5xl font-light">
      {{ query }}
    </div>
    <div class="flex justify-end">
      <icon v-on-long-press="handleClear" class="text-2xl" @click="handleBackspace()">
        <m-backspace />
      </icon>
    </div>
    <div class="grid h-max  grid-cols-4 grid-rows-4 place-items-center gap-2.5">
      <button
        v-for="key in keys"
        :key="key"
        class="aspect-square w-full max-w-[96px] rounded-full bg-gray-200 text-3xl" :class="{
          'bg-gray-300': key === '/' || key === '*' || key === '-' || key === '+',
          '!bg-green-600': key === '=',
        }"
        @click="handleClick(key)"
      >
        {{ key }}
      </button>
    </div>
  </app-shell>
</template>
