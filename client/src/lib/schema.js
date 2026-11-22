import { getImage } from 'astro:assets'
import { contact } from './contact.js'
import { MUNICIPIO_PRINCIPAL, OTROS_MUNICIPIOS } from '../data/localidades.js'
import { servicios } from '../data/servicios.js'
import fotoHero from '../assets/images/hero.jpg'

export const NOMBRE_NEGOCIO = 'Reformas Grubek'

// La foto del hero en JPEG de 1200 px de ancho: la imagen que se ve al compartir un
// enlace (Open Graph) y la que acompaña al negocio en los datos estructurados.
export async function imagenSocial(site) {
  const { src, attributes } = await getImage({ src: fotoHero, width: 1200, format: 'jpg' })
  return { url: new URL(src, site).href, width: attributes.width, height: attributes.height }
}

// Datos estructurados (JSON-LD) del negocio local. Es lo que permite a Google
// relacionar la web con Alhama de Murcia, el teléfono y los municipios a los que se va,
// igual que la ficha de Google Business Profile: los datos tienen que coincidir con ella.
export function schemaNegocio(site, imagen) {
  const url = new URL('/', site).href
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${url}#negocio`,
    name: NOMBRE_NEGOCIO,
    url,
    image: imagen,
    telephone: contact.phoneLink.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      addressLocality: MUNICIPIO_PRINCIPAL,
      postalCode: '30840',
      addressRegion: 'Región de Murcia',
      addressCountry: 'ES',
    },
    areaServed: [MUNICIPIO_PRINCIPAL, ...OTROS_MUNICIPIOS],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de reformas',
      itemListElement: servicios.map(({ nombre }) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: nombre },
      })),
    },
  }
}

// Migas de pan de una landing de localidad: Inicio › la propia página.
export function schemaMigas(site, { nombre, ruta }) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: new URL('/', site).href },
      { '@type': 'ListItem', position: 2, name: nombre, item: new URL(ruta, site).href },
    ],
  }
}
