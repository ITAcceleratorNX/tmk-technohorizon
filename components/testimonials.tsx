"use client"

import { AnimatedSection } from "./animated-section"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "TMK Techno Horizon превратили нашу идею в рабочий продукт в рекордные сроки. Внимание к деталям и продуктовое мышление на высшем уровне.",
    author: "Алексей Чен",
    role: "CEO, TechCorp",
    initials: "АЧ",
  },
  {
    quote:
      "Автоматизация, которую они внедрили, экономит нам более 40 часов в неделю. Профессиональная команда, которая понимает бизнес.",
    author: "Мария Сантос",
    role: "COO, DataFlow",
    initials: "МС",
  },
  {
    quote:
      "Отличная разработка мобильного приложения: чистый код, масштабируемая архитектура и результат выше ожиданий.",
    author: "Дэвид Ким",
    role: "Основатель, SmartSys",
    initials: "ДК",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent mb-3">Отзывы</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Что говорят клиенты
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.author} delay={index * 100}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
                <Quote className="h-8 w-8 text-accent/40 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-accent-foreground">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
