// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
      '@nuxt/content',
      '@nuxt/image',
      'nuxt-gtag',
      '@nuxtjs/google-fonts',
      'nuxt-link-preview',
    ],
  app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            }
          }
  },
  image: {
    domains: ['cdn.pixabay.com']
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
      Quicksand: {
        wght: [400,600],
        ital: [400,600]
      }
    }
  },
})
