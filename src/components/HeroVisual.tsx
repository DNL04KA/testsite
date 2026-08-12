import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import type { RefObject } from 'react'

const RINGS = [
  { r: 148, o: 0.1 },
  { r: 224, o: 0.085 },
  { r: 302, o: 0.07 },
  { r: 382, o: 0.055 },
  { r: 462, o: 0.04 },
]

/** Points sitting on the ring geometry — a hint of a network, never a diagram. */
const NODES = [
  { cx: 500 + 224 * Math.cos(-0.75), cy: 500 + 224 * Math.sin(-0.75), d: 0 },
  { cx: 500 + 302 * Math.cos(2.35), cy: 500 + 302 * Math.sin(2.35), d: 1.1 },
  { cx: 500 + 382 * Math.cos(0.95), cy: 500 + 382 * Math.sin(0.95), d: 2.2 },
]

/**
 * The hero's visual weight: an "aperture" of concentric hairlines with a slow
 * white sweep passing through them.
 *
 * Chosen over the obvious options on purpose — a gradient mesh, a dotted grid or
 * a mouse-follow glow would have read as a stock AI landing page immediately.
 * Everything here is CSS and one inline SVG: no images, no shader library.
 */
export function HeroVisual({ scrollRef }: { scrollRef: RefObject<HTMLElement | null> }) {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  })

  // Depth: the composition drifts slower than the copy in front of it.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={reduced ? undefined : { y, opacity: fade }}
        className="absolute left-1/2 top-[54%] aspect-square w-[150vw] max-w-[980px] -translate-x-1/2 -translate-y-1/2 sm:w-[135vw]"
      >
        {/* Bloom — the only light source on the page. Static, so this blur is
            rasterized once rather than every frame. */}
        <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.13),rgba(255,255,255,0.04)_45%,transparent_68%)] blur-3xl" />

        {/* Sweep — a broad luminous arc drifting around the rings.
            Both ends of the conic gradient resolve to transparent so the
            0°/360° seam is invisible; a narrow bright wedge read as a torch
            beam and cheapened the whole composition.

            The mask lives on this static wrapper, not on the rotating layer:
            `filter: blur()` + `mask-image` + a continuous `transform` on one
            element is a combination mobile GPU compositors handle badly —
            it was forcing a re-rasterize most frames instead of just
            spinning a cached texture, which read as page-wide jank on
            mid-tier phones, not just a slow-loading hero. Splitting the
            static mask from the rotating, blurred content lets the browser
            composite the rotation cheaply. */}
        {!reduced && (
          <div className="absolute inset-0 overflow-hidden rounded-full [mask-image:radial-gradient(circle,transparent_16%,black_44%,black_58%,transparent_86%)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 44, ease: 'linear', repeat: Infinity }}
              className="absolute inset-0"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.03) 55deg, rgba(255,255,255,0.09) 140deg, rgba(255,255,255,0.11) 190deg, rgba(255,255,255,0.04) 275deg, transparent 355deg)',
                filter: 'blur(14px)',
                willChange: 'transform',
              }}
            />
          </div>
        )}

        {/* Hairline rings. */}
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 h-full w-full">
          {RINGS.map((ring) => (
            <circle
              key={ring.r}
              cx="500"
              cy="500"
              r={ring.r}
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity={ring.o}
              strokeWidth="1"
            />
          ))}

          {NODES.map((node) => (
            <motion.circle
              key={`${node.cx}-${node.cy}`}
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="#FFFFFF"
              initial={{ opacity: 0.15 }}
              animate={reduced ? { opacity: 0.4 } : { opacity: [0.15, 0.9, 0.15] }}
              transition={
                reduced
                  ? undefined
                  : {
                      duration: 4.5,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: node.d,
                    }
              }
            />
          ))}
        </svg>
      </motion.div>

      {/* Vignette — pulls the eye back to the headline and keeps contrast honest. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_20%,rgba(0,0,0,0.55)_70%,var(--color-ink)_100%)]" />
      {/* Hard fade into the next section so the hero ends deliberately. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
    </div>
  )
}
