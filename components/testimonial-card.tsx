import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/data/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-6">
        <Quote className="mb-4 h-8 w-8 text-primary/20" />
        <p className="mb-6 text-card-foreground">{testimonial.content}</p>
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-card-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
              {testimonial.company && `, ${testimonial.company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
