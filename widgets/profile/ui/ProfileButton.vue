<template>
  <VMenu :close-on-content-click="false">
    <template #activator="{ props }">
      <EntityProfileButton v-bind="props" :login="profile.login" :avatar="profile.avatar" />
    </template>
    <EntityProfileDropdownMenu v-bind="profile" :menu="menu" />
  </VMenu>
</template>

<script setup lang="ts">
import { useProfileMenuStore } from '@/entities/profile/stores/profileMenu'

const profileMenuStore = useProfileMenuStore()
const { profile, menu } = storeToRefs(profileMenuStore)
</script>

<style scoped lang="scss"></style>
