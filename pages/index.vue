<template>
  <div>
    <h1>Index page</h1>
    <NuxtIcon class="google-logo" name="google-logo" filled />

    <div>{{ status }}</div>

    <div v-if="isLoggedIn">
      <div><NuxtLink to="/my/projects">My Projects</NuxtLink></div>
      <div><NuxtLink to="/profile">Profile</NuxtLink></div>
      <button @click="signOut({ redirect: false })">Sign out</button>
    </div>
    <div v-else>
      <a href="http://localhost:3333/api/auth/github/redirect"> Sign in with Github </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut, status } = useAuth()
const isLoggedIn = computed(() => {
  return status.value === 'authenticated'
})
</script>

<style scoped lang="scss">
.google-logo :deep(svg) {
  width: 48px;
  height: 48px;
}
</style>
