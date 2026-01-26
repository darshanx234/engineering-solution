"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = end / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern architecture"
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/80"
          >
            Architecture + Interior + Construction
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-pretty text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            Engineering Spaces That Inspire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg text-primary-foreground/80"
          >
            From concept to completion, we create exceptional residential and commercial
            spaces that blend innovative design with superior craftsmanship. Your vision,
            our expertise.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-transform hover:scale-105"
            >
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-transform hover:scale-105"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative border-t border-primary-foreground/10 bg-primary-foreground/5"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-3xl font-bold text-primary-foreground">
              <AnimatedCounter end={500} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-primary-foreground/70">Projects Completed</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-3xl font-bold text-primary-foreground">
              <AnimatedCounter end={20} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-primary-foreground/70">Years Experience</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-3xl font-bold text-primary-foreground">
              <AnimatedCounter end={50} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-primary-foreground/70">Expert Team</p>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-3xl font-bold text-primary-foreground">
              <AnimatedCounter end={15} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-primary-foreground/70">Cities Served</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
