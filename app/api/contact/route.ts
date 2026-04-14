import { NextResponse, type NextRequest } from "next/server"
import { z } from "zod"

const bodySchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  company: z.string().min(1, "Компания обязательна"),
  phone: z.string().min(3, "Укажите телефон или WhatsApp"),
  message: z.string().min(5, "Опишите задачу"),
})

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function buildHtml(data: z.infer<typeof bodySchema>) {
  const { name, company, phone, message } = data
  return `
    <h2 style="font-family:sans-serif;">Заявка с лендинга TMK Techno Horizon</h2>
    <p style="font-family:sans-serif;"><strong>Имя:</strong> ${escapeHtml(name)}</p>
    <p style="font-family:sans-serif;"><strong>Компания:</strong> ${escapeHtml(company)}</p>
    <p style="font-family:sans-serif;"><strong>Телефон / WhatsApp:</strong> ${escapeHtml(phone)}</p>
    <p style="font-family:sans-serif;"><strong>Задача:</strong></p>
    <p style="font-family:sans-serif;white-space:pre-wrap;">${escapeHtml(message)}</p>
  `
}

export async function POST(req: NextRequest) {
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Проверьте поля формы", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "Tokpanov.K@tmk-limited.com"
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "NO_MAIL",
        message:
          "Отправка писем не настроена: задайте на сервере переменные RESEND_API_KEY и RESEND_FROM_EMAIL.",
      },
      { status: 503 },
    )
  }

  const from =
    process.env.RESEND_FROM_EMAIL ?? "TMK Techno Horizon <onboarding@resend.dev>"

  const subject = `Заявка с сайта: ${parsed.data.name} — ${parsed.data.company}`

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html: buildHtml(parsed.data),
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json(
      { error: "Не удалось отправить письмо", detail: text },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
