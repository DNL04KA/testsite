import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT, riseIn, stagger } from '../lib/motion'
import { CheckGlyph, GammaMark } from './icons'

/**
 * A quiet, abstracted view of what actually happens after the click.
 * Deliberately not a phone mockup or a fake screenshot — just enough of the
 * interface to answer "what will this be like?" before the user commits.
 */
export function ChatProof() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      variants={stagger(0.12, 0.55)}
      initial="hidden"
      animate="visible"
      className="relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-2xl border border-line bg-ink-raised/80 p-3 backdrop-blur-xl sm:p-3.5"
    >
      {/* Header */}
      <motion.div
        variants={riseIn}
        className="flex items-center gap-2.5 px-1 pb-3"
      >
        <GammaMark className="h-6 w-auto text-paper" />
        <div className="min-w-0 flex-1 text-left">
          <div className="truncate text-[0.8125rem] font-medium leading-tight">
            GaMMa VPN
          </div>
          <div className="flex items-center gap-1.5 text-[0.6875rem] leading-tight text-paper-faint">
            <span className="relative flex size-1.5">
              {!reduced && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-paper opacity-60" />
              )}
              <span className="relative inline-flex size-1.5 rounded-full bg-paper" />
            </span>
            в сети
          </div>
        </div>
      </motion.div>

      {/* Bot message */}
      <motion.div
        variants={riseIn}
        className="rounded-xl rounded-tl-sm border border-line bg-ink-hi px-3.5 py-3 text-left"
      >
        <p className="text-[0.875rem] leading-relaxed text-paper">
          Ключ готов. Вставьте его в приложение — подключение поднимется само.
        </p>
        <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-ink px-2.5 py-2">
          <code className="min-w-0 flex-1 truncate font-mono text-[0.6875rem] text-paper-dim">
            vless://a4f2…7e91@gamma
          </code>
          <span className="flex shrink-0 items-center gap-1 font-mono text-[0.625rem] uppercase tracking-wider text-paper">
            <CheckGlyph className="size-3" />
            копия
          </span>
        </div>
      </motion.div>

      {/* Status */}
      <motion.div
        variants={riseIn}
        className="mt-2 flex items-center justify-end gap-1.5 px-1"
      >
        <motion.span
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: EASE_OUT }}
          className="inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-paper"
        >
          <CheckGlyph className="size-3" />
          подключено
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
