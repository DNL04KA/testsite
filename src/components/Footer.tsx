import { BOT_HANDLE, SUPPORT_HANDLE, SUPPORT_URL } from '../lib/content'
import { botUrl } from '../lib/bot'
import { Container } from './Section'
import { ArrowUpRight, GammaMark } from './icons'

const LINKS = [
  { href: botUrl('footer'), label: BOT_HANDLE },
  { href: SUPPORT_URL, label: SUPPORT_HANDLE },
]

export function Footer() {
  return (
    <footer className="relative border-t border-line py-12 pb-24 sm:pb-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <GammaMark className="h-7 w-auto text-paper-faint" />
            <span className="text-[0.9375rem] font-semibold tracking-[-0.02em]">
              GaMMa<span className="text-paper-dim"> VPN</span>
            </span>
          </div>

          {/* Negative margin + padding: 44px tap targets, unchanged rhythm. */}
          <div className="-my-2.5 flex flex-col sm:flex-row sm:gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 self-start py-3 text-[0.875rem] text-paper-dim transition-colors duration-200 hover:text-paper sm:px-1"
              >
                {link.label}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-xl text-[0.8125rem] leading-relaxed text-paper-faint">
          Сервис предназначен для защиты личного трафика и доступа к легальным
          ресурсам. © {new Date().getFullYear()} GaMMa VPN.
        </p>
      </Container>
    </footer>
  )
}
