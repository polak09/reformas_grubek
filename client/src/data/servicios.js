import { contact } from '../lib/contact.js'

import fotoBanos from '../assets/images/Reforma de baño en Alhama de Murcia.jpeg'
import fotoInteriores from '../assets/images/Reforma de habitación en Alhama de Murcia.jpeg'
import fotoPintura from '../assets/images/Acabado de pintura y pladur en Alhama de Murcia.jpeg'
import fotoFontaneria from '../assets/images/Trabajos de fontanería y electricidad en Alhama de Murcia.jpeg'
import fotoFalsosTechos from '../assets/images/Instalación de falso techo en Alhama de Murcia.jpeg'

// "Más información" abre WhatsApp con el mensaje ya escrito, para que quien contacta
// no tenga que explicar qué servicio le interesa. El envío lo sigue haciendo él.
function enlaceWhatsApp(nombre) {
  const mensaje = `Hola, me gustaría pedir información sobre ${nombre.toLowerCase()}.`
  return `${contact.whatsappLink}?text=${encodeURIComponent(mensaje)}`
}

// En el orden del carrusel. Los que aún no tienen foto salen con fondo oscuro:
// cuando la haya, basta con importarla arriba y añadirle `foto`.
const SERVICIOS = [
  { nombre: 'Reformas integrales' },
  { nombre: 'Reformas de baños', foto: fotoBanos },
  { nombre: 'Reformas de interiores', foto: fotoInteriores },
  { nombre: 'Pintura interior y exterior', foto: fotoPintura },
  { nombre: 'Alisado y azulejos' },
  { nombre: 'Pladur' },
  { nombre: 'Fontanería y electricidad', foto: fotoFontaneria },
  { nombre: 'Puertas y ventanas' },
  { nombre: 'Falsos techos y paneles sándwich', foto: fotoFalsosTechos },
]

export const servicios = SERVICIOS.map((servicio) => ({
  ...servicio,
  enlace: enlaceWhatsApp(servicio.nombre),
}))
