"use client"

import { useLocale } from "next-intl"
import { usePathname, Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LangSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const otherLocale = locale === "en" ? "ar" : "en"

  return (
    <Button asChild variant="ghost" size="sm">
      <Link href={pathname} locale={otherLocale} className="flex gap-2">
        <Languages className="h-4 w-4" />
        <span className="uppercase">{otherLocale}</span>
      </Link>
    </Button>
  )
}
