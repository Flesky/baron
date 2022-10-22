<script setup lang="ts">
const time = useDateFormat(useNow(), 'h:mm A')
const { back } = useRouter()
const route = useRoute()
const { x, y } = useMouse()
const transformOrigin = ref()
function setMousePosition() {
  transformOrigin.value = `${x.value}px ${y.value}px`
}
const isHome = computed(() => route.path === '/')
</script>

<template>
  <div class="h-full">
    <div class="fixed top-0 z-20 flex h-8 w-full shrink-0 items-center justify-center transition duration-300">
      <div>
        {{ time }}
      </div>
    </div>
    <main class="min-h-full">
      <router-view v-slot="{ Component }">
        <transition :name="isHome ? 'close-app' : 'open-app'" @before-enter="setMousePosition">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <div class="fixed bottom-0 z-20 flex h-12 w-full shrink-0 items-center justify-center">
      <icon class="p-2" @click="back()">
        <m-arrow-back-ios-new />
      </icon>
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
  @apply z-0
}
.open-app-enter-from {
  @apply scale-0;
}
</style>
