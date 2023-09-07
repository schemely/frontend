<template>
  <NuxtLink class="back-link">
    <NuxtIcon class="back-link__icon" name="arrow-down" />

    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { BackLink } from '@/shared/interfaces/BackLink'

defineProps<BackLink>()
</script>

<style scoped lang="scss">
.back-link {
  display: inline-flex;
  align-items: center;
  @include text-default;
  font-size: 13px;
  line-height: 110%;
  color: $text__text--lighten-2;
  text-decoration: none;

  &:hover {
    color: $text__text;
  }

  &__icon {
    width: 20px;
    height: 20px;
    font-size: 0;
    margin-right: 6px;

    :deep(svg) {
      width: 20px;
      height: 20px;
      transform: rotate(90deg);
    }
  }
}
</style>
