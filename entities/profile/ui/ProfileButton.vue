<template>
  <div class="profile-button">
    <UIAvatar class="profile-button__avatar" :avatar="avatar" />
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
  cursor: pointer;

  &:hover {
    background-color: $hover__bg;
  }

  &__avatar {
    margin-right: 4px;
  }

  &__login {
    margin-right: 4px;
    @include text-default;
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
