import {
  ArrowUpRight,
  BedDouble,
  HeartPulse,
  Palette,
  Trees,
} from 'lucide-react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const campusImage =
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85'

const facilities = [
  {
    title: 'A home away from home',
    description:
      'Comfortable boarding spaces, caring mentors, and a routine that helps students feel secure and independent.',
    icon: BedDouble,
    accent: 'bg-clay',
  },
  {
    title: 'Wellbeing comes first',
    description:
      'A supportive environment with pastoral care, health support, and space for every student to be heard.',
    icon: HeartPulse,
    accent: 'bg-gold',
  },
  {
    title: 'Creativity in every day',
    description:
      'Music, art, theatre, clubs, and experiences that encourage students to explore what inspires them.',
    icon: Palette,
    accent: 'bg-forest',
  },
  {
    title: 'Room to grow',
    description:
      'A green campus designed for learning, friendship, reflection, play, and meaningful discovery.',
    icon: Trees,
    accent: 'bg-[#506B55]',
  },
]

export default function CampusLifeSection() {
  return (
    <section
      id="campus-life"
      className="overflow-hidden bg-[#efe8da] px-5 py-20 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-extrabold tracking-[0.18em] text-clay">
                CAMPUS LIFE AT TIS
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
                More than a campus.
                <span className="italic text-clay"> A place to belong.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <p className="max-w-md text-base leading-8 text-ink/70 lg:pb-2">
              The most important learning happens between lessons too—through
              friendships, shared experiences, creativity, challenge, and a strong
              sense of belonging.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-7">
          <Reveal direction="right">
            <article className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-forest-dark sm:min-h-[620px]">
              <img
                src={campusImage}
                alt="Modern school campus building surrounded by open space"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07190f]/90 via-[#07190f]/15 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-cream backdrop-blur-md sm:left-8 sm:top-8">
                DEHRADUN, UTTARAKHAND
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream sm:p-8">
                <p className="text-xs font-extrabold tracking-[0.16em] text-gold">
                  LIFE BEYOND LESSONS
                </p>

                <h3 className="font-display mt-3 max-w-lg text-3xl leading-tight sm:text-4xl">
                  Every day brings a new opportunity to learn, lead, and live fully.
                </h3>

                <a
                  href="#sports"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-cream transition hover:text-gold"
                >
                  Explore student life
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {facilities.map((facility, index) => {
              const Icon = facility.icon

              return (
                <Reveal
                  key={facility.title}
                  direction="left"
                  delay={0.08 * (index + 1)}
                >
                  <article className="group h-full rounded-[1.5rem] border border-forest/10 bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${facility.accent} text-cream transition duration-300 group-hover:rotate-6`}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </div>

                    <h3 className="font-display mt-6 text-2xl text-forest">
                      {facility.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-ink/65">
                      {facility.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="grid overflow-hidden rounded-[2rem] bg-forest text-cream lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-56 flex-col justify-between bg-clay p-7 sm:p-10">
              <p className="text-xs font-extrabold tracking-[0.18em] text-white/75">
                BOARDING AT TIS
              </p>

              <p className="font-display mt-10 text-4xl leading-none sm:text-5xl">
                A community
                <span className="block italic text-gold">that feels like home.</span>
              </p>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <blockquote className="font-display max-w-2xl text-2xl leading-snug sm:text-3xl">
                “Students grow most when they feel safe enough to be themselves and
                supported enough to become more.”
              </blockquote>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-lg text-sm leading-7 text-white/70">
                  A balanced routine of academics, sport, rest, creativity, and
                  mentorship helps students build independence with confidence.
                </p>

                <Button href="#admissions" className="shrink-0">
                  Talk to admissions
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}