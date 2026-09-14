// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://reformasgrubek.es',

  trailingSlash: 'never',
  build: { format: 'file' },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-plus-jakarta-sans',
      weights: [400, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Serif',
      cssVariable: '--font-noto-serif',
      // Solo se usa en titulares, y siempre en negrita.
      weights: [700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
