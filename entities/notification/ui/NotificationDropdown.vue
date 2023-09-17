<template>
  <div class="notification-dropdown">
    <div class="notification-dropdown__title">All notifications</div>
    <div class="notification-dropdown__content">
      <div class="notification-dropdown__empty">You don't have any notifications.</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.notification-dropdown {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: $white;
  border: 1px solid $border;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);

  &__title {
    padding: 16px 20px;
    border-bottom: 1px solid $border;
    @include text-default;
    font-weight: 500;
    font-size: 12px;
    color: $text__text;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    @include text-default;
    font-size: 12px;
    color: $text__text--lighten-3;
  }
}
</style>
