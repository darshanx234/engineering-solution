"use client"

import { motion, HTMLMotionProps } from "framer-motion"

interface MotionDivProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
    return <motion.div {...props}>{children}</motion.div>
}

export function MotionSection({ children, ...props }: HTMLMotionProps<"section">) {
    return <motion.section {...props}>{children}</motion.section>
}
