// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/scss/main.scss'
   ],

  app: {
    head: {
      bodyAttrs: {
        id: "BodyTag"
      },
      htmlAttrs: {
        dir: 'ltr',
        lang: 'en'
      },
      title: "My Nuxt App",
      meta: [
        {name: 'author', content: 'Mojtaba'},
        {name: 'keywords', content: 'Javascript, Vue.js, Nuxt.js'}
      ]
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