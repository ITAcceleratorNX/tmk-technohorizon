"use client"

import { useState } from "react"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_REQUEST_EMAIL } from "@/lib/contact"

const formSchema = z.object({
  name: z.string().min(1, "Укажите имя"),
  company: z.string().min(1, "Укажите компанию"),
  phone: z.string().min(3, "Укажите телефон или WhatsApp"),
  message: z.string().min(5, "Кратко опишите задачу"),
})

type FormState = {
  name: string
  company: string
  phone: string
  message: string
}

const empty: FormState = { name: "", company: "", phone: "", message: "" }

export function ContactRequestDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<FormState>(empty)
  const [submitting, setSubmitting] = useState(false)

  const set =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
    }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const parsed = formSchema.safeParse(values)
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0]
      toast.error(first ?? "Проверьте поля формы")
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string; message?: string }

      if (res.ok && data.ok) {
        toast.success("Заявка отправлена. Мы свяжемся с вами.")
        setValues(empty)
        setOpen(false)
        return
      }

      if (data.error === "NO_MAIL") {
        toast.error(
          `Почта с сайта пока не настроена. Напишите на ${CONTACT_REQUEST_EMAIL} или в WhatsApp.`,
          { duration: 8000 },
        )
        return
      }

      toast.error(data.message ?? data.error ?? "Не удалось отправить. Попробуйте позже.")
    } catch {
      toast.error("Ошибка сети. Попробуйте позже.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[min(90vh,640px)] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Обсудим ваш проект</DialogTitle>
          <DialogDescription>
            Заполните форму — ответим и предложим следующий шаг. Заявка уходит на {CONTACT_REQUEST_EMAIL}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="contact-name">Ваше имя</Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              placeholder="Иван Иванов"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-company">Компания</Label>
            <Input
              id="contact-company"
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={set("company")}
              placeholder="Название компании"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-phone">Телефон / WhatsApp</Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
              placeholder="+7 …"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">Кратко опишите задачу</Label>
            <Textarea
              id="contact-message"
              name="message"
              rows={4}
              value={values.message}
              onChange={set("message")}
              placeholder="Продукт, интеграция, сроки, если есть — ссылка на ТЗ"
            />
          </div>
          <DialogFooter className="pt-2 sm:justify-stretch">
            <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Отправка…" : "Отправить заявку"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
