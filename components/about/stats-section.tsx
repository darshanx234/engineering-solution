"use client"

import { motion } from "framer-motion"
import { CheckCircle, ShieldCheck, Zap, Award } from "lucide-react"

const stats = [
    { icon: CheckCircle, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: ShieldCheck, label: "Happy Clients", value: "250+" },
    { icon: Zap, label: "Expert Team", value: "15+" },
]

export function StatsSection() {
    return (
        <section className="bg-primary py-16 text-primary-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <stat.icon className="h-8 w-8 text-primary-foreground/70 mb-4" />
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="mt-2 text-sm font-medium text-primary-foreground/80 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
