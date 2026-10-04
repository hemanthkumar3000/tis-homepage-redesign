import { BookOpen, GraduationCap, Medal, Users } from 'lucide-react'
import Reveal from '../animation/Reveal'
import StatCard from '../ui/StatCard'
import Button from '../ui/Button'

const stats = [
  { value: '22', label: 'Acre green campus', icon: GraduationCap },
  { value: '16+', label: 'Olympic sports', icon: Medal },
  { value: '6:1', label: 'Student-teacher ratio', icon: Users },
  { value: '24/7', label: 'Medical assistance', icon: BookOpen },
]

const academics = [
  {
    title: 'CBSE curriculum',
    description:
      'A rigorous, nationally recognised curriculum that builds strong academic foundations and prepares students for board exams and beyond.',
  },
  {
    title: 'Personalised learning',
    description:
      'Small class sizes and attentive mentoring help every student progress at the right pace, with support and challenge.',
  },
  {
    title: 'Beyond the classroom',
    description:
      'Leadership opportunities, clubs, service, and projects help students apply learning in real-world contexts.',
  },
]

const academicImage =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85'

export default function AcademicsSection() {
  return (
    <section
      id="academics"
      className="overflow-hidden bg-forest-dark px-5 py-20 text-cream sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[0.18em] text-gold">
            THE TULAS DIFFERENCE
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            An education that
            <span className="italic text-gold"> goes deeper.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Tulas International School combines academic rigour with holistic
            development. Students learn to think critically, communicate clearly, and
            contribute meaningfully to the world around them.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <StatCard
              key={label}
              value={value}
              label={label}
              icon={Icon}
              delay={0.06 * (index + 1)}
            />
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h3 className="font-display text-3xl text-cream sm:text-4xl">
                Academics that prepare
                <span className="italic text-gold"> for more.</span>
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                Our CBSE programme is designed to build strong fundamentals while
                encouraging curiosity, creativity, and independent thinking.
              </p>
            </Reveal>

            <div className="mt-8 space-y-6">
              {academics.map((item) => (
                <Reveal key={item.title} delay={0.06}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                    <h4 className="font-display text-xl text-cream">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <div className="mt-9">
                <Button href="#campus-life" variant="primary">
                  Explore academics
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.12}>
            <div className="relative overflow-hidden rounded-[2rem] bg-white/10">
              <img
                src={academicImage}
                alt="Students engaged in a classroom learning activity"
                className="aspect-[4/5] w-full object-cover opacity-90 transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-white/10 p-4 text-cream backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <p className="text-xs font-extrabold tracking-[0.14em] text-gold">
                  ACADEMIC EXCELLENCE
                </p>
                <p className="mt-1 text-sm leading-6 text-white/85">
                  Strong foundations, real-world application, and a focus on growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}