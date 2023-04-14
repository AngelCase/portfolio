// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: '../docs'
    }
  },
  app: {
    baseURL: '/portfollio/'
  }
})
