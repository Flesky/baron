<script setup lang="ts">
const time = useDateFormat(useNow(), 'h:mm')
const { push, go } = useRouter()
const route = useRoute()
const { x, y } = useMouse()
const transformOrigin = ref()
function setMousePosition() {
  transformOrigin.value = `${x.value}px ${y.value}px`
}
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div class="h-full transition-colors dark:bg-black/25">
    <div class="fixed top-0 z-20 flex h-8 w-full shrink-0 items-center justify-center">
      <div>
        {{ time }}
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition :name="isHome ? 'close-app' : 'open-app'" @before-enter="setMousePosition">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
    <div class="fixed bottom-0 z-20 flex h-12 w-full shrink-0 items-center justify-evenly">
      <b-icon class="p-2" @click="!isHome && go(-1)">
        <m-chevron-left />
      </b-icon>
      <b-icon class="p-2" @click="push('/')">
        <m-fiber-manual-record-outline />
      </b-icon>
    </div>
  </div>
</template>

<style>
.close-app-enter-active, .close-app-leave-active,
.open-app-enter-active, .open-app-leave-active {
  @apply transition duration-300;
}
.close-app-enter-from, .close-app-leave-to {
  @apply scale-90 opacity-0;
}
.open-app-enter-active {
  @apply z-10;
  transform-origin: v-bind('transformOrigin');
}
.open-app-leave-active {
  @apply z-0 opacity-0;
}
.open-app-enter-from {
  @apply scale-0;
}
</style>
