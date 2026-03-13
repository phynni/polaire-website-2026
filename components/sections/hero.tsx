"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect } from "react"
import { motion } from "motion/react"

/*
COMPONENT MATCHES:
component 1.png → Component #1 from full file (Nouveau lead entrant)
component 3.png → Component #3 from full file (Automatisation active)
component 4.png → Component #4 from full file (Lead non contacté timer)
component 5s.png → Component #5 from simplified file (Facture envoyée)
component 7.png → Component #7 from full file (Google review)
component 10.png → Component #10 from full file (RDV confirmé toast)
component 19.png → Component #19 from full file (Avis Google reçu - Automatique)
*/

const COMPONENT_1_FULL = `<!-- extracted: component1 from full-components.html -->
<div><p class="label">Component 1 - New Lead Incoming</p><div class="card left-green" style="width:280px;--fd:4.6s;--fdelay:.2s;"><div class="row"><div class="row" style="justify-content:flex-start;"><span class="ping"></span><p class="title">Nouveau lead</p></div><span class="pill pill-green">2 min</span></div><p class="sub">Jean-Philippe B. - Gouttières</p><div class="row" style="justify-content:flex-start;margin-top:10px;"><span class="pill pill-blue"><span class="gmark" style="display:inline-block;vertical-align:middle;margin-right:5px;"></span>Google Ads</span></div></div></div>`

const COMPONENT_3_FULL = `<!-- extracted: component3 from full-components.html -->
<div><p class="label">Component 3 - Automation Flow</p><div class="card left-violet" style="width:260px;--fd:5.3s;--fdelay:.8s;"><div class="row" style="justify-content:flex-start;"><p class="title">⚡ Automatisation active</p><span class="dot d-indigo" style="box-shadow:0 0 20px rgba(67,56,202,0.12);"></span></div><div style="margin-top:10px;"><div class="flow-step"><span class="pill pill-green" style="padding:2px 6px;">✓</span><span>Lead reçu</span></div><div class="flow-step"><span class="pill pill-green" style="padding:2px 6px;">✓</span><span>SMS envoyé</span></div><div class="flow-step"><span class="pill pill-green" style="padding:2px 6px;">✓</span><span>RDV créé</span></div><div class="flow-step"><span class="spinner"></span><span>Facture en cours</span></div><div class="flow-step"><span class="pill pill-gray" style="padding:2px 6px;">•</span><span>Avis à demander</span></div></div></div></div>`

const COMPONENT_4_FULL = `<!-- extracted: component4 from full-components.html -->
<div><p class="label">Component 4 - Internal Team Alert</p><div class="card left-red" style="width:260px;--fd:6.7s;--fdelay:1.8s;"><span class="pill pill-red">ALERTE</span><p class="title" style="margin-top:10px;">Lead non contacté</p><p class="sub">Marc Dubois attend</p><div id="alert-timer" class="big" style="font-family:ui-monospace,Consolas,monospace;color:#ef4444;font-size:32px;margin:12px 0;text-align:center;">03:12:47</div><button class="btn-alert">📞 Appeler</button></div></div>`

const COMPONENT_5_SIMPLIFIED = `<!-- extracted: component5s from simplified-components.html -->
<div><p class="label">Component 5</p><div class="card left-sky" style="max-width:245px;--d:4.9s;--dl:.6s;"><div class="head"><p class="title">Facture #1042</p><span class="pill g">Payée</span></div><p class="line line-strong">Sophie Lavoie</p><p class="line">Entretien</p><p class="big-sm">285,00 $</p></div></div>`

const COMPONENT_7_FULL = `<!-- extracted: component7 from full-components.html -->
<div><p class="label">Component 7 - Google Review</p><div class="card light-card left-amber" style="width:290px;--fd:6.2s;--fdelay:1.3s;"><div class="row" style="justify-content:flex-start;"><span class="gmark"></span><span class="meta" style="font-weight:700;">Google</span></div><p class="title" style="margin-top:10px;">Stéphane Morin</p><p class="sub" style="margin:8px 0 0;color:#8793b4;">★★★★★</p><p class="sub">Service rapide et pro. Je recommande.</p><p class="muted" style="margin-top:8px;">3 jours</p><span class="pill pill-green" style="margin-top:8px;display:inline-block;">✓ Vérifié</span></div></div>`

const COMPONENT_10_FULL = `<!-- extracted: component10 from full-components.html -->
<div><p class="label">Component 10 - Booking Confirmed Toast</p><div class="card left-green" style="width:320px;min-height:84px;display:grid;grid-template-columns:46px 1fr;gap:12px;align-items:center;--fd:6.5s;--fdelay:2.8s;"><div style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:#07170f;border:1px solid #14532d;color:#34d399;">✓</div><div><p class="title">RDV confirmé</p><p class="sub" style="margin-top:4px;">Jeu. 23 oct. - 14h30</p><p class="muted" style="color:#94a3d6;">Ajouté au calendrier</p></div></div></div>`

/* HERO — component 19: removed infinite animation from the ↓ arrow */
const COMPONENT_19_FULL = `<!-- extracted: component19 from full-components.html -->
<div><p class="label">Component 19 - Review Request Conversion</p><div class="card left-amber" style="width:300px;--fd:5.1s;--fdelay:1.4s;"><p class="title">⭐ Avis Google reçu</p><div class="sms-bubble" style="margin-top:10px;">Merci Sophie. 30 sec pour un avis ? 👉 [lien]<br><span class="muted">Envoyé il y a 2h</span></div><p style="text-align:center;color:#58627f;margin:8px 0;">↓</p><div style="background:rgba(18,20,45,0.9);border:1px solid rgba(99,102,241,0.16);border-radius:12px;padding:10px;"><p class="title" style="margin:0;color:#eac47a;">★★★★★ Avis publié</p><p class="meta" style="margin:4px 0 0;">Sophie Lavoie</p><p class="sub">Super service, vitres impeccables.</p></div><span class="pill pill-green" style="margin-top:10px;display:inline-block;">Conversion avis: 68%</span></div></div>`

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

  const prefixComponentClasses = (html: string) => {
    return html.replace(/class="([^"]+)"/g, (_, classNames: string) => {
      const prefixed = classNames
        .split(" ")
        .filter(Boolean)
        .map((c) => `hc-${c}`)
        .join(" ")
      return `class="${prefixed}"`
    })
  }

  return (
    <section id="hero" className="hero-section">
      {/* HERO — subtle indigo glow behind right zone */}
      <div className="hero-proto-glow" />

        <div className="hero-inner">
          {/* HERO — left zone: headline + subtitle + CTAs */}
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

        {/* HERO — right zone: 4 columns, position:absolute anchored bottom-right */}
        <div className="hero-right-zone" aria-hidden="true">

          {/* HERO — col 1: 3 icon images, 3rd tallest, offset -40px */}
          <div className="hero-col-wrapper hero-col-wrapper-1" style={{ ["--col-offset" as any]: "-90px" }}>
            <div className="hero-col">
              <img
                src="/components/f_ads_icon.png"
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "26px",
                  display: "block",
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.7), 0 20px 40px rgba(0,0,0,0.45)",
                  marginBottom: "22px",
                  opacity: 0.77,
                  flexShrink: 0,
                }}
                onError={(e) => { console.error("FAILED TO LOAD:", (e.currentTarget as HTMLImageElement).src); (e.currentTarget as HTMLImageElement).style.outline = "3px solid red" }}
              />
              <img
                src="/components/g_ads_icon.png"
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "26px",
                  display: "block",
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.7), 0 20px 40px rgba(0,0,0,0.45)",
                  marginBottom: "14px",
                  opacity: 0.77,
                  flexShrink: 0,
                }}
                onError={(e) => { console.error("FAILED TO LOAD:", (e.currentTarget as HTMLImageElement).src); (e.currentTarget as HTMLImageElement).style.outline = "3px solid red" }}
              />
              <img
                src="/components/nextdoor_icon.png"
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "26px",
                  display: "block",
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.7), 0 20px 40px rgba(0,0,0,0.45)",
                  opacity: 0.77,
                  flexShrink: 0,
                }}
                onError={(e) => { console.error("FAILED TO LOAD:", (e.currentTarget as HTMLImageElement).src); (e.currentTarget as HTMLImageElement).style.outline = "3px solid red" }}
              />
            </div>
          </div>

          {/* HERO — col 2: 3 component cards, 2nd tallest, offset -90px */}
          <div className="hero-col-wrapper hero-col-wrapper-2" style={{ ["--col-offset" as any]: "-40px" }}>
            <div className="hero-col">
              <div className="hero-component-card hero-space-22" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_4_FULL) }} />
              <div className="hero-component-card hero-space-14" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_1_FULL) }} />
              <div className="hero-component-card" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_3_FULL) }} />
            </div>
          </div>

          {/* HERO — col 3: calendar image only, shortest, offset 0px */}
          <div className="hero-col-wrapper hero-col-wrapper-3" style={{ ["--col-offset" as any]: "-140px" }}>
            <div className="hero-col">
              <img
                src="/components/calendar-booked.png"
                alt="Google Calendar"
                className="hero-calendar-img"
                onError={(e) => { console.error("FAILED TO LOAD:", (e.currentTarget as HTMLImageElement).src); (e.currentTarget as HTMLImageElement).style.outline = "3px solid red" }}
              />
            </div>
          </div>

          {/* HERO — col 4: 4 component cards, tallest, offset -140px */}
          <div className="hero-col-wrapper hero-col-wrapper-4" style={{ ["--col-offset" as any]: "0px" }}>
            <div className="hero-col">
              <div className="hero-component-card hero-space-28" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_19_FULL) }} />
              <div className="hero-component-card hero-space-20" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_10_FULL) }} />
              <div className="hero-component-card hero-space-14" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_7_FULL) }} />
              <div className="hero-component-card" dangerouslySetInnerHTML={{ __html: prefixComponentClasses(COMPONENT_5_SIMPLIFIED) }} />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* HERO — section: full-width for background fill, fixed min-width, no reflow */
        .hero-section {
          width: 100%;
          min-width: 1280px;
          height: 100vh;
          min-height: 760px;
          position: relative;
          overflow: hidden;
          background: #060608;
          padding: 0;
          margin: 0;
        }

        /* HERO — glow: radial indigo behind right zone */
        .hero-proto-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: radial-gradient(ellipse 640px 520px at 74% 56%, rgba(79,70,229,0.09) 0%, transparent 70%);
        }

        /* HERO — inner: fixed 1280px, centered, relative anchor for absolute children */
        .hero-inner {
          width: 1280px;
          min-width: 1280px;
          height: 100vh;
          min-height: 760px;
          position: relative;
          margin: 0 auto;
          z-index: 2;
        }

        /* HERO — left zone: restored to the older layout and spacing */
        .hero-left-zone {
          position: absolute;
          left: 24px;
          top: 170px;
          width: 620px;
          height: auto;
          box-sizing: border-box;
          z-index: 10;
        }

        .hero-left-inner {
          max-width: 620px;
        }

        /* HERO — headline: matched to the supplied target composition */
        .hero-headline {
          font-size: 74px;
          line-height: 1.08;
          font-weight: 600;
          letter-spacing: -0.04em;
          margin: 0;
          color: #ffffff;
          white-space: nowrap;
        }

        .hero-title-secondary {
          display: block;
          margin-top: -4px;
          white-space: nowrap;
        }

        /* HERO — subtitle: width and tone matched to the target */
        .hero-subtitle {
          margin-top: 22px;
          max-width: 520px;
          font-size: 18px;
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: #6f7480;
        }

        /* HERO — CTA row: button rhythm matched to the target */
        .hero-cta-wrap {
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: nowrap;
        }

        /* HERO — primary CTA button */
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
          flex-shrink: 0;
          text-decoration: none;
          transition: filter 0.3s ease;
        }
        .hero-btn-primary:hover { filter: brightness(1.1); }

        /* HERO — secondary CTA button */
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.09);
          white-space: nowrap;
          flex-shrink: 0;
          text-decoration: none;
          transition: border-color 0.5s ease;
        }
        .hero-btn-secondary:hover { border-color: rgba(255,255,255,0.18); }

        .hero-btn-icon {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        /* HERO — right zone: absolute, anchored bottom-right of the 1280px inner */
        .hero-right-zone {
          position: absolute;
          right: -120px;
          bottom: 0;
          width: 900px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 26px;
          padding: 0 56px 0 0;
          transform: scale(0.78);
          transform-origin: bottom right;
          opacity: 0.9;
          overflow: visible;
          font-family: "Plus Jakarta Sans", sans-serif;
          --text: #d9def2;
          --text-secondary: #6e7898;
          --text-muted: #4d566f;
          --card-bg-top: rgba(10, 11, 24, 0.9);
          --card-bg-bottom: rgba(5, 6, 16, 0.86);
          --card-border: rgba(99, 102, 241, 0.08);
          --card-ring: rgba(255,255,255,0.02);
          --card-shadow-indigo: rgba(26, 20, 74, 0.18);
          z-index: 5;
        }

        /* HERO — column wrapper: translateY stagger + rise animation */
        .hero-col-wrapper {
          transform: translateY(var(--col-offset, 0px));
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          animation: colRise 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-fill-mode: both;
        }

        /* HERO — column widths and animation delays */
        .hero-col-wrapper-1 { width: 158px; animation-delay: 0.30s; }
        .hero-col-wrapper-2 { width: 248px; animation-delay: 0.42s; }
        .hero-col-wrapper-3 { width: 168px; animation-delay: 0.54s; }
        .hero-col-wrapper-4 { width: 240px; animation-delay: 0.66s; }

        /* HERO — column inner: flex column, spacing via margin-bottom */
        .hero-col {
          display: flex;
          flex-direction: column;
          gap: 0;
          align-items: stretch;
        }

        /* HERO — calendar image: full column width */
        .hero-calendar-img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          display: block;
          object-fit: cover;
          opacity: 0.7;
          box-shadow: 0 8px 20px rgba(0,0,0,0.7), 0 20px 40px rgba(0,0,0,0.45);
        }

        /* HERO — component card wrapper */
        .hero-component-card {
          width: 100%;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        /* HERO — card spacing (floating effect, more space at top) */
        .hero-space-28 { margin-bottom: 28px; }
        .hero-space-22 { margin-bottom: 22px; }
        .hero-space-20 { margin-bottom: 20px; }
        .hero-space-14 { margin-bottom: 14px; }

        /* HERO — left zone entrance animations */
        .hero-fade-rise {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeRise 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation-fill-mode: both;
        }

        .hero-anim-headline-primary   { animation-delay: 0.10s; }
        .hero-anim-headline-secondary { animation-delay: 0.18s; }
        .hero-anim-subtitle           { animation-delay: 0.26s; }
        .hero-anim-cta                { animation-delay: 0.34s; }

        /* HERO — navbar fade in */
        header.fixed.top-0.left-0.right-0 {
          opacity: 0;
          animation: fadeOnly 0.5s ease both;
          animation-delay: 0s;
        }

        /* ===== HERO COMPONENT STYLES (hc- prefixed) ===== */

        .hero-right-zone .hc-label { display: none; }

        /* HERO — card base: solid bg, correct border order (left after shorthand) */
        .hero-right-zone .hc-card {
          position: relative;
          width: 100% !important;
          max-width: none !important;
          min-height: auto;
          border-radius: 14px;
          padding: 14px;
          background: linear-gradient(180deg, var(--card-bg-top) 0%, var(--card-bg-bottom) 100%);
          border: 1px solid var(--card-border);
          border-left: 4px solid #312e81;
          box-shadow:
            0 0 0 1px var(--card-ring),
            0 4px 12px rgba(0,0,0,0.5),
            0 12px 28px rgba(0,0,0,0.38),
            0 18px 34px -20px var(--card-shadow-indigo);
          animation: none !important;
          transform: none !important;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .hero-right-zone .hc-left-green  { border-left-color: #14532d; }
        .hero-right-zone .hc-left-red    { border-left-color: #7a1d31; }
        .hero-right-zone .hc-left-indigo { border-left-color: #312e81; }
        .hero-right-zone .hc-left-amber  { border-left-color: #78350f; }
        .hero-right-zone .hc-left-blue   { border-left-color: #1e3a8a; }
        .hero-right-zone .hc-left-violet { border-left-color: #4c1d95; }
        .hero-right-zone .hc-left-teal   { border-left-color: #134e4a; }
        .hero-right-zone .hc-left-sky    { border-left-color: #0c4a6e; }
        .hero-right-zone .hc-left-orange { border-left-color: #7c2d12; }

        .hero-right-zone .hc-light-card { background: linear-gradient(180deg, rgba(14, 15, 33, 0.98) 0%, rgba(9, 10, 24, 0.98) 100%); border-color: var(--card-border); }

        .hero-right-zone .hc-row,
        .hero-right-zone .hc-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }

        .hero-right-zone .hc-title       { margin: 0; font-size: 14px; font-weight: 700; color: var(--text); }
        .hero-right-zone .hc-sub         { margin: 6px 0 0; color: var(--text-secondary); font-size: 12px; line-height: 1.45; }
        .hero-right-zone .hc-line        { margin: 6px 0 0; color: var(--text-secondary); font-size: 11px; line-height: 1.4; }
        .hero-right-zone .hc-line-strong { color: var(--text); }
        .hero-right-zone .hc-muted       { color: var(--text-muted); font-size: 11px; }
        .hero-right-zone .hc-meta        { color: var(--text-secondary); font-size: 12px; }

        .hero-right-zone .hc-pill { border-radius: 999px; padding: 4px 9px; font-size: 11px; font-weight: 700; border: 1px solid transparent; white-space: nowrap; display: inline-flex; align-items: center; }
        .hero-right-zone .hc-pill-green, .hero-right-zone .hc-g { background: #061810; color: #7dd3a1; border-color: #14532d; }
        .hero-right-zone .hc-pill-red,   .hero-right-zone .hc-r { background: #24070e; color: #fda4af; border-color: #7a1d31; }
        .hero-right-zone .hc-pill-amber, .hero-right-zone .hc-a { background: #291108; color: #e8b36d; border-color: #78350f; }
        .hero-right-zone .hc-pill-blue,  .hero-right-zone .hc-b { background: #0a1428; color: #9cbdf8; border-color: #1e3a8a; }
        .hero-right-zone .hc-pill-indigo,.hero-right-zone .hc-i { background: #171432; color: #b5befd; border-color: #312e81; }
        .hero-right-zone .hc-pill-gray,  .hero-right-zone .hc-x { background: #121827; color: #9ba7c5; border-color: #2b3650; }

        .hero-right-zone .hc-big    { font-size: 36px; font-weight: 800; color: #bcc7f5; line-height: 1; }
        .hero-right-zone .hc-big-sm { margin-top: 6px; font-size: 26px; font-weight: 800; color: #bcc7f5; line-height: 1; }
        .hero-right-zone .hc-big-xl { font-size: 40px; font-weight: 800; color: #bcc7f5; line-height: 1; }

        .hero-right-zone .hc-dot      { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .hero-right-zone .hc-d-green  { background: #15803d; }
        .hero-right-zone .hc-d-red    { background: #be123c; }
        .hero-right-zone .hc-d-amber  { background: #92400e; }
        .hero-right-zone .hc-d-blue   { background: #1d4ed8; }
        .hero-right-zone .hc-d-indigo { background: #4338ca; }

        .hero-right-zone .hc-divider    { border-top: 1px solid rgba(99,102,241,0.08); margin: 10px 0; }
        .hero-right-zone .hc-progress   { height: 6px; background: rgba(99,102,241,0.08); border-radius: 999px; overflow: hidden; }
        .hero-right-zone .hc-fill-green { height: 100%; background: #14532d; }
        .hero-right-zone .hc-fill-amber { height: 100%; background: #78350f; }
        .hero-right-zone .hc-fill-indigo{ height: 100%; background: #312e81; }

        .hero-right-zone .hc-flow-step { position: relative; display: grid; grid-template-columns: 20px 1fr auto; gap: 8px; align-items: center; font-size: 12px; color: var(--text-secondary); padding: 6px 0; }
        .hero-right-zone .hc-flow-step:not(:last-child)::after { content: ""; position: absolute; left: 9px; top: 24px; bottom: -8px; border-left: 1px dashed rgba(99,102,241,0.12); }

        .hero-right-zone .hc-spinner { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #171432; border-top-color: #4338ca; animation: hc-spin 1s linear infinite; display: inline-block; }

        .hero-right-zone .hc-ping { width: 12px; height: 12px; border-radius: 50%; background: #15803d; position: relative; box-shadow: 0 0 12px rgba(21,128,61,0.18); flex: 0 0 auto; }
        .hero-right-zone .hc-ping::before,
        .hero-right-zone .hc-ping::after { content: ""; position: absolute; inset: 0; border-radius: 50%; border: 1px solid rgba(21,128,61,0.32); animation: hc-ping 2s infinite; }
        .hero-right-zone .hc-ping::after { animation-delay: .8s; }

        .hero-right-zone .hc-sms-bubble,
        .hero-right-zone .hc-bubble { background: rgba(12, 14, 31, 0.84); border: 1px solid rgba(99,102,241,0.12); border-radius: 12px; padding: 9px 10px; font-size: 12px; line-height: 1.45; color: #d6def8; }

        .hero-right-zone .hc-gmark { width: 16px; height: 16px; border-radius: 50%; background: conic-gradient(#ea4335 0 25%, #34a853 25% 50%, #fbbc05 50% 75%, #4285f4 75% 100%); display: inline-block; flex-shrink: 0; }

        .hero-right-zone .hc-btn-alert { display: inline-flex; width: 100%; justify-content: center; align-items: center; gap: 8px; border: 1px solid rgba(190,24,93,0.2); border-radius: 12px; background: linear-gradient(135deg, rgba(92,20,47,0.95) 0%, rgba(49,13,30,0.95) 100%); color: #ffe4ea; padding: 10px; font-weight: 700; font-family: inherit; cursor: pointer; }

        .hero-right-zone .hc-phone { margin-top: 8px; border: 1px solid rgba(99,102,241,0.1); border-radius: 14px; padding: 8px; background: rgba(10, 13, 29, 0.72); }

        /* HERO — keyframes */
        @keyframes hc-spin { to { transform: rotate(360deg); } }
        @keyframes hc-ping { 0% { transform: scale(.7); opacity: .7; } 80% { transform: scale(2.2); opacity: 0; } 100% { opacity: 0; } }
        @keyframes hc-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hc-fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        @keyframes colRise {
          from { opacity: 0; transform: translateY(calc(var(--col-offset, 0px) + 20px)); }
          to   { opacity: 1; transform: translateY(var(--col-offset, 0px)); }
        }
        @keyframes fadeRise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOnly {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* HERO — mobile: simplified single-column layout below 768px */
        @media (max-width: 768px) {
          .hero-section {
            width: 100%;
            min-width: 0;
            height: auto;
            min-height: 100svh;
            padding: 80px 24px 60px;
            box-sizing: border-box;
          }
          .hero-inner {
            width: 100%;
            min-width: 0;
            height: auto;
            min-height: 0;
            position: relative;
          }
          .hero-left-zone {
            position: relative;
            left: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            max-width: 100%;
            height: auto;
            padding: 0;
          }
          .hero-left-inner {
            max-width: 100%;
          }
          .hero-headline {
            font-size: 44px;
            white-space: normal;
          }
          .hero-title-secondary {
            white-space: normal;
          }
          .hero-subtitle {
            max-width: 100%;
            font-size: 18px;
          }
          .hero-cta-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-right-zone { display: none; }
        }
      `}</style>
    </section>
  )
}
