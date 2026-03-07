"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { MousePointer2, MousePointerClick } from "lucide-react"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        !!target.closest("[role='button']") ||
        target.classList.contains("hover-glow") ||
        target.hasAttribute("data-cursor-clickable")
      setIsHovering(isClickable)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed left-0 top-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Base cursor - small arrow */}
      <motion.div
        className="absolute flex items-center justify-center"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <MousePointer2 className="w-5 h-5 text-primary" strokeWidth={2} />
      </motion.div>

      {/* Hover state - clickable indicator */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: isHovering ? 1 : 0.5,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {/* Outer ring - subtle pulse */}
        <motion.div
          className="absolute w-12 h-12 rounded-full border-2 border-primary"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: isHovering ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute w-8 h-8 rounded-full border border-primary/80"
          animate={{ opacity: isHovering ? 0.8 : 0 }}
          transition={{ duration: 0.15 }}
        />
        {/* Click icon */}
        <motion.div
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm"
        >
          <MousePointerClick className="w-5 h-5 text-primary" strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
