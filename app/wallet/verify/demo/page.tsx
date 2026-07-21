import type { Metadata } from "next"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { WALLET_DEMO, WALLET_WHATSAPP_URL } from "@/lib/wallet/config"

export const metadata: Metadata = {
  title: "Проверка карты — TMK Techno Horizon",
  description: "Демонстрационная карта активна. Данные используются только для демонстрации.",
  robots: { index: false, follow: false },
}

/**
 * Страница проверки QR (ТЗ 8).
 * Не обращается к базе и не выполняет реальную валидацию — подтверждает только
 * полный демо-flow: получение карты → открытие Wallet → сканирование QR.
 */
const cardFields = [
  { label: "Название", value: WALLET_DEMO.organization },
  { label: "Бонусы", value: WALLET_DEMO.bonusBalance },
  { label: "Скидка", value: WALLET_DEMO.discount },
  { label: "Статус клиента", value: WALLET_DEMO.status },
]

export default function VerifyDemoPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Фон: сетка + свечение в стиле основного сайта */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-lg px-5 py-16">
        <AnimatedSection variant="scale">
          <div className="rounded-3xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <CheckCircle2 className="h-8 w-8 text-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Демонстрационная карта активна</h1>
          <p className="mt-2 text-sm text-muted-foreground">{WALLET_DEMO.marker}</p>

          <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background/40 text-left">
            {cardFields.map((field) => (
              <div key={field.label} className="flex items-center justify-between px-5 py-3.5">
                <dt className="text-sm text-muted-foreground">{field.label}</dt>
                <dd className="text-sm font-semibold text-foreground">{field.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            Данные используются только для демонстрации. Страница не обращается к базе клиентов и не
            выполняет реальную валидацию.
          </p>

          <a
            href={WALLET_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Запустить карту для своего бизнеса
            <ArrowRight className="h-4 w-4" />
          </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
