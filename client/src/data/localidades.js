// Sección "Servicios": rejilla 2x2 de tarjetas (540x357 en el diseño, imagen 508x281 + etiqueta).
export const servicios = [
  'Reformas',
  'Instalaciones',
  'Acabados',
  'Trabajos de exterior',
]

// Sección "Proyectos": filas alternas de imagen (820x461) con la etiqueta al lado.
const TIPOS_PROYECTO = ['Reforma', 'Instalación', 'Acabado']

// Sección "Zona": pins situados sobre el mapa (1120x880), en % de esa caja.
// El pin central lo ocupa siempre la localidad de la página.
const PIN_IZQUIERDA = { nombre: 'Condado de Alhama', left: '19.02%', top: '47.84%' }
const PIN_CENTRO = { left: '34.02%', top: '54.66%' }
const PIN_DERECHA = { nombre: 'Librilla', left: '48.93%', top: '42.61%' }

const TEXTO_HERO =
  'Más de 10 años de experiencia en reformas e instalaciones en viviendas y negocios.'

// Todo lo que cambia entre landings se deriva del nombre de la localidad, así que
// añadir una página nueva es añadir una entrada a LOCALIDADES y nada más.
function crearLanding({ nombre, ruta, titulo, descripcion }) {
  return {
    seo: {
      titulo,
      ogTitulo: `Reformas en ${nombre} | Reformas Grubek`,
      descripcion,
      ruta,
    },
    hero: {
      h1: `Reformas ${nombre}`,
      texto: TEXTO_HERO,
    },
    servicios,
    proyectos: TIPOS_PROYECTO.map((tipo, i) => ({
      titulo: `${tipo} en ${nombre}`,
      imagenPrimero: i % 2 === 0,
    })),
    zonas: [PIN_IZQUIERDA, { ...PIN_CENTRO, nombre }, PIN_DERECHA],
  }
}

export const home = crearLanding({
  nombre: 'Murcia',
  ruta: '/',
  titulo: 'Reformas en Murcia | Presupuesto sin compromiso',
  descripcion:
    'Reformas integrales, baños, interiores, pintura, pladur, fontanería y electricidad en Murcia, Condado de Alhama, Librilla y alrededores. Presupuesto sin compromiso.',
})

// Cada entrada genera una página estática en /reformas/<slug>.
export const LOCALIDADES = [
  {
    slug: 'alhama-de-murcia',
    nombre: 'Alhama de Murcia',
    descripcion:
      'Reformas integrales, baños, interiores, pintura, pladur, fontanería y electricidad en Alhama de Murcia, Condado de Alhama, Librilla y alrededores. Presupuesto sin compromiso.',
  },
]

export function landingDeLocalidad({ slug, nombre, descripcion }) {
  return crearLanding({
    nombre,
    descripcion,
    ruta: `/reformas/${slug}`,
    titulo: `Reformas en ${nombre} | Presupuesto sin compromiso`,
  })
}
