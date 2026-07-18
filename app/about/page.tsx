"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowUpRight, Target, Eye, Compass } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Navbar />
      
      <main className="flex-1">
        {/* Luxury Hero Section */}
        <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero_interior.png"
              alt="Luxury office workspace background"
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-white/15 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 rounded-full"
            >
              Our Profile
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl font-light tracking-wide uppercase leading-tight"
            >
              About Smart Engineers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-xs sm:text-sm font-light leading-relaxed uppercase tracking-[0.2em] text-white/80"
            >
              Design &bull; Build &bull; Deliver &bull; Over two decades of engineering excellence
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 sm:py-32 bg-[#FAF9F6] text-[#0a0a0a] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Story text */}
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <span className="inline-block border border-[#0a0a0a]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-[#0a0a0a]/60 rounded-full">
                    Our Journey
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-snug tracking-wide">
                    Over Two Decades of Engineering Excellence
                  </h2>
                </div>
                
                <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/75">
                  Smart Engineers began with a simple vision: to bridge the gap between architectural imagination and engineering reality. Founded in 2004, we have grown from a small consultancy into a full-service design and construction firm, transforming spaces across Surendranagar and wider Gujarat.
                </p>
                <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/70">
                  Our journey has been defined by a relentless pursuit of quality and a commitment to our clients. Every project we undertake is a testament to our dedication to craftsmanship, structural integrity, and sustainable, modern design patterns.
                </p>

                <div className="pt-4">
                  <Link 
                    href="/projects" 
                    className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium py-3 border-b border-[#0a0a0a]/10 transition-all duration-300 hover:border-[#0a0a0a]"
                  >
                    Explore Our Projects
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0a0a0a]/10 transition-all duration-300 group-hover:border-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[1.3] w-full overflow-hidden border border-[#0a0a0a]/5 bg-white">
                  <Image
                    src="/images/about_interior.png"
                    alt="Bespoke luxury interior construction layout"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-24 sm:py-32 bg-white text-[#0a0a0a] border-t border-[#0a0a0a]/5 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-4">
              <span className="inline-block border border-[#0a0a0a]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-[#0a0a0a]/60 rounded-full">
                Core Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide">
                Values Driving Our Creations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  icon: Target,
                  title: "Our Mission",
                  text: "To provide world-class architectural and engineering solutions that exceed client expectations through innovation, integrity, and absolute engineering precision."
                },
                {
                  num: "02",
                  icon: Eye,
                  title: "Our Vision",
                  text: "To be the most trusted and innovative construction partner in Gujarat, known for creating sustainable, safe, and timeless luxury structures."
                },
                {
                  num: "03",
                  icon: Compass,
                  title: "Our Values",
                  text: "We believe in complete transparency, technical detail, and cooperative design. Every detail matters, and every client is a vital partner in construction."
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-[#FAF9F6] border border-[#0a0a0a]/5 p-10 flex flex-col justify-between space-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#0a0a0a]/10 bg-white">
                      <item.icon className="h-5 w-5 text-[#0a0a0a]" />
                    </div>
                    <span className="font-serif text-sm text-[#0a0a0a]/20 font-light">{item.num}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-light tracking-wide">{item.title}</h3>
                    <p className="text-xs font-light leading-relaxed text-[#0a0a0a]/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Stats Section */}
        <section className="bg-[#0a0a0a] text-white py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { count: "10+", label: "Years Experience" },
                { count: "250+", label: "Happy Clients" },
                { count: "100%", label: "Completion Rate" },
                { count: "Gujarat", label: "Region Covered" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="font-serif text-3xl sm:text-5xl font-light text-white">{stat.count}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
