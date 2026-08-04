import { motion } from 'motion/react'
import { useMemo } from 'react'
import { riseIn } from '../lib/motion'
import { faq } from '../lib/content'
import { Container, Reveal, SectionLabel, SectionTitle } from './Section'
import { Accordion } from './Accordion'

export function Faq() {
  const items = useMemo(
    () => faq.map(({ id, q, a }) => ({ id, title: q, content: a })),
    [],
  )

  return (
    <section id="faq" className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionLabel>Вопросы</SectionLabel>
            <SectionTitle>Коротко о главном</SectionTitle>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={riseIn}
            className="lg:col-span-8"
          >
            <Accordion items={items} defaultOpen={['app']} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
