<template>
  <VAppBar class="my-header" height="48" absolute flat>
    <UIBackLink v-if="myHeader.link" :to="myHeader.link.to">{{ myHeader.link.text }}</UIBackLink>
    <div v-else-if="myHeader.title" class="my-header__title">{{ myHeader.title }}</div>
  </VAppBar>
</template>

<script setup lang="ts">
const myHeader = useMyHeader()
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
