<template>
  <router-link v-slot="{ navigate }" to="/app" custom>
    <button class="flex flex-col gap-2 p-2" @click="navigate">
      <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="Vuetify Logo" class="aspect-square w-12 rounded-2xl bg-white p-2">
      <div class="text-center text-sm">
        Vuetify
      </div>
    </button>
  </router-link>
</template>
