import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'
import { headerNav, PHONE, PHONE_TEL, DERPS_LOGIN_URL } from '../lib/nav'

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false)
  const hasGroup = Boolean(item.groupItems)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-1 py-2 text-sm font-medium text-slate-700 transition hover:text-brand-500">
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 ${hasGroup ? 'w-[560px]' : 'w-72'}`}
          >
            <div className={`grid gap-1 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-300/50 backdrop-blur-xl ${hasGroup ? 'grid-cols-2' : 'grid-cols-1'}`}>
              <div className="col-span-1 flex flex-col gap-1">
                {item.items.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="group rounded-xl px-3 py-2.5 transition hover:bg-slate-100 hover:translate-x-0.5"
                  >
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-500">{link.label}</div>
                    <div className="text-xs text-slate-500">{link.desc}</div>
                  </Link>
                ))}
              </div>
              {hasGroup && (
                <div className="col-span-1 flex flex-col gap-1 border-l border-slate-200 pl-4">
                  <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.groupLabel}
                  </div>
                  {item.groupItems.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="group rounded-xl px-3 py-2.5 transition hover:bg-slate-100 hover:translate-x-0.5"
                    >
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-500">{link.label}</div>
                      <div className="text-xs text-slate-500">{link.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const mobileListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
const mobileItemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

function MobileAccordionItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div variants={mobileItemVariants} className="border-b border-slate-200 py-2">
      <button
        className="flex w-full items-center justify-between py-2 text-left text-base font-medium text-slate-900"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-2 pl-2">
              {item.items.map((link) => (
                <Link key={link.label} to={link.to} onClick={onNavigate} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-brand-500">
                  {link.label}
                </Link>
              ))}
              {item.groupItems?.map((link) => (
                <Link key={link.label} to={link.to} onClick={onNavigate} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-brand-500">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-slate-100 bg-brand-600 text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <a href={PHONE_TEL} className="flex items-center gap-1.5 hover:text-brand-100">
            <Phone size={12} /> {PHONE}
          </a>
          <span className="text-white/80">Creating Digital Solutions Since 2010</span>
        </div>
      </div>

      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
          borderColor: scrolled ? 'rgba(15,23,42,0.08)' : 'rgba(15,23,42,0)',
        }}
        transition={{ duration: 0.25 }}
        className="border-b backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            <motion.img
              src="/godatslogo.png"
              alt="Dolphin Technologies"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {headerNav.map((item) =>
              item.items ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition hover:text-brand-500 ${isActive ? 'text-brand-500' : 'text-slate-700'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={DERPS_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-brand-500"
            >
              Sign in <ArrowUpRight size={14} />
            </a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <button
            className="relative flex h-8 w-8 items-center justify-center text-slate-900 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              variants={mobileListVariants}
              initial="hidden"
              animate="show"
              className="max-h-[75vh] overflow-y-auto px-6 py-4"
            >
              {headerNav.map((item) =>
                item.items ? (
                  <MobileAccordionItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
                ) : (
                  <motion.div key={item.label} variants={mobileItemVariants}>
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-slate-200 py-3 text-base font-medium text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div variants={mobileItemVariants} className="mt-4 flex flex-col gap-3">
                <a href={DERPS_LOGIN_URL} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-center gap-1 rounded-full border border-slate-300 py-2.5 text-sm font-medium text-slate-700">
                  Sign in <ArrowUpRight size={14} />
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 py-2.5 text-center text-sm font-semibold text-white active:scale-95"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
