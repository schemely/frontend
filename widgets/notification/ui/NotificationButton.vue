<template>
  <VMenu offset="0 50" :close-on-content-click="false">
    <template #activator="{ props }">
      <EntityNotificationButton v-bind="props" has-notification />
    </template>
    <EntityNotificationDropdown />
  </VMenu>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
