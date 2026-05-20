"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Printer, Image as ImageIcon, Briefcase, PenTool, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ScrollReveal, StaggerContainer } from "@/components/ui/scroll-reveal"
import { servicePreviewImages } from "@/data/media-assets"

export function ServicesPreview() {
  const t = useTranslations('ServicesPreview')
  const tCommon = useTranslations('Common')
  const tPage = useTranslations('ServicesPage')

  const services = [
    {
      icon: Printer,
      key: "digital" as const,
      image: servicePreviewImages.digital,
      color: "text-amber-500",
    },
    {
      icon: ImageIcon,
      key: "largeFormat" as const,
      image: servicePreviewImages.largeFormat,
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      key: "branding" as const,
      image: servicePreviewImages.branding,
      color: "text-emerald-500",
    },
    {
      icon: PenTool,
      key: "design" as const,
      image: servicePreviewImages.design,
      color: "text-purple-500",
    },
  ]

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pattern-dots opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t('pill')}
            </div>
            <h2 
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              {t('title')} <br className="hidden md:block"/>
              <span className="text-stroke text-transparent">{t('titleHighlight')}</span>
            </h2>
            <p className="mt-2 md:mt-4 text-muted-foreground text-sm md:text-lg max-w-xl hidden sm:block">
              {t('description')}
            </p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full px-6 md:px-8 border-primary/20 hover:bg-primary hover:text-primary-foreground group transition-all h-10 md:h-12 text-sm md:text-base" asChild>
            <Link href="/services">
              {t('viewAll')}
              <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6" stagger={0.1}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <ScrollReveal variant="fade-up" key={service.key} className="h-full">
                <Link 
                  href="/services"
                  className="group block h-full relative overflow-hidden rounded-2xl md:rounded-3xl glass-card hover-glow transition-all duration-500"
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={t(`items.${service.key}.title`)}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-700 scale-110 group-hover:scale-100"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-3.5 sm:p-6 md:p-8 h-full flex flex-col">
                    <div className={`mb-3 md:mb-auto inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-white/5 border border-white/10 ${service.color} transition-transform group-hover:scale-110 duration-300 shadow-lg`}>
                      <Icon className="h-5 w-5 md:h-7 md:w-7" />
                    </div>
                    
                    <div className="mt-auto md:mt-8">
                      <h3 
                        className="text-sm sm:text-base md:text-2xl font-bold text-foreground mb-1 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug"
                        style={{ fontFamily: 'var(--font-cabinet)' }}
                      >
                        {tPage(`items.${service.key}.title`)}
                      </h3>
                      <p className="hidden md:block text-muted-foreground text-sm leading-relaxed mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                        {tPage(`items.${service.key}.description`)}
                      </p>
                      
                      <div className="hidden md:flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        {tCommon('buttons.learnMore')} <ArrowRight className="w-4 h-4 ms-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
