import ContactHeroSection from "@/components/contact-hero-section"
import ContactFormSection from "@/components/contact-form-section"
import Navbar from "@/components/navbar"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
        <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
       <FaqSection />
            <ContactSection />
            <FooterSection />
    </main>
  )
}
