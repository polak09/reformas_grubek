import { home, LOCALIDADES, landingDeLocalidad } from '../data/localidades.js'

const RUTAS = [
  home.seo.ruta,
  ...LOCALIDADES.map((localidad) => landingDeLocalidad(localidad).seo.ruta),
  '/privacidad',
]

export function GET({ site }) {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...RUTAS.map((ruta) => `  <url>\n    <loc>${new URL(ruta, site).href}</loc>\n  </url>`),
    '</urlset>',
    '',
  ].join('\n')

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
