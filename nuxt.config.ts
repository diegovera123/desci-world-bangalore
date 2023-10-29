// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    //  port: 3005,
  },

  devtools: { enabled: false },
  css: ["@/assets/styles/site.css"],
  modules: ["@nuxt/content"],

  vue: {
    compilerOptions: {
      //every tag with '-' is a custom element
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
});
