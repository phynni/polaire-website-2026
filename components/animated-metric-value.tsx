"use client"

import { motion, useInView } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"

function parseMetricValue(value: string) {
  const trimmed = value.trim()
  let numeric = trimmed
  let suffix = ""

  if (numeric.endsWith("x")) {
    suffix = "x"
    numeric = numeric.slice(0, -1).trim()
  } else if (numeric.endsWith("%")) {
    suffix = " %"
    numeric = numeric.slice(0, -1).trim()
  } else if (numeric.endsWith("$")) {
    suffix = " $"
    numeric = numeric.slice(0, -1).trim()
  }

  const normalized = numeric.replace(/\s/g, "")
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0
  const target = Number(normalized)

  return { target, decimals, suffix }
}

function formatMetricNumber(value: number, decimals: number) {
  const fixed = value.toFixed(decimals)
  const [integerPart, decimalPart] = fixed.split(".")
  const withSpacing = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  return decimalPart ? `${withSpacing}.${decimalPart}` : withSpacing
}

export function AnimatedMetricValue({
  value,
  delay = 0,
  duration = 1500,
}: {
  value: string
  delay?: number
  duration?: number
}) {
  const parsed = useMemo(() => parseMetricValue(value), [value])
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  useEffect(() => {
    if (!isInView) return

    let frameId = 0
    let timeoutId = 0
    let startTime: number | null = null

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(parsed.target * eased)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    timeoutId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(tick)
    }, delay * 1000)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(timeoutId)
    }
  }, [delay, duration, isInView, parsed.target])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.45, delay }}
      className="block"
    >
      {formatMetricNumber(displayValue, parsed.decimals)}
      {parsed.suffix}
    </motion.span>
  )
}
