import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { ProcessSection } from "@/components/sections/process"
import { AutomationSection } from "@/components/sections/automation"
import { DeliverablesSection } from "@/components/sections/deliverables"
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview"
import { FAQSection } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProcessSection />
        <AutomationSection />
        <DeliverablesSection />
        <CaseStudiesPreview />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
