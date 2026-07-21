/**
 * Фиксированные данные демонстрационной карты лояльности TMK Techno Horizon.
 * MVP 0.1: одна общая карта, все значения одинаковые для всех пользователей.
 * Источник значений — ТЗ «TMK Wallet», разделы 5 и 8.
 */
export const WALLET_DEMO = {
  organization: "TMK Techno Horizon",
  cardType: "Демонстрационная карта лояльности",
  /** Бонусный баланс (ТЗ 5). */
  bonusBalance: "1 000",
  /** Скидка (ТЗ 5). */
  discount: "5%",
  /** Статус клиента (ТЗ 5). */
  status: "Partner",
  /** Маркер демо-режима (ТЗ 5). */
  marker: "Демонстрационная карта",
  /** Путь страницы проверки, на которую ведёт QR внутри карты (ТЗ 8.1). */
  verifyPath: "/wallet/verify/demo",
  /** Путь демонстрационной страницы получения карты (ТЗ 4.1). */
  walletPath: "/wallet",
  /** Основной сайт компании. */
  siteUrl: "https://www.tmk-technohorizon.kz",
} as const

/**
 * WhatsApp для Wallet-демо.
 * Номер и сообщение зафиксированы в ТЗ (разделы 4.3 и 8) и намеренно отличаются
 * от общего контактного номера сайта в lib/contact.ts.
 */
export const WALLET_WHATSAPP_PHONE_DISPLAY = "+7 747 907 16 22"
/** Номер без «+» и пробелов — для ссылки wa.me. */
export const WALLET_WHATSAPP_NUMBER = "77479071622"
/** Автосообщение, подставляемое в чат (ТЗ 4.3). */
export const WALLET_WHATSAPP_MESSAGE =
  "Здравствуйте! Хочу обсудить запуск цифровой карты лояльности для моего бизнеса."
/** Готовая ссылка на WhatsApp с преднабранным текстом. */
export const WALLET_WHATSAPP_URL = `https://wa.me/${WALLET_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WALLET_WHATSAPP_MESSAGE,
)}`

/**
 * Эндпоинты добавления карты.
 * В Фазе 1 они ещё не настроены (заглушка через тост); подключаются в Фазах 2–3:
 *  - /wallet/apple  -> Route Handler отдаёт подписанный .pkpass
 *  - /wallet/google -> Route Handler формирует подписанный JWT и редиректит в Google Wallet
 */
export const APPLE_WALLET_ENDPOINT = "/wallet/apple"
export const GOOGLE_WALLET_ENDPOINT = "/wallet/google"
