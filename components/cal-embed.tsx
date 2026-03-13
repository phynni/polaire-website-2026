"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Cal?: ((...args: unknown[]) => void) & {
      loaded?: boolean
      ns?: Record<string, (...args: unknown[]) => void>
      q?: unknown[]
    }
    __polaireCalEmbedInitialized?: Record<string, boolean>
  }
}

type CalEmbedProps = {
  id?: string
  height?: number | string
}

export function CalEmbed({ id = "my-cal-inline-30min", height = 430 }: CalEmbedProps) {
  useEffect(() => {
    window.__polaireCalEmbedInitialized = window.__polaireCalEmbedInitialized || {}

    if (window.__polaireCalEmbedInitialized[id]) return
    window.__polaireCalEmbedInitialized[id] = true

      ; ((C: Window, A: string, L: string) => {
        const p = function (a: { q?: unknown[] }, ar: IArguments | unknown[]) {
          a.q = a.q || []
          a.q.push(ar)
        }

        const d = C.document

        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal!
            const ar = arguments

            if (!cal.loaded) {
              cal.ns = {}
              cal.q = cal.q || []
              d.head.appendChild(d.createElement("script")).src = A
              cal.loaded = true
            }

            if (ar[0] === L) {
              const api = function () {
                p(api, arguments)
              } as ((...args: unknown[]) => void) & { q?: unknown[] }

              const namespace = ar[1]
              api.q = api.q || []

              if (typeof namespace === "string") {
                cal.ns![namespace] = cal.ns![namespace] || api
                p(cal.ns![namespace] as { q?: unknown[] }, ar)
                p(cal, ["initNamespace", namespace])
              } else {
                p(cal, ar)
              }

              return
            }

            p(cal, ar)
          }
      })(window, "https://app.cal.com/embed/embed.js", "init")

    window.Cal?.("init", "30min", { origin: "https://app.cal.com" })

    window.Cal?.ns?.["30min"]?.("inline", {
      elementOrSelector: `#${id}`,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "phoenixeaves/discovery",
    })

    window.Cal?.ns?.["30min"]?.("ui", {
      hideEventTypeDetails: true,
      layout: "month_view",
      theme: "dark",
    })
  }, [id])

  return (
    <div
      id={id}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        overflow: "auto",
      }}
    />
  )
}
