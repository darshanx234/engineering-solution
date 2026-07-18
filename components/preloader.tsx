"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if preloader has already run in this session
    const hasLoaded = sessionStorage.getItem("preloader_played")
    if (hasLoaded === "true") {
      setLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem("preloader_played", "true")
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2,
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          {/* Decorative grid lines */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <div className="absolute top-1/2 left-0 h-[1px] w-full bg-white -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white -translate-x-1/2" />
            <div className="absolute inset-[15%] border border-white" />
          </div>

          <div className="relative flex flex-col items-center select-none text-center gap-8">

            {/* SVG Logo — animated scale + fade in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/logo.svg"
                alt="Smart Engineers"
                width={320}
                height={200}
                priority
                className="w-[240px] sm:w-[300px] h-auto"
              />
            </motion.div>

            {/* Thin accent line that grows */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
              className="h-[1px] bg-white/30"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[9px] uppercase tracking-[0.55em] text-white/70"
            >
              Architecture &bull; Interior &bull; Construction
            </motion.p>
          </div>

          {/* Progress line at bottom */}
          <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 h-6 w-6 border-t border-l border-white/20" />
          <div className="absolute top-8 right-8 h-6 w-6 border-t border-r border-white/20" />
          <div className="absolute bottom-8 left-8 h-6 w-6 border-b border-l border-white/20" />
          <div className="absolute bottom-8 right-8 h-6 w-6 border-b border-r border-white/20" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
