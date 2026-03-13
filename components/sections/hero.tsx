"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect } from "react"
import { motion } from "motion/react"

// ─── Shared sub-components ───────────────────────────────────────────────────

function GMark() {
  return <span className="hc-gmark" />
}

function Ping() {
  return <span className="hc-ping" />
}

function Spinner() {
  return <span className="hc-spinner" />
}

// ─── Card components ──────────────────────────────────────────────────────────

/** Component 1 — New Lead Incoming */
function CardNewLead() {
  return (
    <div className="hc-card hc-left-green" style={{ width: "280px" }}>
      <div className="hc-row">
        <div className="hc-row" style={{ justifyContent: "flex-start" }}>
          <Ping />
          <p className="hc-title">Nouveau lead</p>
        </div>
        <span className="hc-pill hc-pill-green">2 min</span>
      </div>
      <p className="hc-sub">Jean-Philippe B. - Gouttières</p>
      <div className="hc-row" style={{ justifyContent: "flex-start", marginTop: "10px" }}>
        <span className="hc-pill hc-pill-blue">
          <GMark />
          <span style={{ marginLeft: "5px" }}>Google Ads</span>
        </span>
      </div>
    </div>
  )
}

/** Component 3 — Automation Flow */
function CardAutomationFlow() {
  return (
    <div className="hc-card hc-left-violet" style={{ width: "260px" }}>
      <div className="hc-row" style={{ justifyContent: "flex-start" }}>
        <p className="hc-title">⚡ Automatisation active</p>
        <span className="hc-dot hc-d-indigo" style={{ boxShadow: "0 0 20px rgba(67,56,202,0.12)" }} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <div className="hc-flow-step">
          <span className="hc-pill hc-pill-green" style={{ padding: "2px 6px" }}>✓</span>
          <span>Lead reçu</span>
        </div>
        <div className="hc-flow-step">
          <span className="hc-pill hc-pill-green" style={{ padding: "2px 6px" }}>✓</span>
          <span>SMS envoyé</span>
        </div>
        <div className="hc-flow-step">
          <span className="hc-pill hc-pill-green" style={{ padding: "2px 6px" }}>✓</span>
          <span>RDV créé</span>
        </div>
        <div className="hc-flow-step">
          <Spinner />
          <span>Facture en cours</span>
        </div>
        <div className="hc-flow-step">
          <span className="hc-pill hc-pill-gray" style={{ padding: "2px 6px" }}>•</span>
          <span>Avis à demander</span>
        </div>
      </div>
    </div>
  )
}

/** Component 4 — Internal Team Alert (timer ticks via useEffect in parent) */
function CardLeadAlert({ timerId }: { timerId: string }) {
  return (
    <div className="hc-card hc-left-red" style={{ width: "260px" }}>
      <span className="hc-pill hc-pill-red">ALERTE</span>
      <p className="hc-title" style={{ marginTop: "10px" }}>Lead non contacté</p>
      <p className="hc-sub">Marc Dubois attend</p>
      <div
        id={timerId}
        className="hc-big"
        style={{
          fontFamily: "ui-monospace,Consolas,monospace",
          color: "#ef4444",
          fontSize: "32px",
          margin: "12px 0",
          textAlign: "center",
        }}
      >
        03:12:47
      </div>
      <button className="hc-btn-alert">📞 Appeler</button>
    </div>
  )
}

/** Component 5 — Invoice Paid */
function CardInvoicePaid() {
  return (
    <div className="hc-card hc-left-sky" style={{ maxWidth: "245px" }}>
      <div className="hc-head">
        <p className="hc-title">Facture #1042</p>
        <span className="hc-pill hc-g">Payée</span>
      </div>
      <p className="hc-line hc-line-strong">Sophie Lavoie</p>
      <p className="hc-line">Entretien</p>
      <p className="hc-big-sm">285,00 $</p>
    </div>
  )
}

/** Component 7 — Google Review */
function CardGoogleReview() {
  return (
    <div className="hc-card hc-light-card hc-left-amber" style={{ width: "290px" }}>
      <div className="hc-row" style={{ justifyContent: "flex-start" }}>
        <GMark />
        <span className="hc-meta" style={{ fontWeight: 700 }}>Google</span>
      </div>
      <p className="hc-title" style={{ marginTop: "10px" }}>Stéphane Morin</p>
      <p className="hc-sub" style={{ margin: "8px 0 0", color: "#8793b4" }}>★★★★★</p>
      <p className="hc-sub">Service rapide et pro. Je recommande.</p>
      <p className="hc-muted" style={{ marginTop: "8px" }}>3 jours</p>
      <span className="hc-pill hc-pill-green" style={{ marginTop: "8px", display: "inline-block" }}>✓ Vérifié</span>
    </div>
  )
}

/** Component 10 — Booking Confirmed Toast */
function CardBookingConfirmed() {
  return (
    <div
      className="hc-card hc-left-green"
      style={{
        width: "320px",
        minHeight: "84px",
        display: "grid",
        gridTemplateColumns: "46px 1fr",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background: "#07170f",
          border: "1px solid #14532d",
          color: "#34d399",
        }}
      >
        ✓
      </div>
      <div>
        <p className="hc-title">RDV confirmé</p>
        <p className="hc-sub" style={{ marginTop: "4px" }}>Jeu. 23 oct. - 14h30</p>
        <p className="hc-muted" style={{ color: "#94a3d6" }}>Ajouté au calendrier</p>
      </div>
    </div>
  )
}

/** Component 19 — Review Request Conversion */
function CardReviewConversion() {
  return (
    <div className="hc-card hc-left-amber" style={{ width: "300px" }}>
      <p className="hc-title">⭐ Avis Google reçu</p>
      <div className="hc-sms-bubble" style={{ marginTop: "10px" }}>
        Merci Sophie. 30 sec pour un avis ? 👉 [lien]
        <br />
        <span className="hc-muted">Envoyé il y a 2h</span>
      </div>
      <p style={{ textAlign: "center", color: "#58627f", margin: "8px 0" }}>↓</p>
      <div
        style={{
          background: "rgba(18,20,45,0.9)",
          border: "1px solid rgba(99,102,241,0.16)",
          borderRadius: "12px",
          padding: "10px",
        }}
      >
        <p className="hc-title" style={{ margin: 0, color: "#eac47a" }}>★★★★★ Avis publié</p>
        <p className="hc-meta" style={{ margin: "4px 0 0" }}>Sophie Lavoie</p>
        <p className="hc-sub">Super service, vitres impeccables.</p>
      </div>
      <span className="hc-pill hc-pill-green" style={{ marginTop: "10px", display: "inline-block" }}>
        Conversion avis: 68%
      </span>
    </div>
  )
}

// ─── Icon images ──────────────────────────────────────────────────────────────

const iconStyle: React.CSSProperties = {
  width: "150px",
  height: "150px",
  borderRadius: "26px",
  display: "block",
  objectFit: "cover",
  boxShadow: "0 8px 20px rgba(0,0,0,0.7), 0 20px 40px rgba(0,0,0,0.45)",
  opacity: 0.77,
  flexShrink: 0,
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function HeroSection() {
  useEffect(() => {
    const timer = document.getElementById("alert-timer")
    if (!timer) return

    let total = (3 * 3600) + (55 * 60)
    const format = (seconds: number) => {
      const h = String(Math.floor(seconds / 3600)).padStart(2, "0")
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
      const s = String(seconds % 60).padStart(2, "0")
      return `${h}:${m}:${s}`
    }

    const id = window.setInterval(() => {
      total += 1
      timer.textContent = format(total)
    }, 1000)

    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="hero" className="hero-section">
      {/* Subtle indigo glow behind right zone */}
      <div className="hero-proto-glow" />

      <div className="hero-inner">
        {/* Left zone: headline + subtitle + CTAs */}
        <div className="hero-left-zone">
          <div className="hero-left-inner">
            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <motion.span
                initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "block" }}
              >
                Plus de clients.
              </motion.span>
              <motion.span
                className="hero-title-secondary title-secondary-gradient"
                initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Zéro chaos.
              </motion.span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ filter: "blur(10px)", opacity: 0, y: 15 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              On construit un système sur mesure qui attire, convertit et relance pour votre
              entreprise de services résidentiels.
            </motion.p>

            <motion.div
              className="hero-cta-wrap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.02, filter: "brightness(1.15)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link
                  href="/contact"
                  className="hero-btn-primary"
                  style={{ background: "linear-gradient(135deg, #1C0770 0%, #0a0a0a 70%)" }}
                >
                  Réserver un appel
                  <ArrowUpRight className="hero-btn-icon" />
                </Link>
              </motion.div>
              <motion.a
                href="#processus"
                className="hero-btn-secondary"
                whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.25)", backgroundColor: "rgba(255,255,255,0.04)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Voir le processus
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Right zone: 4 columns, anchored bottom-right */}
        <div className="hero-right-zone" aria-hidden="true">

          {/* Col 1: platform icon images */}
          <div className="hero-col-wrapper hero-col-wrapper-1" style={{ ["--col-offset" as string]: "-90px" } as React.CSSProperties}>
            <div className="hero-col">
              <img src="/components/f_ads_icon.png" alt="" style={{ ...iconStyle, marginBottom: "22px" }} />
              <img src="/components/g_ads_icon.png" alt="" style={{ ...iconStyle, marginBottom: "14px" }} />
              <img src="/components/nextdoor_icon.png" alt="" style={iconStyle} />
            </div>
          </div>

          {/* Col 2: Lead alert + new lead + automation flow */}
          <div className="hero-col-wrapper hero-col-wrapper-2" style={{ ["--col-offset" as string]: "-40px" } as React.CSSProperties}>
            <div className="hero-col">
              <div className="hero-component-card hero-space-22">
                <CardLeadAlert timerId="alert-timer" />
              </div>
              <div className="hero-component-card hero-space-14">
                <CardNewLead />
              </div>
              <div className="hero-component-card">
                <CardAutomationFlow />
              </div>
            </div>
          </div>

          {/* Col 3: calendar screenshot */}
          <div className="hero-col-wrapper hero-col-wrapper-3" style={{ ["--col-offset" as string]: "-140px" } as React.CSSProperties}>
            <div className="hero-col">
              <img
                src="/components/calendar-booked.png"
                alt="Google Calendar"
                className="hero-calendar-img"
              />
            </div>
          </div>

          {/* Col 4: review conversion + booking + google review + invoice */}
          <div className="hero-col-wrapper hero-col-wrapper-4" style={{ ["--col-offset" as string]: "0px" } as React.CSSProperties}>
            <div className="hero-col">
              <div className="hero-component-card hero-space-28">
                <CardReviewConversion />
              </div>
              <div className="hero-component-card hero-space-20">
                <CardBookingConfirmed />
              </div>
              <div className="hero-component-card hero-space-14">
                <CardGoogleReview />
              </div>
              <div className="hero-component-card">
                <CardInvoicePaid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
