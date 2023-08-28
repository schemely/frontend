<template>
  <EntityMyMenu :items="menu" />
</template>

<script setup lang="ts">
import type { MyMenuItem } from '@/entities/my/interfaces/MyMenu'

const menu: MyMenuItem[] = [
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
]
</script>

<style scoped lang="scss"></style>
