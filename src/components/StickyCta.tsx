import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { EASE_OUT } from '../lib/motion'
import { CtaButton } from './CtaButton'

/**
 * Mobile-only. Below 640px the header CTA is hidden to keep the bar uncluttered,
 * so this takes over as the persistent path to the bot once the hero scrolls by.
 * On desktop the header CTA is always visible and this would be redundant noise.
 */
export function StickyCta() {
  const { scrollY } = useScroll()
  const [shown, setShown] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setShown(v > window.innerHeight * 0.85)
  })

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/85 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:hidden"
        >
          <CtaButton size="md" location="sticky-mobile" className="w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
