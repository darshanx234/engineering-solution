import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/architecture", label: "Architecture" },
  { href: "/services/interior-design", label: "Interior Design" },
  { href: "/services/construction", label: "Construction" },
  { href: "/services/turnkey-projects", label: "Turnkey Projects" },
  { href: "/services/civil-engineering", label: "Civil Engineering" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-foreground">
                <span className="text-lg font-bold text-primary">SE</span>
              </div>
              <div>
                <span className="text-lg font-bold">Smart Engineers</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Design. Build. Deliver. We are a full-service architecture, interior design, and construction company dedicated to creating exceptional spaces.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>123 Business Park, Sector 5, Ahmedabad, Gujarat 380015</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary-foreground">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@smartengineers.in" className="hover:text-primary-foreground">
                  info@smartengineers.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Smart Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
