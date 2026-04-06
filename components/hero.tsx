"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-[15%] w-20 h-20 border border-accent/20 rounded-2xl animate-float opacity-40" />
      <div className="absolute bottom-1/3 left-[10%] w-16 h-16 border border-border rounded-full animate-float-slow opacity-30" />
      <div className="absolute top-1/2 right-[8%] w-3 h-3 bg-accent/40 rounded-full animate-float-delay" />
      <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-foreground/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge with animation */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 ${
              mounted ? "animate-slide-up opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Продуктовый подход • Автоматизация • Web и мобайл</span>
          </div>

          {/* Heading with stagger animation */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight max-w-5xl text-balance ${
              mounted ? "animate-blur-in stagger-1 opacity-100" : "opacity-0"
            }`}
          >
            <span className="block">TMK Techno Horizon</span>
            <span className="block mt-2 animate-text-shimmer">Студия цифровых продуктов и автоматизации</span>
          </h1>

          {/* Description */}
          <p 
            className={`mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed ${
              mounted ? "animate-slide-up stagger-3 opacity-100" : "opacity-0"
            }`}
          >
            Создаём сайты, веб-платформы и мобильные приложения — от идеи до запуска и роста.
          </p>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mt-10 ${
              mounted ? "animate-slide-up stagger-4 opacity-100" : "opacity-0"
            }`}
          >
            <Button size="lg" className="magnetic-btn bg-foreground text-background hover:bg-foreground/90 gap-2 group" asChild>
              <a href="#contact">
                Обсудить проект
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="magnetic-btn border-border hover:bg-card" asChild>
              <a href="#cases">Смотреть кейсы</a>
            </Button>
          </div>

          {/* Mock UI Element with animation */}
          <div 
            className={`mt-20 w-full max-w-4xl ${
              mounted ? "animate-scale-in stagger-5 opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-1 card-hover">
              <div className="rounded-lg bg-secondary/50 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 rounded bg-muted-foreground/10 animate-pulse" style={{ animationDelay: "0s" }} />
                    <div className="h-8 rounded bg-accent/30" />
                    <div className="h-8 rounded bg-muted-foreground/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="h-8 rounded bg-muted-foreground/10 animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                  <div className="col-span-2 rounded-lg bg-muted-foreground/5 p-4">
                    <div className="h-4 w-1/3 rounded bg-muted-foreground/20 mb-4" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 rounded bg-muted-foreground/10 hover:bg-accent/20 transition-colors cursor-pointer" />
                      <div className="h-24 rounded bg-muted-foreground/10 hover:bg-accent/20 transition-colors cursor-pointer" />
                      <div className="h-24 rounded bg-accent/20" />
                      <div className="h-24 rounded bg-muted-foreground/10 hover:bg-accent/20 transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${
        mounted ? "animate-slide-up stagger-6 opacity-100" : "opacity-0"
      }`}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Листайте</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
