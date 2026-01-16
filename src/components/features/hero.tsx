"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Premium Quality Materials",
  "Fast Turnaround Time",
  "Expert Design Team"
]

export function Hero() {
  const t = useTranslations('HomePage')

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Power Behind Every Brand</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Elevate Your
              <span className="block text-primary mt-2">Brand Identity</span>
              <span className="block mt-2">With Premium Print</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              From business cards to billboards, we deliver exceptional printing 
              and advertising solutions that make your brand unforgettable.
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" className="h-14 px-8 text-base rounded-xl font-semibold group" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base rounded-xl border-white/20 text-white hover:bg-white/10 hover:border-white/30 group" 
                asChild
              >
                <Link href="/services" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-1 group-hover:bg-primary/20 transition-colors">
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8"
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '50+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div 
                    className="text-3xl sm:text-4xl font-bold text-primary"
                    style={{ fontFamily: 'var(--font-cabinet)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Hero image composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-[80%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
                  alt="Brand design work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              {/* Secondary image */}
              <div className="absolute bottom-8 left-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop"
                  alt="Printing process"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 top-1/3 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Quality Assured</div>
                    <div className="text-white/60 text-sm">100% Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
