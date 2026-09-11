// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://reformasgrubek.es',

  // Las URLs indexadas por Google no llevan barra final (/reformas/alhama-de-murcia).
  // Con format 'file' Astro genera reformas/alhama-de-murcia.html en vez de una carpeta
  // con index.html dentro, así que las rutas se sirven exactamente igual que hasta ahora.
  trailingSlash: 'never',
  build: { format: 'file' },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
})
