<template>
  <div class="project-empty-block">
    <NuxtIcon class="project-empty-block__icon" name="folder-open" />
    <div v-if="text" class="project-empty-block__text">{{ text }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ProjectEmptyBlock } from '@/entities/project/interfaces/ProjectEmptyBlock'

defineProps<ProjectEmptyBlock>()
</script>

<style scoped lang="scss">
.project-empty-block {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    width: 128px;
    height: 128px;
    font-size: 0;

    :deep(svg) {
      width: 128px;
      height: 128px;
      color: $primary__primary--lighten-3;
    }
  }

  &__text {
    margin-bottom: 12px;
    @include h3;
    color: $text__text;
  }
}
</style>
