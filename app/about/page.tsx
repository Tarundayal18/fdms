import AboutHeroSection from "@/components/about-hero-section"
import AICreativitySection from "@/components/ai-creativity-section"
import OurStorySection from "@/components/our-story-section"
import FounderNoteSection from "@/components/founder-note-section"
import Navbar from "@/components/navbar"
import WhyBestSection from "@/components/why-best-section"
import Tesiminiols from "@/components/testiminiols"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHeroSection />
      <OurStorySection />
      <FounderNoteSection />
      <AICreativitySection />
      <WhyBestSection />
      <Tesiminiols />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
