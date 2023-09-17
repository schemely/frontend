import type { MyMenuItem } from '@/entities/my/interfaces/MyMenu'

export const useMyMenuStore = defineStore('meMenu', () => {
  const menu = ref<MyMenuItem[]>([
    {
      text: 'Recents',
      icon: 'clock-outline',
      link: '/my/recents',
    },
    {
      text: 'My projects',
      icon: 'file-outline',
      link: '/my/projects',
    },
    {
      text: 'Shared projects',
      icon: 'share-variant-outline',
      link: '/my/shared',
    },
    {
      text: 'Favorite projects',
      icon: 'star-outline',
      link: '/my/favorite',
    },
  ])

  return { menu }
})
