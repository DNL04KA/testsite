import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { EASE_OUT } from '../lib/motion'
import { Container } from './Section'
import { CtaButton } from './CtaButton'
import { GammaMark } from './icons'

const NAV = [
  { href: '#benefits', label: 'Возможности' },
  { href: '#how', label: 'Как это работает' },
  { href: '#faq', label: 'Вопросы' },
]

export function Header() {
  const { scrollY } = useScroll()
  const [lifted, setLifted] = useState(false)

  // The bar only gains a surface once it actually overlaps content.
  useMotionValueEvent(scrollY, 'change', (v) => setLifted(v > 24))

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          lifted
            ? 'border-b border-line bg-ink/72 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
            <a
              href="#top"
              className="flex shrink-0 items-center gap-2.5"
              aria-label="GaMMa VPN, в начало страницы"
            >
              <GammaMark className="h-7 w-auto text-paper" />
              <span className="text-[0.9375rem] font-semibold tracking-[-0.02em]">
                GaMMa<span className="text-paper-dim"> VPN</span>
              </span>
            </a>

            <nav
              aria-label="Разделы страницы"
              className="hidden items-center gap-8 md:flex"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.875rem] text-paper-dim transition-colors duration-200 hover:text-paper"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Wrapped rather than given `hidden` directly: the button's own
                `inline-flex` sits in the same utility group and wins regardless
                of class order. Below sm the sticky bottom bar carries the CTA. */}
            <div className="hidden shrink-0 sm:block">
              <CtaButton size="md" location="header" />
            </div>
          </div>
        </Container>
      </div>
    </motion.header>
  )
}
