"use client"

import { useTranslations } from "next-intl"

const clients = ["STARTUP", "BRAND", "AGENCY", "STUDIO", "CORP", "COMPANY"]

export function Clients() {
  const t = useTranslations('Clients')
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center mb-8">
          {t('title')}
        </p>
        <div className="flex flex-wrap gap-8 md:gap-12 items-center justify-center">
          {clients.map((client) => (
            <div
              key={client}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/30 hover:text-primary/60 transition-colors cursor-default"
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
