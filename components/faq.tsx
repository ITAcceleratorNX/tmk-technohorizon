"use client"

import { AnimatedSection } from "./animated-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Сколько времени занимает разработка продукта?",
    answer:
      "Сроки зависят от сложности. Лендинг — 1–2 недели, веб-платформа — 2–4 месяца, мобильное приложение — 3–6 месяцев. Детальную оценку даём после этапа исследования.",
  },
  {
    question: "Как устроен процесс разработки?",
    answer:
      "Работаем по гибкой модели: исследование → дизайн → разработка → тестирование → запуск → поддержка. Регулярные обновления и обратная связь на каждом этапе.",
  },
  {
    question: "Есть ли сопровождение после запуска?",
    answer:
      "Да, предлагаем пакеты поддержки и развития: исправление ошибок, обновления безопасности, оптимизация производительности и доработка функциональности.",
  },
  {
    question: "Какие технологии вы используете?",
    answer:
      "Современный проверенный стек: React, Next.js, Node.js, PostgreSQL, AWS и другие. Подбираем технологии под задачи конкретного проекта.",
  },
  {
    question: "Как организована коммуникация по проекту?",
    answer:
      "Повседневно — Slack или Telegram, раз в неделю — созвоны, прогресс — в таск-трекере. Вы всегда в курсе статуса и следующих шагов.",
  },
  {
    question: "Что если нужны изменения в процессе разработки?",
    answer:
      "Изменения в продуктовой разработке — норма. Agile даёт гибкость. Крупные сдвиги в объёме обсуждаем и планируем вместе.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent mb-3">Вопросы и ответы</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Часто задаваемые вопросы
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
