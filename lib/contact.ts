/** Телефон для связи (отображение и tel:-ссылка). */
export const CONTACT_PHONE_DISPLAY = "+7 701 777 1881"
export const CONTACT_PHONE_TEL = "+77017771881"

/** WhatsApp: номер без + для wa.me */
export const WHATSAPP_CHAT_URL = "https://wa.me/77017771881"

/** Telegram */
export const TELEGRAM_CHAT_URL = "https://t.me/tokpanovkarim"

/** Получатель заявок с формы (для подсказки в UI; фактический адрес задаётся на бэкенде: TMK_TECHNOHORIZON_CONTACT_EMAIL). */
export const CONTACT_REQUEST_EMAIL = "zubanyszarylkasyn@gmail.com"

/** POST заявки: бэкенд ExtraSpace (SMTP). Переопределите для стейджа: NEXT_PUBLIC_LANDING_CONTACT_API_URL. */
export const LANDING_CONTACT_API_URL =
  process.env.NEXT_PUBLIC_LANDING_CONTACT_API_URL?.trim() ||
  "https://https://backend-vo00.onrender.com//tmk-technohorizon/landing-contact"
