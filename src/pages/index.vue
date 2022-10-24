<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import About from '~icons/material-symbols/person-rounded'
import Calculator from '~icons/material-symbols/calculate'
import Worden from '@/assets/images/icons/worden.png'
import Internet from '~icons/material-symbols/public'
import DarkMode from '~icons/material-symbols/dark-mode'
import Wallpapers from '~icons/material-symbols/view-carousel-rounded'
import Notes from '~icons/material-symbols/note'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="absolute inset-0 flex min-h-full pt-8 pb-12">
    <Swiper :space-between="32">
      <SwiperSlide class="grid grid-cols-4 grid-rows-6 items-center gap-x-2 p-4">
        <app-icon class="bg-blue-11" :icon="About" title="About" to="about" />
        <app-icon class="bg-green-9" :icon="Calculator" title="Calculator" to="calculator" />
        <app-icon :image="Worden" title="Worden" to="worden" />       <app-icon class="bg-blue-11" :icon="Internet" title="Internet" to="internet" />
        <app-icon :icon="DarkMode" class="bg-gradient-to-bl from-gray-d6 to-gray-d1" title="Dark mode" :action="toggleDark" />
        <app-icon class="bg-[#f7ce00]" :icon="Notes" title="Notes" to="notes" />
        <app-icon class="bg-gradient-to-br from-[#8e4ec6] to-[#d6409f]" :icon="Wallpapers" title="Wallpapers" to="wallpapers" />
      </SwiperSlide>
      <SwiperSlide class="flex items-center justify-center p-4">
        Work in progress ;)
      </SwiperSlide>
    </Swiper>
  </div>
</template>
