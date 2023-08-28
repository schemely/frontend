<template>
  <div>
    <NuxtLink to="/">Main page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'projects',
  middleware: 'auth',
})

const headerTitle = useMyHeaderTitle()
headerTitle.value = 'My projects'
</script>

<style scoped lang="scss"></style>
