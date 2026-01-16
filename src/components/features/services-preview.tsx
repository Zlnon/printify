"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Printer, Image as ImageIcon, Briefcase, PenTool, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function ServicesPreview() {
  const t = useTranslations('ServicesPage')

  const services = [
    { 
      icon: Printer, 
      key: 'digital', 
      image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800&auto=format&fit=crop',
      color: 'from-amber-500/20 to-orange-500/20'
    },
    { 
      icon: ImageIcon, 
      key: 'largeFormat', 
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=800&auto=format&fit=crop',
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    { 
      icon: Briefcase, 
      key: 'branding', 
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    { 
      icon: PenTool, 
      key: 'design', 
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop',
      color: 'from-purple-500/20 to-pink-500/20'
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Printing & Advertising Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              From concept to completion, we deliver exceptional quality across all printing solutions.
            </p>
          </div>
          <Button variant="outline" className="rounded-xl group" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link 
                key={service.key}
                href="/services"
                className="group block h-full relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`items.${service.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Arrow button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-foreground`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 
                    className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-cabinet)' }}
                  >
                    {t(`items.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {t(`items.${service.key}.description`)}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
