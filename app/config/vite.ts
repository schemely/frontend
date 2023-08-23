import type { ViteConfig } from '@nuxt/schema'

const vite: ViteConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/main.scss" as *;',
      },
    },
  },
}

export default vite
