"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface AccordionItem {
  id: string
  num: string
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

const serviceItems: AccordionItem[] = [
  {
    id: "interior",
    num: "01",
    title: "Interior Design Solutions",
    description: "We craft custom, functional, and visually balanced interiors. From space planning, ceiling designs, lighting layouts, to premium material selection, we create spaces that support your lifestyle and work.",
    tags: ["Residential", "Commercial", "Space Planning", "Furniture"],
    image: "/images/service_interior_design.png",
    link: "/services/interior-design",
  },
  {
    id: "3d",
    num: "02",
    title: "3D Visualization & Modeling",
    description: "Bring your blueprints to life with high-fidelity, photorealistic 3D renderings and walkthroughs. See exact material textures, landscape lighting, and elevation detailing before laying a single brick.",
    tags: ["3D Elevation", "Exterior Render", "Interior Render", "Walkthrough"],
    image: "/images/service_3d_visualization.png",
    link: "/services/3d-designing",
  },
  {
    id: "2d",
    num: "03",
    title: "2D Plan & Space Planning",
    description: "Precision spatial zoning and technical layouts designed for ultimate flow. We prepare detailed Vastu-compliant layouts, parking plans, staircase geometry, and comprehensive room zoning dimensions.",
    tags: ["AutoCAD Plans", "Vastu Planning", "Zoning", "Dimension Set"],
    image: "/images/service_2d_floor_plan.png",
    link: "/services/2d-designing",
  },
  {
    id: "structural",
    num: "04",
    title: "Structural Engineering & Design",
    description: "Invisible structural layouts ensuring safety, earthquake resistance, and structural longevity. We handle precise load calculations, column-beam layouts, slab reinforcements, and RCC detailing.",
    tags: ["RCC Detailing", "Load Analysis", "Foundation Plan", "Site Check"],
    image: "/images/service_structural_engineering.png",
    link: "/services/structure-designing",
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className="bg-white text-[#0a0a0a] py-24 sm:py-32 overflow-hidden border-t border-[#0a0a0a]/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#0a0a0a]/5">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block border border-[#0a0a0a]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-[#0a0a0a]/60 rounded-full">
              Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide">
              Our Professional <br />Architecture & Design
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex flex-col items-start gap-6">
            <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/60">
              We provide end-to-end design, planning, and engineering services to translate architectural concepts into solid, structurally sound, and beautiful living structures.
            </p>
            <Link 
              href="/services"
              className="inline-flex border border-[#0a0a0a] bg-[#0a0a0a] hover:bg-transparent hover:text-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.25em] rounded-none px-6 py-3.5 transition-all duration-300 font-medium"
            >
              All Services
            </Link>
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="flex flex-col">
          {serviceItems.map((item, index) => {
            const isActive = activeIndex === index
            return (
              <div 
                key={item.id}
                className="border-b border-[#0a0a0a]/10 last:border-0 group cursor-pointer py-6"
                onClick={() => setActiveIndex(index)}
              >
                {/* Row Header */}
                <div className="flex items-center justify-between gap-4 py-2">
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="font-serif text-sm text-[#0a0a0a]/30 font-light">{item.num}</span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#0a0a0a] group-hover:text-[#0a0a0a]/70 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Arrow Icon */}
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                      isActive ? "border-[#0a0a0a] bg-[#0a0a0a] text-white" : "border-[#0a0a0a]/10 text-[#0a0a0a]"
                    } transition-colors duration-300`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Collapsible Content */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 pb-4">
                    {/* Details Column */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                      <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/70">
                        {item.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="bg-[#FAF9F6] border border-[#0a0a0a]/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a]/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Explore details */}
                      <div className="pt-2">
                        <Link 
                          href={item.link}
                          className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#0a0a0a] border-b border-[#0a0a0a]/20 hover:border-[#0a0a0a] transition-all duration-300 pb-1"
                        >
                          Explore Service
                        </Link>
                      </div>
                    </div>

                    {/* Image Preview Column */}
                    <div className="lg:col-span-6 flex justify-end">
                      <div className="relative aspect-[1.7] w-full max-w-lg overflow-hidden border border-[#0a0a0a]/5">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
