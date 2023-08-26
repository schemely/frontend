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
</script>

<style scoped lang="scss"></style>
