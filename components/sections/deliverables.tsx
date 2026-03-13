"use client"

import { SectionReveal } from "@/components/section-reveal"
import { motion } from "motion/react"

const deliverables = [
  {
    title: "Stratégie",
    description: "Recherche concurrentielle, angles, offres et plan d'action sur mesure.",
  },
  {
    title: "Contenu",
    description: "Tournage mensuel, montage pro, hooks et déclinaisons multiples.",
  },
  {
    title: "Publicités",
    description:
      "Campagnes Meta & Google, création d'autant de publicités statiques qu'il faut pour atteindre un excellent ROAS, et optimisation continue du CPL et du volume.",
  },
  {
    title: "Landing pages",
    description: "Pages haute conversion, formulaires qualifiés, pixel optimisé.",
  },
  {
    title: "CRM & automatisations",
    description: "Pipeline, notifications, SMS, calendrier et facturation automatisés.",
  },
  {
    title: "Reporting",
    description: "Tableaux de bord en temps réel, suivi des KPIs et recommandations.",
  },
]

export function DeliverablesSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Livrables
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Tout ce que vous
              <br />
              <span className="title-secondary-gradient">obtenez.</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-8 lg:p-10 flex flex-col gap-3"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
