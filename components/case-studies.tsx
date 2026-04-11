"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "./animated-section"

type CaseStudyWeb = {
  name: string
  description: string
  features: string[]
  highlighted: boolean
  kind: "web"
  href: string
}

type CaseStudyStores = {
  name: string
  description: string
  features: string[]
  highlighted: boolean
  kind: "stores"
  appStoreUrl: string
  playStoreUrl: string
}

const cases: (CaseStudyWeb | CaseStudyStores)[] = [
  {
    name: "Workflow",
    description:
      "Цифровая инфраструктура для современных офисов и высокоэффективных команд.Workflow объединяет управление офисом, продуктивностью и wellbeing в одной системе.",
    features: [
      "Office management",
      "Productivity",
      "Wellbeing + AI",
      "Smart office",
      "Healthy tracker",
      "Офисные сервисы",
    ],
    highlighted: false,
    kind: "stores",
    appStoreUrl: "https://apps.apple.com/us/app/workflow/id6759451937",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.workflow.kz",
  },
  {
    name: "Extra Space",
    description:
      "Цифровая storage-платформа с личным кабинетом, CRM-логикой и онлайн-оплатой.Extra Space объединяет клиента, менеджера и складскую логику в одном цифровом сервисе.",
    features: [
      "Личный кабинет клиента",
      "CRM и панель менеджера",
      "Оформление заказов",
      "Электронный договор / SMS-подписание",
      "Эквайринг и онлайн-оплата",
      "Логика доставки и управления заказами",
    ],
    highlighted: false,
    kind: "web",
    href: "https://extraspace.kz/",
  },
  {
    name: "Vi-Tech",
    description:
      "Платформа для повышения операционной эффективности и улучшения бизнес-процессов.Vi-Tech помогает командам стандартизировать работу, проводить аудиты, анализировать проблемы и внедрять улучшения с поддержкой AI.",
    features: [
      "Standard work",
      "Audits",
      "Problem solving",
      "Idea generation & implementation",
      "Интеграции со сторонними системами",
      "Адаптация под разные отрасли",
    ],
    highlighted: true,
    kind: "web",
    href: "https://vi-tech.io/",
  },
  {
    name: "Narxoz Business School",
    description:
      "Современный лендинг для образовательного продукта.Платформа, которая помогает презентовать программу, ценность и digital-подход школы в понятной и сильной форме.",
    features: [
      "Продающая структура лендинга",
      "Современный UI/UX",
      "Подача образовательного продукта",
      "Адаптация под digital-аудиторию",
    ],
    highlighted: false,
    kind: "web",
    href: "https://nbs.narxoz.kz/",
  },
]

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.71-2.48 4.73-2.45 1.39.02 2.72.93 3.57.93.85 0 2.47-1.16 4.16-1C14.97 7.2 16.93 8 17.9 9.52c-3.28 1.13-3.86 4.45-3.36 6.75.5 2.3 2.28 3.18 2.17 3.23zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#EA4335" d="M3.6 1.63 13.06 12 3.6 22.37c-1.03-.58-1.6-1.63-1.6-2.82V4.45c0-1.19.57-2.24 1.6-2.82z" />
      <path fill="#FBBC04" d="M21.16 10.59 16.5 7.77l-3.44 4.23 3.44 4.23 4.66-2.82c1.47-.89 1.47-3.05 0-3.94z" />
      <path fill="#34A853" d="M3.6 22.37c.48.27 1.03.41 1.6.41.55 0 1.09-.13 1.57-.39L16.5 16.23l-4.66-2.82L3.6 22.37z" />
      <path fill="#4285F4" d="M16.5 7.77 6.77 1.65A3.13 3.13 0 0 0 3.6 1.63L13.06 12 16.5 7.77z" />
    </svg>
  )
}

export function CaseStudies() {
  return (
    <section id="cases" className="scroll-mt-24 py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection variant="blur">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Наши продукты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Реальные решения, которые мы создали для клиентов и внутренних инициатив.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((caseStudy, index) => (
            <AnimatedSection key={index} delay={index * 100} className="h-full">
              <div
              className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 h-full ${
                caseStudy.highlighted
                  ? "border-accent bg-accent/5 hover:border-accent"
                  : "border-border bg-card/50 hover:border-muted-foreground/30"
              }`}
            >
              {caseStudy.highlighted && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                  Избранное
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">{caseStudy.name}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {caseStudy.description}
                </p>
              </div>

              <ul className="space-y-3">
                {caseStudy.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 ${
                        caseStudy.highlighted ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 w-full">
                {caseStudy.kind === "stores" ? (
                  <div className="flex gap-2 w-full">
                    <a
                      href={caseStudy.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 h-12 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                      aria-label="Скачать в App Store"
                    >
                      <AppleIcon className="h-6 w-6" />
                    </a>
                    <a
                      href={caseStudy.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 h-12 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                      aria-label="Скачать в Google Play"
                    >
                      <GooglePlayIcon className="h-6 w-6" />
                    </a>
                  </div>
                ) : (
                  <Button
                    variant={caseStudy.highlighted ? "default" : "outline"}
                    className={`w-full gap-2 group/btn ${
                      caseStudy.highlighted
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border-border hover:bg-secondary"
                    }`}
                    asChild
                  >
                    <a href={caseStudy.href} target="_blank" rel="noopener noreferrer">
                      Смотреть кейс
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
