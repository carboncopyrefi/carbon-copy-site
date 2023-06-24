// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/content',
      '@nuxt/image',
    ],
  css: [
      "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  plugins: [
      { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
  ],
  app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            }
          }
      },
})
