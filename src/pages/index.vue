<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Worden from '/images/icons/worden.png'
import About from '~icons/material-symbols/person'
import Calculator from '~icons/ion/calculator'
import Internet from '~icons/material-symbols/public'
import System from '~icons/material-symbols/info'
import DarkMode from '~icons/material-symbols/dark-mode'
// import Wallpapers from '~icons/material-symbols/view-carousel-rounded'
// import Notes from '~icons/material-symbols/description'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="absolute inset-0 flex min-h-full pt-8 pb-12">
    <Swiper :space-between="32">
      <SwiperSlide class="grid grid-cols-4 grid-rows-6 items-center gap-x-2 p-4">
        <app-icon class="bg-blue-11" :icon="About" title="About" to="about" />
        <app-icon class="bg-green-9" :icon="Calculator" title="Calculator" to="calculator" />
        <app-icon :icon="Worden" title="Worden" to="worden" />     <app-icon class="bg-blue-11" :icon="Internet" title="Internet" to="internet" />
        <app-icon :icon="DarkMode" class="bg-gradient-to-bl from-gray-d6 to-gray-d1" title="Dark Mode" :action="toggleDark" />
        <app-icon class="bg-violet-500" :icon="System" title="System" to="system" />
        <!--        <app-icon class="bg-white text-[#f7ce00]" :icon="Notes" title="Notes" to="notes" /> -->
        <!--        <app-icon class="bg-gradient-to-br from-[#8e4ec6] to-[#d6409f]" :icon="Wallpapers" title="Wallpapers" to="wallpapers" /> -->
      </SwiperSlide>
      <SwiperSlide class="flex items-center justify-center p-4">
        Work in progress ;)
      </SwiperSlide>
    </Swiper>
  </div>
</template>
