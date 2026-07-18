"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { posts } from "@/data/posts"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"

const categories = ["All", ...Array.from(new Set(posts.map(p => p.category)))]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
}

export default function BlogPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const featured = posts[0]
  const filtered = (activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory)).slice(1)

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f0eb] text-[#1a1a1a]">
      <Navbar />
      <main className="flex-1">

        {/* ── DARK HERO ── */}
        <section className="relative h-[70vh] flex items-end overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog_sustainable_architecture.png"
              alt="Smart Engineers Blog"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-stone-900/55" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="font-serif text-[18vw] font-bold text-white/[0.03] uppercase leading-none">
              Blog
            </span>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-white/10 pt-8">
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.35em] font-medium text-white/60"
                >
                  Insights & Knowledge
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-5xl sm:text-7xl font-light tracking-wide uppercase text-white leading-[1.05]"
                >
                  Design<br />
                  <span className="text-white/50">Journal</span>
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-xs text-xs font-light leading-relaxed text-white/40 sm:text-right"
              >
                Expert perspectives on architecture, interior design, structural engineering, and everything in between.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        <section className="bg-white border-b border-stone-200 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">Featured Article</span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[16/10] overflow-hidden rounded-sm bg-stone-100 ring-1 ring-stone-200/60"
                >
                  <Image
                    src={featured.thumbnail}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                    quality={85}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-white bg-stone-900/70 backdrop-blur-sm px-3 py-1.5">
                      {featured.category}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-stone-400">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{featured.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl xl:text-4xl font-light tracking-wide text-stone-800 uppercase leading-[1.15] group-hover:text-stone-600 transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-sm font-light leading-relaxed text-stone-500 max-w-sm">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center text-[10px] font-semibold text-stone-500 border border-stone-200">
                      {featured.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-stone-700 uppercase tracking-wider">{featured.author}</p>
                    </div>
                    <div className="ml-auto h-10 w-10 rounded-full bg-stone-900 flex items-center justify-center group-hover:bg-stone-700 transition-colors duration-300">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── CATEGORY FILTER + GRID ── */}
        <section ref={ref} className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-12">

            {/* Header + filter tabs */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 font-medium">All Articles</span>
                  <div className="h-px w-12 bg-stone-300" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-stone-800 uppercase">
                  Browse the Journal
                </h2>
              </div>
              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[8px] uppercase tracking-[0.25em] font-medium px-4 py-2 border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-stone-900 border-stone-900 text-white"
                        : "border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700 bg-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              key={activeCategory}
            >
              {filtered.map((post, i) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-white ring-1 ring-stone-200/70 hover:ring-stone-300 hover:shadow-xl hover:shadow-stone-300/25 transition-all duration-400 overflow-hidden rounded-sm h-full flex flex-col"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 flex-shrink-0">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          quality={65}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                        <div className="absolute top-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight className="h-3.5 w-3.5 text-stone-700" />
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="text-[8px] uppercase tracking-[0.25em] text-white bg-stone-900/60 backdrop-blur-sm px-2.5 py-1">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <span className="text-[8px] font-mono text-white/70 bg-black/25 backdrop-blur-sm px-2 py-1 rounded-full">
                            {String(i + 2).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-5 flex flex-col flex-1 gap-3">
                        <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.2em] text-stone-400">
                          <span className="flex items-center gap-1"><Calendar className="h-2.5 w-2.5" />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                          <span className="flex items-center gap-1"><Clock className="h-2.5 w-2.5" />{post.readTime}</span>
                        </div>
                        <h3 className="font-serif text-base font-light tracking-wide text-stone-800 uppercase leading-snug group-hover:text-stone-600 transition-colors duration-300 flex-1">
                          {post.title}
                        </h3>
                        <p className="line-clamp-2 text-[11px] font-light leading-relaxed text-stone-400">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
                          <span className="text-[9px] uppercase tracking-wider text-stone-500 font-medium">{post.author}</span>
                          <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 group-hover:text-stone-700 flex items-center gap-1 transition-colors duration-300">
                            Read <ArrowUpRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-stone-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center space-y-6">
            <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400">Have a project in mind?</p>
            <h3 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wide">
              Let's Build Together
            </h3>
            <p className="text-sm font-light text-stone-400 max-w-md mx-auto">
              Talk to our team about your architectural, interior, or structural project.
            </p>
            <div className="flex gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="border border-white/20 bg-white/10 hover:bg-white hover:text-stone-900 text-white px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
