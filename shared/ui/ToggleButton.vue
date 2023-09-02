<template>
  <VBtn
    class="toggle-button"
    :class="{ 'toggle-button--active': modelValue }"
    flat
    :ripple="false"
    @click="toggle = !toggle"
  >
    <NuxtIcon class="toggle-button__icon" :name="modelValue ? nuxtIconTrue : nuxtIconFalse" />
  </VBtn>
</template>

<script setup lang="ts">
import type { ToggleButton, ToggleButtonEmit } from '@/shared/interfaces/ToggleButton'

const props = defineProps<ToggleButton>()
const emit = defineEmits<ToggleButtonEmit>()

const toggle = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<style scoped lang="scss">
.toggle-button {
  border-radius: 4px;
  border: 1px solid transparent;
  text-transform: none;
  text-indent: initial;
  letter-spacing: initial;
  transition: none;
  min-width: initial;
  color: $text__text--lighten-1;

  &--active {
    background-color: $hover__bg;
  }

  &:hover {
    border: 1px solid $border-form;

    :deep(.v-btn__overlay) {
      opacity: 0;
    }
  }

  &.v-btn--size-small {
    --v-btn-height: 28px;
    padding: 0 2px;

    .toggle-button__icon {
      width: 22px;
      height: 22px;
      font-size: 0;

      :deep(svg) {
        width: 22px;
        height: 22px;
      }
    }
  }

  &.v-btn--size-default {
    --v-btn-height: 32px;
    padding: 0 3px;

    .toggle-button__icon {
      width: 24px;
      height: 24px;
      font-size: 0;

      :deep(svg) {
        width: 24px;
        height: 24px;
      }
    }
  }

  &.v-btn--size-large {
    --v-btn-height: 36px;
    padding: 0 4px;

    .toggle-button__icon {
      width: 26px;
      height: 26px;
      font-size: 0;

      :deep(svg) {
        width: 26px;
        height: 26px;
      }
    }
  }

  &.v-btn--disabled {
    background-color: transparent;
    color: $disabled;

    :deep(.v-btn__overlay) {
      opacity: 0;
    }
  }
}
</style>
