import { Link } from 'react-router-dom'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import { contact } from '../../lib/contact'

export default function Header({ homeHref = '/', navLinks, background = 'bg-cream' }) {
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 ${background}`}>
      <div className="container-page flex min-h-18 items-center justify-between gap-5">
        <Link to={homeHref} className="text-sm font-black tracking-[-0.04em] focus-visible:ring-3 focus-visible:ring-clay/35 focus-visible:outline-none">
          REFORMAS <span className="text-clay">GRUBEK</span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 text-sm font-semibold text-stone lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="hover:text-ink focus-visible:text-ink focus-visible:outline-none" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button-primary min-h-10 px-4 text-xs" href={contact.whatsappLink} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">
          <WhatsAppIcon /> WhatsApp
        </a>
      </div>
    </header>
  )
}
