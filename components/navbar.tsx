"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
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
  { href: "/team", label: "Team" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo1.png"
              alt="Smart Engineers Logo"
              width={60}
              height={100}
              className="rounded"
            />
          </motion.div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-foreground">Smart Engineers</span>
            <p className="text-xs text-muted-foreground">Design. Build. Deliver.</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {["Home", "About", "Team"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground group"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          {/* Custom Services Mega Dropdown */}
          <motion.div
            ref={dropdownRef}
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full mt-2 w-[520px] -translate-x-1/2 rounded-2xl border border-border bg-background/98 p-2 shadow-xl backdrop-blur-md"
                >
                  {/* Services Grid */}
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => {
                      const Icon = serviceIconMap[service.icon] || Building2
                      return (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 transition-colors group-hover:bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground">{service.title}</p>
                            <p className="mt-0.5 text-xs leading-snug text-muted-foreground line-clamp-2">{service.shortDescription}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  {/* View All Footer */}
                  <div className="mt-1 border-t border-border pt-2">
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 rounded-xl p-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {["Projects", "Blog"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="relative px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground group"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-border bg-background lg:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col px-4 py-4">
              {navLinks.map((link, index) => {
                // Insert services accordion after "Team" (index 2)
                if (link.label === "Projects") {
                  return (
                    <div key="services-and-projects">
                      {/* Services Accordion */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <button
                          className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
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
                              <div className="ml-3 border-l-2 border-border pl-4 pb-2">
                                <Link
                                  href="/services"
                                  className="flex items-center gap-2 py-2.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                  onClick={() => setIsOpen(false)}
                                >
                                  All Services
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                                {services.map((service) => {
                                  const Icon = serviceIconMap[service.icon] || Building2
                                  return (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      className="flex items-center gap-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <Icon className="h-4 w-4 text-primary/60" />
                                      {service.title}
                                    </Link>
                                  )
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Projects link */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
                      >
                        <Link
                          href="/projects"
                          className="py-3 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground block"
                          onClick={() => setIsOpen(false)}
                        >
                          Projects
                        </Link>
                      </motion.div>
                    </div>
                  )
                }

                // Skip rendering Projects again in the normal loop
                if (link.label === "Contact") {
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="py-3 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground block"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="py-3 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.05 }}
              >
                <Button asChild className="mt-4 w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
