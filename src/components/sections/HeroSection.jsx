import { motion } from 'framer-motion'
import { ArrowDown, Award, GraduationCap, Trophy } from 'lucide-react'
import Button from '../ui/Button'

const heroImage ='images/hero/hero.jpg'
const stats = [
  { value: '22', label: 'Acre green campus', icon: GraduationCap },
  { value: '16+', label: 'Olympic sports', icon: Trophy },
  { value: '6:1', label: 'Student-teacher ratio', icon: Award },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[780px] overflow-hidden bg-forest-dark text-cream lg:min-h-screen"
    >
      <img
        src={heroImage}
        alt="Students learning together in a bright academic setting"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07190f]/95 via-[#0b251b]/75 to-[#0b251b]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07190f]/90 via-transparent to-[#07190f]/20" />

      <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-gold/30 sm:h-96 sm:w-96" />
      <div className="absolute -right-12 top-40 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />

      <div className="mx-auto flex min-h-[780px] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:pb-12 lg:min-h-screen lg:px-8 lg:pb-14">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-gold backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-gold" />
            DEHRADUN · EST. 2012
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-4 text-sm font-bold tracking-[0.18em] text-white/75 sm:text-base"
          >
            A HOME FOR AMBITION
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="font-display max-w-3xl text-5xl leading-[0.94] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Let&apos;s do it
            <span className="block italic text-gold">with Tulas.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg"
          >
            Where curious minds become confident individuals—through exceptional
            academics, world-class sport, creativity, and a community built for more.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#admissions">Book a campus visit</Button>
            <Button href="#about" variant="secondary">
              Explore TIS
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85 }}
          className="mt-14 grid gap-3 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20"
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 py-2 sm:px-6 sm:first:pl-0">
              <Icon size={22} className="text-gold" aria-hidden="true" />
              <div>
                <p className="font-display text-3xl leading-none text-cream">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 right-5 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition hover:text-gold lg:flex"
      >
        Scroll to discover
        <ArrowDown size={17} aria-hidden="true" />
      </a>
    </section>
  )
}