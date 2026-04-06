"use client"

import { Layers, Zap, TrendingUp } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const values = [
  {
    icon: Layers,
    title: "Делаем продукты",
    description: "От концепции до масштабируемых цифровых решений с измеримой бизнес-ценностью.",
  },
  {
    icon: Zap,
    title: "Автоматизируем процессы",
    description: "Оптимизируем рабочие процессы и убираем рутину с помощью умной автоматизации.",
  },
  {
    icon: TrendingUp,
    title: "Ведём к росту",
    description: "Сопровождаем проект от первой идеи до запуска и постоянного развития.",
  },
]

export function CoreValue() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
