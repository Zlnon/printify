"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "printify-welcomed-v1";

export function WelcomeDialog() {
  const t = useTranslations("WelcomeDialog");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      // Small delay so the page paints first
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 24, delay: 0.05 }}
            className={cn(
              "fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            )}
          >
            <div
              className={cn(
                "relative pointer-events-auto w-full max-w-md rounded-3xl overflow-hidden",
                "bg-background border border-border shadow-2xl"
              )}
              dir={isRtl ? "rtl" : "ltr"}
            >
              {/* Top gradient band */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />

              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Close"
                className={cn(
                  "absolute top-4 z-10 p-2 rounded-full transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-accent/20",
                  isRtl ? "left-4" : "right-4"
                )}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Hero area */}
              <div className="relative flex flex-col items-center pt-8 pb-4 px-6 bg-gradient-to-b from-yellow-400/10 to-transparent">
                {/* Glow behind mascot */}
                <div className="absolute top-8 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl" />

                {/* Mascot */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-44 h-44 drop-shadow-2xl"
                >
                  <Image
                    src="/printo.png"
                    alt="Printo mascot"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Pill badge */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-500 text-xs font-semibold"
                >
                  <Sparkles className="w-3 h-3" />
                  {t("badge")}
                </motion.div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-3 flex flex-col items-center text-center gap-3">
                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold leading-snug tracking-tight"
                >
                  {t("title")}
                  <span className="text-yellow-500"> {t("titleHighlight")}</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.27 }}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {t("description")}
                </motion.p>

                {/* Feature pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.34 }}
                  className="flex flex-wrap justify-center gap-2 mt-1"
                >
                  {(["feature1", "feature2", "feature3"] as const).map((key) => (
                    <span
                      key={key}
                      className="px-3 py-1 rounded-full bg-accent/40 text-xs font-medium text-foreground/80 border border-border"
                    >
                      {t(key)}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 w-full mt-3"
                >
                  <Link
                    href={`/${locale}/services`}
                    onClick={dismiss}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 h-11 rounded-xl px-5",
                      "bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm",
                      "transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-yellow-400/30 hover:shadow-lg"
                    )}
                  >
                    {t("cta")}
                    <ArrowRight className={cn("w-4 h-4", isRtl && "rotate-180")} />
                  </Link>

                  <button
                    onClick={dismiss}
                    className={cn(
                      "flex-1 h-11 rounded-xl px-5 border-2 border-border",
                      "text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/30",
                      "transition-all duration-200 active:scale-[0.98]"
                    )}
                  >
                    {t("skip")}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
