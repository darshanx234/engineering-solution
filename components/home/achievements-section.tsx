"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AwardItem {
  id: string
  title: string
  year: string
}

const awards: AwardItem[] = [
  {
    id: "best-studio",
    title: "Best Architecture & Engineering Studio",
    year: "2025",
  },
  {
    id: "structural-excellence",
    title: "Structural Safety & Design Excellence Award",
    year: "2024",
  },
  {
    id: "residential-design",
    title: "Outstanding Residential Architecture Studio",
    year: "2023",
  },
  {
    id: "turnkey-execution",
    title: "Turnkey Home Design & Construction Specialist",
    year: "2022",
  },
  {
    id: "innovation-award",
    title: "Studio Design Innovation Award",
    year: "2021",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#0a0a0a] text-white py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & Awards List */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6 }}
                className="inline-block border border-white/15 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 rounded-full"
              >
                Our Track Record
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide"
              >
                Our Achievements <br />For Design & Build
              </motion.h2>
            </div>

            {/* Awards List */}
            <div className="border-t border-white/10">
              {awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between py-6 border-b border-white/10 group cursor-pointer transition-all duration-300 hover:px-4 hover:bg-white/[0.02]"
                >
                  <span className="font-serif text-base sm:text-lg font-light text-white/80 group-hover:text-white transition-colors">
                    {award.title}
                  </span>
                  <span className="font-sans text-xs tracking-wider text-white/40 group-hover:text-white/80 transition-colors">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Trophy Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[0.9] w-full max-w-sm overflow-hidden border border-white/10 bg-white/[0.02] p-8 flex items-center justify-center"
            >
              <Image
                src="/images/award_trophies.png"
                alt="Architecture Design Awards Trophies"
                fill
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
