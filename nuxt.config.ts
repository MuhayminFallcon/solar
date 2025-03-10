import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  pages: true,

  build: {
    transpile: ['vuetify'],
  },

  nitro: {
    preset: 'vercel',
    storage: {
      data: {
        driver: 'vercelKV'
      }
    },
  },

  css: [
    '~/assets/styles/css/tailwind.css',
    '~/assets/styles/scss/main.scss',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-phosphor-icons',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/image',
  ],

  tailwindcss: {
    viewer: false,
  },

  image: {
    inject: false,
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
  },

  vite: {
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
    optimizeDeps: {
      exclude: ['@phosphor-icons/vue', '@intlify/core-base'],
    },
  },

  app: {
    head: {
      title: 'Paint',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your project description' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/mainLogoC.png' },
      ],
    },
  },
});