// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
<<<<<<< HEAD
  modules: ["@nuxt/image", "@vesp/nuxt-fontawesome", '@nuxtjs/cloudinary'],
  css: [
    "~/assets/css/main.css"
=======
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
>>>>>>> 012726b (Api Inteqrated)
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL,
    },
  },
<<<<<<< HEAD
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
=======
});
>>>>>>> 012726b (Api Inteqrated)
