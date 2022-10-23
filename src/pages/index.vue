<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import PersonRounded from '~icons/material-symbols/person-rounded'
import Calculate from '~icons/material-symbols/calculate'
import Spa from '~icons/material-symbols/spa'
import DarkMode from '~icons/material-symbols/dark-mode'
// import Note from '~icons/material-symbols/note'
import Worden from '@/assets/images/icons/worden.png'

const toggleDark = useToggle(useDark())
</script>

<template>
  <div class="absolute inset-0 flex min-h-full pt-8 pb-12">
    <Swiper :space-between="32">
      <SwiperSlide class="grid grid-cols-4 grid-rows-6 items-center gap-x-2 p-4">
        <app-icon class="bg-blue-600" :icon="PersonRounded" title="About" to="about" />
        <app-icon class="bg-green-600" :icon="Calculate" title="Calculator" to="calculator" />
        <app-icon class="bg-amber-400" :image="Worden" title="Worden" to="worden" />
        <app-icon
          class="bg-gradient-to-bl from-gray-700 to-gray-900" :icon="DarkMode" title="Dark Mode" :action="() => toggleDark()"
        />

        <app-icon class="bg-gradient-to-br from-purple-500 to-pink-500" :icon="Spa" title="Wallpapers" to="wallpapers" />
        <!--        <app-icon class="bg-amber-400" :icon="Note" title="Notes" to="notes" /> -->
      </SwiperSlide>
      <SwiperSlide class="flex items-center justify-center p-4">
        Work in progress ;)
      </SwiperSlide>
    </Swiper>
  </div>
</template>
