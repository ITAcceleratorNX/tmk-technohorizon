"use client"

import { Globe, LayoutDashboard, Smartphone, Settings2 } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const services = [
  {
    icon: Globe,
    title: "Сайты и лендинги",
    description: "Современный дизайн, высокая конверсия и отличная производительность.",
  },
  {
    icon: LayoutDashboard,
    title: "Веб-платформы и дашборды",
    description: "Сложные веб-приложения, админки и панели данных, готовые к масштабированию.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Нативные и кроссплатформенные приложения для iOS и Android с продуманным UX.",
  },
  {
    icon: Settings2,
    title: "Автоматизация и интеграции",
    description: "Связываем инструменты, автоматизируем процессы и делаем кастомные интеграции.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32 relative bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Что мы делаем
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный цикл разработки цифровых продуктов.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative rounded-2xl border border-border bg-background p-8 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
