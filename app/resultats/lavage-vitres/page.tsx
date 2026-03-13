"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { AnimatedMetricValue } from "@/components/animated-metric-value"
import { SectionReveal } from "@/components/section-reveal"
import { clairEtNetCaseStudy } from "@/lib/clair-et-net-case-study"

export default function LavageVitresCaseStudyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 lg:pt-44">
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionReveal>
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div className="max-w-4xl">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
                    Étude de cas
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
                    {clairEtNetCaseStudy.pageTitle}
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {clairEtNetCaseStudy.executiveSummary}
                  </p>
                </div>

                <aside className="rounded-2xl border border-border p-7 lg:p-8">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                    Retour client
                  </p>
                  <p className="text-base text-foreground leading-relaxed">
                    “{clairEtNetCaseStudy.testimonialQuote}”
                  </p>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                    {clairEtNetCaseStudy.testimonialAttribution}
                  </p>
                </aside>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionReveal delay={0.08}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border">
                {clairEtNetCaseStudy.detailMetrics.map((metric, index) => (
                  <div key={metric.label} className="bg-background p-6 lg:p-8">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                      <AnimatedMetricValue value={metric.value} delay={index * 0.06} duration={2200} />
                    </div>
                    <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {metric.label}
                    </div>
                    {metric.detail ? (
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {metric.detail}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-16">
              {clairEtNetCaseStudy.sections.map((section, index) => (
                <SectionReveal key={section.title} delay={index * 0.04}>
                  <section className="border-t border-border pt-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                      {section.title}
                    </h2>

                    {section.paragraphs ? (
                      <div className="mt-6 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-base md:text-lg text-muted-foreground leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {section.bullets ? (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-2xl border border-border px-5 py-4 text-base text-muted-foreground leading-relaxed"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.orderedItems ? (
                      <div className="mt-6 grid gap-4">
                        {section.orderedItems.map((item, itemIndex) => (
                          <article
                            key={item.title}
                            className="rounded-2xl border border-border p-5 lg:p-6"
                          >
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                              Étape {itemIndex + 1}
                            </p>
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.title}
                            </h3>
                            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </section>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <SectionReveal>
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                  Prêt à bâtir un
                  <br />
                  système <span className="title-secondary-gradient">similaire&nbsp;?</span>
                </h2>
                <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
                  Si vous voulez remplacer la prospection imprévisible par un système d'acquisition
                  plus moderne, voyons comment Polaire peut structurer votre croissance.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors duration-300"
                  >
                    Réserver un appel
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="/etudes-de-cas"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:border-foreground/25 transition-colors duration-300"
                  >
                    Retour aux études de cas
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
