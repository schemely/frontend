<template>
  <VCheckbox
    class="checkbox"
    :class="[`checkbox-size--${size}`]"
    :ripple="false"
    :true-icon="CheckboxTrueControl"
    :false-icon="CheckboxFalseControl"
    hide-details="auto"
  >
    <template v-if="$slots.label" #label>
      <slot name="label">{{ $slots.label }}</slot>
    </template>
  </VCheckbox>
</template>

<script setup lang="ts">
import CheckboxTrueControl from '@/shared/ui/CheckboxTrueControl.vue'
import CheckboxFalseControl from '@/shared/ui/CheckboxFalseControl.vue'

import type { Checkbox } from '@/shared/interfaces/Checkbox'

withDefaults(defineProps<Checkbox>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.checkbox {
  :deep(.v-selection-control__input:hover::before) {
    opacity: 0;
  }

  :deep(.v-label) {
    opacity: 1;
    color: $text__text--lighten-1;
  }

  &.checkbox-size--small {
    :deep(.nuxt-icon) {
      width: 12px;
      height: 12px;
      font-size: 0;

      svg {
        width: 12px;
        height: 12px;
      }
    }

    :deep(.v-label) {
      @include form__input--sm;
      line-height: 50%;
    }

    :deep(.v-selection-control__wrapper) {
      --v-selection-control-size: 12px;
      margin-right: 8px;
    }
  }

  &.checkbox-size--default {
    :deep(.nuxt-icon) {
      width: 14px;
      height: 14px;
      font-size: 0;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    :deep(.v-label) {
      @include form__input--md;
      line-height: 50%;
    }

    :deep(.v-selection-control__wrapper) {
      --v-selection-control-size: 14px;
      margin-right: 10px;
    }
  }

  &.checkbox-size--large {
    :deep(.nuxt-icon) {
      width: 16px;
      height: 16px;
      font-size: 0;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    :deep(.v-label) {
      @include form__input--lg;
      line-height: 50%;
    }

    :deep(.v-selection-control__wrapper) {
      --v-selection-control-size: 16px;
      margin-right: 12px;
    }
  }

  :deep(.v-selection-control__input > .v-icon) {
    opacity: 1;
  }

  :deep(.v-selection-control i) {
    color: $border-form;
  }

  :deep(.v-selection-control.v-selection-control--dirty i) {
    color: $primary__primary;
  }

  :deep(.v-selection-control) {
    min-height: initial;
  }
}
</style>
