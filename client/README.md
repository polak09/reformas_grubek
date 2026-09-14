# Reformas Grubek

Web estática de Reformas Grubek, construida con **Astro** y **Tailwind CSS v4**.

Cada página se genera como HTML durante el build. El único JavaScript son dos scripts
pequeños en línea (menú móvil y flechas del carrusel), y la web funciona sin ellos.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior.
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`).

## Puesta en marcha

```bash
pnpm install
pnpm dev
```

Astro abre el sitio en <http://localhost:4321>.

## Scripts

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo con recarga en caliente. |
| `pnpm build` | Genera el sitio estático en `dist/`. |
| `pnpm preview` | Sirve en local lo que hay en `dist/`, tal como se verá en producción. |
| `pnpm check` | Valida los archivos `.astro` (props, variables, imports). |

## Estructura

```
src/
├── pages/            Rutas. Cada archivo = una URL.
│   ├── index.astro          → /
│   ├── privacidad.astro     → /privacidad
│   ├── 404.astro            → página de error
│   ├── sitemap.xml.js       → /sitemap.xml
│   └── reformas/
│       └── [ciudad].astro   → /reformas/<slug>, una por localidad
├── layouts/
│   ├── BaseLayout.astro     <html>, <head> con el SEO, header y footer
│   └── LandingLayout.astro  Monta las cinco secciones de una landing
├── sections/         Bloques de página: Hero, Servicios, Proyectos, Zona, Contacto
├── components/
│   ├── layout/       Header, Footer, MobileContactNav
│   ├── ui/           SectionHeading, PlaceholderImage
│   └── icons/        Iconos SVG
├── data/
│   ├── localidades.js  Contenido de la home y de cada página de localidad
│   ├── servicios.js    Servicios del carrusel, con su foto y su enlace
│   └── legal.js        Datos identificativos para la política de privacidad
├── lib/
│   ├── contact.js      Teléfono y enlace de WhatsApp, en un único sitio
│   └── navegacion.js   Enlaces del menú, dentro y fuera de las landings
├── styles/
│   └── global.css      Tailwind y el tema (@theme): colores y tipografías
└── assets/           Imágenes
```

## Añadir una página de localidad nueva

Las páginas de localidad se generan solas. Basta con añadir una entrada a
`LOCALIDADES` en `src/data/localidades.js`:

```js
{
  slug: 'totana',
  nombre: 'Totana',
  descripcion: 'Reformas integrales, baños, interiores... en Totana y alrededores.',
}
```

Con eso el build crea `/reformas/totana` con su `<h1>`, sus títulos de proyectos,
sus metadatos y su entrada en el sitemap.

## Despliegue

Netlify, configurado en `netlify.toml` (en la raíz del repositorio):
construye con `pnpm build` dentro de `client/` y publica `client/dist`.

El sitemap (`/sitemap.xml`) se genera en cada build desde `src/pages/sitemap.xml.js`.
Las localidades entran solas; si se crea una página suelta nueva, hay que añadir su
ruta a la lista de ese archivo.
