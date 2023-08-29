<template>
  <EntityProjectEmptyBlock :text="text">
    <FeatureNewProjectButton v-if="variant === 'my-projects'" />
  </EntityProjectEmptyBlock>
</template>

<script setup lang="ts">
import type { ProjectEmptyBlock } from '@/widgets/project/interfaces/ProjectEmptyBlock'

const props = withDefaults(defineProps<ProjectEmptyBlock>(), {
  variant: 'my-projects',
})

const text = computed(() => {
  switch (props.variant) {
    case 'my-projects':
      return "You don't have your own projects."
  }
})
</script>

<style scoped lang="scss"></style>
