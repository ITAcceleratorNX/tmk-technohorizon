import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { landingBodySections } from "@/components/landing-sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {landingBodySections.map((Section, index) => (
        <Section key={Section.displayName ?? Section.name ?? index} />
      ))}
      <Footer />
    </main>
  )
}
