import type { ModuleOptions } from '@sidebase/nuxt-auth/dist/runtime/types'

const auth: Partial<ModuleOptions> = {
  baseURL: process.env.BASE_URL + '/auth',
  session: {
    enableRefreshPeriodically: false,
    enableRefreshOnWindowFocus: false,
  },
  provider: {
    type: 'local',
    endpoints: {
      signIn: { path: '/login', method: 'post' },
      signOut: { path: '/logout', method: 'get' },
      signUp: { path: '/register', method: 'post' },
      getSession: { path: '/user', method: 'get' },
    },
    pages: {
      login: '/',
    },
    token: {
      maxAgeInSeconds: 60 * 60 * 24,
    },
  },
}

export default auth
