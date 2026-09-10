import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { LinkedinIcon, InstagramIcon, FacebookIcon } from './SocialIcons'
import { footerColumns, WHATSAPP_URL, LINKEDIN_URL, EMAIL_INFO, PHONE } from '../lib/nav'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center">
              <img src="/godatslogo.png" alt="Dolphin Technologies" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Complete solutions to launch and grow your business online.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-brand-400/50 hover:text-brand-500 hover:shadow-md hover:shadow-brand-500/10">
                <LinkedinIcon size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-brand-400/50 hover:text-brand-500 hover:shadow-md hover:shadow-brand-500/10">
                <InstagramIcon size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-brand-400/50 hover:text-brand-500 hover:shadow-md hover:shadow-brand-500/10">
                <FacebookIcon size={16} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:-translate-y-1 hover:border-brand-400/50 hover:text-brand-500 hover:shadow-md hover:shadow-brand-500/10">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-slate-900">{col.heading}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link to={link.to} className="text-sm text-slate-500 transition hover:text-brand-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>Dolphin Advanced Technology Services · {PHONE} · {EMAIL_INFO}</span>
        </div>
        <div className="mt-4 flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dolphin Advanced Technology Services. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-500">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-brand-500">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
