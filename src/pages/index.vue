<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import PersonRounded from '~icons/material-symbols/person-rounded'
import Calculate from '~icons/material-symbols/calculate'
import Note from '~icons/material-symbols/note'
</script>

<template>
  <app-shell class="bg-transparent">
    <Swiper :space-between="32">
      <SwiperSlide class="grid grid-cols-4 grid-rows-6 items-center gap-x-2 p-4">
        <app-icon class="bg-blue-600" :icon="PersonRounded" title="About" to="about" />
        <app-icon class="bg-green-600" :icon="Calculate" title="Calculator" to="calculator" />
        <app-icon class="bg-yellow-500" :icon="Note" title="Notes" to="notes" />
      </SwiperSlide>
      <SwiperSlide class="flex items-center justify-center p-4">
        Work in progress ;)
      </SwiperSlide>
    </Swiper>
  </app-shell>
</template>
