// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    surveyAccessToken: ''
  },

  site: {
    url: 'https://carboncopy.news',
    name: "CARBON Copy",
    trailingSlash: true
  },

  colorMode: {
    preference: 'light'
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    'nuxt-link-preview',
    '@nuxt/ui',
    'nuxt-jsonld'
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
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) return

      const data = await fetch('https://api.carboncopy.news/projects')
      const projects = await data.json()
      
      const refiWeekly = await fetch('https://api.carboncopy.news/refi-weekly')
      const episodes = await refiWeekly.json()

      let projectSlugs = projects.projects.map(project => `/project/${project.slug}/`)
      let episodeSlugs = episodes.map(episode => `/refi-weekly/${episode.slug}/`)

      let slugs = projectSlugs.concat(episodeSlugs)

      console.log(slugs)

      nitroConfig.prerender.routes?.push(...slugs);
      return
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
      Quicksand: {
        wght: [400,600],
        ital: [400,600]
      }
    }
  },

  compatibilityDate: '2024-07-26',
})