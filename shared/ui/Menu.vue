<template>
  <div class="menu">
    <div
      v-for="item in items"
      :key="item.text"
      class="menu__item"
      :class="{ 'menu__item--active': activeSubmenuKey === item.text }"
      @click="item.action"
    >
      <div class="menu__item-wrap">
        <div class="menu__item-check">
          <NuxtIcon v-if="item.isChecked" name="check-bold" />
        </div>
        <div v-if="item.icon" class="menu__item-icon">
          <NuxtIcon :name="item.icon" />
        </div>
        <div class="menu__item-content">{{ item.text }}</div>
      </div>
      <div v-if="Array.isArray(item.submenu) && item.submenu.length" class="menu__item-arrow">
        <NuxtIcon name="menu-down" />
      </div>
      <div v-if="item.shortCut" class="menu__item-short-cut">{{ item.shortCut }}</div>
      <NuxtLink
        v-if="item.link"
        class="menu__item-link"
        :to="item.link"
        :external="item.isExternalLink"
      />
      <VMenu
        v-if="Array.isArray(item.submenu) && item.submenu.length"
        @update:modelValue="changeActiveSubmenuId($event, item.text)"
        location="end top"
        origin="start top"
        offset="0 4"
        activator="parent"
        :transition="false"
        open-delay="0"
        close-delay="0"
        open-on-hover
      >
        <UIMenu class="menu__item-submenu" :items="item.submenu" />
      </VMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Menu } from '@/shared/interfaces/Menu'

withDefaults(defineProps<Menu>(), {
  items: () => [],
})

const activeSubmenuKey = ref('')

function changeActiveSubmenuId(modelValue: boolean, key: string) {
  activeSubmenuKey.value = modelValue ? key : ''
}
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  background-color: $context-menu__bg;

  &__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: $primary__primary;
    }

    &--active {
      background-color: $primary__primary;
    }
  }

  &__item-wrap {
    display: flex;
    align-items: center;
  }

  &__item-check {
    width: 12px;
    height: 12px;
    margin-right: 10px;
    font-size: 0;

    :deep(svg) {
      width: 12px;
      height: 12px;
      color: $white;
    }
  }

  &__item-icon {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    font-size: 0;

    :deep(svg) {
      width: 16px;
      height: 16px;
      color: $white;
    }
  }

  &__item-content {
    display: flex;
    align-items: center;
    height: 16px;
    margin-right: 16px;
    @include context-menu;
    line-height: 110%;
    color: $white;
  }

  &__item-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    font-size: 0;

    :deep(svg) {
      width: 22px;
      height: 22px;
      color: $white;
      transform: rotate(-90deg);
    }
  }

  &__item-short-cut {
    @include text-default;
    font-size: 12px;
    color: $white;
  }

  &__item-link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &__item-submenu {
    padding: 4px 0px;
  }
}
</style>
