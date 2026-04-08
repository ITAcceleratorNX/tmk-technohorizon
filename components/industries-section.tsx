"use client"

import { useCallback, useEffect, useState } from "react"
import {
  Briefcase,
  Building2,
  Factory,
  HardHat,
  HeartPulse,
  Mountain,
  Plane,
  Ship,
  Shield,
  TrainFront,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { AnimatedSection } from "./animated-section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const industries: { label: string; icon: LucideIcon }[] = [
  { label: "Горнодобывающая промышленность", icon: Mountain },
  { label: "Железнодорожная отрасль", icon: TrainFront },
  { label: "Строительство", icon: HardHat },
  { label: "Производство", icon: Factory },
  { label: "Управление активами", icon: Briefcase },
  { label: "Энергетика", icon: Zap },
  { label: "Авиация", icon: Plane },
  { label: "Управление объектами", icon: Building2 },
  { label: "Судостроение", icon: Ship },
  { label: "Оборонная промышленность", icon: Shield },
  { label: "Здравоохранение", icon: HeartPulse },
]

function IndustryCircleCard({ item }: { item: (typeof industries)[0] }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div
        className="relative flex aspect-square w-[min(100%,9.5rem)] max-w-[10.5rem] items-center justify-center overflow-hidden rounded-full shadow-[0_12px_40px_-12px_rgba(15,23,42,0.35)] ring-1 ring-white/15 transition-all duration-300 sm:w-[10.5rem] sm:max-w-none md:w-[11rem] group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.35)] group-hover:ring-indigo-400/40 dark:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.55)] dark:ring-white/10"
        style={{
          background:
            "linear-gradient(145deg, rgba(67,56,202,0.85) 0%, rgba(109,40,217,0.75) 45%, rgba(147,51,234,0.65) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2), transparent 50%)",
          }}
          aria-hidden
        />
        <item.icon
          className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-white/20 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
          strokeWidth={1.15}
          aria-hidden
        />
        <span className="relative z-10 px-2.5 text-center text-[0.625rem] font-bold uppercase leading-snug tracking-wide text-white drop-shadow-md sm:text-[0.6875rem] md:px-3 md:text-xs">
          {item.label}
        </span>
      </div>
    </div>
  )
}

export function IndustriesSection() {
  const [api, setApi] = useState<CarouselApi>()
  /** Индекс среди snap-точек Embla (страницы прокрутки), не индекс карточки */
  const [snapIndex, setSnapIndex] = useState(0)
  const [snapCount, setSnapCount] = useState(0)

  const syncFromApi = useCallback((carouselApi: CarouselApi | undefined) => {
    if (!carouselApi) return
    setSnapIndex(carouselApi.selectedScrollSnap())
    setSnapCount(carouselApi.scrollSnapList().length)
  }, [])

  useEffect(() => {
    if (!api) return
    syncFromApi(api)
    const onChange = () => syncFromApi(api)
    api.on("select", onChange)
    api.on("reInit", onChange)
    return () => {
      api.off("select", onChange)
      api.off("reInit", onChange)
    }
  }, [api, syncFromApi])

  const scrollToSnap = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  return (
    <section
      id="industries"
      className="scroll-mt-24 relative overflow-hidden border-b border-border/40 py-24 md:py-32"
    >
      {/* Плавный стык сверху с секцией «Услуги» */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/90 to-secondary/[0.1] dark:via-background/92 dark:to-card/[0.14]"
        aria-hidden
      />
      {/* Тот же индиго/violet «орб» и blur, что у блока «От интерфейса до архитектуры…» */}
      <div
        className="pointer-events-none absolute left-1/2 top-[45%] h-[min(42rem,90vw)] w-[min(42rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.14),rgba(139,92,246,0.08),transparent_65%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),rgba(139,92,246,0.1),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection variant="blur">
          <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Отрасли
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.35rem]">
              Цифровые решения для сложных отраслей
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-base">
              Помогаем находить узкие места в процессах, управлении и операциях и переводить их в работающие
              цифровые решения. Соединяем стратегию, проектирование систем и рост эффективности — с понятными
              метриками и опорой на практику в промышленности и B2B.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="mx-auto max-w-6xl">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
                dragFree: false,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
                {industries.map((item) => (
                  <CarouselItem
                    key={item.label}
                    className="basis-[50%] pl-3 sm:basis-[33.333%] sm:pl-4 md:basis-1/4 md:pl-6"
                  >
                    <IndustryCircleCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {snapCount > 0 && (
              <div
                className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12"
                role="tablist"
                aria-label="Страницы карусели отраслей"
              >
                {Array.from({ length: snapCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={snapIndex === index}
                    aria-label={`Позиция ${index + 1} из ${snapCount}`}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      snapIndex === index
                        ? "bg-foreground scale-110"
                        : "bg-muted-foreground/35 hover:bg-muted-foreground/55 dark:bg-muted-foreground/30 dark:hover:bg-muted-foreground/50",
                    )}
                    onClick={() => scrollToSnap(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
