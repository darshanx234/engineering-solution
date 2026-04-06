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
                // Auto-hide success message after 5 seconds
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
                                Get In Touch
                            </p>
                            <h1 className="text-pretty text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                                Contact Smart Engineers
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
                                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-background py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                    Let's Build Something Amazing Together
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                    Whether you're planning a new project or need consultation on an existing one, our team is here to help.
                                </p>

                                <div className="mt-8 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Office Address</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Amber Plaza, Near Jelchok, Shop No. 11, Second Floor,<br />
                                                Surendranagar, Gujarat 363020
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Phone Numbers</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                <a href="tel:+919925616966" className="hover:text-primary transition-colors">
                                                    +91 9925616966
                                                </a>
                                                <br />
                                                <a href="tel:+919925616966" className="hover:text-primary transition-colors">
                                                    +91 9925616966
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Email</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                <a href="mailto:smartengineering@gmail.com" className="hover:text-primary transition-colors">
                                                    smartengineering@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Business Hours</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                                                Sunday: By Appointment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border bg-card p-4 shadow-lg sm:p-6 lg:p-8">
                                    {/* Status Messages */}
                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800"
                                        >
                                            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                                            <p className="text-sm font-medium">{message}</p>
                                        </motion.div>
                                    )}

                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800"
                                        >
                                            <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                                            <p className="text-sm font-medium">{message}</p>
                                        </motion.div>
                                    )}

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground">
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
                                            className="mt-2"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
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
                                            className="mt-2"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
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
                                            className="mt-2"
                                            placeholder="+91 12345 67890"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
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
                                            className="mt-2"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground">
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
                                            className="mt-2"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={isLoading}
                                        className="w-full transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
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
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Map Section (Optional - can be uncommented when map integration is added) */}
                {/* <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9876543210!2d72.5198765!3d23.0225396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjEiTiA3MsKwMzEnMTEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section> */}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
