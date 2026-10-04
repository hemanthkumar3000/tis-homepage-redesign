import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import AboutSection from './components/sections/AboutSection'
import AcademicsSection from './components/sections/AcademicsSection'
import AchievementsSection from './components/sections/AchievementsSection'
import AdmissionsSection from './components/sections/AdmissionsSection'
import CampusLifeSection from './components/sections/CampusLifeSection'
import HeroSection from './components/sections/HeroSection'
import SportsSection from './components/sections/SportsSection'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <CampusLifeSection />
        <SportsSection />
        <AchievementsSection />
        <AdmissionsSection />
      </main>

      <Footer />
    </>
  )
}