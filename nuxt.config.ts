import auth from "./app/config/auth";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth"],
  auth,
});
