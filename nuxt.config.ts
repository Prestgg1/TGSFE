import { safelist } from "#tailwind-config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  ui: {
    global: true,
  },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-booster",
    "nuxt-aos",
  ],
  css: ["~/assets/css/main.css"],
  image: {
    format: ["webp"],
    quality: 80,
  },
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          colors: {
            main: "#E94149",
            secondary: {
              100: "#E2E2D5",
              200: "#888883",
            },
          },
        },
      },
    },
  },
});
