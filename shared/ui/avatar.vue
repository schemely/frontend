<template>
  <div class="avatar">
    <VImg v-if="avatar" class="avatar__avatar" :src="avatar" />
    <NuxtIcon v-else class="avatar__default-avatar" name="account-circle-outline" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: number
    avatar?: string
    color?: string
  }>(),
  {
    size: 24,
    color: '#000000',
  }
)

const sizeWithPx = computed(() => props.size + 'px')
</script>

<style scoped lang="scss">
.avatar {
  width: v-bind(sizeWithPx);
  height: v-bind(sizeWithPx);

  &__avatar {
    width: v-bind(sizeWithPx);
    height: v-bind(sizeWithPx);
    border: 1px solid $border;
    border-radius: 50%;
  }

  &__default-avatar {
    font-size: 0;

    & :deep(svg) {
      width: v-bind(sizeWithPx);
      height: v-bind(sizeWithPx);
      color: v-bind(color);
    }
  }
}
</style>
