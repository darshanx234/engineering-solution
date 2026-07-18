"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-[#FAF9F6] text-[#0a0a0a] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.6 }}
                className="inline-block border border-[#0a0a0a]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-[#0a0a0a]/60 rounded-full"
              >
                About Us
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-snug tracking-wide"
              >
                We are a luxury studio dedicated to creating refined residential and commercial spaces.
              </motion.h2>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-[#0a0a0a]/5 p-8 flex flex-col justify-between space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
              >
                <div className="font-serif text-4xl sm:text-5xl font-light text-[#0a0a0a]">10+</div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#0a0a0a]">Years of Experience</h4>
                  <p className="text-[11px] text-[#0a0a0a]/50 leading-relaxed font-light">
                    Over a decade of design excellence and technical execution in architecture and interior.
                  </p>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white border border-[#0a0a0a]/5 p-8 flex flex-col justify-between space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
              >
                <div className="font-serif text-4xl sm:text-5xl font-light text-[#0a0a0a]">250+</div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#0a0a0a]">Projects Completed</h4>
                  <p className="text-[11px] text-[#0a0a0a]/50 leading-relaxed font-light">
                    A stellar track record of high-end turnkey homes, offices, and engineering structures.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium py-3 border-b border-[#0a0a0a]/10 transition-all duration-300 hover:border-[#0a0a0a]"
              >
                Learn More
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0a0a0a]/10 transition-all duration-300 group-hover:border-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Image and Description */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[1.4] w-full overflow-hidden border border-[#0a0a0a]/5"
            >
              <Image
                src="/images/about_interior.png"
                alt="Refined residential dining space"
                fill
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md space-y-6"
            >
              <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/70">
                We are an architectural and interior design studio dedicated to creating spaces that feel comfortable, balanced, and practical. Our approach combines state-of-the-art modern aesthetics with structural engineering excellence to ensure longevity.
              </p>

              <Link
                href="/portfolio"
                className="inline-flex border border-[#0a0a0a] bg-[#0a0a0a] hover:bg-transparent hover:text-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.25em] rounded-none px-8 py-4 transition-all duration-300 font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
