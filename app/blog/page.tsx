"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectionHeading } from "@/components/section-heading"
import { BlogCard } from "@/components/blog-card"
import { posts } from "@/data/posts"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
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

export default function BlogPage() {
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
                                Our Blog
                            </p>
                            <h1 className="text-pretty text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                                Insights & Inspiration
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
                                Stay updated with the latest trends, tips, and insights from the world of architecture, interior design, and construction.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section ref={ref} className="bg-background py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeading
                                label="Latest Articles"
                                title="From Our Blog"
                                description="Expert knowledge and practical advice to help you make informed decisions about your projects."
                            />
                        </motion.div>

                        <motion.div
                            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {posts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                >
                                    <BlogCard post={post} />
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
                                Have a Project in Mind?
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
