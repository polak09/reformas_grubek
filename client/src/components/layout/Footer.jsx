import { contact } from '../../lib/contact'

export default function Footer() {
  return (
    <footer className="bg-ink py-9 text-white">
      <div className="container-page flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold">REFORMAS <span className="text-clay">GRUBEK</span></p>
        <p className="text-white/60">Alhama de Murcia · Región de Murcia</p>
        <a className="font-semibold underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none" href={contact.phoneLink}>{contact.phoneDisplay}</a>
      </div>
    </footer>
  )
}
