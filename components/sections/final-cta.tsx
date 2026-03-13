"use client"

import { SectionReveal } from "@/components/section-reveal"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      {/* Subtle blue gradient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background: "radial-gradient(ellipse at bottom left, #1C0770 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Prêt à transformer
              <br />
              votre acquisition
              <br />
              <span className="title-secondary-gradient">en système?</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
              Réservez un appel découverte gratuit. On analyse votre situation et
              on vous montre exactement comment le système Polaire peut remplir votre horaire.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #1C0770 0%, #0a0a0a 70%)",
                }}
              >
                Réserver un appel
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
