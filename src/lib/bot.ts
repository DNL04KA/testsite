import { BOT_URL } from './content'

/**
 * Attribution without an analytics vendor.
 *
 * Telegram passes `?start=<payload>` straight through to the bot's /start
 * handler, so the bot itself records which CTA the visitor came from. That
 * beats client-side click tracking on three counts: ad blockers cannot strip a
 * plain link, it survives a host move, and it counts bot starts — the thing
 * that actually matters — rather than clicks that may never land.
 *
 * Telegram restricts the payload to [A-Za-z0-9_-], max 64 characters.
 */
const UNSAFE = /[^A-Za-z0-9_-]/g
const MAX_PAYLOAD = 64
const MAX_SOURCE = 24

let cachedSource: string | null = null

/** Ad source from the landing URL, so paid traffic is attributable end to end. */
function adSource(): string {
  if (cachedSource !== null) return cachedSource
  if (typeof window === 'undefined') {
    cachedSource = ''
    return cachedSource
  }
  const q = new URLSearchParams(window.location.search)
  const raw = q.get('utm_source') ?? q.get('s') ?? q.get('ref') ?? ''
  cachedSource = raw.replace(UNSAFE, '').slice(0, MAX_SOURCE)
  return cachedSource
}

/** Bot link tagged with the place on the page the visitor clicked from. */
export function botUrl(place: string): string {
  const spot = place.replace(UNSAFE, '')
  const src = adSource()
  const payload = (src ? `${spot}-${src}` : spot).slice(0, MAX_PAYLOAD)
  return `${BOT_URL}?start=${payload}`
}
