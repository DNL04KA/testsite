import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { KeyboardEvent, ReactNode, RefObject } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { EASE_IN, EASE_OUT, SPRING_SNAP } from '../lib/motion'
import { ChevronDown } from './icons'

/**
 * Accordion behaviour adapted from "Accordion" by @ddoemonn on 21st.dev
 * (https://21st.dev/@ddoemonn/components/accordion), retrieved via the 21st MCP.
 *
 * Kept from the original: the roving-focus keyboard model (Arrow/Home/End), the
 * aria wiring, `inert` on collapsed panels, and ResizeObserver-measured height —
 * all of it correct and worth more than rewriting from scratch.
 *
 * Changed: the visual layer is entirely ours, and the panel's inner scroll
 * (`maxPanelHeight` + `overflow-y: auto`) was removed. A nested scroll region
 * inside a landing-page FAQ traps mobile scrolling and hides answers.
 */

const NONE: readonly string[] = []

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

type Inertable = HTMLElement & { inert?: boolean }

function useAutoHeight(): {
  ref: RefObject<HTMLDivElement | null>
  height: number
} {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const read = () => {
      const next = el.getBoundingClientRect().height
      setHeight((prev) => (Math.abs(prev - next) < 0.5 ? prev : next))
    }

    read()

    // Keeps the open panel correct when the viewport reflows the answer text.
    const observer = new ResizeObserver(read)
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return { ref, height }
}

export type AccordionItem = {
  id: string
  title: ReactNode
  content: ReactNode
}

type HeaderProps = {
  id: string
  ref: (node: HTMLButtonElement | null) => void
  type: 'button'
  onClick: () => void
  onKeyDown: (event: KeyboardEvent) => void
  'aria-expanded': boolean
  'aria-controls': string
}

type PanelProps = {
  id: string
  role: 'region'
  'aria-labelledby': string
  'aria-hidden': true | undefined
}

function useAccordion(items: readonly { id: string }[], defaultOpen: readonly string[]) {
  const base = useId()
  const [open, setOpen] = useState<string[]>(() => defaultOpen.slice(0, 1))

  const headers = useRef(new Map<string, HTMLButtonElement>())
  const binders = useRef(new Map<string, HeaderProps['ref']>())

  const headerRef = useCallback((id: string): HeaderProps['ref'] => {
    const cached = binders.current.get(id)
    if (cached) return cached
    const bind = (node: HTMLButtonElement | null) => {
      if (node) headers.current.set(id, node)
      else headers.current.delete(id)
    }
    binders.current.set(id, bind)
    return bind
  }, [])

  const isOpen = useCallback((id: string) => open.includes(id), [open])

  const toggle = useCallback((id: string) => {
    setOpen((prev) => (prev.includes(id) ? [] : [id]))
  }, [])

  const order = useMemo(() => items.map((item) => item.id), [items])

  const move = useCallback(
    (id: string, delta: number, edge: 'first' | 'last' | null) => {
      if (order.length === 0) return
      const at = order.indexOf(id)
      if (at < 0) return
      const next =
        edge === 'first'
          ? 0
          : edge === 'last'
            ? order.length - 1
            : (at + delta + order.length) % order.length
      headers.current.get(order[next])?.focus()
    },
    [order],
  )

  const headerProps = useCallback(
    (id: string): HeaderProps => ({
      id: `${base}-header-${id}`,
      ref: headerRef(id),
      type: 'button',
      onClick: () => toggle(id),
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          event.preventDefault()
          move(id, 1, null)
        } else if (event.key === 'ArrowUp') {
          event.preventDefault()
          move(id, -1, null)
        } else if (event.key === 'Home') {
          event.preventDefault()
          move(id, 0, 'first')
        } else if (event.key === 'End') {
          event.preventDefault()
          move(id, 0, 'last')
        }
      },
      'aria-expanded': open.includes(id),
      'aria-controls': `${base}-panel-${id}`,
    }),
    [base, open, toggle, move, headerRef],
  )

  const panelProps = useCallback(
    (id: string): PanelProps => ({
      id: `${base}-panel-${id}`,
      role: 'region',
      'aria-labelledby': `${base}-header-${id}`,
      'aria-hidden': open.includes(id) ? undefined : true,
    }),
    [base, open],
  )

  return { isOpen, headerProps, panelProps }
}

export function Accordion({
  items,
  defaultOpen = NONE,
}: {
  items: readonly AccordionItem[]
  defaultOpen?: readonly string[]
}) {
  const entries = useMemo(() => items.map(({ id }) => ({ id })), [items])
  const { isOpen, headerProps, panelProps } = useAccordion(entries, defaultOpen)

  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <Row
          key={item.id}
          item={item}
          open={isOpen(item.id)}
          header={headerProps(item.id)}
          panel={panelProps(item.id)}
        />
      ))}
    </div>
  )
}

function Row({
  item,
  open,
  header,
  panel,
}: {
  item: AccordionItem
  open: boolean
  header: HeaderProps
  panel: PanelProps
}) {
  const reduced = useReducedMotion()
  const { ref, height } = useAutoHeight()

  useEffect(() => {
    const el = ref.current as Inertable | null
    if (!el) return
    el.inert = !open
    return () => {
      el.inert = false
    }
  }, [ref, open])

  return (
    <div className="border-b border-line">
      <h3>
        <button
          {...header}
          className="group flex w-full cursor-pointer items-center gap-5 py-5 text-left outline-none sm:py-6"
        >
          <span
            className={`flex-1 text-[1.0625rem] font-medium leading-snug transition-colors duration-200 sm:text-[1.1875rem] ${
              open ? 'text-paper' : 'text-paper-dim group-hover:text-paper'
            }`}
          >
            {item.title}
          </span>

          <motion.span
            aria-hidden="true"
            initial={false}
            animate={{ rotate: open ? 180 : 0 }}
            transition={reduced ? { duration: 0 } : SPRING_SNAP}
            className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
              open
                ? 'border-paper/30 bg-paper/10 text-paper'
                : 'border-line text-paper-faint group-hover:border-line-strong group-hover:text-paper-dim'
            }`}
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </button>
      </h3>

      {/* Height is driven by a single measured value at all times. The original
          handed off from an unmeasured `auto` to a measured number, which left
          collapsed panels at their natural height when the handoff didn't
          register — one source of truth avoids the whole class of bug. */}
      <motion.div
        initial={false}
        animate={{ height: open ? height : 0 }}
        transition={reduced ? { duration: 0 } : SPRING_SNAP}
        style={{ overflow: 'hidden' }}
      >
        <div {...panel} ref={ref}>
          <motion.p
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : open
                  ? { duration: 0.28, ease: EASE_OUT }
                  : { duration: 0.16, ease: EASE_IN }
            }
            className="max-w-2xl pb-6 pr-12 text-[0.9375rem] leading-relaxed text-paper-dim sm:pb-8 sm:text-[1rem]"
          >
            {item.content}
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
