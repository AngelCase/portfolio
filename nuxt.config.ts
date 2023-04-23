// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    htmlAttrs: {
      lang: 'ja'
    }
  },
  nitro: {
    output: {
      publicDir: '../docs'
    }
  },
  app: {
    baseURL: '/portfolio/'
  },
  css: ['assets/reset.css']
})
