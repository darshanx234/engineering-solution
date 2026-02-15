import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BlogCard } from "@/components/blog-card"
import { MotionDiv } from "@/components/motion-wrappers"
import { getPostBySlug, getRelatedPosts, posts } from "@/data/posts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
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
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[350px] bg-black">
                    <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover opacity-50"
                        priority
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/blog" className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Blog
                            </Link>

                            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
                                {post.category}
                            </Badge>

                            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                {post.title}
                            </h1>

                            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
                                <span className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(post.date).toLocaleDateString("en-IN", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime}
                                </span>
                            </div>
                        </MotionDiv>
                    </div>
                </section>

                {/* Article Content */}
                <section className="bg-background py-16 lg:py-24">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                {contentParagraphs.map((paragraph, index) => {
                                    // Handle bold markdown headers
                                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                        return (
                                            <h3 key={index} className="mt-8 mb-3 text-xl font-semibold text-foreground">
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
                                            <div key={index}>
                                                {title && (
                                                    <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground">
                                                        {title.replace(/\*\*/g, "")}
                                                    </h3>
                                                )}
                                                <ul className="mt-2 space-y-2 pl-1">
                                                    {items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                            {item.replace(/^- /, "").replace(/\*\*/g, "")}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    }
                                    // Handle numbered lists
                                    if (paragraph.match(/^\d\./)) {
                                        const items = paragraph.split("\n").filter(l => l.match(/^\d\./))
                                        return (
                                            <ol key={index} className="mt-2 space-y-2 pl-1">
                                                {items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                                            {i + 1}
                                                        </span>
                                                        {item.replace(/^\d\.\s*/, "")}
                                                    </li>
                                                ))}
                                            </ol>
                                        )
                                    }
                                    return (
                                        <p key={index} className="mt-4 leading-relaxed text-lg">
                                            {paragraph.replace(/\*\*/g, "")}
                                        </p>
                                    )
                                })}
                            </div>
                        </MotionDiv>
                    </div>
                </section>

                {/* Related Posts */}
                {displayPosts.length > 0 && (
                    <section className="bg-secondary py-16 lg:py-24 border-t border-border">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <MotionDiv
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mb-12 text-center"
                            >
                                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                    More Articles
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                    Continue reading more insights from our team.
                                </p>
                            </MotionDiv>

                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {displayPosts.map((relatedPost, index) => (
                                    <MotionDiv
                                        key={relatedPost.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <BlogCard post={relatedPost} />
                                    </MotionDiv>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <Button asChild variant="outline" className="bg-transparent">
                                    <Link href="/blog">View All Articles</Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                )}

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
                                Ready to Start Your Project?
                            </h2>
                            <p className="mt-4 text-lg text-primary-foreground/80">
                                Let&apos;s bring your vision to life. Get in touch with us today.
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
