"use client"

import { Link } from "@/i18n/routing"
import { ModeToggle } from "@/components/mode-toggle"
import { LangSwitcher } from "@/components/lang-switcher"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

export function Header() {
  const t = useTranslations('Navigation')
  const tCommon = useTranslations('Common')
  
  const navItems = [
    { href: "/services", label: t('items.services') },
    { href: "/projects", label: t('items.projects') },
    { href: "/about", label: t('items.about') },
    { href: "/contact", label: t('items.contact') },
  ]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-lg shadow-foreground/5 border-b border-foreground/5 h-16' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/Last-Logo-new-2.webp"
              alt="Printify"
              width={160}
              height={45}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 dark:filter-none invert hue-rotate-[180deg] brightness-125 saturate-125"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Phone number - desktop */}
            <a 
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="hidden xl:flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
              dir="ltr"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            
            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-3 ml-2">
              <LangSwitcher />
              <ModeToggle />
            </div>
            <Button 
              className="hidden md:inline-flex rounded-xl h-11 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <Link href="/contact">{tCommon('buttons.getQuote')}</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-white/10">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-lg font-medium text-white hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-4 border-t border-white/10">
              <LangSwitcher />
              <ModeToggle />
            </div>
            <Button className="w-full h-12 rounded-xl mt-4" asChild>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {tCommon('buttons.getQuote')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
