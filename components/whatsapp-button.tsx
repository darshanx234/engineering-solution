"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919925616966?text=Hello%20Smart%20Engineers%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          rotate: [0, 15, -15, 15, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3
        }}
      >
        <MessageCircle className="h-7 w-7" />
      </motion.div>
    </motion.a>
  )
}
