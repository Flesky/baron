<script setup lang="ts">
import { vOnLongPress } from '@vueuse/components'
import type { MathNode } from 'mathjs/number'
import {
  addDependencies,
  create,
  divideDependencies,
  evaluateDependencies,
  multiplyDependencies,
  parseDependencies,
  subtractDependencies,
  unaryMinusDependencies,

} from 'mathjs/number'

const keys = [
  '(', ')', 'AC', 'C',
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
]
const query = ref<string>('')
const preview = ref<string | false>('')
const error = ref <boolean>(false)
const { parse, evaluate } = create({
  addDependencies, subtractDependencies, multiplyDependencies, divideDependencies, parseDependencies, evaluateDependencies, unaryMinusDependencies,
})

function handleClick(key: string) {
  switch (key) {
    case '=':
      if (query.value.trim()) {
        try {
          query.value = evaluate(query.value).toString()
        }
        catch {
          error.value = true
        }
      }
      break
    case 'C':
      query.value = query.value.slice(0, -1)
      break
    case 'AC':
      query.value = ''
      break
    default:
      query.value += key
      break
  }
}

// Some sophisticated logic to show a preview of the result...
watch(query, (value) => {
  error.value = false
  if (preview.value !== false) {
    try {
      const node: MathNode = parse(value)
      let operation = false
      let constants = false
      node.traverse((node: MathNode) => {
        switch (node.type) {
          case 'ConstantNode':
            constants = true
            break
          case 'OperatorNode':
            if (node.fn === 'unaryMinus' || node.fn === 'unaryPlus')
              break
            operation = true
            break
        }
      })

      if (constants && operation)
        preview.value = evaluate(value).toString()
      else
        preview.value = ''
    }
    catch {
      preview.value = ''
    }
  }
  else {
    preview.value = ''
  }
})
</script>

<template>
  <app-shell class="flex-col gap-2 bg-white p-4">
    <div class="flex w-full grow-[2] flex-col justify-center break-words text-right align-middle text-5xl font-light">
      {{ query }}
    </div>
    <div class="shrink grow-[1] break-words text-right text-3xl font-light">
      <!-- eslint-disable-next-line -->
      {{ ' ' }}
      <span v-if="error" class="text-red-600/50">
        Can't evaluate expression
      </span>
      <span v-else class="font-light text-black/50">
        {{ preview }}
      </span>
    </div>
    <div class="grid h-max grid-cols-4 grid-rows-4 place-items-center gap-2.5">
      <icon-button
        v-for="key in keys"
        :key="key"
        class="aspect-square w-full max-w-[96px] rounded-full bg-gray-200 text-3xl"
        :class="{
          'bg-gray-600 text-white': key === '/' || key === '*' || key === '-' || key === '+',
          '!bg-green-600 text-white': key === '=',
          'bg-red-600 text-white': key === 'C' || key === 'AC',
        }"
        @click="handleClick(key)"
      >
        {{ key }}
      </icon-button>
    </div>
  </app-shell>
</template>
