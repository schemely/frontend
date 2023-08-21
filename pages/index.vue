<template>
  <div>
    <h1>Index page</h1>
    <div>
      <a href="http://localhost:3333/api/auth/github/redirect">
        Sign in with Github
      </a>
    </div>
    <div><NuxtLink to="/profile">Profile</NuxtLink></div>
    <div>{{ status }}</div>
    <div v-if="isLoggedIn">
      <button @click="signOut({ redirect: false })">Sign out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut, status } = useAuth();
const isLoggedIn = computed(() => {
  return status.value === "authenticated";
});
</script>

<style scoped lang="scss"></style>
