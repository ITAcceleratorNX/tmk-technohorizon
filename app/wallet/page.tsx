import type { Metadata } from "next"
import { Zap, Smartphone, BadgeCheck, ScanLine, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { WalletCardPreview } from "@/components/wallet/wallet-card-preview"
import { WalletAddButtons } from "@/components/wallet/wallet-add-buttons"
import { WALLET_WHATSAPP_URL } from "@/lib/wallet/config"

export const metadata: Metadata = {
  title: "Цифровая карта в Wallet — TMK Techno Horizon",
  description:
    "Добавьте демонстрационную карту TMK Techno Horizon в Apple Wallet или Google Wallet и посмотрите, как таким решением смогут пользоваться ваши клиенты.",
}

/** Преимущества — тексты из ТЗ 4.3. */
const advantages = [
  {
    icon: Zap,
    title: "Быстрый доступ для клиента",
    text: "Карта хранится в Apple Wallet или Google Wallet. Клиенту не нужно устанавливать отдельное приложение.",
  },
  {
    icon: Smartphone,
    title: "Программа лояльности в телефоне",
    text: "На карте можно показывать бонусный баланс, персональную скидку, статус и специальные условия.",
  },
  {
    icon: BadgeCheck,
    title: "Бренд всегда под рукой",
    text: "Название, фирменный стиль и контакты компании находятся непосредственно в Wallet клиента.",
  },
  {
    icon: ScanLine,
    title: "Удобная идентификация",
    text: "QR-код или штрихкод на карте можно использовать для распознавания клиента при обращении или покупке.",
  },
]

/** «Как это работает» — шаги из ТЗ 4.3. */
const steps = [
  "Клиент открывает ссылку или сканирует QR-код.",
  "Добавляет карту в Apple Wallet или Google Wallet.",
  "Открывает карту на телефоне и показывает QR-код сотруднику бизнеса.",
]

export default function WalletDemoPage() {
  return (
    <main>
      {/* 1. Первый экран */}
      <section className="relative overflow-hidden">
        {/* Фон: сетка + свечение в стиле основного сайта */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl px-5 pt-14 pb-20 text-center">
          <AnimatedSection variant="fade">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Демонстрация • Apple Wallet + Google Wallet
            </span>
          </AnimatedSection>

          <AnimatedSection variant="blur" delay={80}>
            <h1 className="mt-6 text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
              Цифровая карта вашего бизнеса&nbsp;— прямо в Wallet
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Добавьте демонстрационную карту TMK Techno Horizon в Apple Wallet или Google Wallet и
              посмотрите, как таким решением смогут пользоваться ваши клиенты.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={240} className="mt-10">
            <WalletAddButtons />
            <p className="mt-4 text-xs text-muted-foreground">
              Демонстрационная версия. Бонусы, скидка и статус указаны в качестве примера.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={320} variant="scale" className="mt-14">
            <WalletCardPreview />
          </AnimatedSection>
        </div>
      </section>

      {/* 2. Коротко о решении */}
      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              Карта лояльности без отдельного мобильного приложения
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">
              Клиент получает карту по ссылке или QR-коду, добавляет её в Wallet и использует прямо
              со своего телефона. На карте можно отображать бонусы, скидку, статус клиента, QR-код и
              информацию о компании.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Преимущества */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Преимущества</h2>
        </AnimatedSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 card-hover">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 4. Как это работает */}
      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Как это работает</h2>
          </AnimatedSection>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <AnimatedSection key={step} delay={i * 80}>
                <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base text-foreground/90">{step}</span>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Финальный CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <AnimatedSection variant="scale">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,180,220,0.12),transparent_55%)]" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                Такая карта может работать и для вашего бизнеса
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto">
                TMK Techno Horizon разрабатывает цифровые продукты и автоматизирует бизнес-процессы
                под конкретные задачи компании.
              </p>
              <a
                href={WALLET_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Запустить карту для своего бизнеса
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
