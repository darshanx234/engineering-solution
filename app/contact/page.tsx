"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
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
                                                1109, Sun Gravitas, Shyamal Cross Rd,<br />
                                                Rajmani Society, Shyamal,<br />
                                                Ahmedabad, Gujarat 380015
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
                                                    +91 99256 16966
                                                </a>
                                                <br />
                                                <a href="tel:+919925644236" className="hover:text-primary transition-colors">
                                                    +91 99256 44236
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
                                                <a href="mailto:info@smartengineers.in" className="hover:text-primary transition-colors">
                                                    info@smartengineers.in
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
                                            rows={5}
                                            className="mt-2"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <Button type="submit" className="w-full transition-transform hover:scale-105">
                                        Send Message
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
