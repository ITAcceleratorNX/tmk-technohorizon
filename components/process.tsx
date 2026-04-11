"use client"

import { Lightbulb, BarChart3, Palette, Code2, Rocket, HeartHandshake } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const steps = [
  { icon: Lightbulb, title: "Идея", description: "Исследование и концепция" },
  { icon: BarChart3, title: "Аналитика", description: "Исследования и стратегия" },
  { icon: Palette, title: "Дизайн", description: "UI/UX и прототипы" },
  { icon: Code2, title: "Разработка", description: "Сборка и итерации" },
  { icon: Rocket, title: "Запуск", description: "Деплой и оптимизация" },
  { icon: HeartHandshake, title: "Поддержка", description: "Сопровождение и рост" },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Проверенный подход к созданию успешных цифровых продуктов.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <div className="relative flex flex-col items-center text-center group">
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-muted-foreground text-xs font-medium flex items-center justify-center lg:hidden">
                  {index + 1}
                </div>
                
                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
