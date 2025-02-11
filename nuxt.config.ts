// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_durable",
    experimental: {
      tasks: true,
    }
  },

  modules: ["nitro-cloudflare-dev"]
})