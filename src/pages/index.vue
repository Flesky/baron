<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import PersonRounded from '~icons/material-symbols/person-rounded'
import Calculate from '~icons/material-symbols/calculate'
</script>

<template>
  <app-shell>
    <Swiper :space-between="32">
      <SwiperSlide class="grid grid-cols-4 grid-rows-6 items-center gap-x-2 p-4">
        <app-icon class="bg-blue-600 text-white" :icon="PersonRounded" title="App" to="app" />
        <app-icon class="bg-green-600 text-white" :icon="Calculate" title="Calculator" to="calculator" />
      </SwiperSlide>
      <SwiperSlide class="flex items-center justify-center p-4">
        Work in progress ;)
      </SwiperSlide>
    </Swiper>
  </app-shell>
</template>
