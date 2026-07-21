import { readFileSync } from "node:fs"
import path from "node:path"
import { PKPass } from "passkit-generator"
import { WALLET_DEMO } from "./config"

/**
 * Сборка и подпись демонстрационного Apple Wallet .pkpass (Store Card).
 * Секреты берутся ТОЛЬКО из переменных окружения (ТЗ §6.2):
 *   APPLE_PASS_TYPE_ID     — идентификатор Pass Type ID (напр. pass.kz.tmk-technohorizon.demo)
 *   APPLE_TEAM_ID          — Team ID (10 символов)
 *   APPLE_PASS_CERT        — base64 сертификата подписи (pass.pem)
 *   APPLE_PASS_KEY         — base64 приватного ключа (pass.key)
 *   APPLE_WWDR_CERT        — base64 промежуточного сертификата Apple WWDR (wwdr.pem)
 *   APPLE_PASS_KEY_PASSWORD — (необязательно) пароль ключа, если он создан с паролем
 */

/** Обязательная строковая переменная окружения. */
function reqEnv(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`Переменная окружения ${name} не задана`)
  if (value.includes("<")) throw new Error(`Переменная окружения ${name} содержит плейсхолдер, вставьте реальное значение`)
  return value
}

/** Обязательная переменная окружения с base64 -> Buffer. */
function reqEnvBase64(name: string): Buffer {
  return Buffer.from(reqEnv(name), "base64")
}

export async function buildApplePass(baseUrl: string): Promise<Buffer> {
  const passTypeIdentifier = reqEnv("APPLE_PASS_TYPE_ID")
  const teamIdentifier = reqEnv("APPLE_TEAM_ID")

  // Иконка/логотип: переиспользуем брендовую картинку сайта.
  const icon = readFileSync(path.join(process.cwd(), "public", "apple-icon.png"))

  // QR внутри карты ведёт на страницу проверки (ТЗ §8.1).
  const verifyUrl = `${baseUrl}${WALLET_DEMO.verifyPath}`

  const passJson = {
    formatVersion: 1,
    passTypeIdentifier,
    teamIdentifier,
    organizationName: WALLET_DEMO.organization,
    description: `${WALLET_DEMO.organization} — ${WALLET_DEMO.cardType}`,
    // Одна общая демо-карта (ТЗ §1.2) — фиксированный серийный номер.
    serialNumber: "demo-0001",
    // Фирменные цвета: тёмный фон, белая типографика, сдержанные подписи (ТЗ §4.2).
    backgroundColor: "rgb(15, 17, 21)",
    foregroundColor: "rgb(255, 255, 255)",
    labelColor: "rgb(160, 170, 180)",
    logoText: WALLET_DEMO.organization,
    storeCard: {
      primaryFields: [
        { key: "balance", label: "БОНУСЫ", value: WALLET_DEMO.bonusBalance },
      ],
      secondaryFields: [
        { key: "discount", label: "СКИДКА", value: WALLET_DEMO.discount },
        { key: "status", label: "СТАТУС", value: WALLET_DEMO.status },
      ],
      auxiliaryFields: [
        { key: "marker", label: "ТИП", value: WALLET_DEMO.marker },
      ],
      backFields: [
        {
          key: "about",
          label: "О карте",
          value:
            "Демонстрационная карта лояльности. Бонусы, скидка и статус указаны в качестве примера.",
        },
        { key: "site", label: "Сайт", value: WALLET_DEMO.siteUrl },
      ],
    },
    barcodes: [
      {
        format: "PKBarcodeFormatQR",
        message: verifyUrl,
        messageEncoding: "iso-8859-1",
        altText: "Проверка карты",
      },
    ],
  }

  const pass = new PKPass(
    {
      "icon.png": icon,
      "icon@2x.png": icon,
      "logo.png": icon,
      "logo@2x.png": icon,
      "pass.json": Buffer.from(JSON.stringify(passJson)),
    },
    {
      wwdr: reqEnvBase64("APPLE_WWDR_CERT"),
      signerCert: reqEnvBase64("APPLE_PASS_CERT"),
      signerKey: reqEnvBase64("APPLE_PASS_KEY"),
      signerKeyPassphrase: process.env.APPLE_PASS_KEY_PASSWORD?.trim() || undefined,
    },
  )

  return pass.getAsBuffer()
}
