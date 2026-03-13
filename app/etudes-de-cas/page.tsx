"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { AnimatedMetricValue } from "@/components/animated-metric-value"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SectionReveal } from "@/components/section-reveal"
import { clairEtNetCaseStudy } from "@/lib/clair-et-net-case-study"

const caseStudyHref = `/resultats/${clairEtNetCaseStudy.slug}`

export default function EtudesDeCasPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 lg:pt-44">
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionReveal>
              <div className="max-w-4xl">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
                  Résultats prouvés
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                  Études de cas.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Découvrez comment Polaire transforme un service local traditionnel en système
                  d'acquisition moderne, rentable et plus prévisible.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionReveal delay={0.08}>
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-border overflow-hidden"
              >
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-px bg-border">
                  <div className="bg-background p-8 lg:p-12">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                      Client en vedette
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-foreground max-w-4xl">
                      {clairEtNetCaseStudy.pageTitle}
                    </h2>
                    <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl">
                      {clairEtNetCaseStudy.previewSummary}
                    </p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
                      {clairEtNetCaseStudy.funnelHighlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-border p-5 text-sm text-muted-foreground leading-relaxed"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <Link
                        href={caseStudyHref}
                        className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors duration-300"
                      >
                        Lire l'étude complète
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-background p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
                        Chiffres clés
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        {clairEtNetCaseStudy.heroMetrics.map((metric, index) => (
                          <div key={metric.label}>
                            <div className="text-3xl md:text-4xl font-semibold text-foreground">
                              <AnimatedMetricValue value={metric.value} delay={index * 0.06} />
                            </div>
                            <div className="text-[11px] text-muted-foreground mt-2 uppercase tracking-[0.18em]">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10 rounded-2xl border border-border p-6">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                        {clairEtNetCaseStudy.clientSnapshotTitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {clairEtNetCaseStudy.clientSnapshot}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
