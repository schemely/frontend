import type { MenuItem } from '@/shared/interfaces/Menu'

export const useProfileMenuStore = defineStore('profileMenu', () => {
  const profile = reactive({
    login: 'b01010110',
    avatar: '',
    email: 'b01010110b@gmail.com',
  })

  const menu = ref<MenuItem[]>([
    {
      text: 'Theme',
      icon: 'theme-light-dark',
      submenu: [{ text: 'Light' }, { text: 'Dark' }, { text: 'System theme', isChecked: true }],
    },
    {
      text: 'Settings',
      icon: 'tune-vertical-variant',
    },
    {
      text: 'Log out',
      icon: 'logout',
    },
  ])

  return { profile, menu }
})
