<template>
  <VBtn class="button" :class="[`button--${variation}`]" flat :ripple="false">
    <template v-if="nuxtIcon" #prepend>
      <NuxtIcon class="button__icon" :name="nuxtIcon" />
    </template>
    <slot />
  </VBtn>
</template>

<script setup lang="ts">
import type { Button } from '@/shared/interfaces/Button'

withDefaults(defineProps<Button>(), {
  variation: 'primary',
})
</script>

<style scoped lang="scss">
.button {
  padding: 0 20px;
  border-radius: 6px;
  @include form__button--md;
  text-transform: none;
  text-indent: initial;
  letter-spacing: initial;
  transition: none;

  &--primary {
    background-color: $primary__primary;
    color: $white;

    &:hover {
      background-color: $primary__primary--darken-1;

      & > :deep(.v-btn__overlay) {
        opacity: 0;
      }
    }

    &:active {
      box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

      :deep(.v-btn__content) {
        position: relative;
        top: -1px;
      }

      :deep(.v-btn__prepend) {
        position: relative;
        top: -1px;
      }
    }
  }

  &--secondary {
    background-color: $primary__primary--lighten-6;
    color: $primary__primary;
    border: 1px solid $primary__primary--lighten-2;

    &:hover {
      background-color: $primary__primary--lighten-5;

      & > :deep(.v-btn__overlay) {
        opacity: 0;
      }
    }

    &:active {
      box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

      :deep(.v-btn__content) {
        position: relative;
        top: -1px;
      }

      :deep(.v-btn__prepend) {
        position: relative;
        top: -1px;
      }
    }
  }

  &.v-btn--size-small {
    --v-btn-height: 28px;
    @include form__button--sm;
  }

  &.v-btn--size-default {
    --v-btn-height: 32px;
    @include form__button--md;
  }

  &.v-btn--size-large {
    --v-btn-height: 36px;
    @include form__button--lg;
  }

  &.v-btn--disabled {
    background-color: $disabled;
    color: $white;
    border: none;
  }

  :deep(.v-btn__prepend) {
    margin-inline-end: 4px;
  }

  &__icon {
    width: 16px;
    height: 16px;
    font-size: 0;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
