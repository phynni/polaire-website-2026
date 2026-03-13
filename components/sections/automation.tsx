"use client"

import { SectionReveal } from "@/components/section-reveal"
import { motion } from "motion/react"
import {
  Bell,
  MessageSquare,
  CalendarDays,
  FileText,
  Star,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface AutomationCard {
  icon: LucideIcon
  title: string
  description: string
  tag: string
}

const automations: AutomationCard[] = [
  {
    icon: Bell,
    title: "Notification interne",
    description: "Nouveau lead reçu. L'équipe est alertée instantanément.",
    tag: "Speed-to-lead",
  },
  {
    icon: MessageSquare,
    title: "SMS de rappel",
    description: "Le client reçoit un rappel automatique avant son rendez-vous.",
    tag: "Rappel",
  },
  {
    icon: CalendarDays,
    title: "Événement calendrier",
    description: "Le rendez-vous est créé automatiquement dans Google Calendar.",
    tag: "Calendrier",
  },
  {
    icon: FileText,
    title: "Facture envoyée",
    description: "La facture est générée et envoyée après le service.",
    tag: "Facturation",
  },
  {
    icon: Star,
    title: "Demande d'avis",
    description: "Le client reçoit une demande d'avis Google automatique.",
    tag: "Avis",
  },
  {
    icon: Zap,
    title: "Relance hésitants",
    description: "Les leads non convertis reçoivent un suivi automatisé.",
    tag: "Follow-up",
  },
]

export function AutomationSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Automatisations
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Le système
              <br />
              <span className="title-secondary-gradient">en action.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Chaque interaction est automatisée. Les leads entrent, les notifications partent,
              les rappels s&apos;envoient, les factures se créent.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {automations.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background p-8 lg:p-10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="size-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1C0770 0%, #141414 100%)" }}>
                  <card.icon className="size-4 text-white/80" />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-widest rounded-full border px-3 py-1" style={{ borderColor: "rgba(28, 7, 112, 0.3)", color: "#a89cdb" }}>
                  {card.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
