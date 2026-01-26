"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Full-service design and construction",
  "Award-winning architecture team",
  "On-time and on-budget delivery",
  "Sustainable building practices",
]

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/about-preview.jpg"
                alt="Smart Engineers team at work"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 hidden rounded-lg bg-primary p-6 text-primary-foreground shadow-xl sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p 
              className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              About Smart Engineers
            </motion.p>
            <motion.h2 
              className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building Dreams Into Reality Since 2004
            </motion.h2>
            <motion.p 
              className="mt-6 text-muted-foreground"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Smart Engineers is a premier architecture, interior design, and construction
              company committed to delivering exceptional spaces that inspire. With two
              decades of experience, we have transformed countless visions into stunning
              realities across residential, commercial, and industrial sectors.
            </motion.p>
            <motion.p 
              className="mt-4 text-muted-foreground"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Our integrated approach combines creative design with technical excellence,
              ensuring every project is completed to the highest standards of quality,
              sustainability, and client satisfaction.
            </motion.p>
            
            <ul className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <motion.li 
                  key={item} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Button asChild className="mt-8 transition-transform hover:scale-105">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
