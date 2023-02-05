// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@formkit/nuxt"],

  ssr: false,
  typescript: {
    shim: false,
  },
  css: [
    "~/assets/css/main.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    devProxy: {
      "/campusApi": {
        target: "https://api.codename-t.com/campus",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});
