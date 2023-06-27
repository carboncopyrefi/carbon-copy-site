// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/content',
      '@nuxt/image',
    ],
  css: [
      "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            }
          }
      },
})
