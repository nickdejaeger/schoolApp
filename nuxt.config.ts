// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2024-04-03',

  devtools: { 
    enabled: false
  },

  app: {
    head: {
      charset: 'utf-8',
      meta: [
        { 
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [
        { 
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
        },
        { 
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        }
      ],
      title: 'App local'
    },
    //pageTransition: { name: 'page', mode: 'out-in' }
  },

  ssr: false,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *; @use "~/assets/_colors.scss" as *;',
          //api: 'modern-compiler'
        }
      }
    }
  },

  css: [
    '~/assets/css/global.css',
    '~/assets/scss/global.scss',
    'animate.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  components: [
    { 
      path: '~/components',
      pathPrefix: false,
    }
  ],

  router: {
    options: {
      
    }
  },
  
  routeRules: {
    // '/': { redirect: '/lessen' },
    '/components': { redirect: '/components/badge' }
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
})