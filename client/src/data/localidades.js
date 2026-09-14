// Sección "Proyectos": filas alternas de imagen (820x461) con la etiqueta al lado.
const TIPOS_PROYECTO = ['Reforma', 'Instalación', 'Acabado']

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
    proyectos: TIPOS_PROYECTO.map((tipo, i) => ({
      titulo: `${tipo} en ${nombre}`,
      imagenPrimero: i % 2 === 0,
    })),
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
// Las descripciones se escriben distintas a propósito: si fueran calcadas cambiando
// solo el municipio, Google las trataría como contenido duplicado.
export const LOCALIDADES = [
  {
    slug: 'alhama-de-murcia',
    nombre: 'Alhama de Murcia',
    descripcion:
      'Reformas integrales, baños, interiores, pintura, pladur, fontanería y electricidad en Alhama de Murcia, Condado de Alhama, Librilla y alrededores. Presupuesto sin compromiso.',
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

export function landingDeLocalidad({ slug, nombre, descripcion }) {
  return crearLanding({
    nombre,
    descripcion,
    ruta: `/reformas/${slug}`,
    titulo: `Reformas en ${nombre} | Presupuesto sin compromiso`,
  })
}
