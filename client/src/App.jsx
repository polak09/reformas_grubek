import './App.css'
import Gallery from './components/ImageGallery'
import danielImage from "./assets/hero/danie_img.jpeg";

const contact = {
  phoneDisplay: '+34 643 93 26 83',
  phoneLink: 'tel:+34643932683',
  whatsappLink: 'https://wa.me/34643932683',
}

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

function WhatsAppIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
        </svg>

}

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path fill="currentColor" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98" />
        </svg>

}

function App() {
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <div className="container-page flex min-h-18 items-center justify-between gap-5"></div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream">
        <div className="container-page flex min-h-18 items-center justify-between gap-5">
          <a href="#inicio" className="text-sm font-black tracking-[-0.04em] focus-visible:ring-3 focus-visible:ring-clay/35 focus-visible:outline-none">
          REFORMAS <span className="text-clay">GRUBEK</span>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 text-sm font-semibold text-stone lg:flex">
            <a className="hover:text-ink focus-visible:text-ink focus-visible:outline-none" href="#servicios">Servicios</a>
            <a className="hover:text-ink focus-visible:text-ink focus-visible:outline-none" href="#trabajos">Trabajos</a>
            <a className="hover:text-ink focus-visible:text-ink focus-visible:outline-none" href="#zona">Zona</a>
            <a className="hover:text-ink focus-visible:text-ink focus-visible:outline-none" href="#contacto">Contacto</a>
          </nav>
          <a className="button-primary min-h-10 px-4 text-xs" href={contact.whatsappLink} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">
          <WhatsAppIcon /> WhatsApp
          </a> 
        </div>
      </header>

      <main>
        <section id="inicio" className="relative border-b border-ink/10 bg-cream">
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

      <footer className="bg-ink py-9 text-white">
        <div className="container-page flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">REFORMAS <span className="text-clay">GRUBEK</span></p>
          <p className="text-white/60">Alhama de Murcia · Región de Murcia</p>
          <a className="font-semibold underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none" href={contact.phoneLink}>{contact.phoneDisplay}</a>
        </div>
      </footer>

      <nav aria-label="Contacto rápido" className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-2 border-t border-ink/15 bg-white p-2 shadow-[0_-8px_25px_rgba(36,36,33,0.08)] md:hidden">
        <a className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-clay text-sm font-bold text-white focus-visible:ring-3 focus-visible:ring-clay/35 focus-visible:outline-none" href={contact.whatsappLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a>
        <a className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold text-ink focus-visible:ring-3 focus-visible:ring-clay/35 focus-visible:outline-none" href={contact.phoneLink}><PhoneIcon /> Llamar</a>
      </nav>
    </div>
  )
}

export default App
