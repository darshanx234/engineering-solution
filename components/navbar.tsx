"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight, Building2, Palette, FileText, ClipboardList, Box } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"

const serviceIconMap: Record<string, React.ElementType> = {
  palette: Palette,
  box: Box,
  "file-text": FileText,
  clipboard: ClipboardList,
  building: Building2,
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/team", label: "Team" },
]

const postLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Prevent scroll gestures inside mobile menu from bubbling up to Lenis
  useEffect(() => {
    const el = mobileMenuRef.current
    if (!el) return

    const handleScrollEvent = (e: Event) => {
      e.stopPropagation()
    }

    el.addEventListener("wheel", handleScrollEvent, { passive: true })
    el.addEventListener("touchstart", handleScrollEvent, { passive: true })
    el.addEventListener("touchmove", handleScrollEvent, { passive: true })

    return () => {
      el.removeEventListener("wheel", handleScrollEvent)
      el.removeEventListener("touchstart", handleScrollEvent)
      el.removeEventListener("touchmove", handleScrollEvent)
    }
  }, [isOpen])

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#0a0a0a]/90 border-b border-white/5 py-4 backdrop-blur-md"
          : "bg-transparent py-6 border-b border-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* SVG Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Smart Engineers — Home"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="Smart Engineers"
              width={180}
              height={113}
              priority
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-75"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {/* Main Links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full mt-4 w-[520px] -translate-x-1/2 border border-white/10 bg-[#0a0a0a]/95 p-3 shadow-2xl backdrop-blur-md rounded-none"
                  >
                    {/* Services Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => {
                        const Icon = serviceIconMap[service.icon] || Building2
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group flex items-start gap-3 p-3 transition-colors hover:bg-white/[0.04]"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-white/[0.02] transition-colors group-hover:bg-white group-hover:text-[#0a0a0a] text-white">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs uppercase tracking-wider font-semibold text-white group-hover:text-white/80">{service.title}</p>
                              <p className="mt-1 text-[10px] leading-relaxed text-white/40 line-clamp-2">{service.shortDescription}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* View All Footer */}
                    <div className="mt-2 border-t border-white/5 pt-2">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 p-2 text-xs uppercase tracking-wider font-medium text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
                        onClick={() => setServicesOpen(false)}
                      >
                        View All Services
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Links */}
            {postLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="border border-white/20 bg-transparent hover:bg-white hover:text-[#0a0a0a] text-white text-xs uppercase tracking-[0.2em] rounded-none px-6 py-5 transition-all duration-300 font-medium"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-white/70 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            className={`fixed inset-x-0 bottom-0 z-40 bg-[#0a0a0a] border-t border-white/5 lg:hidden flex flex-col justify-between p-8 overflow-y-auto transition-all duration-500 ${isScrolled ? "top-[72px]" : "top-[88px]"
              }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-5 mt-6">
              <Link
                href="/"
                className="text-lg font-serif font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors py-1.5 uppercase"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-serif font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors py-1.5 uppercase"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              {/* <Link
                href="/team"
                className="text-lg font-serif font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors py-1.5 uppercase"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link> */}

              {/* Services Mobile Accordion */}
              <div>
                <button
                  className="flex w-full items-center justify-between text-lg font-serif font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors py-1.5 uppercase"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 border-l border-white/10 pl-4 py-2 flex flex-col gap-3">
                        <Link
                          href="/services"
                          className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/80 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          All Services
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                        {services.map((service) => {
                          const Icon = serviceIconMap[service.icon] || Building2
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 text-xs text-white/50 hover:text-white uppercase tracking-wider py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon className="h-3.5 w-3.5 text-white/40" />
                              {service.title}
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/projects"
                className="text-lg font-serif font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors py-1.5 uppercase"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-lg font-serif font-light tracking-[0.15em] text-white/80 hover:text-white transition-colors py-1.5 uppercase"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </nav>

            <div className="flex flex-col gap-6 border-t border-white/5 pt-6 mt-6">
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">Get in Touch</p>
                <p className="text-xs text-white/80 font-light">+91 99256 16966 / +91 99256 44236</p>
                <p className="text-xs text-white/80 font-light font-sans">smartengineering@gmail.com</p>
              </div>

              <Button
                asChild
                className="w-full border border-white/20 bg-transparent text-white text-xs uppercase tracking-[0.25em] rounded-none py-6 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
