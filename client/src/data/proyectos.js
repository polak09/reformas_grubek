import fotoBano from '../assets/images/Reforma de baño en Alhama de Murcia.jpeg'
import fotoHabitacion from '../assets/images/Reforma de habitación en Alhama de Murcia.jpeg'
import fotoPintura from '../assets/images/Acabado de pintura y pladur en Alhama de Murcia.jpeg'

// Sección "Trabajos realizados": cada obra ocupa la pantalla entera con su título encima.
// Son obras concretas, así que salen iguales en todas las landings. El título describe
// la foto y es también su texto alternativo, así que tiene que decir lo que se ve.
// Una obra sin `foto` sale con fondo oscuro, como en Servicios.
export const proyectos = [
  { titulo: 'Reforma de baño en Alhama de Murcia', foto: fotoBano },
  { titulo: 'Reforma de habitación en Alhama de Murcia', foto: fotoHabitacion },
  { titulo: 'Pintura y pladur en Alhama de Murcia', foto: fotoPintura },
]
