import auth from './app/config/auth'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@sidebase/nuxt-auth', 'nuxt-icons'],
  auth,
})
