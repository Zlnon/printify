"use client"

import { useTranslations } from "next-intl"

const clients = ["STARTUP", "BRAND", "AGENCY", "STUDIO", "CORP", "COMPANY"]

export function Clients() {
  const t = useTranslations('Clients')
  return (
    <section className="py-8 md:py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest text-center mb-4 md:mb-8">
          {t('title')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-3 md:gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="text-sm sm:text-lg md:text-3xl font-bold text-muted-foreground/30 hover:text-primary/60 transition-colors cursor-default text-center leading-tight"
              style={{ fontFamily: 'var(--font-cabinet)' }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
