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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/variable.scss";'
        }
      }
    }
  },
  app: {
    baseURL: '/portfolio/'
  },
  css: ['assets/reset.css'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      'Bruno+Ace': true
    }
  }
})
