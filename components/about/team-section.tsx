"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { team } from "@/data/team"

export function TeamSection() {
    return (
        <section className="py-20 lg:py-28 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Expert Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our multi-disciplinary team of architects, engineers, and designers works collaboratively to bring your vision to life.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {team.slice(0, 8).map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={member.image.includes('pravatar') ? `https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=533` : member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                                <p className="text-sm font-medium text-primary">{member.role}</p>
                                <div className="mt-4 flex flex-wrap gap-1">
                                    {member.qualifications?.slice(0, 2).map((q) => (
                                        <span key={q} className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground uppercase">
                                            {q}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
