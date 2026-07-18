"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

interface BlogItem {
  id: string
  title: string
  category: string
  date: string
  image: string
  link: string
}

const blogPosts: BlogItem[] = [
  {
    id: "luxury-principles",
    title: "The Principles of Luxury Interior Design That Stand the Test of Time",
    category: "Interior Design",
    date: "25 February 2025",
    image: "/images/blog_living.png",
    link: "/blog/choosing-right-interior-style", // map to closest existing slug
  },
  {
    id: "everyday-spaces",
    title: "How Interior Design Improves Everyday Living Spaces at Home",
    category: "Architecture",
    date: "18 February 2025",
    image: "/images/blog_kitchen.png",
    link: "/blog/sustainable-architecture-trends-2024", // map to closest existing slug
  },
  {
    id: "minimalism-power",
    title: "The Subtle Power of Minimalism in High-End Interior Design Projects",
    category: "Minimalism",
    date: "10 February 2025",
    image: "/images/blog_study.png",
    link: "/blog/custom-furniture-design-guide", // map to closest existing slug
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainPost = blogPosts[0]
  const sidePosts = blogPosts.slice(1)

  return (
    <section ref={ref} className="bg-[#FAF9F6] text-[#0a0a0a] py-24 sm:py-32 overflow-hidden border-t border-[#0a0a0a]/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#0a0a0a]/5">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block border border-[#0a0a0a]/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium text-[#0a0a0a]/60 rounded-full">
              Blog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide">
              Stay Updated With <br />Our Interior Design Blog
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 flex flex-col items-start gap-6">
            <p className="text-sm font-light leading-relaxed text-[#0a0a0a]/60">
              Read insights, project guides, material selections, and tips directly from our architectural design and engineering teams.
            </p>
            <Link 
              href="/blog"
              className="inline-flex border border-[#0a0a0a] bg-[#0a0a0a] hover:bg-transparent hover:text-[#0a0a0a] text-white text-[10px] uppercase tracking-[0.25em] rounded-none px-6 py-3.5 transition-all duration-300 font-medium"
            >
              View All News
            </Link>
          </div>
        </div>

        {/* Asymmetric Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-6 group cursor-pointer"
          >
            <Link href={mainPost.link} className="block space-y-6">
              <div className="relative aspect-[1.5] w-full overflow-hidden border border-[#0a0a0a]/5">
                <Image
                  src={mainPost.image}
                  alt={mainPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#0a0a0a]/40 font-medium">
                  <span>{mainPost.date}</span>
                  <span>&bull;</span>
                  <span className="text-[#0a0a0a]">{mainPost.category}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-[#0a0a0a] group-hover:text-[#0a0a0a]/70 transition-colors leading-snug">
                  {mainPost.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#0a0a0a] pt-2 border-b border-[#0a0a0a]/10 group-hover:border-[#0a0a0a] transition-all duration-300 pb-1">
                  Read Article
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Side Stacked Cards (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-10 justify-between">
            {sidePosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                className="group cursor-pointer"
              >
                <Link href={post.link} className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="relative aspect-[1.4] sm:aspect-[1.2] w-full sm:w-1/3 shrink-0 overflow-hidden border border-[#0a0a0a]/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-3">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#0a0a0a]/40 font-medium">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span className="text-[#0a0a0a]">{post.category}</span>
                    </div>
                    <h3 className="font-serif text-lg font-light tracking-wide text-[#0a0a0a] group-hover:text-[#0a0a0a]/70 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <div>
                      <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#0a0a0a] border-b border-[#0a0a0a]/10 group-hover:border-[#0a0a0a] transition-all duration-300 pb-0.5">
                        Read Article
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
