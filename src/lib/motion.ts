import type { Transition, Variants } from 'motion/react'

/**
 * One rhythm for the whole page. Every animation borrows from these tokens so
 * the site feels like a single object rather than a stack of separate widgets.
 *
 * EASE_OUT is a strong decelerating curve — content arrives fast and settles
 * softly, which is what reads as "expensive" rather than "bouncy".
 */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const
export const EASE_IN = [0.4, 0, 1, 1] as const

export const SPRING_SOFT: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 32,
  mass: 0.9,
}

export const SPRING_SNAP: Transition = {
  type: 'spring',
  stiffness: 480,
  damping: 40,
  mass: 0.6,
}

/** Viewport trigger shared by every scroll reveal: fires once, slightly early. */
export const VIEWPORT = { once: true, amount: 0.25, margin: '0px 0px -12% 0px' }

/** Parent that releases its children in sequence. */
export const stagger = (each = 0.07, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: each, delayChildren: delay },
  },
})

/** The single reveal used site-wide: a short rise out of transparency. */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: EASE_OUT } },
}
