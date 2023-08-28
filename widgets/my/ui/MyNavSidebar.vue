<template>
  <VNavigationDrawer class="my-nav-sidebar" width="250" permanent>
    <div class="my-nav-sidebar__profile-notification">
      <WidgetProfileButton />
      <WidgetNotificationButton />
    </div>
    <div class="my-nav-sidebar__search">
      <UISearchInput placeholder="Search projects" />
    </div>
  </VNavigationDrawer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.my-nav-sidebar {
  border-color: $border;

  &__profile-notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    padding: 8px;
  }

  &__search {
    padding: 8px;
  }
}
</style>
