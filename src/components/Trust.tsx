import { motion } from 'motion/react'
import { riseIn } from '../lib/motion'
import { BOT_URL, commitments, MONTHLY_USERS } from '../lib/content'
import { Container, Reveal, SectionLabel, SectionTitle } from './Section'
import { CheckGlyph } from './icons'

export function Trust() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Честно</SectionLabel>
            <SectionTitle>Чего мы не делаем</SectionTitle>
            <motion.p
              variants={riseIn}
              className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-paper-dim"
            >
              У нас нет собранных отзывов, и придумывать их мы не станем. Вместо
              этого — то, на что можно опереться прямо сейчас.
            </motion.p>
          </Reveal>

          <Reveal each={0.08} className="lg:col-span-7">
            <ul>
              {commitments.map((item) => (
                <motion.li
                  key={item.title}
                  variants={riseIn}
                  className="flex gap-5 border-b border-line py-6 first:border-t sm:gap-6 sm:py-7"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-paper/10 text-paper">
                    <CheckGlyph className="size-3.5" />
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold sm:text-[1.125rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper-dim">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Provenance for the hero figure. A number the reader can go and
                check themselves is worth more than one they have to take on
                faith — and it is the only number on the page. */}
            <motion.p
              variants={riseIn}
              className="mt-6 text-[0.8125rem] leading-relaxed text-paper-faint"
            >
              {MONTHLY_USERS} пользователей в месяц — публичный счётчик Telegram
              на{' '}
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper-dim underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-paper"
              >
                странице бота
              </a>
              . Его можно проверить прямо сейчас.
            </motion.p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
