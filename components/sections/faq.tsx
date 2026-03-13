"use client"

import { SectionReveal } from "@/components/section-reveal"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Quels sont les délais avant de voir des résultats?",
    answer:
      "La plupart de nos clients voient leurs premiers leads qualifiés dans les 7 à 14 jours suivant le lancement des campagnes. Le système complet (CRM, automatisations, avis) est généralement opérationnel en 30 jours.",
  },
  {
    question: "Quel budget publicitaire est recommandé?",
    answer:
      "Nous recommandons un budget minimum de 1 000$ par mois en dépenses publicitaires pour obtenir des résultats significatifs. Le budget optimal dépend de votre marché et de vos objectifs.",
  },
  {
    question: "Qu'est-ce qui est inclus exactement?",
    answer:
      "Tout : stratégie, tournage mensuel, montage, campagnes publicitaires, landing pages, intégration CRM, automatisations (notifications, SMS, calendrier, facturation), récolte d'avis Google et campagnes de réactivation.",
  },
  {
    question: "Y a-t-il une durée minimale d'engagement?",
    answer:
      "Nous recommandons un engagement minimum de 3 mois pour voir des résultats optimaux. Le premier mois est consacré à la mise en place du système, les mois suivants à l'optimisation.",
  },
  {
    question: "Qui s'occupe du tournage?",
    answer:
      "Notre équipe se déplace directement sur vos chantiers avec équipement professionnel (micro, éclairage, stabilisation, drone). Nous planifions les tournages mensuellement selon votre horaire.",
  },
  {
    question: "Quelles régions desservez-vous?",
    answer:
      "Nous travaillons principalement avec des entreprises au Québec, mais notre système peut être adapté pour d'autres marchés francophones. Contactez-nous pour discuter de votre situation.",
  },
  {
    question: "Est-ce que j'aurai accès à mon CRM?",
    answer:
      "Absolument. Vous avez un accès complet à votre CRM, pipeline et tableaux de bord en tout temps. Nous vous formons pour que vous puissiez suivre vos leads et résultats en temps réel.",
  },
]

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-xs font-medium text-muted-foreground tabular-nums shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
            {item.question}
          </span>
        </div>
        <div className="size-6 shrink-0 flex items-center justify-center ml-4">
          {isOpen ? (
            <Minus className="size-4 text-muted-foreground" />
          ) : (
            <Plus className="size-4 text-muted-foreground" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-12 text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionReveal>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Questions
                <br />
                <span className="title-secondary-gradient">fréquentes.</span>
              </h2>
            </SectionReveal>
          </div>

          <div className="lg:col-span-8">
            <SectionReveal delay={0.1}>
              {faqs.map((faq, i) => (
                <FAQAccordionItem
                  key={faq.question}
                  item={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  index={i}
                />
              ))}
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
