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
        <AnimatedSection>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Почему TMK
              </h2>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                Соединяем продуктовое мышление и сильную инженерию, чтобы создавать цифровые решения, которые
                действительно важны для бизнеса.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
