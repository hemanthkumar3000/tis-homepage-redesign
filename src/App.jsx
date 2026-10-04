import Navbar from './components/layout/Navbar'
import AboutSection from './components/sections/AboutSection'
import HeroSection from './components/sections/HeroSection'

function PlaceholderSection({ id, title, description, dark = false }) {
  return (
    <section
      id={id}
      className={`px-5 py-24 lg:px-8 ${
        dark ? 'bg-forest-dark text-cream' : 'bg-cream text-forest'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <p className={`text-xs font-extrabold tracking-[0.16em] ${dark ? 'text-gold' : 'text-clay'}`}>
          TULAS INTERNATIONAL SCHOOL
        </p>

        <h2 className="font-display mt-4 max-w-2xl text-4xl sm:text-5xl">
          {title}
        </h2>

        <p className={`mt-5 max-w-xl text-base leading-7 ${dark ? 'text-white/70' : 'text-ink/70'}`}>
          {description}
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <PlaceholderSection
          id="academics"
          title="Academics that turn curiosity into capability."
          description="The next section will introduce the TIS academic experience, curriculum, teaching approach, and opportunities for students."
          dark
        />

        <PlaceholderSection
          id="campus-life"
          title="More than a campus. A place to belong."
          description="The next section will present the campus experience, boarding life, wellbeing, facilities, and creative opportunities."
        />

        <PlaceholderSection
          id="sports"
          title="Train with purpose. Compete with heart."
          description="The next section will showcase the wide variety of sports available at Tulas International School."
          dark
        />

        <PlaceholderSection
          id="achievements"
          title="Recognised for excellence."
          description="The next section will present school rankings, awards, student accomplishments, and trust-building proof points."
        />

        <PlaceholderSection
          id="admissions"
          title="Your Tulas journey starts here."
          description="The final section will become a conversion-focused admissions call-to-action with contact details and enquiry options."
          dark
        />
      </main>
    </>
  )
}