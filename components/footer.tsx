"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/blog", label: "Blog" },
]

const services = [
  { href: "/services/interior-design", label: "Interior Design" },
  { href: "/services/3d-designing", label: "3D Visualization" },
  { href: "/services/2d-designing", label: "2D Floor Planning" },
  { href: "/services/structure-designing", label: "Structural Engineering" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5 pt-16">

      {/* CTA Section Banner */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 border-b border-white/5 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide leading-snug">
              Ready to Start Your <br />Next Design Project?
            </h2>
          </div>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="inline-flex border border-white bg-white hover:bg-transparent hover:text-white text-[#0a0a0a] text-xs uppercase tracking-[0.25em] rounded-none px-8 py-5 transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Links and Contact Info */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Brand + Contact Details */}
          <div className="md:col-span-6 space-y-6">
            {/* SVG Logo in footer */}
            <Link href="/" aria-label="Smart Engineers — Home">
              <Image
                src="/logo.svg"
                alt="Smart Engineers"
                width={180}
                height={113}
                className="h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-light tracking-wide text-white/90">
                +91 99256 16966 <span className="text-white/30">/</span> +91 99256 44236
              </h3>
              <p className="text-sm font-light text-white/50">
                smartengineering@gmail.com
              </p>
              <p className="text-sm font-light text-white/50 max-w-sm">
                Amber Plaza, Near Jelchok, Shop No. 11, Second Floor, Surendranagar, Gujarat 363020
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/share/1DtN9KqGeX/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/smartengineershub?igsh=MXJ1NW4xemdvNTd0Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/SEngineers95890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Pages</h4>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors uppercase tracking-[0.1em] text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors uppercase tracking-[0.1em] text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Massive Background Outline Text */}
      <div className="relative w-full overflow-hidden select-none pb-8">
        <h1
          className="text-center font-serif text-[12vw] font-bold leading-none tracking-[0.1em] uppercase opacity-5 transition-opacity duration-500 hover:opacity-10"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.6)",
            color: "transparent"
          }}
        >
          Smart Engineers
        </h1>
      </div>

      {/* Copyright Footer */}
      <div className="border-t border-white/5 py-6 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
          <span>&copy; {new Date().getFullYear()} Smart Engineers. All rights reserved.</span>
          <span>Designed with Refined Luxury</span>
        </div>
      </div>

    </footer>
  )
}
