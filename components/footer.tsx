import Link from "next/link"
import { Logo } from "@/components/logo"
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo className="mb-4" />

            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Студия цифровых продуктов и автоматизации. Создаём сайты, веб-платформы и мобильные приложения — от идеи до запуска и роста.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Сайты и лендинги
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Веб-платформы
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Мобильные приложения
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Автоматизация
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Компания</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Процесс
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TMK Techno Horizon. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
