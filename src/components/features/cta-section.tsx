"use client"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"

const benefits = ["Free Consultation", "Quick Turnaround", "Quality Guaranteed"]

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-primary">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,black_25%,black_50%,transparent_50%,transparent_75%,black_75%)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6"
            style={{ fontFamily: 'var(--font-cabinet)' }}
          >
            Ready to Elevate<br />Your Brand?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get a free consultation and quote today. Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="h-12 px-6 rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold group"
              asChild
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-6 rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
