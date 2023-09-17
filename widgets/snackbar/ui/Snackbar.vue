<template>
  <EntitySnackbar v-model="model" :state="state">{{ content }}</EntitySnackbar>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '@/entities/snackbar/stores/snackbar'

const snackbarStore = useSnackbarStore()

const { model, content, state } = storeToRefs(snackbarStore)
</script>

<style scoped lang="scss"></style>
