"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CalEmbed } from "@/components/cal-embed"
import { SectionReveal } from "@/components/section-reveal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpRight, Clock, Check } from "lucide-react"
import { useState } from "react"

function isValidPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "")

  if (digits.length === 11 && digits.startsWith("1")) return true
  return digits.length >= 10 && digits.length <= 15
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.currentTarget as HTMLFormElement
    if (!form.reportValidity()) return

    const phoneInput = form.elements.namedItem("telephone") as HTMLInputElement | null
    const phoneValue = phoneInput?.value ?? ""

    if (!isValidPhoneNumber(phoneValue)) {
      setPhoneError("Entrez un numéro de téléphone valide.")
      phoneInput?.focus()
      return
    }

    setPhoneError("")
    setSubmitted(true)
    
    // Scroll to the top of the content area for a better success experience
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          {!submitted && (
            <SectionReveal>
              <div className="max-w-2xl mb-10 lg:mb-12">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Contact
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                  Remplissez
                  <br />
                  <span className="title-secondary-gradient">puis réservez.</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Répondez à quelques questions sur votre entreprise. Dès l&apos;envoi du formulaire,
                  vous pourrez réserver immédiatement votre appel stratégique de 30 minutes.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  <span>Réponse en moins de 24h ouvrables</span>
                </div>
              </div>
            </SectionReveal>
          )}

          <SectionReveal delay={0.1}>
            <div className={`grid ${submitted ? "lg:grid-cols-[1fr_1.55fr]" : "lg:grid-cols-[minmax(0,1.08fr)_400px]"} gap-px bg-border rounded-2xl overflow-hidden`}>
              {/* Form */}
              <div className="bg-background p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-start justify-center h-full py-8 lg:py-10">
                    <div className="size-12 rounded-full border border-border flex items-center justify-center mb-6">
                      <Check className="size-5 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Formulaire envoyé
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                      Merci pour votre confiance. Il ne vous reste qu&apos;à choisir le moment 
                      qui vous convient dans le calendrier à droite pour confirmer votre appel stratégique de 30 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                          Nom
                        </label>
                        <Input
                          id="nom"
                          name="nom"
                          placeholder="Jean Tremblay"
                          required
                          className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                          Courriel
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jean@entreprise.com"
                          required
                          className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="entreprise" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Entreprise
                      </label>
                      <Input
                        id="entreprise"
                        name="entreprise"
                        placeholder="Vitres Pro Inc."
                        required
                        className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                          Service principal
                        </label>
                        <Input
                          id="service"
                          name="service"
                          placeholder="Ex: Lavage de vitres résidentiel"
                          required
                          className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telephone" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                          Téléphone
                        </label>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          placeholder="(514) 555-0123"
                          required
                          aria-invalid={phoneError ? "true" : "false"}
                          onChange={() => {
                            if (phoneError) setPhoneError("")
                          }}
                          className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                        />
                        {phoneError ? (
                          <p className="text-xs text-destructive">{phoneError}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="territoire" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Ville ou territoire desservi
                      </label>
                      <Input
                        id="territoire"
                        name="territoire"
                        placeholder="Ex: Québec, Lévis et les environs"
                        required
                        className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Budget publicitaire mensuel
                      </label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="Ex: 1 500$/mois"
                        className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="source" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Où avez-vous entendu parler de nous?
                      </label>
                      <Input
                        id="source"
                        name="source"
                        placeholder="Ex: Facebook, Google, recommandation, YouTube..."
                        className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="acquisition" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Comment obtenez-vous vos clients en ce moment?
                      </label>
                      <Input
                        id="acquisition"
                        name="acquisition"
                        placeholder="Ex: Référencement, porte-à-porte, Google Ads, Facebook..."
                        className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="objectif" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Objectif principal
                      </label>
                      <Input
                        id="objectif"
                        name="objectif"
                        placeholder="Ex: Remplir l'horaire, augmenter le volume de leads, mieux convertir"
                        className="h-12 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="notes" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        Ce qui bloque en ce moment
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Ex: leads trop chers, peu de suivis, horaire vide, manque de structure, pas de CRM..."
                        rows={4}
                        className="rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors duration-300 w-full"
                    >
                      Continuer vers la réservation
                      <ArrowUpRight className="size-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Side panel */}
              <div className={submitted ? "bg-background px-6 pb-8 pt-8 lg:px-8 lg:pb-10 lg:pt-10" : "bg-secondary/65 p-8 lg:p-10"}>
                {submitted ? (
                  <div className="h-full flex flex-col items-start">
                    <div className="mb-5">
                      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                        Réservez maintenant
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Choisissez votre créneau pour votre appel stratégique de 30 minutes.
                      </p>
                    </div>

                    <div className="w-full max-w-[620px]">
                      <CalEmbed height={420} />
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col gap-8">
                    <div>
                      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                        Appel stratégique
                      </h3>
                      <p className="text-lg text-foreground leading-snug">
                        30 minutes pour regarder votre acquisition et vos priorités.
                      </p>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        Remplissez le formulaire, puis le calendrier de réservation s&apos;affichera
                        immédiatement ici.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-background p-6">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                        Pendant l&apos;appel
                      </p>
                      <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                        <p>On regarde votre situation actuelle, vos objectifs et vos blocages.</p>
                        <p>On vous montre les prochaines priorités les plus rentables.</p>
                        <p>Si le fit est bon, on vous montre comment Polaire pourrait vous aider concrètement.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </main>

      <Footer />
    </div>
  )
}
