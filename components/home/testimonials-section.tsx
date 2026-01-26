"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayCount = 3
  const maxIndex = Math.ceil(testimonials.length / displayCount) - 1
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  const visibleTestimonials = testimonials.slice(
    currentIndex * displayCount,
    currentIndex * displayCount + displayCount
  )

  return (
    <section ref={ref} className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from the people who have trusted us with their projects."
            align="left"
          />
          <div className="mb-12 hidden gap-2 md:flex">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" onClick={prev}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonials</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="icon" onClick={next}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonials</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile navigation */}
        <motion.div 
          className="mt-6 flex items-center justify-center gap-2 md:hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="outline" size="icon" onClick={prev}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonials</span>
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {maxIndex + 1}
          </span>
          <Button variant="outline" size="icon" onClick={next}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonials</span>
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild variant="outline" className="transition-transform hover:scale-105 bg-transparent">
            <Link href="/testimonials">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
