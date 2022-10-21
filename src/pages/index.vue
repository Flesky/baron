<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import AppIcon from '@/components/home/app-icon.vue'
import 'swiper/css'
const formatted = useDateFormat(useNow(), 'h:mm A')
</script>

<template>
  <div id="home" class="flex min-h-full flex-col ">
    <div class="flex h-8 shrink-0 items-center justify-center">
      <div>
        {{ formatted }}
      </div>
    </div>
    <div class="flex grow">
      <Swiper :space-between="32">
        <SwiperSlide class="grid grid-cols-4 grid-rows-6  items-center gap-x-3 p-4">
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
    </div>
    <div class="h-12 shrink-0" />
  </div>
</template>

<style>
#home {
  background: url("@/assets/images/wallpapers/1.jpg");
  background-size: cover;
}
</style>
