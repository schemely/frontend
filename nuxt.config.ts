import components from './app/config/components'
import vite from './app/config/vite'
import auth from './app/config/auth'
import vuetify from './app/config/vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  modules: ['vuetify-nuxt-module', '@sidebase/nuxt-auth', 'nuxt-icons'],
  components,
  vite,
  auth,
  vuetify,
})
