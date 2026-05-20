"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { WELCOME_STORAGE_KEY } from "@/components/ui/welcome-dialog";

type Message = { from: "bot" | "user"; text: string };

export function FloatingAssistant() {
  const t = useTranslations("FloatingAssistant");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [panelOpen, setPanelOpen] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [replied, setReplied] = useState(false);

  // Show speech bubble after welcome is dismissed (or if already seen)
  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const scheduleBubble = () => {
      showTimer = setTimeout(() => setBubbleVisible(true), 4000);
      hideTimer = setTimeout(() => setBubbleVisible(false), 9000);
    };

    const welcomed = localStorage.getItem(WELCOME_STORAGE_KEY);
    if (welcomed) {
      scheduleBubble();
    } else {
      window.addEventListener("printify:welcome-dismissed", scheduleBubble, { once: true });
    }

    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
      window.removeEventListener("printify:welcome-dismissed", scheduleBubble);
    };
  }, []);

  // Simulate typing then post opening message when panel is opened
  useEffect(() => {
    if (!panelOpen || messages.length > 0) return;
    setTyping(true);
    const timer = setTimeout(() => {
      setTyping(false);
      setMessages([{ from: "bot", text: t("openingMessage") }]);
    }, 1400);
    return () => clearTimeout(timer);
  }, [panelOpen, messages.length, t]);

  function openPanel() {
    setBubbleVisible(false);
    setPanelOpen(true);
  }

  function closePanel() {
    setPanelOpen(false);
  }

  function handleQuickReply(text: string) {
    if (replied) return;
    setReplied(true);
    setMessages((prev) => [...prev, { from: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: t("quickReplyResponse") },
      ]);
    }, 1200);
  }

  function handleSend() {
    const trimmed = inputValue.trim();
    if (!trimmed || replied) return;
    setReplied(true);
    setInputValue("");
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: t("genericResponse") },
      ]);
    }, 1200);
  }

  const quickReplies = [t("qr1"), t("qr2"), t("qr3")] as const;

  return (
    <div
      className={cn(
        "fixed z-40 flex flex-col gap-3",
        "bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
        isRtl ? "left-[max(1.5rem,env(safe-area-inset-left))] items-start" : "right-[max(1.5rem,env(safe-area-inset-right))] items-end"
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* ── Chat panel ─────────────────────────────────────── */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            style={{ originX: isRtl ? 0 : 1, originY: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className={cn(
              "w-full max-w-[min(320px,calc(100vw-3rem))] rounded-3xl overflow-hidden shadow-2xl",
              "bg-background border border-border",
              "flex flex-col"
            )}
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300">
              {/* Mascot */}
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/printo.png"
                  alt="Printo"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-black text-sm">{t("botName")}</span>
                <span className="flex items-center gap-1 text-xs text-black/60 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 inline-block" />
                  {t("statusOnline")}
                </span>
              </div>
              <button
                onClick={closePanel}
                aria-label="Close"
                className={cn(
                  "absolute top-3 p-2 min-h-11 min-w-11 flex items-center justify-center rounded-full text-black/50 hover:text-black hover:bg-black/10 transition-colors",
                  isRtl ? "left-3" : "right-3"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[180px] max-h-[260px] bg-accent/5">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex gap-2 items-end",
                      msg.from === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    {msg.from === "bot" && (
                      <div className="relative w-7 h-7 shrink-0 mb-0.5">
                        <Image
                          src="/printo.png"
                          alt="Printo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div
                      className={cn(
                        "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed max-w-[220px]",
                        msg.from === "bot"
                          ? "bg-background border border-border text-foreground rounded-bl-sm"
                          : "bg-yellow-400 text-black font-medium rounded-br-sm"
                      )}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2 items-end"
                  >
                    <div className="relative w-7 h-7 shrink-0">
                      <Image src="/printo.png" alt="Printo" fill className="object-contain" />
                    </div>
                    <div className="flex items-center gap-1 bg-background border border-border rounded-2xl rounded-bl-sm px-3.5 py-3">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.7, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick replies (show once opening message is visible and no user reply yet) */}
              <AnimatePresence>
                {messages.length > 0 && !replied && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-wrap gap-1.5 pt-1"
                  >
                    {quickReplies.map((label) => (
                      <button
                        key={label}
                        onClick={() => handleQuickReply(label)}
                        className="px-3 py-2.5 min-h-11 rounded-full border border-yellow-400/60 text-xs font-medium text-yellow-600 dark:text-yellow-400 hover:bg-yellow-400/10 transition-colors"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA link */}
            <div className="px-4 py-2 border-t border-border bg-background">
              <Link
                href={`/${locale}/contact`}
                onClick={closePanel}
                className="flex items-center justify-center gap-1.5 text-xs font-semibold text-yellow-500 hover:text-yellow-400 transition-colors py-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t("ctaLink")}
              </Link>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("inputPlaceholder")}
                disabled={replied}
                className={cn(
                  "flex-1 h-11 rounded-xl px-3 text-base md:text-sm bg-accent/30 border border-border",
                  "placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-yellow-400/40",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || replied}
                aria-label="Send"
                className={cn(
                  "w-11 h-11 rounded-xl flex items-center justify-center shrink-0",
                  "bg-yellow-400 hover:bg-yellow-300 text-black transition-colors",
                  "disabled:opacity-40 disabled:cursor-not-allowed",
                  isRtl && "[&>svg]:rotate-180"
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Speech bubble teaser ───────────────────────────── */}
      <AnimatePresence>
        {bubbleVisible && !panelOpen && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, x: isRtl ? -12 : 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: isRtl ? -12 : 12, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            onClick={openPanel}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openPanel()}
            className={cn(
              "relative flex items-center gap-2.5 px-4 py-2.5 rounded-2xl",
              "bg-background border border-border shadow-lg text-sm font-medium text-foreground",
              "hover:border-yellow-400/50 transition-colors cursor-pointer"
            )}
          >
            <span className="text-yellow-500">👋</span>
            {t("bubbleText")}
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                setBubbleVisible(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  setBubbleVisible(false);
                }
              }}
              className="text-muted-foreground/50 hover:text-muted-foreground ms-1 cursor-pointer p-1 min-h-11 min-w-11 flex items-center justify-center"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </span>
            {/* Tail */}
            <span
              className={cn(
                "absolute -bottom-[9px] border-[9px] border-transparent border-t-background",
                isRtl ? "left-5" : "right-5"
              )}
            />
            <span
              className={cn(
                "absolute -bottom-[11px] border-[9px] border-transparent border-t-border",
                isRtl ? "left-5" : "right-5"
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Trigger button ────────────────────────────────── */}
      <motion.button
        onClick={panelOpen ? closePanel : openPanel}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={panelOpen ? "Close assistant" : "Open assistant"}
        className={cn(
          "relative w-14 h-14 rounded-full shadow-xl overflow-visible",
          "ring-2 ring-yellow-400/40 hover:ring-yellow-400/70 transition-all duration-200"
        )}
      >
        {/* Pulse ring */}
        {!panelOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-yellow-400/25"
            animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Mascot */}
        <motion.div
          animate={panelOpen ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/printo.png"
            alt="Printo assistant"
            fill
            className="object-contain drop-shadow-lg"
            sizes="56px"
          />
        </motion.div>

        {/* Online dot */}
        <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background shadow" />

        {/* Close icon overlay */}
        <AnimatePresence>
          {panelOpen && (
            <motion.span
              key="close-icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50"
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
