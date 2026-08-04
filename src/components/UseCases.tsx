import { motion } from 'motion/react'
import { riseIn } from '../lib/motion'
import { useCases } from '../lib/content'
import { Container, Reveal, SectionLabel, SectionTitle } from './Section'

export function UseCases() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Где пригодится</SectionLabel>
          <SectionTitle>Всё то же самое, что и раньше</SectionTitle>
        </Reveal>

        {/* Hairline table rather than cards: this section supports the story,
            it should not compete with the benefits grid above it. */}
        <Reveal each={0.05} className="mt-12 sm:mt-16">
          <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item) => (
              <motion.div
                key={item.title}
                variants={riseIn}
                className="group border-b border-line px-1 py-7 transition-colors duration-300 sm:border-r sm:px-6 sm:py-8 sm:first:pl-1 lg:last:border-r-0"
              >
                <h3 className="flex items-baseline gap-2.5 text-[1.0625rem] font-semibold">
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-paper-faint transition-colors duration-300 group-hover:bg-paper"
                  />
                  {item.title}
                </h3>
                <p className="mt-2.5 pl-[1rem] text-[0.9375rem] leading-relaxed text-paper-dim">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
