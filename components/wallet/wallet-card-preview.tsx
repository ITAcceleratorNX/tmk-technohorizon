import QRCode from "qrcode"
import { WALLET_DEMO } from "@/lib/wallet/config"

/**
 * Визуальный превью демонстрационной карты — как она выглядит в Wallet клиента.
 * Не имитирует банковскую/платёжную карту (ТЗ §4.2).
 * QR — настоящий, ведёт на страницу проверки (тот же URL, что и в самих Wallet-картах).
 */
export async function WalletCardPreview() {
  const verifyUrl = `${WALLET_DEMO.siteUrl}${WALLET_DEMO.verifyPath}`
  const qrSvg = await QRCode.toString(verifyUrl, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#0b0d12", light: "#ffffff" },
  })

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Мягкое свечение под картой */}
      <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" aria-hidden />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-card to-background shadow-2xl">
        {/* Верхняя акцентная полоса */}
        <div className="h-1.5 w-full bg-gradient-to-r from-accent/80 via-accent/40 to-transparent" />

        <div className="relative p-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,180,220,0.16),transparent_55%)]" aria-hidden />

          <div className="relative">
            {/* Шапка карты */}
            <div className="flex flex-col gap-3">
              <span className="self-start rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-foreground">
                {WALLET_DEMO.marker}
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {WALLET_DEMO.organization}
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {WALLET_DEMO.cardType}
                </p>
              </div>
            </div>

            {/* Поля карты */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: "Бонусы", value: WALLET_DEMO.bonusBalance },
                { label: "Скидка", value: WALLET_DEMO.discount },
                { label: "Статус", value: WALLET_DEMO.status },
              ].map((field) => (
                <div key={field.label}>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{field.label}</p>
                  <p className="mt-1 text-base font-semibold text-foreground">{field.value}</p>
                </div>
              ))}
            </div>

            {/* QR-блок */}
            <div className="mt-8 flex items-end justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Проверка карты</p>
                <p className="text-xs text-muted-foreground/80 max-w-[9rem] leading-snug">
                  Сканируйте QR камерой телефона
                </p>
              </div>
              <div
                className="h-[70px] w-[70px] shrink-0 rounded-lg bg-white p-1.5 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
                aria-label="QR-код проверки карты"
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
