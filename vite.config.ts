import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    Components({
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver({
          prefix: false,
          enabledCollections: ['ion', 'material-symbols'],
          alias: {
            i: 'ion',
            m: 'material-symbols',
          },
        }),
      ],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      vueTemplate: true,
    }),
    Icons({
      compiler: 'vue3',
      defaultClass: 'text-2xl',
    }),
    // VitePWA({
    //   registerType: 'autoUpdate',
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
