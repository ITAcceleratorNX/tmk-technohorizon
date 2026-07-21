import Link from "next/link"
import { Logo } from "@/components/logo"
import { WALLET_DEMO } from "@/lib/wallet/config"

/**
 * Отдельная минималистичная обёртка для демо-страниц Wallet.
 * В шапке — фирменный логотип tmk. (общий компонент), тёмная тема наследуется
 * из корневого layout (defaultTheme="dark").
 */
export default function WalletLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-5 h-14 flex items-center justify-between">
          <Logo />
          <span className="text-xs text-muted-foreground">Demo</span>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-5 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            {WALLET_DEMO.organization} — цифровые продукты и автоматизация бизнес-процессов.
          </p>
          <Link
            href="/"
            className="mt-2 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Перейти на основной сайт
          </Link>
        </div>
      </footer>
    </div>
  )
}
