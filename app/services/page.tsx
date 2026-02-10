"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/data/services"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
}

export default function ServicesPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-primary py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                                Our Services
                            </p>
                            <h1 className="text-pretty text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                                Comprehensive Design & Engineering Solutions
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
                                From concept to completion, we provide end-to-end services for all your architectural and engineering needs.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section ref={ref} className="bg-background py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeading
                                label="What We Offer"
                                title="Our Service Portfolio"
                                description="Expert solutions tailored to bring your vision to life with precision and excellence."
                            />
                        </motion.div>

                        <motion.div
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {services.map((service) => (
                                <motion.div key={service.id} variants={itemVariants}>
                                    <ServiceCard service={service} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-secondary py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Ready to Start Your Project?
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Get in touch with our team to discuss how we can help bring your vision to life.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="tel:+919925616966"
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                                >
                                    Call Now
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
