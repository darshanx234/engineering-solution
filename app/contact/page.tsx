"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")
    setMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message || "Thank you! We'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setMessage(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("An error occurred. Please try again later.")
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Navbar />

      <main className="flex-1">

        {/* Luxury Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact_interior.png"
              alt="Luxury workspace backdrop"
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-white/15 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 rounded-full"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl font-light tracking-wide uppercase leading-tight"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-xs sm:text-sm font-light leading-relaxed uppercase tracking-[0.2em] text-white/80"
            >
              Let's discuss how we can bring your architectural and interior design visions to life
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white text-[#0a0a0a] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left Column: Contact details */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-4">
                  <span className="inline-block border border-[#0a0a0a]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-[#0a0a0a]/60 rounded-full">
                    Contact Details
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light leading-snug tracking-wide">
                    Let's Build Something Amazing Together
                  </h2>
                  <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/60">
                    Whether you are planning a new luxury turnkey villa, seeking custom commercial office design, or need complex structural consultation—our team is here to coordinate.
                  </p>
                </div>

                {/* Details List */}
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#0a0a0a]/10 bg-[#FAF9F6]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] uppercase tracking-wider font-semibold text-[#0a0a0a]/40">Office Address</h4>
                      <p className="text-xs font-light leading-relaxed">
                        Amber Plaza, Near Jelchok, Shop No. 11, Second Floor,<br />
                        Surendranagar, Gujarat 363020
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#0a0a0a]/10 bg-[#FAF9F6]">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] uppercase tracking-wider font-semibold text-[#0a0a0a]/40">Phone Numbers</h4>
                      <p className="text-xs font-light leading-relaxed">
                        <a href="tel:+919925616966" className="hover:underline">+91 99256 16966</a>
                        <span className="mx-2 text-[#0a0a0a]/20">/</span>
                        <a href="tel:+919925644236" className="hover:underline">+91 99256 44236</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#0a0a0a]/10 bg-[#FAF9F6]">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] uppercase tracking-wider font-semibold text-[#0a0a0a]/40">Email Address</h4>
                      <p className="text-xs font-light leading-relaxed">
                        <a href="mailto:smartengineering@gmail.com" className="hover:underline">smartengineering@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#0a0a0a]/10 bg-[#FAF9F6]">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] uppercase tracking-wider font-semibold text-[#0a0a0a]/40">Business Hours</h4>
                      <p className="text-xs font-light leading-relaxed">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 lg:pl-8">
                <form onSubmit={handleSubmit} className="space-y-8 bg-[#FAF9F6] border border-[#0a0a0a]/5 p-8 sm:p-10 rounded-none shadow-[0_4px_24px_rgba(0,0,0,0.01)]">

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-green-50 border border-green-200 p-4 text-green-800"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                      <p className="text-xs font-medium">{message}</p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-50 border border-red-200 p-4 text-red-800"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                      <p className="text-xs font-medium">{message}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[9px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a]/50">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="mt-2 border-0 border-b border-[#0a0a0a]/10 bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-[#0a0a0a] px-0 py-3 text-sm text-[#0a0a0a]"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[9px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a]/50">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="mt-2 border-0 border-b border-[#0a0a0a]/10 bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-[#0a0a0a] px-0 py-3 text-sm text-[#0a0a0a]"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-[9px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a]/50">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="mt-2 border-0 border-b border-[#0a0a0a]/10 bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-[#0a0a0a] px-0 py-3 text-sm text-[#0a0a0a]"
                        placeholder="Your Phone Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[9px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a]/50">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="mt-2 border-0 border-b border-[#0a0a0a]/10 bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-[#0a0a0a] px-0 py-3 text-sm text-[#0a0a0a]"
                        placeholder="Your Subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.2em] font-medium text-[#0a0a0a]/50">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows={5}
                      className="mt-2 border-0 border-b border-[#0a0a0a]/10 bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-[#0a0a0a] px-0 py-3 text-sm text-[#0a0a0a]"
                      placeholder="Your Message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#0a0a0a] hover:bg-[#0a0a0a]/90 text-white rounded-none py-6 font-medium text-xs uppercase tracking-[0.2em]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
