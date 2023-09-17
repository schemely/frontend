<template>
  <div class="notification-button">
    <NuxtIcon
      class="notification-button__icon"
      :name="hasNotification ? 'bell-badge-outline' : 'bell-outline'"
      :filled="hasNotification"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hasNotification?: boolean
}>()
</script>

<style scoped lang="scss">
.notification-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: $hover__bg;
  }

  &__icon {
    font-size: 0;

    & :deep(svg) {
      width: 20px;
      height: 20px;
      color: $text__text;
    }
  }
}
</style>
