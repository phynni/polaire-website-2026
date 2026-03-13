"use client"

import { SectionReveal } from "@/components/section-reveal"
import { motion } from "motion/react"
import { useRef, useEffect, useState, useCallback } from "react"

interface ProcessStep {
  number: string
  title: string
  description: string
  details?: string[]
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Architecture",
    description:
      "On regarde vos processus actuels, vos problèmes et vos objectifs.",
    details: [
      "Système personnalisé d’automatisations + IA",
      "Plan publicitaire pour augmenter votre volume de leads",
    ],
  },
  {
    number: "02",
    title: "Script & développement",
    description:
      "Écriture des scripts et installation des automatisations avec vos outils actuels.",
  },
  {
    number: "03",
    title: "Tournage sur place",
    description:
      "Filming sur chantier avec micro, stabilisation et drone.",
  },
  {
    number: "04",
    title: "Post-production",
    description:
      "Montage dynamique, hooks, sous-titres, graphiques modernes.",
  },
  {
    number: "05",
    title: "Campagnes publicitaires",
    description:
      "Mise en place Meta et Google, création de posters statiques, optimisation continue.",
  },
  {
    number: "06",
    title: "Capture & qualification",
    description:
      "Infrastructure qui transforme les visiteurs en leads qualifiés.",
    details: [
      "Pages d’atterrissage",
      "Formulaires qui qualifient automatiquement les prospects",
      "Pixel Meta pour suivre et optimiser les conversions",
    ],
  },
  {
    number: "07",
    title: "Intégration backend",
    description: "Connexion au CRM, pipeline et automatisations complètes.",
    details: [
      "Notifications internes (speed-to-lead)",
      "SMS de rappel client",
      "Suivi des leads hésitants",
      "Événements Google Calendar automatiques",
      "Factures: création + envoi",
    ],
  },
  {
    number: "08",
    title: "Récolte d'avis Google",
    description:
      "Système post-service pour automatiquement récolter des avis SEULEMENT des clients satisfaits.",
  },
  {
    number: "09",
    title: "Réactivation",
    description:
      "Campagnes de relance ciblées pour remplir l'horaire et augmenter la LTV (valeur à vie du client).",
  },
]

function FlowArrowsSVG({
  cardRefs,
  containerRef,
}: {
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const [arrows, setArrows] = useState<{ path: string; headX: number; headY: number; angle: number; headIdx: number }[]>([])
  const [dims, setDims] = useState({ w: 0, h: 0 })

  const arrowVariants = [
    { startXRatio: 0.52, viaXRatio: 0.50, endXRatio: 0.44, bulge: 18 },
    { startXRatio: 0.54, viaXRatio: 0.49, endXRatio: 0.46, bulge: 22 },
    { startXRatio: 0.51, viaXRatio: 0.51, endXRatio: 0.43, bulge: 16 },
    { startXRatio: 0.53, viaXRatio: 0.50, endXRatio: 0.45, bulge: 20 },
  ]

  // Unique head geometry per arrow — varied arm length, spread, stroke, and rotation
  const headVariants = [
    { d: "M -88,54 L 0,0 L -88,-68", sw: 26, rot: 31 },
    { d: "M -102,70 L 0,0 L -102,-58", sw: 30, rot: 38 },
    { d: "M -80,62 L 0,0 L -80,-52", sw: 24, rot: 33 },
    { d: "M -96,58 L 0,0 L -96,-66", sw: 28, rot: 35 },
  ]

  const compute = useCallback(() => {
    const container = containerRef.current
    const cards = cardRefs.current
    if (!container || !cards) return

    const cRect = container.getBoundingClientRect()
    if (cRect.width === 0) return

    const positions = cards.map((card) => {
      if (!card) return null
      const r = card.getBoundingClientRect()
      return {
        top: r.top - cRect.top,
        bottom: r.bottom - cRect.top,
        left: r.left - cRect.left,
        right: r.right - cRect.left,
        w: r.width,
        h: r.height,
      }
    })

    const results: { path: string; headX: number; headY: number; angle: number }[] = []

    const groups: [number, number, number][] = []
    for (let i = 0; i + 2 < steps.length; i += 2) {
      groups.push([i, i + 1, i + 2])
    }

    for (let gi = 0; gi < groups.length; gi++) {
      const [a, b, c] = groups[gi]
      const A = positions[a]
      const B = positions[b]
      const C = positions[c]
      if (!A || !B || !C) continue

      const v = arrowVariants[gi % arrowVariants.length]
      const aIsLeft = a % 2 === 0

      const startX = A.left + A.w * v.startXRatio
      const startY = A.bottom

      const viaX = B.left + B.w * v.viaXRatio
      const viaY = B.top + B.h * 0.5

      // End point: push into card C so arrowhead underlaps the card more
      const endX = C.left + C.w * v.endXRatio
      const endY = C.top + 40

      const nudge = aIsLeft ? v.bulge : -v.bulge
      const cp1X = startX + nudge
      const cp1Y = startY + (viaY - startY) * 0.5
      const cp2X = viaX + nudge * 0.5
      const cp2Y = startY + (viaY - startY) * 0.5

      const cp3X = viaX - nudge * 0.5
      const cp3Y = viaY + (endY - viaY) * 0.5
      const cp4X = endX - nudge
      const cp4Y = viaY + (endY - viaY) * 0.5

      const path = [
        `M ${startX} ${startY}`,
        `C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${viaX} ${viaY}`,
        `C ${cp3X} ${cp3Y}, ${cp4X} ${cp4Y}, ${endX} ${endY}`,
      ].join(" ")

      // Compute terminal tangent: direction from cp4 to end
      const dx = endX - cp4X
      const dy = endY - cp4Y
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)

      results.push({ path, headX: endX, headY: endY, angle, headIdx: gi })
    }

    setArrows(results)
    setDims({ w: cRect.width, h: cRect.height })
  }, [cardRefs, containerRef])

  useEffect(() => {
    const timeout = setTimeout(compute, 600)
    window.addEventListener("resize", compute)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener("resize", compute)
    }
  }, [compute])

  if (dims.w === 0 || arrows.length === 0) return null

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0"
      width={dims.w}
      height={dims.h}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      fill="none"
    >
      {arrows.map((arrow, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.14 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, delay: i * 0.3, ease: "easeOut" }}
        >
          {/* Body */}
          <motion.path
            d={arrow.path}
            stroke="#888"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, delay: i * 0.3, ease: "easeOut" }}
          />
          {/* Arrowhead — unique open chevron per arrow */}
          <path
            d={headVariants[arrow.headIdx % headVariants.length].d}
            stroke="#888"
            strokeWidth={headVariants[arrow.headIdx % headVariants.length].sw}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transform={`translate(${arrow.headX}, ${arrow.headY}) rotate(${arrow.angle + headVariants[arrow.headIdx % headVariants.length].rot})`}
          />
        </motion.g>
      ))}
    </svg>
  )
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <section id="processus" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="max-w-2xl mb-20 lg:mb-28">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Notre processus
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Le système complet,
              <br />
              <span className="title-secondary-gradient">étape par étape.</span>
            </h2>
          </div>
        </SectionReveal>

        <div ref={containerRef} className="relative">
          <FlowArrowsSVG cardRefs={cardRefs} containerRef={containerRef} />

          <div className="relative z-10 flex flex-col gap-32 md:gap-44 lg:gap-52">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    cardRefs.current[i] = el
                  }}
                  className={`w-full md:w-[55%] ${isLeft ? "" : "md:ml-auto"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="group relative"
                  >
                    <div className="border border-border rounded-2xl p-8 lg:p-10 bg-background relative overflow-hidden transition-colors duration-300 hover:border-[#1C0770]/20">
                      {/* Blue hover glow */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #1C0770, transparent)",
                        }}
                      />

                      <div className="relative">
                        {/* Large step number behind content */}
                        <span className="absolute -top-8 -left-2 text-[7rem] md:text-[9rem] lg:text-[11rem] font-bold text-foreground/[0.03] leading-none select-none pointer-events-none">
                          {step.number}
                        </span>

                        <div className="relative flex flex-col gap-2">
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                            {step.description}
                          </p>
                          {step.details && (
                            <ul className="space-y-2 mt-4 pt-4 border-t border-border">
                              {step.details.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                  <span className="size-1 rounded-full bg-foreground/30 mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
