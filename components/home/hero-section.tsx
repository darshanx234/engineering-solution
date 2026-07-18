"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const brands = [
  { name: "MILANO", style: "font-serif tracking-[0.25em] font-bold" },
  { name: "VENTO", style: "font-sans tracking-[0.3em] font-black" },
  { name: "SPAZIO", style: "font-sans tracking-[0.4em] font-light" },
  { name: "FRIDEC", style: "font-serif tracking-[0.15em] italic font-semibold" },
  { name: "ZENITH", style: "font-sans tracking-[0.2em] font-semibold uppercase" },
  { name: "LEGAL", style: "font-serif tracking-[0.3em] font-medium" },
]

// Double the list for infinite scroll effect
const tickerBrands = [...brands, ...brands, ...brands, ...brands]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0a0a0a] text-white pt-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero_interior.png"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          aria-hidden="true"
        >
          <source src="/videos/hero-animation.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <Image
            src="/images/hero_interior.png"
            alt="Modern luxury interior design"
            fill
            className="object-cover opacity-45"
            priority
          />
        </video>
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-[#0a0a0a]/25" />
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 flex-1 flex flex-col justify-center py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif text-5xl sm:text-7xl font-light leading-[1.1] tracking-wide max-w-3xl">
                Modern Interior <br />
                <span className="font-serif italic font-normal text-white/80">Design Solution</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium py-3 border-b border-white/20 transition-all duration-300 hover:border-white"
              >
                Explore Projects
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0a0a0a]">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Designer Info/Quote Overlay Card */}
          <div className="lg:col-span-4 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/40 backdrop-blur-md border border-white/10 p-6 sm:p-8 max-w-sm w-full space-y-6"
            >
              <div className="flex gap-4 items-start">
                <span className="text-3xl font-serif text-white/40 leading-none">“</span>
                <p className="text-xs sm:text-sm font-light leading-relaxed text-white/80">
                  We design functional and elegant interiors for homes, offices, and commercial spaces. Our approach combines modern design, comfort, and luxury.
                </p>
              </div>
              {/* <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Lead Architect"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.15em] font-medium">Esther Howard</h4>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.1em] mt-0.5">Lead Designer</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Brands Ticker */}
      {/* <div className="relative z-10 border-t border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm py-8 overflow-hidden select-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        
        <div className="flex flex-col gap-4 text-center mb-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">Trusted Brands We Work With</p>
        </div>

        <div className="flex w-[200%] md:w-[150%] gap-4 overflow-hidden">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-16 md:gap-24 shrink-0 whitespace-nowrap items-center min-w-full justify-around"
          >
            {tickerBrands.map((brand, i) => (
              <span 
                key={i} 
                className={`${brand.style} text-sm md:text-base text-white/40 transition-colors duration-300 hover:text-white/80`}
              >
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div> */}
    </section>
  )
}
