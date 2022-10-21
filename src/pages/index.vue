<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppIcon from '@/components/home/app-icon.vue'
import 'swiper/css'
</script>

<template>
  <app-shell>
    <Swiper :space-between="32">
      <SwiperSlide class="grid grid-cols-4 grid-rows-6 place-items-center items-center gap-x-2 p-4">
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
        <AppIcon />
      </SwiperSlide>
      <SwiperSlide class="flex items-center justify-center p-4">
        Work in progress ;)
      </SwiperSlide>
    </Swiper>
  </app-shell>
</template>
