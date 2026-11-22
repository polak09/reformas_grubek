import { contenidoAlhama } from './contenidoAlhama.js'

// Sección "Zona": el municipio donde se concentra el trabajo y el resto de sitios
// a los que se va. De aquí sale el texto de la sección, así que añadir un municipio
// nuevo es añadirlo a esta lista.
export const MUNICIPIO_PRINCIPAL = 'Alhama de Murcia'

export const OTROS_MUNICIPIOS = [
  'Condado de Alhama',
  'Librilla',
  'Totana',
  'Camposol',
  'Murcia',
]

const TEXTO_HERO =
  'Más de 10 años de experiencia en reformas e instalaciones en viviendas y negocios.'

// Todo lo que cambia entre landings sale del nombre de la localidad, así que añadir una
// página nueva es añadir una entrada a LOCALIDADES y nada más. Una landing puede fijar
// su propio H1 (la búsqueda a la que apunta) y traer `contenido` propio: el texto que la
// distingue de las demás. El <title> repite el H1 seguido de la marca.
function crearLanding({ nombre, ruta, h1 = `Reformas en ${nombre}`, descripcion, contenido = null }) {
  return {
    seo: {
      titulo: `${h1} | Reformas Grubek`,
      descripcion,
      ruta,
    },
    hero: {
      h1,
      texto: TEXTO_HERO,
    },
    contenido,
  }
}

const NOMBRE_HOME = 'Murcia'

export const home = crearLanding({
  nombre: NOMBRE_HOME,
  ruta: '/',
  h1: 'Reformas integrales en Murcia',
  descripcion:
    'Reformas integrales y parciales en Murcia: baños, cocinas, pintura, pladur, fontanería y electricidad. Más de 10 años de experiencia. Presupuesto gratis.',
})

// Cada entrada genera una página estática en /reformas/<slug>.
// Las descripciones se escriben distintas a propósito: si fueran calcadas cambiando
// solo el municipio, Google las trataría como contenido duplicado.
export const LOCALIDADES = [
  {
    slug: 'alhama-de-murcia',
    nombre: 'Alhama de Murcia',
    // El municipio donde se concentra el trabajo: la landing que compite por
    // "reformas integrales alhama de murcia", con texto propio y preguntas frecuentes.
    h1: 'Reformas integrales en Alhama de Murcia',
    descripcion:
      'Reformas integrales en Alhama de Murcia de pisos, casas y locales: baños, cocinas, fontanería, electricidad, pladur y pintura. Presupuesto sin compromiso.',
    contenido: contenidoAlhama,
  },
  {
    slug: 'totana',
    nombre: 'Totana',
    descripcion:
      'Reformas integrales en Totana: baños, interiores, pintura, pladur, fontanería y electricidad. Más de 10 años de experiencia. Presupuesto sin compromiso.',
  },
  {
    slug: 'camposol',
    nombre: 'Camposol',
    descripcion:
      'Reformas y mantenimiento de viviendas en Camposol: baños, interiores, pintura, pladur, fontanería y electricidad. Trato directo y presupuesto sin compromiso.',
  },
  {
    slug: 'librilla',
    nombre: 'Librilla',
    descripcion:
      'Reformas integrales en Librilla: baños, interiores, acabados de pintura y pladur, fontanería y electricidad. Trato directo y presupuesto sin compromiso.',
  },
  {
    slug: 'condado-de-alhama',
    nombre: 'Condado de Alhama',
    descripcion:
      'Reformas y mantenimiento de viviendas en Condado de Alhama: baños, interiores, pintura, pladur, fontanería y electricidad. Presupuesto sin compromiso.',
  },
]

// Página propia de un municipio de la Zona: su landing, la home si es Murcia, o null
// si aún no tiene (entonces sale en la lista sin enlace).
export function rutaDeMunicipio(nombre) {
  if (nombre === NOMBRE_HOME) return home.seo.ruta
  const localidad = LOCALIDADES.find((l) => l.nombre === nombre)
  return localidad ? `/reformas/${localidad.slug}` : null
}

export function landingDeLocalidad({ slug, ...localidad }) {
  return crearLanding({ ...localidad, ruta: `/reformas/${slug}` })
}
