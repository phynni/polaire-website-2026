"use client"

import { SectionReveal } from "@/components/section-reveal"

const cards = [
  {
    number: "01",
    title: "Le problème",
    text: "Les leads arrivent, mais personne ne rappelle en moins de 5 minutes. Le CRM est vide. Les soumissions traînent. Les avis Google stagnent.",
  },
  {
    number: "02",
    title: "La conséquence",
    text: "Vous payez pour des leads que vous perdez. Votre taux de conversion chute. Votre concurrent qui répond plus vite prend vos clients.",
  },
  {
    number: "03",
    title: "La solution",
    text: "Polaire bâtit le système complet : de la pub jusqu'à la facture. Speed-to-lead, follow-up, avis, réactivation. Tout est automatisé.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {cards.map((card) => (
              <div
                key={card.number}
                className="bg-background p-8 lg:p-10 flex flex-col gap-4 relative overflow-hidden group"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, #1C0770, transparent)" }}
                />
                <span className="text-xs font-medium text-muted-foreground tracking-widest">
                  {card.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
