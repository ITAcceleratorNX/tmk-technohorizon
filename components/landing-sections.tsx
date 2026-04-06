import type { ComponentType } from "react"
import { Hero } from "@/components/hero"
import { CoreValue } from "@/components/core-value"
import { CaseStudies } from "@/components/case-studies"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { WhyUs } from "@/components/why-us"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"

/** Меняйте порядок или закомментируйте блоки — вся структура лендинга в одном месте. */
export const landingBodySections: ComponentType[] = [
  Hero,
  CoreValue,
  CaseStudies,
  Services,
  Process,
  Testimonials,
  WhyUs,
  FAQ,
  CTA,
]
