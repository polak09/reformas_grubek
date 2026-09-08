import Gallery from '../components/ImageGallery'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileContactNav from '../components/layout/MobileContactNav'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import PhoneIcon from '../components/icons/PhoneIcon'
import { contact } from '../lib/contact'
import danielImage from '../assets/hero/danie_img.jpeg'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#zona', label: 'Zona' },
  { href: '#contacto', label: 'Contacto' },
]

const services = [
  {
    number: '01',
    title: 'Reformas',
    items: ['Reformas integrales', 'Reformas de baños', 'Reformas de interiores'],
  },
  {
    number: '02',
    title: 'Acabados',
    items: ['Pintura interior y exterior', 'Alisado y azulejos', 'Pladur'],
  },
  {
    number: '03',
    title: 'Instalaciones',
    items: ['Fontanería y electricidad', 'Puertas y ventanas', 'Falsos techos y paneles sándwich'],
  },
  {
    number: '04',
    title: 'Exterior',
    items: ['Jardinería', 'Trabajos de exterior'],
  },
]

const reasons = [
  ['+10', 'años de experiencia'],
  ['REAL', 'No te intento vender la moto'],
  ['+20', 'clientes satisfechos'],
]

const steps = [
  ['01', 'Cuéntame qué necesitas', 'Contacta por WhatsApp o teléfono y explícame tu idea.'],
  ['02', 'Valoramos el proyecto', 'Según el trabajo, se acordamos una visita y revisamos lo necesario.'],
  ['03', 'Recibes tu presupuesto', 'Preparo un presupuesto adaptado al trabajo.'],
  ['04', 'Realizo la reforma', 'Plasmo tu visión en la realidad.'],
]

export default function Home() {
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Header navLinks={navLinks} />

      <main>
        <section id="inicio" className="relative border-b border-ink/10 bg-cream pt-18">
          <div className="container-page grid items-stretch gap-10 py-12 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="flex max-w-2xl flex-col justify-center">
              <p className="eyebrow">Alhama de Murcia y alrededores</p>
              <h1 className="text-4xl leading-[0.96] font-black tracking-[-0.035em] sm:text-6xl lg:text-7xl">Reformas en Alhama de Murcia</h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">Soy Daniel, profesional con +10 años de experiencia realizando reformas e instalaciones. <br />Trato directo, materiales gestionados personalmente y presupuesto sin compromiso.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary text-md" href={contact.whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> Hablar por WhatsApp</a>
                <a className="button-secondary text-md" href={contact.phoneLink}><PhoneIcon /> Llamar ahora</a>
              </div>
              <p className="mt-8 text-sm font-semibold text-stone">+10 años de experiencia <span className="mx-2 text-clay">•</span> Presupuesto sin compromiso</p>
            </div>

            <div className="relative min-h-90 overflow-hidden rounded-3xl p-6 sm:min-h-125 lg:min-h-full max-w-xl lg:max-w-full">
              <img
                src={danielImage}
                alt="Daniel Kucmierz"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative flex h-full flex-col justify-end text-black">
                <div className="max-w-72 rounded-full bg-white/20 backdrop-blur-lg px-6 py-2">
                  <p className="text-2xl leading-tight font-bold sm:text-3xl">Daniel Kucmierz</p>
                  <p className="text-xs font-bold tracking-[0.18em] text-ink uppercase">Profesional de reformas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section-space bg-white">
          <div className="container-page">
            <p className="eyebrow">Servicios</p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="section-title">Todo lo necesario para renovar tu espacio.</h2>
            </div>
            <div className="mt-12 grid overflow-hidden rounded-2xl border border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="group min-h-65 border-b border-ink/10 p-6 last:border-b-0 sm:odd:border-r sm:nth-[n+3]:border-b-0 lg:border-r lg:nth-2:border-r lg:nth-3:border-r lg:nth-4:border-r-0">
                  <p className="text-sm font-bold text-clay">{service.number}</p>
                  <h3 className="mt-9 text-2xl font-bold tracking-[-0.04em]">{service.title}</h3>
                  <ul className="mt-5 space-y-2 text-md leading-relaxed text-stone">
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trabajos" className="section-space border-y border-ink/10 bg-sand/60">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Trabajos realizados</p>
                <h2 className="section-title">El resultado se ve en cada detalle.</h2>
              </div>
            </div>
            <Gallery />
            <p className="mt-8 text-sm font-semibold text-stone text-center ">Si quieres ver más trabajos escríbeme a <a href={contact.whatsappLink} className="text-clay underline" target="_blank" rel="noopener noreferrer">whatsapp</a>.</p>
          </div>
        </section>

        <section className="section-space bg-ink text-white">
          <div className="container-page">
            <p className="eyebrow text-[#ee9877] before:bg-[#ee9877]">Por qué elegirme</p>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
              <h2 className="text-4xl leading-[1.04] font-bold tracking-tighter sm:text-6xl">Trato directo, de principio a fin.</h2>
              <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3">
                {reasons.map(([number, label]) => (
                  <div key={label} className="min-h-40 bg-ink p-5 sm:p-6">
                    <p className="text-4xl font-bold tracking-[-0.06em] text-[#ee9877]">{number}</p>
                    <p className="mt-5 text-sm leading-relaxed text-white/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="section-space bg-white">
          <div className="container-page">
            <p className="eyebrow">Cómo trabajo</p>
            <h2 className="section-title">Claro desde el primer contacto.</h2>
            <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {steps.map(([number, title, text]) => (
                <li key={number} className="grid gap-3 py-6 sm:grid-cols-[6rem_1fr_1fr] sm:gap-6 sm:py-8">
                  <span className="font-bold text-clay">{number}</span>
                  <h3 className="text-xl font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="text-md leading-relaxed text-stone">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="zona" className="section-space bg-sand/60">
          <div className="container-page grid gap-9 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Zona de trabajo</p>
              <h2 className="section-title">Reformas en Alhama de Murcia y alrededores.</h2>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-7 sm:p-10">
              <p className="text-xl leading-relaxed font-medium tracking-tight">Trabajo principalmente en <strong>Alhama de Murcia</strong>, puedo desplazarme a Totana, Condado de Alhama, Camposol y localidades cercanas según el tipo de trabajo.</p>
              <p className="mt-5 text-md leading-relaxed text-stone">Cuéntame qué necesitas y valoro la disponibilidad para tu zona.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="section-space bg-clay text-white">
          <div className="container-page text-center">
            <p className="mx-auto w-fit text-xs font-bold tracking-[0.18em] uppercase">Presupuesto sin compromiso</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.03] font-bold tracking-[-0.055em] sm:text-6xl">¿Tienes un proyecto en mente?</h2>
            <p className="mx-auto mt-5 max-w-xl text-white/85">Cuéntame qué necesitas y hablamos directamente.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-md font-bold text-ink transition hover:bg-cream focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-clay focus-visible:outline-none" href={contact.whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> Escribir por WhatsApp</a>
              <a className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/40 px-6 text-md font-bold text-white transition hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-clay focus-visible:outline-none" href={contact.phoneLink}><PhoneIcon /> {contact.phoneDisplay}</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileContactNav />
    </div>
  )
}
