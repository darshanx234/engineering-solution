"use client"

import { Award, Clock, Shield, Users, Lightbulb, Leaf } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Our designs have been recognized with multiple industry awards for innovation and excellence.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on meeting deadlines without compromising on quality or safety.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure every project meets our high standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of architects, engineers, and designers bring decades of combined experience.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We embrace cutting-edge technologies and methods to deliver superior results.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmental responsibility is integrated into every aspect of our work.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Why Choose Us"
            title="The Smart Engineers Difference"
            description="We combine creative excellence with technical expertise to deliver projects that exceed expectations."
          />
        </motion.div>
        
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="group"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
