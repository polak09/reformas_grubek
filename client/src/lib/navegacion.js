// Las secciones viven en la home y en cada landing de localidad.
// "Inicio" apunta al hero, que ya tiene id="inicio": sirve de "volver arriba"
const SECCIONES = [
  { hash: '#inicio', label: 'Inicio' },
  { hash: '#servicios', label: 'Servicios' },
  { hash: '#proyectos', label: 'Proyectos' },
  { hash: '#zona', label: 'Zona' },
  { hash: '#contacto', label: 'Contacto' },
]

// Dentro de una landing basta el ancla: el navegador hace scroll sin recargar.
export const navEnLanding = SECCIONES.map(({ hash, label }) => ({ href: hash, label }))

// Fuera de una landing (404, páginas legales) esas secciones no existen en la página,
// así que hay que volver a la home antes del ancla o el enlace no lleva a ningún sitio.
export const navHaciaHome = SECCIONES.map(({ hash, label }) => ({ href: `/${hash}`, label }))
