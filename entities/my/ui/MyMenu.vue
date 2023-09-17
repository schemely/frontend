<template>
  <div class="my-menu">
    <div v-for="item in items" :key="item.text" class="my-menu__item" @click="item.action">
      <NuxtLink
        class="my-menu__item-link"
        :to="item.link"
        :external="item.isExternalLink"
        :custom="!item.link"
      >
        <div class="my-menu__item-content">
          <NuxtIcon v-if="item.icon" class="my-menu__item-icon" :name="item.icon" />
          <div class="my-menu__item-text">{{ item.text }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MyMenu } from '@/entities/my/interfaces/MyMenu'

withDefaults(defineProps<MyMenu>(), {
  items: () => [],
})
</script>

<style scoped lang="scss">
.my-menu {
  display: flex;
  flex-direction: column;

  &__item {
    cursor: pointer;

    &:hover {
      background-color: $hover__bg;
    }
  }

  &__item-link {
    display: block;
    text-decoration: none;

    &.router-link-exact-active,
    &.router-link-active {
      background-color: $primary__primary--lighten-5;
    }
  }

  &__item-content {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 18px;
  }

  &__item-icon {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    font-size: 0;

    :deep(svg) {
      width: 16px;
      height: 16px;
      color: $text__text--lighten-2;
    }
  }

  &__item-text {
    @include menu;
    color: $text__text--lighten-2;
  }
}
</style>
