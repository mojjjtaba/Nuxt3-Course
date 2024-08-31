// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss'
   ],

  app: {
    pageTransition: {
      name: "page", mode: "out-in"
    },
    layoutTransition: {
      name: "layout", mode: "out-in"
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})