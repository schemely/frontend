<template>
  <VAppBar class="my-header" height="48" absolute flat>
    <UIBackLink v-if="link.to" :to="link.to">{{ link.text }}</UIBackLink>
    <div v-if="title" class="my-header__title">{{ title }}</div>
  </VAppBar>
</template>

<script setup lang="ts">
import { useMyHeaderStore } from '@/entities/my/stores/header'

const myHeaderStore = useMyHeaderStore()
const { title, link } = storeToRefs(myHeaderStore)
</script>

<style scoped lang="scss">
.my-header {
  padding: 0 24px;
  border-bottom: 1px solid $border;

  &__title {
    @include text-default;
    color: $text__text;
  }
}
</style>
