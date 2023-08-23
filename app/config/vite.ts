import type { ViteConfig } from '@nuxt/schema'

const vite: ViteConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/scss/variables.scss" as *;',
      },
    },
  },
}

export default vite
