// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss'
   ],

  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
  //       }
  //     ]
  //   }
  // }
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