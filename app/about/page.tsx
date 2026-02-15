import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StatsSection } from "@/components/about/stats-section"
import { CTASection } from "@/components/home/cta-section"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Lightbulb } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* About Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
                        alt="Modern Office"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                            About Smart Engineers
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl">
                            Design. Build. Deliver. We are dedicated to creating spaces that inspire and empower communities across Gujarat.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <div>
                                <SectionHeading
                                    align="left"
                                    label="Our Journey"
                                    title="Over Two Decades of Engineering Excellence"
                                    description="Smart Engineers began with a simple vision: to bridge the gap between architectural imagination and engineering reality. Founded in 2004, we have grown from a small consultancy into a full-service design and construction firm."
                                />
                                <p className="mt-4 text-muted-foreground">
                                    Our journey has been defined by a relentless pursuit of quality and a commitment to our clients. Every project we undertake is a testament to our dedication to craftsmanship, sustainability, and technological innovation.
                                </p>
                                <div className="mt-8">
                                    <Button asChild>
                                        <Link href="/projects">
                                            Explore Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl lg:shadow-[-20px_20px_0px_0px_rgba(0,0,0,0.05)]">
                                <Image
                                    src="https://plus.unsplash.com/premium_photo-1681690860636-3d96ea7a593b?q=80&w=1170"
                                    alt="Construction workers on site"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: Target,
                                    title: "Our Mission",
                                    text: "To provide world-class architectural and engineering solutions that exceed client expectations through innovation, integrity, and excellence."
                                },
                                {
                                    icon: Eye,
                                    title: "Our Vision",
                                    text: "To be the most trusted and innovative construction partner in India, known for creating sustainable and timeless spaces."
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Our Values",
                                    text: "We believe in transparency, technical precision, and a collaborative approach. Every detail matters, and every client is a partner."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col rounded-2xl bg-background p-10 shadow-sm border border-border/60 hover:shadow-md transition-all hover:-translate-y-1">
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold text-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <StatsSection />
                <CTASection />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
