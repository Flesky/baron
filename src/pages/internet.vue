<script setup lang="ts">
import Schema from 'async-validator'

const google = 'https://www.google.com/webhp?igu=1'
const src = ref<string>(google)
const url = ref<string>(google)
const iframe = ref<HTMLIFrameElement>()

const validator = new Schema({
  url: [
    { type: 'url' },
  ],
})

function goHome() {
  src.value = google
  url.value = google
  iframe.value!.src = url.value
}

function go() {
  validator.validate({ url: url.value }, (errors) => {
    if (errors)
      src.value = `https://www.google.com/search?q=${encodeURI(url.value)}&igu=1`

    else src.value = url.value
  })
  iframe.value!.src = src.value
}

function showInfo() {
  alert('This is not a real browser. A lot of websites won\'t work and it\'s insecure. Please refrain from using this for anything other than having fun.')
}
</script>

<template>
  <app-container title="Internet">
    <template #header>
      <b-icon @click="goHome()">
        <m-home-outline-rounded />
      </b-icon>
      <b-input v-model="url" type="url" class="grow" placeholder="Search Google or type a URL" @keyup.enter="go()" />
      <b-icon @click="showInfo()">
        <m-info-outline />
      </b-icon>
    </template>
    <app-content embedded>
      <iframe ref="iframe" referrerpolicy="no-referrer" class="h-full" :src="src" />
    </app-content>
  </app-container>
</template>
