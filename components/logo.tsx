import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Логотип TMK Techno Horizon — минималистичный вордмарк «tmk.» с акцентной точкой
 * и микро-подписью «Techno Horizon». По клику ведёт на главную (если href задан).
 * Размер вордмарка регулируется через wordmarkClassName (text-размер).
 */
export function Logo({
  className,
  href = "/",
  wordmarkClassName,
}: {
  className?: string
  href?: string | null
  wordmarkClassName?: string
}) {
  const inner = (
    <span className="inline-flex flex-col leading-none">
      <span
        className={cn(
          "text-[1.4rem] font-extrabold tracking-[-0.04em] text-foreground",
          wordmarkClassName,
        )}
      >
        tmk<span className="text-accent">.</span>
      </span>
      <span className="mt-[0.4rem] text-[0.5625rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
        Techno Horizon
      </span>
    </span>
  )

  if (href === null) {
    return <span className={cn("inline-flex", className)}>{inner}</span>
  }

  return (
    <Link
      href={href}
      aria-label="TMK Techno Horizon — на главную"
      className={cn(
        "inline-flex rounded-lg outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {inner}
    </Link>
  )
}
