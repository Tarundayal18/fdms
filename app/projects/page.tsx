import ProjectsHeroSection from "@/components/projects-hero-section"
import ProjectsGridSection from "@/components/projects-grid-section"
import Navbar from "@/components/navbar"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <ProjectsHeroSection />
      <ProjectsGridSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
