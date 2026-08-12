import { MotionConfig } from 'motion/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { HowItWorks } from './components/HowItWorks'
import { UseCases } from './components/UseCases'
import { Trust } from './components/Trust'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { StickyCta } from './components/StickyCta'

export default function App() {
  return (
    // `reducedMotion="user"` drops transform animations for anyone who asked the
    // OS for less motion, while keeping opacity — so content still reveals and
    // nothing is left invisible.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-paper focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
      >
        К основному содержимому
      </a>

      <div id="top" />
      <Header />

      <main id="main">
        <Hero />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Trust />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyCta />

      <div aria-hidden="true" className="grain-overlay" />
    </MotionConfig>
  )
}
