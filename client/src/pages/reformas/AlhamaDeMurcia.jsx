import { useEffect } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import MobileContactNav from '../../components/layout/MobileContactNav'
import WhatsAppIcon from '../../components/icons/WhatsAppIcon'
import PhoneIcon from '../../components/icons/PhoneIcon'
import ContactIcon from '../../components/icons/ContactIcon'
import { contact } from '../../lib/contact'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#zona', label: 'Zona' },
  { href: '#contacto', label: 'Contacto' },
]

// Sección 3 del diseño: rejilla 2x2 de tarjetas (540x357, imagen 508x281 + etiqueta).
const servicios = [
  'Reformas',
  'Instalaciones',
  'Acabados',
  'Trabajos de exterior',
]

// Sección 4 del diseño: filas alternas de imagen (820x461) con la etiqueta al lado.
const proyectos = [
  { title: 'Reforma en Alhama de Murcia', imagenPrimero: true },
  { title: 'Instalación en Alhama de Murcia', imagenPrimero: false },
  { title: 'Acabado en Alhama de Murcia', imagenPrimero: true },
]

// Sección 5 del diseño: pins situados sobre el mapa (1120x880), en % de esa caja.
const zonas = [
  { name: 'Condado de Alhama', left: '19.02%', top: '47.84%' },
  { name: 'Alhama de Murcia', left: '34.02%', top: '54.66%' },
  { name: 'Librilla', left: '48.93%', top: '42.61%' },
]

function PlaceholderImage({ label, className = '' }) {
  return (
    <div
      role="img"
      aria-label={`Imagen pendiente: ${label}`}
      className={`flex items-center justify-center border border-dashed border-ink/25 bg-sand/40 p-4 text-center text-xs font-semibold text-stone ${className}`}
    >
      Imagen: {label}
    </div>
  )
}

function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`font-serif text-[32px] leading-normal font-bold text-black sm:text-[48px] ${className}`}>
      {children}
    </h2>
  )
}

export default function AlhamaDeMurcia() {
  useEffect(() => {
    document.title = 'Reformas en Alhama de Murcia | Reformas Grubek'
  }, [])

  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Header navLinks={navLinks} background="bg-surface-warm" />

      {/* El diseño está trazado sobre 1280x1080: header (70) + hero (1010) = una pantalla. */}
      <main>
        <section
          id="inicio"
          className="relative mt-18 flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center bg-ink px-5 py-20 text-center text-white sm:px-8 lg:px-20"
        >
          <h1 className="max-w-4xl font-serif text-[40px] leading-normal font-bold tracking-[-0.03em] sm:text-[64px]">
            Reformas Alhama de Murcia
          </h1>
          <p className="mt-6 max-w-209.75 text-lg leading-relaxed text-white/80 sm:text-xl">
            Más de 10 años de experiencia en reformas e instalaciones en viviendas y negocios.
          </p>
          <a
            className="button-primary mt-10 min-h-13.5 px-8 text-lg sm:text-xl"
            href={contact.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon /> Pide presupuesto gratis
          </a>

          <a
            href="#servicios"
            aria-label="Ir a servicios"
            className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-white focus-visible:text-white focus-visible:outline-none sm:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2" d="m2 7l10 10L22 7" />
            </svg>
          </a>
        </section>

        {/* Sección 3: 1080 de alto en el diseño, es decir otra pantalla completa. */}
        <section id="servicios" className="flex flex-col justify-center bg-surface py-26 lg:min-h-svh">
          <div className="container-page">
            <SectionHeading className="tracking-[-0.03em]">Servicios</SectionHeading>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {servicios.map((servicio) => (
                <article key={servicio} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                  <PlaceholderImage label={servicio} className="aspect-[508/281] w-full" />
                  <p className="p-4 text-lg text-ink sm:text-xl">{servicio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-surface-warm py-26">
          <div className="container-page">
            <SectionHeading className="tracking-[-0.03em]">Proyectos</SectionHeading>

            <div className="mt-10 space-y-20">
              {proyectos.map((proyecto) => (
                <div
                  key={proyecto.title}
                  className={`grid items-center gap-9 lg:gap-[35px] ${
                    proyecto.imagenPrimero
                      ? 'lg:grid-cols-[820fr_266fr]'
                      : 'lg:grid-cols-[266fr_820fr]'
                  }`}
                >
                  <PlaceholderImage
                    label={proyecto.title}
                    className={`aspect-[820/461] w-full rounded-2xl ${proyecto.imagenPrimero ? '' : 'lg:order-2'}`}
                  />
                  <p
                    className={`text-2xl leading-normal text-black sm:text-[32px] ${
                      proyecto.imagenPrimero ? '' : 'lg:order-1'
                    }`}
                  >
                    {proyecto.title}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-20 text-center text-base text-stone">
              Para ver más proyectos{' '}
              <a
                href={contact.whatsappLink}
                className="font-semibold text-clay underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                contáctame
              </a>
            </p>
          </div>
        </section>

        <section id="zona" className="bg-surface py-26">
          <div className="container-page">
            <SectionHeading>Zona de trabajo</SectionHeading>

            <div className="relative mt-10">
              <PlaceholderImage label="Mapa zona de trabajo" className="aspect-[1120/880] w-full rounded-2xl" />

              {/* Pins colocados como en el diseño, en % sobre la caja del mapa. */}
              {zonas.map((zona) => (
                <div
                  key={zona.name}
                  className="absolute hidden w-[15.98%] flex-col items-center md:flex"
                  style={{ left: zona.left, top: zona.top }}
                >
                  <div className="flex h-[79px] w-full items-center justify-center rounded-2xl border border-ink/10 bg-white px-3 text-center text-sm font-semibold text-ink shadow-sm lg:text-base">
                    {zona.name}
                  </div>
                  <div className="h-[50px] w-px bg-ink/40" />
                </div>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-3 md:hidden">
              {zonas.map((zona) => (
                <li
                  key={zona.name}
                  className="rounded-full border border-ink/15 bg-sand/60 px-4 py-2 text-sm font-semibold text-ink"
                >
                  {zona.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contacto" className="bg-clay py-26 text-white">
          <div className="container-page text-center">
            <h2 className="mx-auto max-w-3xl font-serif text-[32px] leading-normal font-bold sm:text-[48px]">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-lg text-white/85 sm:text-xl">
              Cuéntame qué necesitas y hablamos directamente.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-white px-6 text-lg font-bold text-ink transition hover:bg-cream focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-clay focus-visible:outline-none"
                href={contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Escribir por WhatsApp
              </a>
              <a
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/40 px-6 text-lg font-bold text-white transition hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-clay focus-visible:outline-none"
                href={contact.phoneLink}
              >
                <PhoneIcon /> {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileContactNav />
    </div>
  )
}
