"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
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

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1 relative">

        {/* ── HERO SECTION ── */}
        <section className="relative h-[70vh] flex items-end overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/projects_hero.png"
              alt="Architectural portfolio hero"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-stone-900/50" />
          </div>

          {/* Large decorative text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="font-serif text-[20vw] font-bold text-white/[0.03] uppercase leading-none">
              Works
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
                  Our Portfolio
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-5xl sm:text-7xl font-light tracking-wide uppercase text-white leading-[1.05]"
                >
                  Completed<br />
                  <span className="text-white/50">Projects</span>
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="max-w-xs text-xs font-light leading-relaxed text-white/40 sm:text-right"
              >
                A curated selection of our residential and architectural creations across Gujarat — each built with precision, purpose and pride.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-white border-b border-stone-200 py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-100">
              {[
                { count: "250+", label: "Completed Projects" },
                { count: "200+", label: "Happy Clients" },
                { count: "100%", label: "Completion Rate" },
                { count: "Gujarat", label: "Region Covered" },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2 px-4">
                  <div className="font-serif text-3xl sm:text-4xl font-light text-stone-800">{stat.count}</div>
                  <div className="text-[9px] uppercase tracking-[0.25em] text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS GRID ── */}
        <section ref={ref} className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">

            {/* Section heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">Residential Excellence</span>
                  <div className="h-px w-12 bg-stone-300" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase">
                  Our Project Portfolio
                </h2>
                <p className="text-sm font-light leading-relaxed text-stone-500 max-w-md">
                  Browse our completed residential projects — each one showcasing architectural precision and thoughtful design execution.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400 border border-stone-200 bg-white px-4 py-2 rounded-full">
                  {projects.length} Projects
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
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-stone-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center space-y-6">
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400">Ready to build?</p>
            <h3 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide">
              Start Your Dream Project
            </h3>
            <p className="text-sm font-light text-stone-400 max-w-md mx-auto">
              Join 200+ happy clients who trusted Smart Engineers to build their vision with precision and care.
            </p>
            <div className="flex gap-4 justify-center pt-2">
              <a
                href="/contact"
                className="border border-white/20 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
