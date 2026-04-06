"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle, Send } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { CONTACT_PHONE_TEL } from "@/lib/contact"

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,180,220,0.1),transparent_50%)]" />
          
          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <AnimatedSection>
              <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Есть идея, продукт или процесс, который нужно оцифровать?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Поможем превратить это в работающее решение — от первого экрана до полноценного продукта.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 gap-2 group">
                  Оставить заявку
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary gap-2" asChild>
                  <a href={`tel:${CONTACT_PHONE_TEL}`}>
                    <Phone className="h-4 w-4" />
                    Связаться
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
                <div className="w-px h-4 bg-border" />
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Send className="w-5 h-5" />
                  Telegram
                </button>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
