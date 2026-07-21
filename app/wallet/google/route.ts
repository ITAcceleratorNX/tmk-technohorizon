import type { NextRequest } from "next/server"
import { buildGoogleSaveUrl } from "@/lib/wallet/google-pass"

// Подпись JWT использует node:crypto — только Node runtime, не Edge.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * GET /wallet/google
 * Формирует подписанную ссылку «Add to Google Wallet» и редиректит на неё (ТЗ §7.1).
 */
export async function GET(req: NextRequest) {
  try {
    const saveUrl = buildGoogleSaveUrl(req.nextUrl.origin)
    return Response.redirect(saveUrl, 302)
  } catch (error) {
    console.error("[wallet/google] не удалось сформировать ссылку:", error)
    return new Response(
      "Не удалось сформировать карту Google Wallet. Проверьте переменные GOOGLE_WALLET_* в окружении.",
      { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8" } },
    )
  }
}
