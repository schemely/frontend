<template>
  <VMenu :close-on-content-click="false">
    <template #activator="{ props }">
      <EntityProfileButton v-bind="props" :login="profileMenu.login" :avatar="profileMenu.avatar" />
    </template>
    <EntityProfileDropdownMenu v-bind="profileMenu" :menu="menu" />
  </VMenu>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/shared/interfaces/Menu'

const profileMenu = reactive({
  login: 'b01010110',
  avatar: '',
  email: 'b01010110b@gmail.com',
})

const menu: MenuItem[] = [
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
]
</script>

<style scoped lang="scss"></style>
