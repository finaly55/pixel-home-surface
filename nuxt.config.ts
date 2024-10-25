// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/css/global.css"],
  routeRules: {
    // prerender index route by default
    "/": { prerender: true },
  },
});
