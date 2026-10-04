import { ArrowUpRight, CheckCircle2, Play } from 'lucide-react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const aboutImage =
  '/images/about/about.jpg'

const values = [
  'A balanced CBSE curriculum',
  'Personalised mentoring and pastoral care',
  'Leadership through sport, creativity, and service',
]

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-cream px-5 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right" className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-forest-dark">
            <img
              src={aboutImage}
              alt="Students collaborating in a school learning environment"
              className="aspect-[4/5] w-full object-cover opacity-90 transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/15 bg-white/10 p-4 text-cream backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
              <div>
                <p className="text-xs font-extrabold tracking-[0.14em] text-gold">
                  TIS DEHRADUN
                </p>
                <p className="mt-1 max-w-xs text-sm leading-6 text-white/85">
                  A campus where every day opens new possibilities.
                </p>
              </div>

              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-forest-dark transition hover:scale-110 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                aria-label="Play campus video"
              >
                <Play size={17} fill="currentColor" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="absolute -bottom-7 -right-5 hidden rounded-2xl bg-clay px-6 py-5 text-cream shadow-xl sm:block">
            <p className="font-display text-4xl">6:1</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white/80">
              Student-teacher ratio
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-extrabold tracking-[0.18em] text-clay">
              THE TULAS WAY
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 max-w-xl text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
              A place to discover
              <span className="italic text-clay"> who you can become.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
              Tulas International School brings together academic ambition,
              meaningful mentorship, and experiences beyond the classroom. We help
              young people grow with confidence, curiosity, and character.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 space-y-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-clay"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-bold leading-6 text-forest sm:text-base">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9">
              <Button href="#academics" variant="dark">
                Discover our approach
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-16 max-w-7xl lg:mt-24">
        <div className="flex flex-col gap-5 border-y border-forest/15 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-display text-2xl leading-snug text-forest sm:text-3xl">
            “Education is not preparation for life; education is life itself.”
          </p>

          <a
            href="#campus-life"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-clay transition hover:text-forest"
          >
            Explore campus life
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}