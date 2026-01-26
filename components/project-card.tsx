import Link from "next/link"
import Image from "next/image"
import { MapPin, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/portfolio"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5 text-primary" />
          </div>
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2 capitalize">
            {project.category}
          </Badge>
          <h3 className="mb-1 text-lg font-semibold text-card-foreground">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
