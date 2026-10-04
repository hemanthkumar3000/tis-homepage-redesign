import { Award, Star, Trophy, Users } from 'lucide-react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const rankings = [
  {
    position: 'Top 5',
    scope: 'Boarding Schools in Dehradun',
    icon: Trophy,
    accent: 'bg-forest',
  },
  {
    position: 'Top 10',
    scope: 'CBSE Schools in Uttarakhand',
    icon: Award,
    accent: 'bg-gold',
  },
  {
    position: 'Top 20',
    scope: 'Boarding Schools in North India',
    icon: Star,
    accent: 'bg-clay',
  },
  {
    position: 'Top 50',
    scope: 'CBSE Schools in India',
    icon: Users,
    accent: 'bg-[#506B55]',
  },
]

const achievements = [
  {
    title: 'Academic excellence',
    description:
      'Consistently strong board results, with students securing admissions to top universities and institutions across India and beyond.',
  },
  {
    title: 'Sporting success',
    description:
      'Students representing the school at state and national levels, earning medals and recognition in multiple Olympic sports.',
  },
  {
    title: 'Creative recognition',
    description:
      'Awards and performances in music, art, theatre, and cultural events that celebrate expression and originality.',
  },
]

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="overflow-hidden bg-cream px-5 py-20 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[0.18em] text-clay">
            RECOGNISED FOR EXCELLENCE
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
            A record of
            <span className="italic text-clay"> meaningful achievement.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70">
            Tulas International School is recognised for its balanced approach to
            academics, sport, creativity, and character development—helping students
            stand out in ways that matter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map(({ position, scope, icon: Icon, accent }, index) => (
            <Reveal key={scope} delay={0.06 * (index + 1)}>
              <div className="group h-full rounded-2xl border border-forest/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent} text-cream transition duration-300 group-hover:rotate-6`}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>

                <p className="font-display mt-6 text-3xl text-forest">
                  {position}
                </p>

                <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.12em] text-ink/60">
                  {scope}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="font-display text-3xl text-forest sm:text-4xl">
                Student
                <span className="italic text-clay"> achievements.</span>
              </h3>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink/70">
                Beyond rankings, the most important achievements happen in classrooms,
                on fields, on stages, and in everyday moments of growth.
              </p>
            </Reveal>

            <div className="mt-8 space-y-6">
              {achievements.map((item) => (
                <Reveal key={item.title} delay={0.06}>
                  <div className="rounded-2xl border border-forest/10 bg-white p-5 transition hover:bg-forest/5">
                    <h4 className="font-display text-xl text-forest">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-ink/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal direction="left" delay={0.12}>
              <div className="h-full rounded-[2rem] bg-forest p-7 text-cream sm:p-10">
                <p className="text-xs font-extrabold tracking-[0.18em] text-gold">
                  WHY PARENTS CHOOSE TIS
                </p>

                <h4 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
                  A school that sees
                  <span className="block italic text-gold">
                    the whole child.
                  </span>
                </h4>

                <ul className="mt-8 space-y-4">
                  {[
                    'A safe, nurturing boarding environment',
                    'Strong academics with individual attention',
                    'A wide range of sports and co-curricular options',
                    'Mentorship that builds confidence and character',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                      <p className="text-sm leading-7 text-white/80">{point}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button href="#admissions">Talk to admissions</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}