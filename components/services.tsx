"use client"

import { LayoutTemplate, MonitorSmartphone, Server, PlugZap } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const offerings = [
  {
    icon: LayoutTemplate,
    title: "UX/UI и продуктовая логика",
    description:
      "Продумываем user flow, роли, сценарии, кабинеты и интерфейсы, чтобы продукт был понятным, удобным и логичным в работе.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web и mobile разработка",
    description:
      "Создаём сайты, веб-платформы и мобильные приложения с нужной функциональностью, логикой и современным пользовательским опытом.",
  },
  {
    icon: Server,
    title: "Архитектура и backend",
    description:
      "Строим внутреннюю механику продукта: API, админ-панели, статусы, процессы, данные и масштабируемую backend-структуру.",
  },
  {
    icon: PlugZap,
    title: "Интеграции, AI и smart-решения",
    description:
      "Подключаем CRM, платежи, 1С, AI, smart-функции и автоматизацию, чтобы продукт работал как единая цифровая система.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background dark:from-card/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(42rem,90vw)] w-[min(42rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.14),rgba(139,92,246,0.08),transparent_65%)] blur-3xl dark:bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),rgba(139,92,246,0.1),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection variant="blur">
          <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Услуги
            </p>
            <h2 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
              От интерфейса до архитектуры — всё необходимое для цифрового продукта
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {offerings.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 90}>
              <article
                className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card/45 p-8 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 dark:border-border/50 dark:bg-card/35 dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] dark:backdrop-blur-xl md:rounded-[1rem] hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_48px_-12px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.55)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-violet-500/[0.07] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:rounded-[1rem]"
                  aria-hidden
                />

                <div className="relative flex flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-indigo-500/15 to-violet-500/20 text-foreground shadow-sm transition-colors duration-300 group-hover:border-accent/25 group-hover:from-indigo-500/22 group-hover:to-violet-500/28 dark:from-indigo-400/12 dark:to-violet-500/18">
                    <item.icon
                      className="h-[1.35rem] w-[1.35rem] stroke-[1.35] text-accent"
                      aria-hidden
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
