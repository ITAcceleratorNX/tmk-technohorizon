"use client"

import { Target, Puzzle, Package, Repeat } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const reasons = [
  {
    icon: Target,
    title: "Фокус на продукте",
    description: "Думаем продуктом, а не набором фич. Каждое решение опирается на бизнес-цели.",
  },
  {
    icon: Puzzle,
    title: "Индивидуальные решения",
    description: "Подбираем и проектируем под ваши задачи и ограничения, а не «шаблон под всех».",
  },
  {
    icon: Package,
    title: "Опыт в продуктах",
    description: "Создавали и внутренние продукты, и клиентские решения в масштабе.",
  },
  {
    icon: Repeat,
    title: "Заложенная масштабируемость",
    description: "Интеграции, автоматизация и архитектура рассчитаны на рост бизнеса.",
  },
]

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 relative bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Почему TMK
              </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Соединяем продуктовое мышление и сильную инженерию, чтобы создавать цифровые решения, которые действительно важны для бизнеса.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary/50 p-6 text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Проектов сдано</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-6 text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-6 text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="rounded-xl bg-accent/20 p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-accent/20" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
