<template>
  <div>
    <h1>Profile</h1>
    <NuxtLink to="/">Main page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth" });
</script>

<style scoped lang="scss"></style>
