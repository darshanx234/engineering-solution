"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Building2, Palette, FileText, ClipboardList, Box } from "lucide-react"
import type { Service } from "@/data/services"

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  palette: Palette,
  "file-text": FileText,
  clipboard: ClipboardList,
  box: Box,
}

const serviceImages: Record<string, string> = {
  "interior-design": "/images/service_interior_design.png",
  "3d-designing": "/images/service_3d_visualization.png",
  "2d-designing": "/images/service_2d_floor_plan.png",
  "working-plan": "/images/service_2d_floor_plan.png",
  "structure-designing": "/images/service_structural_engineering.png",
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2
  const image = serviceImages[service.slug] || "/images/service_interior_design.png"

  return (
    <Link href={`/services/${service.slug}`} className="block group h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white ring-1 ring-stone-200/70 hover:ring-stone-300 hover:shadow-xl hover:shadow-stone-300/25 transition-all duration-400 overflow-hidden rounded-sm h-full flex flex-col"
      >
        {/* Image — fixed aspect ratio */}
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 flex-shrink-0">
          <Image
            src={image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            quality={65}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Arrow hover */}
          <div className="absolute top-4 right-4 h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4 text-stone-700" />
          </div>

          {/* Index number */}
          <div className="absolute top-4 left-4">
            <span className="text-[9px] font-mono text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-1 space-y-4">
          {/* Icon + type */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
              <Icon className="h-3.5 w-3.5 text-stone-500" />
            </div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-stone-400 font-medium">
              Smart Engineers
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-light tracking-wide text-stone-800 uppercase leading-snug group-hover:text-stone-600 transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-2 text-xs font-light leading-relaxed text-stone-500 flex-1">
            {service.shortDescription}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {service.features.slice(0, 2).map((f) => (
                <span key={f.title} className="text-[8px] uppercase tracking-wider text-stone-400 border border-stone-200 bg-stone-50 px-2 py-0.5 rounded-full">
                  {f.title.split(" ").slice(0, 2).join(" ")}
                </span>
              ))}
            </div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-stone-400 group-hover:text-stone-700 flex items-center gap-1.5 transition-all duration-300 font-medium flex-shrink-0 ml-2">
              View
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
