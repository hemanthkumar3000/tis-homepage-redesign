import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'

function PlaceholderSection({ id, title, description }) {
  return (
    <section id={id} className="bg-cream px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold tracking-[0.16em] text-clay">
          TULAS INTERNATIONAL SCHOOL
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl text-forest sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-ink/70">
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

        <PlaceholderSection
          id="about"
          title="A future-ready education, rooted in purpose."
          description="This section will introduce the TIS philosophy, its boarding-school environment, and its approach to developing confident, capable learners."
        />

        <PlaceholderSection
          id="academics"
          title="Academics that turn curiosity into capability."
          description="This will become the academic excellence section."
        />

        <PlaceholderSection
          id="campus-life"
          title="More than a campus. A place to belong."
          description="This will become the campus life and facilities section."
        />

        <PlaceholderSection
          id="sports"
          title="Train with purpose. Compete with heart."
          description="This will become the sports showcase section."
        />

        <PlaceholderSection
          id="achievements"
          title="Recognised for excellence."
          description="This will become the rankings and achievements section."
        />

        <PlaceholderSection
          id="admissions"
          title="Your Tulas journey starts here."
          description="This will become the high-conversion admissions call-to-action section."
        />
      </main>
    </>
  )
}