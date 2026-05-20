import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'

import Sitemap from 'vite-plugin-sitemap'
import { routes } from './src/router/routes.js'


export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(),
    Sitemap({
      hostname: 'https://example.com',
      dynamicRoutes: routes.map(r => r.path || `/${r.name.toLowerCase()}`),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/_mixins.scss" as *;
        `,
        silenceDeprecations: ['import'],
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
