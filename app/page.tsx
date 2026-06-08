import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { MethodSection } from "@/components/method-section"
import { ProgramsSection } from "@/components/programs-section"
import { TeamSection } from "@/components/team-section"
import { ParentsSection } from "@/components/parents-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <MethodSection />
      <ProgramsSection />
      <TeamSection />
      <ParentsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
