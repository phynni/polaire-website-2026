import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              Polaire
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Le système d&apos;acquisition complet pour les nettoyeurs de vitres au Québec.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/#processus" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Processus
              </Link>
              <Link href="/#resultats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Résultats
              </Link>
              <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@agencepolaire.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                info@agencepolaire.com
              </a>
              <span className="text-sm text-muted-foreground">Québec, Canada</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-foreground font-medium mt-2 hover:opacity-70 transition-opacity"
              >
                Réserver un appel
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Polaire. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
