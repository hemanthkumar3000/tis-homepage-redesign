import { ArrowUpRight, Trophy } from 'lucide-react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const sportsImage ='/images/sports/sports.jpg'
const sports = [
  {
    name: 'Swimming',
    image:
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Football',
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Archery',
    image:
      'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Shooting',
    image:
      'https://images.unsplash.com/photo-1555662795-4585961d877e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Horse Riding',
    image:
      'https://images.unsplash.com/photo-1551884831-bbf3ddd77535?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Cricket',
    image:
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Tennis',
    image:
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Basketball',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85',
  },
]

export default function SportsSection() {
  return (
    <section
      id="sports"
      className="overflow-hidden bg-forest-dark px-5 py-20 text-cream sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-extrabold tracking-[0.18em] text-gold">
                SPORTS AT TULAS
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Train with purpose.
                <span className="italic text-gold"> Compete with heart.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <p className="max-w-md text-base leading-8 text-white/70 lg:pb-2">
              Sport is central to the TIS experience—teaching discipline, teamwork,
              resilience, and leadership that extend far beyond the field.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sports.map((sport, index) => (
            <Reveal key={sport.name} delay={0.06 * (index + 1)}>
              <article className="group relative h-64 overflow-hidden rounded-2xl bg-forest">
                <img
                  src={sport.image}
                  alt={`${sport.name} activity at Tulas International School`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-xl text-cream">
                    {sport.name}
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-white/70">
                    <Trophy size={14} aria-hidden="true" />
                    <span>OLYMPIC SPORT</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#0a2216]">
          <div className="grid gap-8 p-7 sm:gap-12 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <p className="text-xs font-extrabold tracking-[0.18em] text-gold">
                  BEYOND COMPETITION
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h3 className="font-display mt-5 max-w-2xl text-3xl leading-tight text-cream sm:text-4xl">
                  Sport that builds character,
                  <span className="italic text-gold"> not just trophies.</span>
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  From training routines to inter-house events, students learn to
                  handle pressure, celebrate effort, and grow through wins and
                  setbacks alike.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8">
                  <Button href="#achievements" variant="primary">
                    See our achievements
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" delay={0.12}>
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl bg-forest sm:min-h-[260px]">
                <img
                  src={sportsImage}
                  alt="Students training in a sports field"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-extrabold tracking-[0.14em] text-gold">
                    16+ SPORTS
                  </p>
                  <p className="mt-2 font-display text-2xl leading-snug text-cream">
                    A culture of sport where every student finds their game.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="flex items-center justify-between border-t border-white/15 pt-8">
            <p className="text-sm font-bold text-white/70">
              Including archery, swimming, football, shooting, horse riding,
              cricket, tennis, basketball, and more.
            </p>

            <a
              href="#achievements"
              className="hidden items-center gap-2 text-sm font-extrabold tracking-[0.14em] text-gold transition hover:text-cream lg:flex"
            >
              Explore achievements
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}