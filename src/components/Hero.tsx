import { useRef } from 'react'
import { motion } from 'motion/react'
import { riseIn, stagger } from '../lib/motion'
import { trustSignals } from '../lib/content'
import { Container } from './Section'
import { CtaButton } from './CtaButton'
import { HeroVisual } from './HeroVisual'
import { ChatProof } from './ChatProof'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-36"
    >
      <HeroVisual scrollRef={ref} />

      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.09, 0.1)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={riseIn}
            className="label-mono inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-raised/60 px-3.5 py-1.5 text-paper-dim backdrop-blur-sm"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-paper" />
            Доступ через Telegram
          </motion.p>

          <motion.h1
            variants={riseIn}
            className="mt-7 text-[2.75rem] font-semibold leading-[0.98] sm:text-[4.25rem] lg:text-[5.25rem]"
          >
            Интернет, каким
            <br className="hidden sm:block" /> он был{' '}
            <span className="font-serif font-normal italic text-paper">дома</span>
          </motion.h1>

          <motion.p
            variants={riseIn}
            className="mx-auto mt-6 max-w-xl text-balance text-[1.0625rem] leading-relaxed text-paper-dim sm:mt-7 sm:text-[1.1875rem]"
          >
            {'Открыли бота в Telegram\u00A0— получили ключ\u00A0— подключились. '}
            {'Без регистрации, почты и лишних шагов.'}
          </motion.p>

          <motion.div variants={riseIn} className="mt-9 sm:mt-11">
            <CtaButton size="lg" location="hero" />
            <p className="mt-4 text-[0.8125rem] text-paper-faint">
              Откроется в приложении Telegram · Займёт меньше минуты
            </p>
          </motion.div>

          {/* Trust row — hairline-separated on desktop, stacked on small screens. */}
          <motion.ul
            variants={riseIn}
            className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-2.5 text-[0.8125rem] text-paper-dim sm:mt-12 sm:flex-row sm:justify-center sm:gap-0"
          >
            {trustSignals.map((signal, i) => (
              <li
                key={signal}
                className={`sm:px-5 ${i > 0 ? 'sm:border-l sm:border-line' : ''}`}
              >
                {signal}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="mt-14 sm:mt-16">
          <ChatProof />
        </div>
      </Container>
    </section>
  )
}
