import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ImageGallery } from "@/components/image-gallery"
import { MotionDiv } from "@/components/motion-wrappers"
import { getProjectBySlug, projects } from "@/data/projects"
import { MapPin, User, Home, CheckCircle, ArrowLeft, CloudCog } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section with Cover Image */}
                <section className="relative h-[60vh] min-h-[400px] bg-black">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-70"
                        priority
                        quality={60}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/projects" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Projects
                            </Link>

                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                                    {project.type}
                                </span>
                                <span className={`rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm ${project.status === "Completed"
                                    ? "bg-green-500/20 text-green-100"
                                    : "bg-blue-500/20 text-blue-100"
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h1>

                            <div className="mt-6 flex flex-wrap gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    <span className="text-sm font-medium">Client: {project.client}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <span className="text-sm font-medium">{project.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Home className="h-5 w-5" />
                                    <span className="text-sm font-medium">{project.type}</span>
                                </div>
                            </div>
                        </MotionDiv>
                    </div>
                </section>

                {/* Project Details */}
                <section className="bg-background py-12 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-3">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="mb-4 text-3xl font-bold text-foreground">About This Project</h2>
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-8">
                                        <h3 className="mb-4 text-xl font-semibold text-foreground">Project Highlights</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                                <span className="text-muted-foreground">Premium quality construction with attention to detail</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                                <span className="text-muted-foreground">Modern interior design with elegant finishes</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                                <span className="text-muted-foreground">Timely delivery and professional execution</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                                <span className="text-muted-foreground">Complete client satisfaction achieved</span>
                                            </li>
                                        </ul>
                                    </div>
                                </MotionDiv>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="rounded-lg border bg-card p-6 shadow-lg"
                                >
                                    <h3 className="mb-6 text-xl font-semibold text-foreground">Project Information</h3>

                                    <div className="space-y-4">
                                        <div className="border-b pb-4">
                                            <p className="text-sm text-muted-foreground">Client</p>
                                            <p className="mt-1 font-medium text-foreground">{project.client}</p>
                                        </div>

                                        <div className="border-b pb-4">
                                            <p className="text-sm text-muted-foreground">Location</p>
                                            <p className="mt-1 font-medium text-foreground">{project.location}</p>
                                        </div>

                                        <div className="border-b pb-4">
                                            <p className="text-sm text-muted-foreground">Project Type</p>
                                            <p className="mt-1 font-medium text-foreground">{project.type}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-muted-foreground">Status</p>
                                            <p className="mt-1 font-medium text-foreground">{project.status}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Button asChild className="w-full">
                                            <Link href="/contact">Start Your Project</Link>
                                        </Button>
                                    </div>
                                </MotionDiv>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Gallery */}
                <section className="bg-secondary py-12 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center"
                        >
                            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Project Gallery</h2>
                            <p className="mt-4 text-muted-foreground">Explore the stunning interiors and design details</p>
                        </MotionDiv>

                        <ImageGallery images={project.gallery} projectTitle={project.title} />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                                Inspired by This Project?
                            </h2>
                            <p className="mt-4 text-lg text-primary-foreground/80">
                                Let's bring your vision to life. Get in touch with us today.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                    <Link href="/projects">View More Projects</Link>
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
