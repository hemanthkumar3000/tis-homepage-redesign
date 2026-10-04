import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const initialFormData = {
  parentName: '',
  childGrade: '',
  email: '',
  phone: '',
  message: '',
}

export default function AdmissionsSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.parentName ||
      !formData.childGrade ||
      !formData.email ||
      !formData.phone
    ) {
      setStatus('error')
      return
    }

    setStatus('success')
    setFormData(initialFormData)
  }

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

              <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="parent-name"
                      className="text-xs font-bold text-white/70"
                    >
                      Parent / Guardian name
                    </label>

                    <input
                      id="parent-name"
                      name="parentName"
                      type="text"
                      value={formData.parentName}
                      onChange={handleChange}
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
                      name="childGrade"
                      type="text"
                      value={formData.childGrade}
                      onChange={handleChange}
                      placeholder="e.g. Class 7"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-white/70">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
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
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to know..."
                    className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-cream placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                {status === 'error' && (
                  <p className="rounded-xl border border-clay/50 bg-clay/15 px-4 py-3 text-sm text-white">
                    Please fill in your name, child&apos;s grade, email, and phone number.
                  </p>
                )}

                {status === 'success' && (
                  <p className="rounded-xl border border-gold/50 bg-gold/15 px-4 py-3 text-sm text-white">
                    Thank you. Your enquiry has been recorded in this demo experience.
                  </p>
                )}

                <Button type="submit" className="mt-2 w-full">
                  Submit enquiry
                </Button>

                <p className="mt-1 text-center text-xs text-white/50">
                  Demo form only. No enquiry data is sent or stored.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}