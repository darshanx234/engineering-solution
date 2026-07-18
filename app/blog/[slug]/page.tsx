import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MotionDiv } from "@/components/motion-wrappers"
import { getPostBySlug, getRelatedPosts, posts } from "@/data/posts"
import { ArrowLeft, Calendar, Clock, User, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return { title: "Post Not Found" }

    return {
        title: `${post.title} | Smart Engineers Blog`,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(slug, 3)
    // If not enough related posts in same category, fill with other posts
    const displayPosts = relatedPosts.length >= 2
        ? relatedPosts
        : posts.filter(p => p.slug !== slug).slice(0, 3)

    // Convert markdown-style content to paragraphs
    const contentParagraphs = post.content.split("\n\n")

    return (
        <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#1a1a1a]">
            <Navbar />
            
            <main className="flex-1">
                {/* ── SLIM DARK HERO ── */}
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
                            Journal
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
                                href="/blog"
                                className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors border-b border-white/10 hover:border-white/40 pb-0.5"
                            >
                                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                                Back to Journal
                            </Link>
                        </MotionDiv>

                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                            <div className="space-y-5 max-w-3xl">
                                <MotionDiv
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <span className="border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] text-white/60">
                                        {post.category}
                                    </span>
                                </MotionDiv>
                                <MotionDiv
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] tracking-wide text-white uppercase">
                                        {post.title}
                                    </h1>
                                </MotionDiv>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAIN ARTICLE SECTION (SPLIT LAYOUT) ── */}
                <section className="py-14 sm:py-20">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
                            
                            {/* LEFT COLUMN: Post Image & Content */}
                            <div className="lg:col-span-8 space-y-10">
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-stone-200 shadow-xl shadow-stone-400/20 ring-1 ring-stone-300/40"
                                >
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        quality={90}
                                    />
                                </MotionDiv>

                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="prose prose-stone max-w-none text-stone-600 bg-white p-8 sm:p-12 ring-1 ring-stone-200/60 rounded-sm shadow-sm"
                                >
                                    {contentParagraphs.map((paragraph, index) => {
                                        // Handle bold markdown headers
                                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                            return (
                                                <h3 key={index} className="font-serif text-xl sm:text-2xl font-light text-stone-850 mt-8 mb-4 uppercase tracking-wide border-b border-stone-100 pb-2">
                                                    {paragraph.replace(/\*\*/g, "")}
                                                </h3>
                                            )
                                        }
                                        // Handle list items
                                        if (paragraph.includes("\n- ")) {
                                            const lines = paragraph.split("\n")
                                            const title = lines[0]
                                            const items = lines.slice(1).filter(l => l.startsWith("- "))
                                            return (
                                                <div key={index} className="space-y-3 my-6">
                                                    {title && (
                                                        <h4 className="font-serif text-lg font-light text-stone-800 uppercase tracking-wider">
                                                            {title.replace(/\*\*/g, "")}
                                                        </h4>
                                                    )}
                                                    <ul className="space-y-2 pl-4">
                                                        {items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2.5 text-stone-650 leading-relaxed text-sm font-light">
                                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                                                                <span>{item.replace(/^- /, "").replace(/\*\*/g, "")}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        }
                                        // Handle numbered lists
                                        if (paragraph.match(/^\d\./) || paragraph.includes("\n1. ")) {
                                            const items = paragraph.split("\n").filter(l => l.match(/^\d\./) || l.startsWith("1. ") || l.startsWith("2. ") || l.startsWith("3. ") || l.startsWith("4. ") || l.startsWith("5. "))
                                            return (
                                                <ol key={index} className="space-y-4 my-6 pl-1">
                                                    {items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-4 text-stone-650 leading-relaxed text-sm font-light">
                                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 border border-stone-200 text-[10px] font-semibold text-stone-500">
                                                                {i + 1}
                                                            </span>
                                                            <span className="pt-0.5">{item.replace(/^\d\.\s*/, "").replace(/^[1-9]\.\s*/, "")}</span>
                                                        </li>
                                                    ))}
                                                </ol>
                                            )
                                        }
                                        return (
                                            <p key={index} className="text-sm sm:text-base font-light leading-relaxed text-stone-500 my-4">
                                                {paragraph.replace(/\*\*/g, "")}
                                            </p>
                                        )
                                    })}
                                </MotionDiv>
                            </div>

                            {/* RIGHT COLUMN: Sidebar Metadata & Share (Sticky) */}
                            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                                <div className="bg-white ring-1 ring-stone-200/60 p-6 sm:p-8 rounded-sm shadow-sm space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400">Article Info</span>
                                        <div className="flex-1 h-px bg-stone-100" />
                                    </div>

                                    {/* Stats grid */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-stone-100">
                                            <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-2">
                                                <User className="h-3.5 w-3.5" /> Author
                                            </span>
                                            <span className="text-[11px] font-medium text-stone-700">{post.author}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-stone-100">
                                            <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-2">
                                                <Calendar className="h-3.5 w-3.5" /> Published
                                            </span>
                                            <span className="text-[11px] font-medium text-stone-700">
                                                {new Date(post.date).toLocaleDateString("en-IN", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-stone-100">
                                            <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-2">
                                                <Clock className="h-3.5 w-3.5" /> Reading Time
                                            </span>
                                            <span className="text-[11px] font-medium text-stone-700">{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Short callout */}
                                    <div className="bg-stone-50 p-4 border border-stone-200/50 rounded-sm">
                                        <p className="text-[11px] font-light leading-relaxed text-stone-500">
                                            Interested in how these design and construction principles apply to your property? Let's discuss your engineering solutions.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="group flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-medium text-stone-800 hover:text-stone-600 transition-colors pt-3 mt-3 border-t border-stone-200/70"
                                        >
                                            Get Consultation
                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── RELATED POSTS ── */}
                {displayPosts.length > 0 && (
                    <section className="bg-white py-16 sm:py-24 border-t border-stone-200">
                        <div className="mx-auto max-w-7xl px-6 lg:px-10">
                            <MotionDiv
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-12"
                            >
                                <div className="flex items-center gap-5 mb-8">
                                    <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">Continue Reading</span>
                                    <div className="flex-1 h-px bg-stone-200" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                    <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase">
                                        More Articles
                                    </h2>
                                    <Link
                                        href="/blog"
                                        className="group inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.35em] text-stone-400 hover:text-stone-700 transition-colors"
                                    >
                                        View All Journal
                                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </MotionDiv>

                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {displayPosts.map((relatedPost, index) => (
                                    <MotionDiv
                                        key={relatedPost.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                    >
                                        <Link href={`/blog/${relatedPost.slug}`} className="group block h-full">
                                            <div className="bg-[#f5f0eb] ring-1 ring-stone-200/70 hover:ring-stone-300 hover:shadow-xl hover:shadow-stone-300/25 transition-all duration-400 overflow-hidden rounded-sm h-full flex flex-col">
                                                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 flex-shrink-0">
                                                    <Image
                                                        src={relatedPost.thumbnail}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        quality={60}
                                                    />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="text-[8px] uppercase tracking-[0.25em] text-white bg-stone-900/60 backdrop-blur-sm px-2.5 py-1">
                                                            {relatedPost.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-5 flex flex-col flex-1 gap-2 bg-white">
                                                    <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-stone-400">
                                                        <span>{new Date(relatedPost.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                                                        <span>&bull; {relatedPost.readTime}</span>
                                                    </div>
                                                    <h3 className="font-serif text-base font-light tracking-wide text-stone-800 uppercase group-hover:text-stone-600 transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="text-[11px] font-light leading-relaxed text-stone-450 line-clamp-2 mt-1">
                                                        {relatedPost.excerpt}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </MotionDiv>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── CTA SECTION ── */}
                <section className="bg-stone-900 py-14 text-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-10">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                            <div className="space-y-2 text-center sm:text-left">
                                <p className="text-[9px] uppercase tracking-[0.35em] text-stone-400">Interested in working with us?</p>
                                <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-wide">
                                    Let's Discuss Your Project
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="border border-white/20 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium"
                                >
                                    Get In Touch
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
