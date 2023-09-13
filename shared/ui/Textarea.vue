<template>
  <VTextarea
    class="textarea"
    :class="[`textarea-size--${size}`]"
    variant="outlined"
    hide-details="auto"
  ></VTextarea>
</template>

<script setup lang="ts">
import type { Textarea } from '@/shared/interfaces/Textarea'

withDefaults(defineProps<Textarea>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.textarea {
  :deep(.v-field) {
    --v-disabled-opacity: 1;
    --v-field-input-padding-top: 10px;
    --v-field-input-padding-bottom: 10px;
    --v-field-padding-start: 12px;
    --v-field-padding-end: 12px;
    --v-input-padding-top: 10px;

    background-color: $white;
    border-radius: 4px;
  }

  &.textarea-size--small {
    :deep(.v-field) {
      --v-field-input-padding-top: 8px;
      --v-field-input-padding-bottom: 8px;
      --v-field-padding-start: 10px;
      --v-field-padding-end: 10px;
    }

    :deep(textarea.v-field__input) {
      @include form__input--sm;
    }
  }

  &.textarea-size--default {
    :deep(.v-field) {
      --v-field-input-padding-top: 10px;
      --v-field-input-padding-bottom: 10px;
      --v-field-padding-start: 12px;
      --v-field-padding-end: 12px;
    }

    :deep(textarea.v-field__input) {
      @include form__input--md;
    }
  }

  &.textarea-size--large {
    :deep(.v-field) {
      --v-field-input-padding-top: 11px;
      --v-field-input-padding-bottom: 11px;
      --v-field-padding-start: 14px;
      --v-field-padding-end: 14px;
    }

    :deep(textarea.v-field__input) {
      @include form__input--lg;
    }
  }

  :deep(.v-field__outline) {
    --v-field-border-width: 1px;
    --v-field-border-opacity: 1;
    color: $border-form;
  }

  :deep(.v-field--disabled .v-field__outline) {
    color: $disabled;
  }

  :deep(.v-field--focused .v-field__outline) {
    --v-field-border-width: 2px;
    color: $primary__primary;
  }

  :deep(.v-field--focused:hover .v-field__outline) {
    --v-field-border-width: 2px;
  }

  :deep(textarea.v-field__input) {
    @include form__input--md;
    color: $text__text--lighten-1;

    &::placeholder {
      color: $text__text--lighten-3;
      opacity: 1;
    }

    &:disabled {
      color: $disabled;

      &::placeholder {
        color: $disabled;
      }
    }
  }

  :deep(.v-input__details) {
    padding-inline-start: 0;
    padding-inline-end: 0;
  }

  :deep(.v-counter) {
    @include text-default;
    font-size: 12px;
    color: $text__text--lighten-3;
  }

  :deep(.v-field--error:not(.v-field--disabled) .v-field__outline) {
    color: $error;
  }
}
</style>
