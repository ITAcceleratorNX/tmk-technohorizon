import crypto from "node:crypto"
import { WALLET_DEMO } from "./config"

/**
 * Формирование ссылки «Add to Google Wallet» для демонстрационной карты лояльности.
 *
 * Подход: подписанный JWT с ВСТРОЕННЫМИ LoyaltyClass + LoyaltyObject (ТЗ §7.1) —
 * при сохранении Google создаёт класс/объект сам, отдельные API-вызовы не нужны.
 * Секреты берутся ТОЛЬКО из окружения (ТЗ §7.2):
 *   GOOGLE_WALLET_ISSUER_ID — числовой Issuer ID из Google Pay & Wallet Console
 *   GOOGLE_WALLET_SA_KEY    — base64 (или сырой) JSON-ключа service account
 *
 * До получения publishing access Google может показывать пометку [TEST ONLY] — для
 * внутренней демонстрации это допустимо (ТЗ §7.1).
 */

function reqEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`Переменная окружения ${name} не задана`)
  if (value.includes("<")) throw new Error(`Переменная окружения ${name} содержит плейсхолдер, вставьте реальное значение`)
  return value
}

function toBase64Url(input: string | Buffer): string {
  return Buffer.from(input).toString("base64url")
}

/** Разбирает service account: принимает и base64-JSON, и сырой JSON. */
function loadServiceAccount(): { client_email: string; private_key: string } {
  const raw = reqEnv("GOOGLE_WALLET_SA_KEY")
  const jsonText = raw.startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8")
  const sa = JSON.parse(jsonText)
  if (!sa.client_email || !sa.private_key) {
    throw new Error("GOOGLE_WALLET_SA_KEY: в JSON нет client_email/private_key")
  }
  return sa
}

export function buildGoogleSaveUrl(baseUrl: string): string {
  const issuerId = reqEnv("GOOGLE_WALLET_ISSUER_ID")
  const sa = loadServiceAccount()

  const classId = `${issuerId}.tmk_demo_loyalty`
  const objectId = `${issuerId}.tmk_demo_object_0001`
  const verifyUrl = `${baseUrl}${WALLET_DEMO.verifyPath}`
  const logoUri = `${baseUrl}/wallet/logo-google.png`

  const loyaltyClass = {
    id: classId,
    issuerName: WALLET_DEMO.organization,
    programName: WALLET_DEMO.cardType,
    reviewStatus: "UNDER_REVIEW",
    hexBackgroundColor: "#0f1115",
    programLogo: { sourceUri: { uri: logoUri } },
  }

  const loyaltyObject = {
    id: objectId,
    classId,
    state: "ACTIVE",
    accountName: WALLET_DEMO.status,
    loyaltyPoints: {
      label: "Бонусы",
      balance: { string: WALLET_DEMO.bonusBalance },
    },
    secondaryLoyaltyPoints: {
      label: "Скидка",
      balance: { string: WALLET_DEMO.discount },
    },
    barcode: { type: "QR_CODE", value: verifyUrl, alternateText: "Проверка карты" },
    textModulesData: [
      { id: "status", header: "Статус", body: WALLET_DEMO.status },
      { id: "marker", header: "Тип", body: WALLET_DEMO.marker },
    ],
  }

  const claims = {
    iss: sa.client_email,
    aud: "google",
    typ: "savetowallet",
    iat: Math.floor(Date.now() / 1000),
    origins: [baseUrl],
    payload: {
      loyaltyClasses: [loyaltyClass],
      loyaltyObjects: [loyaltyObject],
    },
  }

  const header = { alg: "RS256", typ: "JWT" }
  const signingInput = `${toBase64Url(JSON.stringify(header))}.${toBase64Url(JSON.stringify(claims))}`
  const signer = crypto.createSign("RSA-SHA256")
  signer.update(signingInput)
  const signature = signer.sign(sa.private_key)
  const jwt = `${signingInput}.${toBase64Url(signature)}`

  return `https://pay.google.com/gp/v/save/${jwt}`
}
