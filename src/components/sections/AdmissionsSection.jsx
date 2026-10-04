import { Mail, MapPin, Phone } from 'lucide-react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

export default function AdmissionsSection() {
  return (
    <section
      id="admissions"
      className="overflow-hidden bg-forest-dark px-5 py-20 text-cream sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[0.18em] text-gold">
            ADMISSIONS AT TIS
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your Tulas journey
            <span className="block italic text-gold">starts here.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            Admissions are open for prospective students. Our team is happy to guide
            you through the process, answer your questions, and help you discover
            whether TIS is the right fit for your child.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="font-display text-2xl text-cream sm:text-3xl">
                Get in touch
              </h3>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/70">
                Speak directly with our admissions team to learn more about
                programmes, boarding, fees, and the TIS experience.
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              <Reveal delay={0.12}>
                <a
                  href="tel:+919837983791"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-gold transition duration-300 group-hover:bg-gold group-hover:text-forest">
                    <Phone size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/60">
                      Admissions helpline
                    </p>
                    <p className="font-display mt-1 text-xl text-cream">
                      +91-9837983791
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.16}>
                <a
                  href="mailto:admissions@tis.edu.in"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-gold transition duration-300 group-hover:bg-gold group-hover:text-forest">
                    <Mail size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/60">
                      Email
                    </p>
                    <p className="font-display mt-1 text-xl text-cream">
                      admissions@tis.edu.in
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-gold">
                    <MapPin size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/60">
                      Campus
                    </p>
                    <p className="mt-1 text-base leading-7 text-white/80">
                      Tulas International School
                      <br />
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.24}>
              <div className="mt-10">
                <Button href="#top" variant="primary" showIcon={false}>
                  Back to top
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.12}>
            <div className="rounded-[2rem] bg-white/5 p-6 backdrop-blur-md sm:p-8">
              <p className="text-xs font-extrabold tracking-[0.18em] text-gold">
                ENQUIRY FORM
              </p>

              <h4 className="font-display mt-4 text-2xl text-cream sm:text-3xl">
                Tell us about your child
              </h4>

              <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="parent-name"
                      className="text-xs font-bold text-white/70"
                    >
                      Parent / Guardian name
                    </label>
                    <input
                      id="parent-name"
                      type="text"
                      placeholder="Your full name"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="child-grade"
                      className="text-xs font-bold text-white/70"
                    >
                      Current grade
                    </label>
                    <input
                      id="child-grade"
                      type="text"
                      placeholder="e.g. Class 7"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-white/70">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs font-bold text-white/70">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-bold text-white/70">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us what you'd like to know..."
                    className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <Button type="submit" className="mt-2 w-full">
                  Submit enquiry
                </Button>

                <p className="mt-3 text-center text-xs text-white/50">
                  This is a demo form for the assessment.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}