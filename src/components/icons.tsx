/**
 * Hand-drawn icon set — one family, 1.6px strokes, round caps, 24px grid.
 * Kept inline rather than pulling an icon package: five glyphs do not justify
 * a dependency, and this guarantees stroke consistency.
 */

type IconProps = {
  className?: string
}

export function TelegramGlyph({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.3 4.3 2.9 11.4c-.9.35-.9.9-.15 1.13l4.7 1.47 1.8 5.5c.22.6.4.83.83.83.42 0 .6-.19.83-.42l2.24-2.17 4.65 3.44c.86.47 1.47.23 1.68-.8l3.04-14.3c.3-1.26-.5-1.83-1.32-1.47Zm-3.5 3.4-8.6 7.86-.34 3.6-1.72-5.24 10.15-6.4c.46-.29.88-.13.51.18Z" />
    </svg>
  )
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function CheckGlyph({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  )
}

export function ChevronDown({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m5 9 7 7 7-7" />
    </svg>
  )
}

/** Outline of the brand mark, traced from the official Telegram avatar. */
const MARK_PATH =
  'M69.92 27.58L70.44 27.28L70.73 28.35L70.72 60.81L70.21 64.63L69.10 67.30L67.13 69.98L64.71 72.05L35.69 91.43L33.20 94.04L32.22 95.57L30.34 99.24L29.96 99.80L29.58 100.00L29.27 98.62L29.38 86.78L30.09 83.73L31.70 80.67L33.39 78.74L35.30 77.16L53.64 64.83L55.95 62.34L57.62 59.28L58.24 56.99L58.44 54.70L58.39 51.26L58.22 50.89L57.84 50.81L53.26 53.76L50.96 55.64L49.05 57.99L47.53 61.11L47.14 61.68L47.03 61.58L46.75 60.43L46.85 51.64L47.36 49.35L48.29 47.20L50.04 44.77L52.11 42.82L63.19 35.41L65.46 33.69L67.53 31.40ZM70.30 0.08L70.44 0.00L70.65 0.47L70.73 1.23L70.73 11.54L70.59 13.45L70.22 15.36L69.68 16.89L68.91 18.41L67.84 19.94L66.24 21.62L63.95 23.39L38.74 40.07L35.95 42.10L34.11 44.01L32.85 45.92L30.34 52.25L29.96 53.03L29.58 53.33L29.28 51.64L29.34 37.90L29.65 35.99L30.26 34.08L30.99 32.55L32.01 31.02L33.82 29.11L35.69 27.65L64.33 8.56L65.68 7.34L67.00 5.72L69.68 0.77Z'

/**
 * The GaMMa mark — the real brand glyph, vectorised from the official avatar
 * (sub-pixel contour trace, then simplified). Inherits `currentColor`, so it
 * works in both brand polarities without a second asset.
 *
 * The viewBox is cropped to the glyph's own bounds, so sizing by height keeps
 * it optically balanced next to type.
 */
export function GammaMark({ className }: IconProps) {
  return (
    <svg
      viewBox="29 0 41.8 100"
      fill="currentColor"
      fillRule="evenodd"
      aria-hidden="true"
      className={className}
    >
      <path d={MARK_PATH} />
    </svg>
  )
}
