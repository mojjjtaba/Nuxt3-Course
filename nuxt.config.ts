// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {path: '~/user-components', prefix: 'User'},
    {path: '~/components/special-components'},
    {path: `~/components`}
  ]
})
