"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Premium Quality Materials",
  "Fast Turnaround Time",
  "Expert Design Team"
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span>Power Behind Every Brand</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white animate-fade-in-up"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              Elevate Your
              <span className="block text-primary mt-2">Brand Identity</span>
              <span className="block mt-2">With Premium Print</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed animate-fade-in-up delay-100">
              From business cards to billboards, we deliver exceptional printing 
              and advertising solutions that make your brand unforgettable.
            </p>

            {/* Features list */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-200">
              {features.map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-300">
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
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-1">
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 animate-fade-in-up delay-400">
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
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="hidden lg:block relative animate-fade-in delay-200">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
                  alt="Brand design work"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 0vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -left-4 top-1/3 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 animate-fade-in delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Quality Assured</div>
                    <div className="text-white/60 text-sm">100% Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
