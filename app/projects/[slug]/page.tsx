import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ImageGallery } from "@/components/image-gallery"
import { MotionDiv } from "@/components/motion-wrappers"
import { getProjectBySlug, projects } from "@/data/projects"
import { MapPin, Home, ArrowLeft, Layers, CheckCircle2 } from "lucide-react"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1">

        {/* ── SLIM HERO — title only, no cover image shown here ── */}
        <section className="relative bg-stone-900 pt-28 pb-14 overflow-hidden">
          {/* Subtle texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Watermark text */}
          <div className="absolute right-[-4%] top-0 bottom-0 flex items-center pointer-events-none select-none">
            <span className="font-serif text-[18vw] font-bold text-white/[0.03] uppercase leading-none">
              {project.location.split(",")[0]}
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
            {/* Breadcrumb */}
            <MotionDiv
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors duration-300 border-b border-white/10 hover:border-white/40 pb-0.5"
              >
                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                Return to Portfolio
              </Link>
            </MotionDiv>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <div className="space-y-5">
                <MotionDiv
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-wrap gap-3"
                >
                  <span className="border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] text-white/60">
                    {project.type}
                  </span>
                  <span className={`border backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] font-medium ${
                    project.status === "Completed"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : "border-amber-400/30 bg-amber-400/10 text-amber-300"
                  }`}>
                    {project.status}
                  </span>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] tracking-wide text-white uppercase">
                    {project.title}
                  </h1>
                </MotionDiv>
              </div>

              <MotionDiv
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="flex items-center gap-1.5 text-[10px] text-white/40 font-light flex-shrink-0"
              >
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                {project.location}
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT: IMAGE (LEFT) + DETAILS (RIGHT) ── */}
        <section className="bg-[#f5f0eb] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">

              {/* LEFT — Full project image, natural proportions */}
              <MotionDiv
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Section label */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400">01 / Overview</span>
                  <div className="flex-1 h-px bg-stone-200" />
                </div>

                {/* Full image — NOT cropped, shows entire photo */}
                <div className="relative overflow-hidden rounded-sm shadow-xl shadow-stone-400/20 ring-1 ring-stone-300/40 bg-stone-100 sticky top-24">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} — Full View`}
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover"
                    quality={90}
                    priority
                  />
                  {/* Caption bar at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent px-6 py-5">
                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/50 mb-1">Project</p>
                    <p className="font-serif text-base font-light text-white tracking-wide">{project.title}</p>
                  </div>
                </div>
              </MotionDiv>

              {/* RIGHT — All project details */}
              <MotionDiv
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                {/* Section label */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400">02 / Brief</span>
                  <div className="flex-1 h-px bg-stone-200" />
                </div>

                {/* Architectural Brief */}
                <div className="space-y-5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-stone-800 uppercase">
                    Architectural Brief
                  </h2>
                  <blockquote className="font-serif text-base sm:text-lg font-light leading-relaxed text-stone-600 italic border-l-2 border-stone-300 pl-5">
                    "{project.description}"
                  </blockquote>
                  <p className="text-sm font-light leading-relaxed text-stone-500">
                    Smart Engineers combined state-of-the-art spatial mapping, robust civil calculation layouts, and bespoke material detailing — delivering an optimal balance of safe engineering and high-fashion visual comfort.
                  </p>
                </div>

                {/* Specs card */}
                <div className="bg-white rounded-sm ring-1 ring-stone-200/60 shadow-md shadow-stone-300/20 p-7 space-y-6 relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 h-px w-10 bg-stone-300/60" />
                  <div className="absolute top-0 right-0 h-10 w-px bg-stone-300/60" />

                  <h3 className="font-serif text-sm font-light uppercase tracking-[0.25em] text-stone-700 pb-4 border-b border-stone-100">
                    Specification Deck
                  </h3>

                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { icon: MapPin, label: "Location", value: project.location },
                      { icon: Home, label: "Typology", value: project.type },
                      { icon: CheckCircle2, label: "Status", value: project.status },
                      { icon: Layers, label: "Delivery", value: "Turnkey Design & Build" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0 h-7 w-7 rounded-full bg-stone-100 flex items-center justify-center">
                          <Icon className="h-3.5 w-3.5 text-stone-500" />
                        </div>
                        <div>
                          <p className="text-[8px] uppercase tracking-[0.28em] text-stone-400">{label}</p>
                          <p className="text-xs font-light text-stone-700 mt-0.5">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-stone-900 hover:bg-stone-700 text-white text-center text-[10px] uppercase tracking-[0.3em] py-3.5 transition-all duration-300 font-medium mt-2"
                  >
                    Start Consultation
                  </Link>
                </div>

                {/* Technical highlights */}
                <div className="space-y-3">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">Technical Highlights</p>
                  {[
                    { num: "01", title: "Spatial Integration", desc: "Coordinating 2D zoning maps to create optimal room geometry, ventilation lines, and internal fluid pathways." },
                    { num: "02", title: "Material Detailing", desc: "Curated wood, stone, marble, and custom metal fixtures to translate design ideas into refined surfaces." },
                    { num: "03", title: "RCC Precision", desc: "Advanced reinforcement and beam calculation sheets ensuring safe loading limits under seismic conditions." },
                    { num: "04", title: "Lighting Systems", desc: "Bespoke ceiling grids, hidden profiles, and spot placement to highlight material textures and ambience." },
                  ].map((spec) => (
                    <div
                      key={spec.num}
                      className="group flex gap-4 bg-white/60 hover:bg-white hover:shadow-sm rounded-sm p-4 ring-1 ring-stone-200/40 hover:ring-stone-200 transition-all duration-300 relative overflow-hidden"
                    >
                      <span className="font-mono text-[10px] text-stone-300 flex-shrink-0 pt-0.5">{spec.num}</span>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-semibold text-stone-700 mb-1">{spec.title}</h4>
                        <p className="text-[11px] leading-relaxed text-stone-400 font-light">{spec.desc}</p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-stone-300 group-hover:w-full transition-all duration-400" />
                    </div>
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* ── PROJECT GALLERY ── */}
        <section className="bg-stone-50 py-16 sm:py-24 border-t border-stone-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-12">

            <MotionDiv
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-5 mb-8">
                <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">03 / Gallery</span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase">
                    Project Showcase
                  </h2>
                  <p className="text-xs text-stone-400 font-light">
                    Full interior & exterior documentation — click any image to expand.
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 border border-stone-200 bg-white px-4 py-2 rounded-full flex-shrink-0">
                  {project.gallery.length} Images
                </span>
              </div>
            </MotionDiv>

            <ImageGallery images={project.gallery} projectTitle={project.title} />

          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section className="bg-stone-900 py-14 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400">Like what you see?</p>
                <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-wide">Start Your Project</h3>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="border border-white/20 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium"
                >
                  Get Consultation
                </Link>
                <Link
                  href="/projects"
                  className="border border-white/10 hover:border-white/30 text-white/60 hover:text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300"
                >
                  More Projects
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
