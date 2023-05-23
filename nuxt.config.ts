// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    importStyle: "scss",
  },
  css: [
    "element-plus/theme-chalk/display.css",
    "element-plus/theme-chalk/dark/css-vars.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
});
