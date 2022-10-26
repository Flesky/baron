<script setup lang="ts">
import { vOnLongPress } from '@vueuse/components'
import type { MathNode, OperatorNode } from 'mathjs'
import {
  addDependencies,
  create,
  divideDependencies,
  evaluateDependencies,
  multiplyDependencies,
  parseDependencies,
  subtractDependencies,
  unaryMinusDependencies,
} from 'mathjs'

const keys: string[] = [
  '(', ')', '^', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '%', '=',
]

const query = ref<string>('')
const preview = ref<string | false>('')
const error = ref <boolean>(false)
const { parse, evaluate } = create({ addDependencies, subtractDependencies, multiplyDependencies, divideDependencies, parseDependencies, evaluateDependencies, unaryMinusDependencies }, {
  number: 'BigNumber',
  precision: 12,
})

function handleClick(key: string): void {
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
    default:
      query.value += key
      break
  }
}

function handleClear(): void {
  query.value = ''
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
            if ((node as OperatorNode).fn === 'unaryMinus' || (node as OperatorNode).fn === 'unaryPlus')
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
  <app-container>
    <app-content class="gap-2 px-4 ">
      <div class="flex w-full grow-[2] flex-col justify-center break-words text-5xl font-light">
        <!-- eslint-disable-next-line -->
        {{ query ? query : ' ' }}
      </div>
      <div class="flex grow items-center justify-between break-words font-light">
        <span v-if="error" class="text-3xl text-red-11 dark:text-red-d11">
          Syntax error
        </span>
        <span v-else class="text-3xl font-light text-gray-500">
          {{ preview }}
        </span>
        <button v-on-long-press="handleClear" class="icon" @click="handleClick('C')">
          <m-backspace-outline />
        </button>
      </div>
      <div class="grid h-max grid-cols-4 grid-rows-5 place-items-center gap-2.5">
        <button
          v-for="key in keys"
          :key="key"
          class="icon aspect-square w-full max-w-[96px] rounded-full text-3xl"
          :class="
            [key === '=' ? '!bg-green-9 dark:!bg-green-d9 text-white active:!bg-green-10 dark:active:!bg-green-d10'
               : 'bg-gray-3 active:bg-gray-6 dark:border-gray-d7 dark:bg-gray-d4 dark:active:bg-gray-d7',
             { 'text-green-9 dark:text-green-d9': ['+', '-', '*', '/', '^', '(', ')', '^'].includes(key) }]
          "
          @click="handleClick(key)"
        >
          {{ key }}
        </button>
      </div>
    </app-content>
  </app-container>
</template>
