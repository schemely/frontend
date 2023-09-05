<template>
  <VRadio
    class="radio"
    :class="[`radio-size--${size}`]"
    :ripple="false"
    :true-icon="RadioTrueControl"
    :false-icon="RadioFalseControl"
  >
    <template v-if="$slots.label" #label>
      <slot name="label">{{ $slots.label }}</slot>
    </template>
  </VRadio>
</template>

<script setup lang="ts">
import RadioTrueControl from '@/shared/ui/RadioTrueControl.vue'
import RadioFalseControl from '@/shared/ui/RadioFalseControl.vue'

import type { Radio } from '@/shared/interfaces/Radio'

withDefaults(defineProps<Radio>(), {
  size: 'default',
})
</script>

<style scoped lang="scss">
.radio {
  :deep(.v-selection-control__input:hover::before) {
    opacity: 0;
  }

  :deep(.v-label) {
    opacity: 1;
    color: $text__text--lighten-1;
  }

  &.radio-size--small {
    :deep(.v-icon) {
      width: 12px;
      height: 12px;

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
      --v-selection-control-size: 20px;
      margin-right: 0px;
    }
  }

  &.radio-size--default {
    :deep(.v-icon) {
      width: 14px;
      height: 14px;

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
      --v-selection-control-size: 22px;
      margin-right: 2px;
    }
  }

  &.radio-size--large {
    :deep(.v-icon) {
      width: 16px;
      height: 16px;

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
      --v-selection-control-size: 24px;
      margin-right: 4px;
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
