<template>
  <div class="profile-button">
    <div class="profile-button__avatar-wrap">
      <VImg v-if="avatar" class="profile-button__avatar" :src="avatar" />
      <NuxtIcon v-else class="profile-button__default-avatar" name="account-circle-outline" />
    </div>
    <div class="profile-button__login">{{ login }}</div>
    <NuxtIcon class="profile-button__chevron" name="chevron-down" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  login: string
  avatar?: string
}>()
</script>

<style scoped lang="scss">
.profile-button {
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: $hover;
    cursor: pointer;
  }

  &__avatar-wrap {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }

  &__avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  &__default-avatar {
    font-size: 0;

    & :deep(svg) {
      width: 24px;
      height: 24px;
      color: $text__text;
    }
  }

  &__login {
    margin-right: 4px;
    @include default;
    line-height: 150%;
    color: $text__text;
  }

  &__chevron {
    font-size: 0;

    & :deep(svg) {
      width: 16px;
      height: 16px;
      color: $text__text;
    }
  }
}
</style>
