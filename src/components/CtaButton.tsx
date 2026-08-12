import { motion, useReducedMotion } from 'motion/react'
import { SPRING_SNAP } from '../lib/motion'
import { CTA_LABEL } from '../lib/content'
import { botUrl } from '../lib/bot'
import { TelegramGlyph } from './icons'

type Props = {
  size?: 'md' | 'lg'
  className?: string
  /** Where on the page this instance sits; travels to the bot as ?start=. */
  location: string
}

/** The glow scales with the button — at header size the full bloom read as a halo. */
const sizes = {
  md: 'h-11 px-5 text-[0.9375rem] gap-2 shadow-[0_5px_20px_-8px_rgba(255,255,255,0.35)]',
  lg: 'h-14 px-7 text-[1.0625rem] gap-2.5 shadow-[0_12px_44px_-14px_rgba(255,255,255,0.45)] sm:h-[3.75rem] sm:px-9 sm:text-[1.125rem]',
} as const

/**
 * The page has exactly one call to action and exactly one way to draw it.
 * Every instance is this component; nothing else on the page is a filled pill.
 */
export function CtaButton({ size = 'lg', className = '', location }: Props) {
  const reduced = useReducedMotion()

  return (
    <motion.a
      href={botUrl(location)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={location}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      whileTap={reduced ? undefined : { scale: 0.985 }}
      transition={SPRING_SNAP}
      className={`group relative inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-paper font-semibold tracking-[-0.01em] text-ink ${sizes[size]} ${className}`}
    >
      {/* Light sweep on hover. Transform-only, so it never triggers layout. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full motion-reduce:hidden"
      />
      <TelegramGlyph className="relative size-[1.15em] shrink-0" />
      <span className="relative">{CTA_LABEL}</span>
    </motion.a>
  )
}
