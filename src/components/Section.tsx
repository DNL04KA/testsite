import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { riseIn, stagger, VIEWPORT } from '../lib/motion'

/** Shared page gutter. One container width for the entire site. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Scroll reveal wrapper. Children marked with `variants={riseIn}` inherit the
 * stagger automatically, which keeps section entrances consistent everywhere.
 */
export function Reveal({
  children,
  className = '',
  each = 0.07,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  each?: number
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger(each, delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** A small monospaced eyebrow with a hairline tick — the only section marker used. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={riseIn}
      className="label-mono flex items-center gap-2.5 text-paper-faint"
    >
      <span aria-hidden="true" className="h-px w-6 bg-paper/50" />
      {children}
    </motion.div>
  )
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.h2
      variants={riseIn}
      className={`mt-5 max-w-2xl text-[2rem] font-semibold leading-[1.08] sm:text-[2.75rem] lg:text-[3.25rem] ${className}`}
    >
      {children}
    </motion.h2>
  )
}
