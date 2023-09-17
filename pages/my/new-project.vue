<template>
  <div class="page-my-new-project">
    <WidgetProjectCreateForm />
  </div>
</template>

<script setup lang="ts">
import { useMyHeaderStore } from '@/entities/my/stores/header'

definePageMeta({
  layout: 'projects',
  middleware: 'auth',
})

const { setLink } = useMyHeaderStore()

onMounted(() => {
  setLink({ to: '/my/projects', text: 'back to my projects' })
})
</script>

<style scoped lang="scss">
.page-my-new-project {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>
