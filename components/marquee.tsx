const items = [
  "Web-платформы",
  "Мобильные приложения",
  "UX/UI дизайн",
  "Backend & API",
  "Автоматизация",
  "AI-интеграции",
  "CRM-системы",
  "Онлайн-оплаты",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
]

function MarqueeRow() {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8 animate-marquee"
      aria-hidden
    >
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="text-lg font-medium tracking-tight text-foreground/70 md:text-xl">
            {item}
          </span>
          <span className="text-accent">•</span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <section
      aria-label="Технологии и возможности"
      className="relative overflow-hidden border-y border-border/60 bg-card/20 py-6"
    >
      {/* мягкое затемнение по краям */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40"
        aria-hidden
      />
      <div className="marquee-group flex w-max">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </section>
  )
}
