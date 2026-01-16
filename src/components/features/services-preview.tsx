"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Printer, Image as ImageIcon, Briefcase, PenTool, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Printing & Advertising Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to completion, we deliver exceptional quality across all printing and advertising solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" size="lg" className="rounded-xl group" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href="/services"
                  className="group block h-full relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={t(`items.${service.key}.title`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Arrow button */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} ring-1 ring-white/10 text-foreground group-hover:ring-primary/30 transition-all duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 
                      className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-cabinet)' }}
                    >
                      {t(`items.${service.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`items.${service.key}.description`)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
