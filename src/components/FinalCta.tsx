import { motion } from 'motion/react'
import { riseIn } from '../lib/motion'
import { Container, Reveal } from './Section'
import { CtaButton } from './CtaButton'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* A restrained echo of the hero aperture — same language, lower volume,
          so the page closes where it opened. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Safari defers rasterizing filtered content while it's off-screen,
            then pays the cost in one burst right as it scrolls into view —
            this section sits at the very bottom of the page, so that burst
            landed exactly when a visitor reached it, reading as a stutter.
            Same fix as the hero sweep: smaller area, lighter blur. */}
        <div className="absolute left-1/2 top-full aspect-square w-[100vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_62%)] blur-2xl" />
        <svg
          viewBox="0 0 1000 1000"
          className="absolute left-1/2 top-full aspect-square w-[100vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2"
        >
          {[240, 340, 440].map((r) => (
            <circle
              key={r}
              cx="500"
              cy="500"
              r={r}
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <motion.h2
            variants={riseIn}
            className="text-[2.25rem] font-semibold leading-[1.02] sm:text-[3.25rem] lg:text-[3.75rem]"
          >
            Остался{' '}
            <span className="font-serif font-normal italic text-paper">один</span>{' '}
            шаг
          </motion.h2>

          <motion.p
            variants={riseIn}
            className="mx-auto mt-5 max-w-md text-[1.0625rem] leading-relaxed text-paper-dim sm:mt-6 sm:text-[1.125rem]"
          >
            Бот откроется в Telegram и всё расскажет сам. Ничего заполнять не
            нужно.
          </motion.p>

          <motion.div variants={riseIn} className="mt-10 sm:mt-12">
            <CtaButton size="lg" location="final" />
          </motion.div>
        </Reveal>
      </Container>
    </section>
  )
}
