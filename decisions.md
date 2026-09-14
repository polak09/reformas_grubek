# Decisiones de arquitectura

## Astro, sin JavaScript en el cliente

La web es informativa: no tiene estado ni interacción, solo enlaces y anclas.
Por eso se genera como HTML estático y no se carga ningún framework en el navegador.
Las únicas excepciones son dos scripts pequeños escritos en línea —unos 2 KB en total,
sin archivo aparte ni petición extra—, y los dos mejoran algo que ya funciona sin ellos:

- **Menú móvil**: lo cierra al elegir una sección o con Escape. Está montado sobre
  `<details>`, así que sin el script se abre y se cierra igual.
- **Carrusel de servicios**: activa las flechas. La pista usa scroll-snap nativo, así
  que sin el script se desliza con el dedo, el trackpad o el teclado.

Si algún día hace falta algo interactivo (un formulario, una galería, un menú
desplegable), se añade como isla en ese punto concreto —Astro admite React,
Svelte o Vue— sin que el resto de la web cargue JavaScript.

## Metadatos en el HTML, no en JavaScript

Cada página lleva su `<title>`, `description`, `canonical` y etiquetas Open Graph
escritos en el HTML durante el build, desde `BaseLayout.astro`. Con React había
que fijarlos desde un `useEffect`, que es más frágil de cara a buscadores y
a las vistas previas al compartir enlaces.

## Las landings de localidad salen de datos, no de copiar archivos

Todas las páginas de localidad comparten estructura y solo cambian en el nombre
del municipio. Viven en `src/pages/reformas/[ciudad].astro`, que genera una página
estática por cada entrada de `LOCALIDADES` en `src/data/localidades.js`.

Añadir un municipio es añadir una entrada. Cambiar una sección se hace una vez
y afecta a todas las páginas.

## Estructura modular

```
src/
├── pages/        Rutas
├── layouts/      Esqueleto HTML y composición de la página
├── sections/     Bloques de página reutilizables entre landings
├── components/   Piezas pequeñas (layout, ui, icons)
├── data/         Contenido
├── lib/          Datos compartidos (contacto)
├── styles/       Tailwind y el tema
└── assets/       Imágenes
```

## Las URLs no llevan barra final

`trailingSlash: 'never'` y `build.format: 'file'` en `astro.config.mjs`, para que
las rutas se sirvan igual que antes de la migración y no cambie nada de lo que
Google ya tiene indexado.

## Sitemap propio en `/sitemap.xml`

El sitemap se publica en `/sitemap.xml`, la ruta estándar y la misma que tenía la
versión anterior de la web. La integración oficial, `@astrojs/sitemap`, lo reparte en
`sitemap-index.xml` y `sitemap-0.xml`, así que en su lugar lo genera
`src/pages/sitemap.xml.js`: un endpoint estático de pocas líneas que el build escribe
como archivo.

Las rutas salen de los mismos datos que dan a cada página su URL canónica, así que
las localidades nuevas entran solas. Una página suelta nueva (un aviso legal, por
ejemplo) hay que añadirla a mano a la lista de ese archivo.

## Imágenes optimizadas en el build

Las fotos se importan desde `src/assets` y se pintan con el componente `Image` de
Astro, que usa `sharp` para generar variantes WebP de varios anchos. El navegador
elige la que necesita según el tamaño de la tarjeta y la densidad de la pantalla, y
las que quedan fuera de la vista no se descargan hasta que hacen falta. La excepción
es la foto del hero: es lo primero que se ve, así que se pide con prioridad alta.

`sharp` lleva un binario nativo: pnpm necesita permiso para ejecutar su instalación
(`allowBuilds` en `pnpm-workspace.yaml`). El lockfile incluye ya el binario de Linux
que usa Netlify para compilar.

## Tipografías autoalojadas

Las fuentes se descargan de Google durante el build y se sirven desde nuestro
propio dominio (`fonts` en `astro.config.mjs`). El navegador del visitante nunca
contacta con Google, así que su IP no sale hacia un tercero: eso elimina la única
transferencia internacional que tenía la web y simplifica la política de privacidad.

Solo se piden los pesos que se usan de verdad y sin cursivas —de las que no hay
ninguna en el diseño—, y Astro genera además caras de respaldo con métricas
ajustadas para que el texto no dé un salto mientras carga la fuente.

Consecuencia a tener en cuenta: el build necesita conexión a internet la primera
vez que resuelve una familia. Si se cambia `--font-sans` o `--font-serif` en
`global.css`, hay que declarar antes esa familia en `astro.config.mjs`.
