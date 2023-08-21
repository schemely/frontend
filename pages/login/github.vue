<template>
  <div>
    <h1>Waiting for github authorization ...</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { signIn } = useAuth();

onMounted(async () => {
  await signIn({ code: route.query.code }, { redirect: false });
  await navigateTo("/");
});
</script>

<style scoped lang="scss"></style>
