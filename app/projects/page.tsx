"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

export default function ProjectsPage() {
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
                                Our Portfolio
                            </p>
                            <h1 className="text-pretty text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                                Completed Projects
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
                                Explore our collection of residential projects across Gujarat. Each project represents our commitment to quality, innovation, and client satisfaction.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="border-b bg-background py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-4xl font-bold text-primary">6</p>
                                <p className="mt-2 text-sm text-muted-foreground">Total Projects</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <p className="text-4xl font-bold text-primary">6</p>
                                <p className="mt-2 text-sm text-muted-foreground">Happy Clients</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="text-4xl font-bold text-primary">100%</p>
                                <p className="mt-2 text-sm text-muted-foreground">Completion Rate</p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-4xl font-bold text-primary">Gujarat</p>
                                <p className="mt-2 text-sm text-muted-foreground">Region Covered</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section ref={ref} className="bg-secondary py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeading
                                label="Residential Excellence"
                                title="Our Project Portfolio"
                                description="Browse through our completed residential projects, each showcasing our expertise in design and execution."
                            />
                        </motion.div>

                        <motion.div
                            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {projects.map((project) => (
                                <motion.div key={project.id} variants={itemVariants}>
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                                Ready to Start Your Dream Project?
                            </h2>
                            <p className="mt-4 text-lg text-primary-foreground/80">
                                Let's create something extraordinary together. Contact us today to discuss your project.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-3 text-sm font-medium text-primary shadow transition-transform hover:scale-105"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="tel:+919925616966"
                                    className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 bg-transparent px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-105 hover:bg-primary-foreground/10"
                                >
                                    Call Us Now
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
