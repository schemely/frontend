import type { ModuleOptions } from '@sidebase/nuxt-auth/dist/runtime/types'

const auth: Partial<ModuleOptions> = {
  baseURL: process.env.AUTH_BASE_URL,
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
  },
}

export default auth
