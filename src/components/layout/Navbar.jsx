import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navigationItems } from '../../data/navigation'
import Button from '../ui/Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="group flex items-center gap-3 text-cream"
          aria-label="Tulas International School home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 font-display text-xl italic transition duration-300 group-hover:border-gold group-hover:text-gold">
            T
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-[0.18em]">
              TULAS
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.14em] text-white/70">
              INTERNATIONAL SCHOOL
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-white/80 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}

          <Button href="#admissions" className="ml-2">
            Enquire now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="rounded-full border border-white/35 p-2.5 text-white transition hover:border-gold hover:text-gold lg:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="mx-5 rounded-3xl border border-white/15 bg-forest-dark/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-bold text-cream transition hover:bg-white/10 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}

              <Button href="#admissions" className="mt-4 w-full" showIcon={false}>
                Enquire now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}