<template>
  <VTextField class="search-input" variant="outlined" hide-details>
    <template #prepend-inner>
      <NuxtIcon class="search-input__icon" name="magnify" />
    </template>
  </VTextField>
</template>

<script setup lang="ts">
import type { SearchInput } from '@/shared/interfaces/SearchInput'

defineProps<SearchInput>()
</script>

<style scoped lang="scss">
.search-input {
  &__icon {
    width: 16px;
    height: 16px;
    font-size: 0;

    :deep(svg) {
      width: 16px;
      height: 16px;
      color: $text__text--lighten-2;
    }
  }

  &:deep(input.v-field__input) {
    --v-input-control-height: 32px;
    --v-field-input-padding-top: 3px;
    --v-field-input-padding-bottom: 3px;
    --v-input-chips-margin-top: 0px;

    @include input;
    color: $text__text--lighten-1;

    &::placeholder {
      color: $text__text--lighten-4;
      opacity: 1;
    }

    &:disabled {
      color: $text__text--lighten-5;

      &::placeholder {
        color: $text__text--lighten-5;
      }
    }
  }

  &:deep(.v-field) {
    --v-disabled-opacity: 1;
    background-color: $hover__bg;
    border-radius: 4px;
  }

  &:deep(.v-field--prepended) {
    padding-inline-start: 10px;
  }

  &:deep(.v-field__outline) {
    --v-field-border-width: 0px;
    --v-field-border-opacity: 1;
    color: $hover__border;
  }

  &:deep(.v-field--focused .v-field__outline) {
    --v-field-border-width: 2px;
    color: $primary__primary;
  }

  &:deep(.v-field.v-field--focused:hover .v-field__outline) {
    --v-field-border-width: 2px;
  }

  &:deep(.v-field:hover .v-field__outline) {
    --v-field-border-width: 1px;
  }
}
</style>
