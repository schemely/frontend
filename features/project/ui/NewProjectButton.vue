<template>
  <UIButton nuxt-icon="file-outline" variation="secondary" @click="projectRedirect">
    Add a new project
  </UIButton>
</template>

<script setup lang="ts">
const router = useRouter()

function projectRedirect() {
  router.push('/my/new-project')
}
</script>

<style scoped lang="scss"></style>
