"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { AnimatedMetricValue } from "@/components/animated-metric-value"
import { SectionReveal } from "@/components/section-reveal"
import { clairEtNetCaseStudy } from "@/lib/clair-et-net-case-study"

const caseStudyHref = `/resultats/${clairEtNetCaseStudy.slug}`

export function CaseStudiesPreview() {
  return (
    <section id="resultats" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Résultats
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                Des résultats
                <br />
                <span className="title-secondary-gradient">concrets.</span>
              </h2>
            </div>
            <Link
              href="/etudes-de-cas"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity shrink-0"
            >
              Voir l'étude complète
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-border overflow-hidden bg-background"
          >
            <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-px bg-border">
              <div className="bg-background p-8 lg:p-10">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  {clairEtNetCaseStudy.company}
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-foreground max-w-3xl">
                  {clairEtNetCaseStudy.previewHeadline}
                </h3>
                <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {clairEtNetCaseStudy.previewSummary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {clairEtNetCaseStudy.funnelHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs md:text-sm text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-background p-8 lg:p-10 flex flex-col justify-between">
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

                <div className="mt-10">
                  <Link
                    href={caseStudyHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
                  >
                    Lire l'étude de cas
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </SectionReveal>
      </div>
    </section>
  )
}
