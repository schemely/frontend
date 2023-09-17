<template>
  <EntityMyMenu :items="menu" />
</template>

<script setup lang="ts">
import { useMyMenuStore } from '@/entities/my/stores/menu'

const myMenuStore = useMyMenuStore()
const { menu } = storeToRefs(myMenuStore)
</script>

<style scoped lang="scss"></style>
