"use client"

import { useTranslations } from 'next-intl';
import { Printer, Image as ImageIcon, Briefcase, PenTool, Monitor, Layers, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const tCommon = useTranslations('Common');
  
  const services = [
    { icon: Printer, key: 'digital', color: 'from-orange-500 to-red-500' },
    { icon: ImageIcon, key: 'largeFormat', color: 'from-teal-500 to-cyan-500' },
    { icon: Briefcase, key: 'branding', color: 'from-violet-500 to-purple-500' },
    { icon: PenTool, key: 'offset', color: 'from-pink-500 to-rose-500' },
    { icon: Monitor, key: 'web', color: 'from-blue-500 to-indigo-500' },
    { icon: Layers, key: 'packaging', color: 'from-amber-500 to-orange-500' }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      <div className="container mx-auto py-24 px-4">
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            {t('pill')}
          </span>
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            {t('title')} <span className="text-gradient">{t('titleHighlight')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>
        
        {/* Services grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Content */}
                <h3 
                  className="relative mb-3 text-xl font-bold group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-cabinet)' }}
                >
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed mb-6">
                  {t(`items.${service.key}.description`)}
                </p>
                
                {/* Learn more link */}
                <div className="relative flex items-center gap-2 text-sm font-medium text-primary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>{tCommon('buttons.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50">
            <h2 
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              {t('cta.title')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('cta.description')}
            </p>
            <Button size="lg" className="h-14 px-8 rounded-xl glow-primary" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                {tCommon('buttons.contact')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
