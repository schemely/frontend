<template>
  <div class="profile-dropdown-menu">
    <div class="profile-dropdown-menu__profile">
      <UIAvatar class="profile-dropdown-menu__avatar" :size="64" :avatar="avatar" color="#ffffff" />
      <div class="profile-dropdown-menu__login">{{ login }}</div>
      <div class="profile-dropdown-menu__email">{{ email }}</div>
    </div>
    <UIMenu v-if="menu" class="profile-dropdown-menu__menu" :items="menu" />
  </div>
</template>

<script setup lang="ts">
import type { ProfileDropdownMenu } from '@/entities/profile/interfaces/ProfileDropdownMenu'

defineProps<ProfileDropdownMenu>()
</script>

<style scoped lang="scss">
.profile-dropdown-menu {
  width: 250px;
  background-color: $context-menu__bg;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  &__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
  }

  &__avatar {
    margin-bottom: 6px;
    color: $white;
  }

  &__login {
    margin-bottom: 4px;
    @include text-default;
    font-weight: 500;
    font-size: 13px;
    color: $white;
  }

  &__email {
    @include text-default;
    font-weight: 500;
    font-size: 13px;
    color: $text__text--lighten-4;
  }

  &__menu {
    :deep(.menu__item) {
      padding-top: 8px;
      padding-bottom: 8px;
    }

    :deep(.menu__item-check) {
      width: 0;
    }

    :deep(.menu__item-content) {
      margin-left: 10px;
    }
  }
}
</style>
