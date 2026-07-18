import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MotionDiv } from "@/components/motion-wrappers"
import { getServiceBySlug, services } from "@/data/services"
import {
    ArrowLeft, ArrowUpRight,
    Home, Bed, Tv, Lamp, Sofa, Building2, Palette,
    LayoutGrid, Compass, Maximize, Car, Ruler, Armchair,
    Layers, Zap, Droplets, Grid3X3, Calculator, Activity,
    FileText, Image as ImageIcon, Video, Frame, Square,
    Landmark, CookingPot, Sun, Construction, HardHat, Castle,
    CheckCircle2,
} from "lucide-react"
import type { Metadata } from "next"

const featureIconMap: Record<string, React.ElementType> = {
    "home": Home, "bed": Bed, "cooking-pot": CookingPot, "tv": Tv,
    "building": Building2, "lamp": Lamp, "layout": LayoutGrid, "palette": Palette,
    "sofa": Sofa, "castle": Castle, "building-2": Building2, "sun-moon": Sun,
    "image": ImageIcon, "frame": Frame, "video": Video, "layout-grid": LayoutGrid,
    "compass": Compass, "maximize": Maximize, "car": Car, "ruler": Ruler,
    "armchair": Armchair, "layers": Layers, "zap": Zap, "droplets": Droplets,
    "grid-3x3": Grid3X3, "door-open": Square, "hard-hat": HardHat,
    "landmark": Landmark, "square": Square, "calculator": Calculator,
    "construction": Construction, "activity": Activity, "file-text": FileText,
}

const serviceImages: Record<string, string> = {
    "interior-design": "/images/service_interior_design.png",
    "3d-designing": "/images/service_3d_visualization.png",
    "2d-designing": "/images/service_2d_floor_plan.png",
    "working-plan": "/images/service_2d_floor_plan.png",
    "structure-designing": "/images/service_structural_engineering.png",
}

interface ServicePageProps {
    params: { slug: string }
}

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }))
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
    if (!service) notFound()

    const otherServices = services.filter(s => s.slug !== slug).slice(0, 3)
    const coverImage = serviceImages[service!.slug] || "/images/service_interior_design.png"

    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#1a1a1a]">
            <Navbar />
            <main className="flex-1">

                {/* ── SLIM DARK HERO — title only ── */}
                <section className="relative bg-stone-900 pt-28 pb-14 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    />
                    <div className="absolute right-[-4%] top-0 bottom-0 flex items-center pointer-events-none select-none">
                        <span className="font-serif text-[16vw] font-bold text-white/[0.03] uppercase leading-none">
                            {service!.title.split(" ")[0]}
                        </span>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                        <MotionDiv
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mb-8"
                        >
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors border-b border-white/10 hover:border-white/40 pb-0.5"
                            >
                                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                                Back to Services
                            </Link>
                        </MotionDiv>

                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                            <div className="space-y-5">
                                <MotionDiv
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <span className="border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] text-white/60">
                                        Smart Engineers
                                    </span>
                                </MotionDiv>
                                <MotionDiv
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] tracking-wide text-white uppercase">
                                        {service!.title}
                                    </h1>
                                </MotionDiv>
                            </div>
                            <MotionDiv
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.35 }}
                                className="text-[10px] text-white/30 font-light max-w-[200px] sm:text-right"
                            >
                                {service!.shortDescription}
                            </MotionDiv>
                        </div>
                    </div>
                </section>

                {/* ── MAIN: IMAGE LEFT + DETAILS RIGHT ── */}
                <section className="bg-[#f5f0eb] py-14 sm:py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">

                            {/* LEFT — Full service image, sticky */}
                            <MotionDiv
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400">01 / Overview</span>
                                    <div className="flex-1 h-px bg-stone-200" />
                                </div>
                                <div className="relative overflow-hidden rounded-sm shadow-xl shadow-stone-400/20 ring-1 ring-stone-300/40 bg-stone-100 sticky top-24">
                                    <Image
                                        src={coverImage}
                                        alt={`${service!.title} — Full View`}
                                        width={1200}
                                        height={900}
                                        className="w-full h-auto object-cover"
                                        quality={90}
                                        priority
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent px-6 py-5">
                                        <p className="text-[8px] uppercase tracking-[0.3em] text-white/50 mb-1">Service</p>
                                        <p className="font-serif text-base font-light text-white tracking-wide">{service!.title}</p>
                                    </div>
                                </div>
                            </MotionDiv>

                            {/* RIGHT — All details */}
                            <MotionDiv
                                initial={{ opacity: 0, x: 25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400">02 / About</span>
                                    <div className="flex-1 h-px bg-stone-200" />
                                </div>

                                {/* Description */}
                                <div className="space-y-5">
                                    <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-stone-800 uppercase">
                                        About This Service
                                    </h2>
                                    <blockquote className="font-serif text-base sm:text-lg font-light leading-relaxed text-stone-600 italic border-l-2 border-stone-300 pl-5">
                                        "{service!.description}"
                                    </blockquote>
                                    <p className="text-sm font-light leading-relaxed text-stone-500">
                                        {service!.longDescription}
                                    </p>
                                </div>

                                {/* CTA buttons */}
                                <div className="flex gap-3 flex-wrap">
                                    <Link
                                        href="/contact"
                                        className="bg-stone-900 hover:bg-stone-700 text-white text-[10px] uppercase tracking-[0.3em] px-7 py-3.5 transition-all duration-300 font-medium"
                                    >
                                        Get a Quote
                                    </Link>
                                    <a
                                        href="tel:+919925616966"
                                        className="border border-stone-300 hover:border-stone-500 text-stone-600 hover:text-stone-900 text-[10px] uppercase tracking-[0.3em] px-7 py-3.5 transition-all duration-300"
                                    >
                                        Call Us
                                    </a>
                                </div>

                                {/* Features list */}
                                <div className="space-y-3">
                                    <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">What's Included</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {service!.features.map((feature, i) => {
                                            const Icon = featureIconMap[feature.icon] || CheckCircle2
                                            return (
                                                <div
                                                    key={i}
                                                    className="group flex items-center gap-3 bg-white/60 hover:bg-white rounded-sm px-4 py-3 ring-1 ring-stone-200/40 hover:ring-stone-200 transition-all duration-300"
                                                >
                                                    <div className="h-7 w-7 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
                                                        <Icon className="h-3 w-3 text-stone-500" />
                                                    </div>
                                                    <span className="text-[11px] font-light text-stone-700 tracking-wide">{feature.title}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </MotionDiv>
                        </div>
                    </div>
                </section>

                {/* ── WORKFLOW / PROCESS ── */}
                <section className="bg-white border-t border-stone-200 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">

                        <MotionDiv
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-5 mb-14">
                                <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">03 / Process</span>
                                <div className="flex-1 h-px bg-stone-200" />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
                                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase">
                                    Our Workflow
                                </h2>
                                <p className="text-xs text-stone-400 font-light max-w-xs sm:text-right">
                                    A structured approach ensuring quality and transparency at every stage.
                                </p>
                            </div>
                        </MotionDiv>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service!.workflow.map((step, i) => (
                                <MotionDiv
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative bg-[#f5f0eb] hover:bg-white rounded-sm p-7 ring-1 ring-stone-200/60 hover:ring-stone-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-stone-300 group-hover:w-full transition-all duration-500" />
                                    <div className="flex items-start gap-5 mb-4">
                                        <span className="font-mono text-2xl font-light text-stone-200 leading-none flex-shrink-0">
                                            {String(step.step).padStart(2, "0")}
                                        </span>
                                        <div className="flex-1 h-px bg-stone-200 mt-3" />
                                    </div>
                                    <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-800 mb-2">{step.title}</h3>
                                    <p className="text-[11px] leading-relaxed text-stone-400 font-light">{step.description}</p>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── OTHER SERVICES ── */}
                <section className="bg-stone-50 border-t border-stone-200 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">

                        <MotionDiv
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-5 mb-12">
                                <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">04 / More</span>
                                <div className="flex-1 h-px bg-stone-200" />
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase mb-10">
                                Other Services
                            </h2>
                        </MotionDiv>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {otherServices.map((other, i) => {
                                const img = serviceImages[other.slug] || "/images/service_interior_design.png"
                                return (
                                    <MotionDiv
                                        key={other.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={`/services/${other.slug}`}
                                            className="group block bg-white ring-1 ring-stone-200/70 hover:ring-stone-300 hover:shadow-xl hover:shadow-stone-300/25 transition-all duration-400 overflow-hidden rounded-sm"
                                        >
                                            <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                                                <Image
                                                    src={img}
                                                    alt={other.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    quality={60}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                                                <div className="absolute top-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                                    <ArrowUpRight className="h-3.5 w-3.5 text-stone-700" />
                                                </div>
                                            </div>
                                            <div className="p-5 space-y-2">
                                                <h3 className="font-serif text-base font-light tracking-wide text-stone-800 uppercase group-hover:text-stone-600 transition-colors">
                                                    {other.title}
                                                </h3>
                                                <p className="text-[11px] font-light text-stone-400 line-clamp-2">{other.shortDescription}</p>
                                            </div>
                                        </Link>
                                    </MotionDiv>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ── CTA STRIP ── */}
                <section className="bg-stone-900 py-14 text-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                            <div className="space-y-2 text-center sm:text-left">
                                <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400">Interested?</p>
                                <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-wide">
                                    Start Your {service!.title} Project
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="border border-white/20 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium"
                                >
                                    Get Consultation
                                </Link>
                                <Link
                                    href="/services"
                                    className="border border-white/10 hover:border-white/30 text-white/60 hover:text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300"
                                >
                                    All Services
                                </Link>
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
