import React from "react"
import Link from "next/link"
import { Building2, Palette, Hammer, Key, Ruler, Sofa, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Service } from "@/data/services"

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  palette: Palette,
  hammer: Hammer,
  key: Key,
  ruler: Ruler,
  sofa: Sofa,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2

  return (
    <Card className="group border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">
          {service.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {service.shortDescription}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
