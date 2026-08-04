import { motion, useReducedMotion } from 'motion/react'
import { riseIn, SPRING_SOFT } from '../lib/motion'
import { benefits } from '../lib/content'
import { Container, Reveal, SectionLabel, SectionTitle } from './Section'

export function Benefits() {
  const reduced = useReducedMotion()

  return (
    <section id="benefits" className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Что меняется</SectionLabel>
          {/* NBSP binds the dash to the preceding word: Russian typography does
              not allow an em dash to start a line, which it did when this
              wrapped on narrow screens. */}
          <SectionTitle>
            {'Меньше действий —'}{' '}<br className="hidden sm:block" />
            больше обычной жизни
          </SectionTitle>
          <motion.p
            variants={riseIn}
            className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-paper-dim"
          >
            Сервис устроен так, чтобы о нём не приходилось думать после первого
            подключения.
          </motion.p>
        </Reveal>

        {/* Asymmetric grid: the two anchor cards span wider, breaking the
            monotony of an even feature row without becoming a puzzle. */}
        <Reveal each={0.06} className="mt-14 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <motion.article
              key={item.n}
              variants={riseIn}
              whileHover={reduced ? undefined : { y: -3 }}
              transition={SPRING_SOFT}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-ink-raised/60 p-6 transition-colors duration-300 hover:border-line-strong sm:p-7 ${item.span}`}
            >
              {/* Light wash on hover — the only decorative gradient on the page,
                  and it exists to signal interactivity, not to look futuristic. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.07),transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <span className="label-mono text-paper-dim transition-colors duration-300 group-hover:text-paper">
                  {item.n}
                </span>
                <h3
                  className={`mt-5 font-semibold leading-snug ${
                    item.feature
                      ? 'text-[1.25rem] sm:text-[1.4375rem] lg:text-[1.75rem]'
                      : 'text-[1.1875rem] sm:text-[1.3125rem]'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-[0.9375rem] leading-relaxed text-paper-dim ${
                    item.feature ? 'max-w-lg' : 'max-w-md'
                  }`}
                >
                  {item.body}
                </p>
              </div>
            </motion.article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
