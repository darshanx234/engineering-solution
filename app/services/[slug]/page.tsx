import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MotionDiv } from "@/components/motion-wrappers"
import { getServiceBySlug, services } from "@/data/services"
import { Button } from "@/components/ui/button"
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    Home,
    Bed,
    Tv,
    Lamp,
    Sofa,
    Building2,
    Palette,
    LayoutGrid,
    Compass,
    Maximize,
    Car,
    Ruler,
    Armchair,
    Layers,
    Zap,
    Droplets,
    Grid3X3,
    Calculator,
    Activity,
    FileText,
    Image as ImageIcon,
    Video,
    Frame,
    Square,
    Landmark,
    CookingPot,
    Sun,
    Construction,
    HardHat,
    Castle,
} from "lucide-react"
import type { Metadata } from "next"

// Icon mapping for feature items
const featureIconMap: Record<string, React.ElementType> = {
    "home": Home,
    "bed": Bed,
    "cooking-pot": CookingPot,
    "tv": Tv,
    "building": Building2,
    "lamp": Lamp,
    "layout": LayoutGrid,
    "palette": Palette,
    "sofa": Sofa,
    "castle": Castle,
    "building-2": Building2,
    "sun-moon": Sun,
    "image": ImageIcon,
    "frame": Frame,
    "video": Video,
    "layout-grid": LayoutGrid,
    "compass": Compass,
    "maximize": Maximize,
    "car": Car,
    "ruler": Ruler,
    "armchair": Armchair,
    "layers": Layers,
    "zap": Zap,
    "droplets": Droplets,
    "grid-3x3": Grid3X3,
    "door-open": Square,
    "hard-hat": HardHat,
    "landmark": Landmark,
    "square": Square,
    "calculator": Calculator,
    "construction": Construction,
    "activity": Activity,
    "file-text": FileText,
}

interface ServicePageProps {
    params: {
        slug: string
    }
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) return { title: "Service Not Found" }

    return {
        title: `${service.title} | Smart Engineers`,
        description: service.description,
    }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    // Get other services for "Other Services" section
    const otherServices = services.filter(s => s.slug !== slug).slice(0, 3)

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[55vh] min-h-[400px] bg-black">
                    <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover opacity-50"
                        priority
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Breadcrumb */}
                            <div className="mb-6 flex items-center gap-2 text-sm text-white/70">
                                <Link href="/" className="transition-colors hover:text-white">Home</Link>
                                <span>/</span>
                                <Link href="/services" className="transition-colors hover:text-white">Services</Link>
                                <span>/</span>
                                <span className="text-white">{service.title}</span>
                            </div>

                            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                                {service.title}
                            </h1>
                            <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">
                                {service.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                                    <Link href="/contact">Get a Quote</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10">
                                    <a href="tel:+919925616966">Call Now</a>
                                </Button>
                            </div>
                        </MotionDiv>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="bg-background py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <MotionDiv
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary/60">
                                    About This Service
                                </p>
                                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                    {service.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {service.longDescription}
                                </p>
                                <div className="mt-8">
                                    <Button asChild>
                                        <Link href="/contact">
                                            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </MotionDiv>
                            <MotionDiv
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src={service.gallery[0]}
                                    alt={`${service.title} showcase`}
                                    fill
                                    className="object-cover"
                                />
                            </MotionDiv>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="bg-muted/50 border-y border-border py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary/60">
                                What We Offer
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Our {service.title} Services
                            </h2>
                            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
                                Comprehensive solutions covering every aspect of {service.title.toLowerCase()}.
                            </p>
                        </MotionDiv>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {service.features.map((feature, index) => {
                                const FeatureIcon = featureIconMap[feature.icon] || CheckCircle
                                return (
                                    <MotionDiv
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.08 }}
                                        className="group flex flex-col items-center rounded-2xl bg-background p-8 text-center shadow-sm border border-border/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10">
                                            <FeatureIcon className="h-7 w-7 text-primary" />
                                        </div>
                                        <h3 className="text-sm font-semibold text-foreground">
                                            {feature.title}
                                        </h3>
                                    </MotionDiv>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="bg-background py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary/60">
                                Our Work
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Project Gallery
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Browse through our recent {service.title.toLowerCase()} projects
                            </p>
                        </MotionDiv>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {service.gallery.map((img, index) => (
                                <MotionDiv
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative overflow-hidden rounded-2xl shadow-md group ${index === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${service.title} project ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow Section */}
                <section className="bg-secondary py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary/60">
                                How We Work
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Our Process
                            </h2>
                            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
                                A structured approach ensuring quality and transparency at every stage.
                            </p>
                        </MotionDiv>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {service.workflow.map((step, index) => (
                                <MotionDiv
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative flex flex-col rounded-2xl bg-background p-8 shadow-sm border border-border/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                                        {step.step}
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {step.description}
                                    </p>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Services */}
                <section className="bg-background py-20 lg:py-28 border-t border-border">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Explore Other Services
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Discover more ways we can help bring your vision to life.
                            </p>
                        </MotionDiv>

                        <div className="grid gap-6 sm:grid-cols-3">
                            {otherServices.map((otherService, index) => (
                                <MotionDiv
                                    key={otherService.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/services/${otherService.slug}`}
                                        className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <Image
                                                src={otherService.heroImage}
                                                alt={otherService.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                                                {otherService.title}
                                            </h3>
                                        </div>
                                        <div className="p-5">
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {otherService.shortDescription}
                                            </p>
                                            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                                                Learn More
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </Link>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                                Ready to Start Your {service.title} Project?
                            </h2>
                            <p className="mt-4 mx-auto max-w-2xl text-lg text-primary-foreground/80">
                                Get in touch with our team to discuss how we can help bring your vision to life with expert {service.title.toLowerCase()} solutions.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                    <a href="tel:+919925616966">Call Now</a>
                                </Button>
                            </div>
                        </MotionDiv>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
