// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@vesp/nuxt-fontawesome", '@nuxtjs/cloudinary'],
  css: [
    "~/assets/css/main.css"
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'book', 'users', 'certificate', 'book-open', 'briefcase', 'film'],
      regular: ['user']
    }
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    uploadPreset: "my-custom-preset",
    apiKey: process.env.ClOUDINARY_API_KEY,
    analytics: true,
    cloud: {},
    url: {},
  }
})
