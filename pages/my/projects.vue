<template>
  <div class="page-my-projects">
    <div class="page-my-projects__empty-block">
      <WidgetProjectEmptyBlock variant="my-projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMyHeaderStore } from '@/entities/my/stores/header'

definePageMeta({
  layout: 'projects',
  middleware: 'auth',
})

const { setTitle } = useMyHeaderStore()

onMounted(() => {
  setTitle('My projects')
})
</script>

<style scoped lang="scss">
.page-my-projects {
  &__empty-block {
    display: flex;
    justify-content: center;
    margin-top: 48px;
  }
}
</style>
