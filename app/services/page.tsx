"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/data/services"
import Image from "next/image"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative h-[70vh] flex items-end overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/service_interior_design.png"
              alt="Smart Engineers services"
              fill
              className="object-cover opacity-45"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-stone-900/50" />
          </div>

          {/* Large watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="font-serif text-[18vw] font-bold text-white/[0.03] uppercase leading-none">
              Services
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.35em] font-medium text-white/60"
                >
                  Our Capabilities
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-5xl sm:text-7xl font-light tracking-wide uppercase text-white leading-[1.05]"
                >
                  Services<br />
                  <span className="text-white/50">We Offer</span>
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="max-w-xs text-xs font-light leading-relaxed text-white/40 sm:text-right"
              >
                End-to-end space planning, architectural drafting, 3D visualization, and structural engineering — delivered with precision and care.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-white border-b border-stone-200 py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-100">
              {[
                { count: "5+", label: "Core Services" },
                { count: "250+", label: "Projects Delivered" },
                { count: "10+", label: "Years Experience" },
                { count: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2 px-4">
                  <div className="font-serif text-3xl sm:text-4xl font-light text-stone-800">{stat.count}</div>
                  <div className="text-[9px] uppercase tracking-[0.25em] text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section ref={ref} className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">

            {/* Section heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">Professional Excellence</span>
                  <div className="h-px w-12 bg-stone-300" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase">
                  Our Service Portfolio
                </h2>
                <p className="text-sm font-light leading-relaxed text-stone-500 max-w-md">
                  Expert solutions to translate architectural concepts into solid, structurally sound, and beautiful living structures.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 border border-stone-200 bg-white px-4 py-2 rounded-full">
                  {services.length} Services
                </span>
              </div>
            </div>

            {/* Grid */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {services.map((service, i) => (
                <motion.div key={service.id} variants={itemVariants}>
                  <ServiceCard service={service} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS STRIP ── */}
        <section className="bg-white border-y border-stone-200 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-center gap-6 mb-14">
              <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">How We Work</span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Consultation", desc: "We begin with a detailed discussion of your vision, requirements, and site conditions." },
                { num: "02", title: "Design & Planning", desc: "Our team drafts precise 2D plans, 3D renders, and structural layouts for your approval." },
                { num: "03", title: "Review & Refine", desc: "We iterate with you until every detail matches your expectations perfectly." },
                { num: "04", title: "Delivery & Support", desc: "Final deliverables with on-site support and execution guidance throughout." },
              ].map((step) => (
                <div key={step.num} className="group space-y-4 relative">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl font-light text-stone-200 group-hover:text-stone-300 transition-colors">{step.num}</span>
                    <div className="flex-1 h-px bg-stone-100" />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-800">{step.title}</h3>
                  <p className="text-[11px] leading-relaxed text-stone-400 font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-stone-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center space-y-6">
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400">Ready to begin?</p>
            <h3 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide">
              Let's Build Something<br />
              <span className="text-white/40">Remarkable</span>
            </h3>
            <p className="text-sm font-light text-stone-400 max-w-md mx-auto">
              Get in touch to discuss your project with our team of architects and engineers.
            </p>
            <div className="flex gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="border border-white/20 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
