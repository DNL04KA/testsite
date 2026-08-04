import { motion } from 'motion/react'
import { riseIn } from '../lib/motion'
import { steps } from '../lib/content'
import { Container, Reveal, SectionLabel, SectionTitle } from './Section'
import { CtaButton } from './CtaButton'

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-28 lg:py-32">
      {/* A faint tonal shelf separates this section without drawing a hard line. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(244,242,238,0.022)_35%,rgba(244,242,238,0.022)_65%,transparent)]"
      />

      <Container className="relative">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Три шага</SectionLabel>
          </div>
          <SectionTitle className="mx-auto text-center">
            Дольше читать, чем сделать
          </SectionTitle>
        </Reveal>

        <Reveal each={0.12} className="relative mt-16 sm:mt-20">
          {/* Connector: vertical on mobile, horizontal across the badges on desktop. */}
          <div
            aria-hidden="true"
            className="absolute left-[1.4375rem] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-line-strong to-transparent md:inset-x-0 md:left-0 md:right-0 md:top-[1.4375rem] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
          />

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <motion.li
                key={step.n}
                variants={riseIn}
                className="flex gap-5 md:block"
              >
                <span className="label-mono relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-ink text-paper">
                  {step.n}
                </span>
                <div className="md:mt-7">
                  <h3 className="text-[1.1875rem] font-semibold leading-snug sm:text-[1.3125rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-paper-dim">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 flex justify-center sm:mt-20">
          <motion.div variants={riseIn}>
            <CtaButton size="lg" location="how-it-works" />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  )
}
