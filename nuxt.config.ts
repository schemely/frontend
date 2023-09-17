import components from './app/config/components'
import composables from './app/config/composables'
import vite from './app/config/vite'
import auth from './app/config/auth'
import vuetify from './app/config/vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@pinia-orm/nuxt',
    'vuetify-nuxt-module',
    '@sidebase/nuxt-auth',
    'nuxt-icons',
  ],
  components,
  imports: {
    dirs: [...composables],
    presets: [
      {
        from: '@vuelidate/core',
        imports: ['useVuelidate'],
      },
    ],
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  vite,
  auth,
  vuetify,
})
