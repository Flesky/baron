<script setup lang="ts">
const formatted = useDateFormat(useNow(), 'h:mm A')

const route = useRoute()
const transformOrigin = ref()
const { x, y } = useMouse()
function setMousePosition() {
  transformOrigin.value = `${x.value}px ${y.value}px`
}
const isHome = computed(() => {
  return route.path === '/'
})
</script>

<template>
  <div class="flex min-h-full flex-col">
    <div class="flex h-8 shrink-0 items-center justify-center transition duration-300" :class="{ 'bg-black text-white': !isHome }">
      <div>
        {{ formatted }}
      </div>
    </div>
    <main class="relative flex grow">
      <router-view v-slot="{ Component }">
        <transition :name="isHome ? 'close-app' : 'open-app'" @before-enter="setMousePosition">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <div class="fixed bottom-0 z-10 h-12 w-full shrink-0" />
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
