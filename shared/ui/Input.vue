<template>
  <VTextField
    class="input"
    :class="[`input-size--${size}`]"
    variant="outlined"
    hide-details="auto"
  ></VTextField>
</template>

<script setup lang="ts">
import type { Input } from '@/shared/interfaces/Input'

withDefaults(defineProps<Input>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.input {
  :deep(input.v-field__input) {
    --v-input-control-height: 32px;
    --v-field-input-padding-top: 3px;
    --v-field-input-padding-bottom: 3px;
    --v-input-chips-margin-top: 0px;

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

  &.input-size--small {
    :deep(input.v-field__input) {
      --v-input-control-height: 28px;
      --v-field-input-padding-top: 1px;
      --v-field-input-padding-bottom: 1px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 10px;
      --v-field-padding-end: 10px;
    }

    :deep(input.v-field__input) {
      @include form__input--sm;
    }
  }

  &.input-size--default {
    :deep(input.v-field__input) {
      --v-input-control-height: 32px;
      --v-field-input-padding-top: 3px;
      --v-field-input-padding-bottom: 3px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 12px;
      --v-field-padding-end: 12px;
    }

    :deep(input.v-field__input) {
      @include form__input--md;
    }
  }

  &.input-size--large {
    :deep(input.v-field__input) {
      --v-input-control-height: 36px;
      --v-field-input-padding-top: 5px;
      --v-field-input-padding-bottom: 5px;
    }

    :deep(.v-field) {
      --v-field-padding-start: 14px;
      --v-field-padding-end: 14px;
    }

    :deep(input.v-field__input) {
      @include form__input--lg;
    }
  }

  :deep(.v-field) {
    --v-disabled-opacity: 1;
    --v-field-padding-start: 12px;
    --v-field-padding-end: 12px;
    background-color: $white;
    border-radius: 4px;
  }

  :deep(.v-field--prepended) {
    padding-inline-start: 10px;
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

  :deep(.v-field.v-field--focused:hover .v-field__outline) {
    --v-field-border-width: 2px;
  }

  :deep(.v-field:hover .v-field__outline) {
    --v-field-border-width: 1px;
  }
}
</style>
