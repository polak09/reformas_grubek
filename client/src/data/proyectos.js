// Sección "Trabajos realizados": filas alternas de imagen (820x461) con el título al
// lado. Son obras concretas, así que salen iguales en todas las landings. El título
// es también el texto alternativo de la imagen.
const PROYECTOS = [
  { titulo: 'Reforma en Alhama de Murcia' },
  { titulo: 'Instalación en Alhama de Murcia' },
  { titulo: 'Acabado en Totana' },
]

export const proyectos = PROYECTOS.map((proyecto, i) => ({
  ...proyecto,
  imagenPrimero: i % 2 === 0,
}))
