import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'
import { navigationItems } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-dark text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#top"
              className="group flex items-center gap-3 text-cream"
              aria-label="Tulas International School home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 font-display text-lg italic transition duration-300 group-hover:border-gold group-hover:text-gold">
                T
              </span>

              <span className="leading-tight">
                <span className="block text-sm font-extrabold tracking-[0.18em]">
                  TULAS
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.14em] text-white/60">
                  INTERNATIONAL SCHOOL
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7">
              A leading boarding and day school in Dehradun, focused on academics,
              sport, creativity, and character.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
              >
                <Youtube size={18} aria-hidden="true" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-cream">
              Quick links
            </p>

            <ul className="mt-4 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-cream">
              Admissions
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="tel:+919837983791" className="hover:text-cream">
                  +91-9837983791
                </a>
              </li>
              <li>
                <a href="mailto:admissions@tis.edu.in" className="hover:text-cream">
                  admissions@tis.edu.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-cream">
              Contact
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href="tel:+919837983791" className="hover:text-cream">
                  +91-9837983791
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>Tulas International School, Dehradun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} Tulas International School. All rights
            reserved.
          </p>

          <p className="text-white/50">
            This is a frontend assessment project inspired by TIS.
          </p>
        </div>
      </div>
    </footer>
  )
}