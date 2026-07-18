import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesSection } from "@/components/home/services-section"
import { AchievementsSection } from "@/components/home/achievements-section"
import { BlogSection } from "@/components/home/blog-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <ServicesSection />
        {/* <AchievementsSection /> */}
        <BlogSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
