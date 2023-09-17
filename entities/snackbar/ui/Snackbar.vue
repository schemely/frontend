<template>
  <VSnackbar class="snackbar" :class="[`snackbar--state-${state}`]">
    <slot />
  </VSnackbar>
</template>

<script setup lang="ts">
import type { Snackbar } from '@/entities/snackbar/interfaces/Snackbar'

withDefaults(defineProps<Snackbar>(), {
  state: 'default',
})
</script>

<style scoped lang="scss">
.snackbar {
  :deep(.v-snackbar__wrapper) {
    background-color: $white;
    color: $text__text;
    border: 2px solid $border-form;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  }

  :deep(.v-snackbar__content) {
    @include text;
    font-size: 13px;
    padding: 16px 20px;
  }

  &--state-default {
    :deep(.v-snackbar__wrapper) {
      color: $text__text;
      border-color: $border-form;
    }
  }

  &--state-success {
    :deep(.v-snackbar__wrapper) {
      color: $success__success;
      border-color: $success__success;
    }
  }

  &--state-error {
    :deep(.v-snackbar__wrapper) {
      color: $error__error;
      border-color: $error__error;
    }
  }
}
</style>
