<template>
  <VAlert class="common-errors" variant="outlined">
    <template #prepend>
      <NuxtIcon class="common-errors__icon" name="alert-circle-outline" />
    </template>

    <template #text>
      <slot />
    </template>
  </VAlert>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.common-errors {
  &.v-alert {
    background-color: $white;
    padding: 12px;
    border: 1px solid $error__error;
    border-radius: 8px;
  }

  &__icon {
    width: 32px;
    height: 32px;
    font-size: 0;

    :deep(svg) {
      width: 32px;
      height: 32px;
      color: $error__error;
    }
  }

  :deep(.v-alert__prepend) {
    margin-inline-end: 12px;
  }

  :deep(.v-alert__content) {
    @include text;
    color: $error__error;
  }
}
</style>
