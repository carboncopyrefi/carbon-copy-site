// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxt/content',
      '@nuxt/image',
      'nuxt-gtag',
      '@nuxtjs/google-fonts'
    ],
  app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            }
          }
      },
  gtag: {
    id: 'G-CJBPKLXNE9',
  },
  css: [
      "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  googleFonts: {
    preconnect: true,
    families: {
      Lora: {
        wght: [400,700],
        ital: [400,700]
      },
      Quicksand: true
    }
  }
})
