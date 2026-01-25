import { Link } from "@/i18n/routing"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siInstagram, siX, siFacebook } from "simple-icons"
import type { LucideProps } from "lucide-react"
import { useTranslations } from "next-intl"

// Create React components for social icons using simple-icons
const createSocialIcon = (iconData: { path: string; title: string }) => {
  const IconComponent = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      {...props}
    >
      <title>{iconData.title}</title>
      <path d={iconData.path} />
    </svg>
  )
  IconComponent.displayName = `Icon${iconData.title}`
  return IconComponent
}

const Instagram = createSocialIcon(siInstagram)
const Twitter = createSocialIcon(siX)
const Facebook = createSocialIcon(siFacebook)

// LinkedIn SVG icon (not available in simple-icons)
const Linkedin = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    {...props}
  >
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navigation')

  const footerLinks = {
    services: [
      { label: t('headings.services'), href: "/services" },
    ],
    company: [
      { label: tNav('items.about'), href: "/about" },
      { label: "Our Work", href: "/portfolio" },
      { label: tNav('items.contact'), href: "/contact" },
    ],
    social: [
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Facebook, href: "#", label: "Facebook" },
    ],
  }

  return (
    <footer className="relative bg-background text-foreground overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Giant CTA */}
        <div className="mb-24 text-center border-b border-foreground/10 pb-24">
          <h2 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-foreground/90 hover:text-foreground transition-colors duration-500 cursor-default" style={{ fontFamily: 'var(--font-cabinet)' }}>
            {t('cta.line1')}
            <br />
            <span className="text-stroke text-transparent hover:text-primary transition-all duration-500">{t('cta.line2')}</span>
          </h2>
          <Button size="lg" className="mt-12 h-16 px-12 text-xl rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform" asChild>
            <Link href="/contact">
              {t('cta.button')} <ArrowUpRight className="ml-2 w-6 h-6" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block relative">
               <Image
                src="/Last-Logo-new-2.webp"
                alt="Printify"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-lg text-foreground/50 max-w-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4 pt-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-bold text-lg">{t('headings.services')}</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary hover:translate-x-1 block transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h3 className="font-bold text-lg">{t('headings.company')}</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary hover:translate-x-1 block transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-6">
             <h3 className="font-bold text-lg">{t('headings.contact')}</h3>
             <ul className="space-y-4">
               <li className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                   <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div className="text-foreground/60 text-sm">
                   123 Print Street, Design District<br />
                   Doha, Qatar
                 </div>
               </li>
               <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                   <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <a href="tel:+1234567890" className="text-foreground/60 hover:text-primary transition-colors">
                   +1 (234) 567-890
                 </a>
               </li>
               <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <a href="mailto:hello@printify.com" className="text-foreground/60 hover:text-primary transition-colors">
                   hello@printify.com
                 </a>
               </li>
             </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/30">
          <p>© {new Date().getFullYear()} Printify. {t('rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">{t('links.privacy')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('links.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
