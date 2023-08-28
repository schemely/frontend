<template>
  <VAppBar class="my-header" height="48" absolute flat>
    <div class="my-header__title">{{ headerTitle }}</div>
  </VAppBar>
</template>

<script setup lang="ts">
const headerTitle = useMyHeaderTitle()
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
