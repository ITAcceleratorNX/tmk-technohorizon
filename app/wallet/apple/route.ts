import type { NextRequest } from "next/server"
import { buildApplePass } from "@/lib/wallet/apple-pass"

// passkit-generator использует Node-крипто/Buffer — только Node runtime, не Edge.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * GET /wallet/apple
 * Отдаёт подписанный демонстрационный .pkpass с MIME application/vnd.apple.pkpass (ТЗ §6.1).
 * На iPhone Safari открывает экран добавления карты, на десктопе — скачивает файл.
 */
export async function GET(req: NextRequest) {
  try {
    const buffer = await buildApplePass(req.nextUrl.origin)
    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.apple.pkpass",
        "Content-Disposition": 'attachment; filename="tmk-techno-horizon.pkpass"',
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("[wallet/apple] не удалось сформировать pkpass:", error)
    return new Response(
      "Не удалось сформировать карту Apple Wallet. Проверьте переменные APPLE_* в окружении.",
      { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    )
  }
}
