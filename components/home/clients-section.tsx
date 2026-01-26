"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  "Tata Group",
  "Reliance",
  "Mahindra",
  "L&T",
  "Godrej",
  "Adani",
  "Shapoorji",
  "DLF",
]

export function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="border-y border-border bg-background py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p 
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Leading Brands
        </motion.p>
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              className="flex h-12 items-center justify-center text-muted-foreground/50 transition-colors hover:text-muted-foreground cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <span className="text-lg font-bold">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
