import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesSection } from "@/components/home/services-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ClientsSection } from "@/components/home/clients-section"
import { BlogSection } from "@/components/home/blog-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
        {/* <ClientsSection /> */}
        {/* <TestimonialsSection /> */}
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
