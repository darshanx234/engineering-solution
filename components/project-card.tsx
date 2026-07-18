"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white ring-1 ring-stone-200/70 hover:ring-stone-300 hover:shadow-xl hover:shadow-stone-300/30 transition-all duration-400 overflow-hidden rounded-sm h-full flex flex-col"
      >
        {/* Fixed aspect image — all cards same size */}
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 flex-shrink-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            quality={65}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Floating arrow */}
          <div className="absolute top-4 right-4 h-9 w-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4 text-stone-700" />
          </div>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`text-[8px] uppercase tracking-[0.25em] px-2.5 py-1 font-medium backdrop-blur-sm ${
              project.status === "Completed"
                ? "bg-emerald-50/90 text-emerald-700 ring-1 ring-emerald-200"
                : "bg-amber-50/90 text-amber-700 ring-1 ring-amber-200"
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Card body — flex-grow so all cards same total height */}
        <div className="p-6 space-y-4 flex flex-col flex-1">
          {/* Type tag + index */}
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.3em] text-stone-400 font-medium border border-stone-200 bg-stone-50 px-2.5 py-1 rounded-full">
              {project.type}
            </span>
            <span className="text-[9px] font-mono text-stone-300">
              #{project.id.padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-light tracking-wide text-stone-800 uppercase leading-snug group-hover:text-stone-600 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description — clamp to 2 lines */}
          <p className="line-clamp-2 text-xs font-light leading-relaxed text-stone-500 flex-1">
            {project.description}
          </p>

          {/* Footer — always at bottom */}
          <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
            <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-light">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="truncate max-w-[140px]">{project.location}</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-stone-400 group-hover:text-stone-700 flex items-center gap-1.5 transition-all duration-300 font-medium flex-shrink-0">
              View
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
