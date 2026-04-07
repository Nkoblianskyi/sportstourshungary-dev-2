import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { JourneyTimeline } from '@/components/home/journey-timeline'
import { ToursPreview } from '@/components/home/tours-preview'
import { InteractiveExperience } from '@/components/home/interactive-experience'
import { TravelTips } from '@/components/home/travel-tips'
import { FAQSection } from '@/components/home/faq-section'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <JourneyTimeline />
      <ToursPreview />
      <InteractiveExperience />
      <TravelTips />
      <FAQSection />
      <Footer />
    </main>
  )
}
