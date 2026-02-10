"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              quality={60}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                {project.type}
              </Badge>
              <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                {project.status}
              </Badge>
            </div>

            <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>

            <div className="mb-3 space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>
            </div>

            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
