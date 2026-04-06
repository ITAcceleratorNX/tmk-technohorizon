"use client"

import { useEffect, useRef, useState } from "react"

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "blur" | "fade"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: AnimationVariant
  duration?: number
}

const variantStyles: Record<AnimationVariant, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 -translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 translate-x-12",
    animate: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  blur: {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
  fade: {
    initial: "opacity-0",
    animate: "opacity-100",
  },
}

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  variant = "fade-up",
  duration = 700 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const styles = variantStyles[variant]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        isVisible ? styles.animate : styles.initial
      } ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" 
      }}
    >
      {children}
    </div>
  )
}
