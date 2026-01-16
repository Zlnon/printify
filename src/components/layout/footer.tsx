import { Link } from "@/i18n/routing"
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { label: "Digital Printing", href: "/services" },
    { label: "Large Format", href: "/services" },
    { label: "Corporate Branding", href: "/services" },
    { label: "Design Services", href: "/services" },
    { label: "Packaging", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background decoration - using gradient for performance */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-primary/5 to-transparent -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-cabinet)' }}>
                Stay Updated
              </h3>
              <p className="text-white/60">Get the latest news and exclusive offers.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 md:w-72 h-12 px-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors"
              />
              <Button className="h-12 px-6 rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Last-Logo-new-2.webp"
                alt="Printify"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Power Behind Every Brand. Your premier partner for high-quality 
              printing and advertising solutions. Transforming visions into 
              tangible reality since 2014.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-2">
            <h3 
              className="font-semibold text-white mb-5 text-lg"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <h3 
              className="font-semibold text-white mb-5 text-lg"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-4">
            <h3 
              className="font-semibold text-white mb-5 text-lg"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@printify.com" className="flex items-center gap-4 text-sm text-white/60 hover:text-primary transition-colors group p-3 rounded-xl bg-white/5 hover:bg-white/10">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-white group-hover:text-primary transition-colors">hello@printify.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-4 text-sm text-white/60 hover:text-primary transition-colors group p-3 rounded-xl bg-white/5 hover:bg-white/10">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Phone</div>
                    <div className="text-white group-hover:text-primary transition-colors">+1 (234) 567-890</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 text-sm text-white/60 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Address</div>
                    <div className="text-white">123 Print Street, Design City, DC 12345</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Printify Advertising & Printing. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/40 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/40 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/40 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
