import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useParallax } from '../lib/useParallax'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function PageHero({ eyebrow, title, subtitle, bullets, ctaLabel, ctaTo = '/contact', size = 'default' }) {
  const blobA = useParallax(20)
  const blobB = useParallax(-28)

  return (
    <section
      onMouseMove={(e) => {
        blobA.onMouseMove(e)
        blobB.onMouseMove(e)
      }}
      className="relative overflow-hidden bg-white pb-24 pt-40 sm:pt-48"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <motion.div
        style={{ x: blobA.x, y: blobA.y }}
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{ x: blobB.x, y: blobB.y }}
        className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl animate-float-slower"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        {eyebrow && (
          <motion.span variants={item} className="mb-5 inline-block rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={item}
          className={`font-display font-bold tracking-tight text-slate-900 ${size === 'large' ? 'text-4xl sm:text-6xl' : 'text-4xl sm:text-5xl'}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            {subtitle}
          </motion.p>
        )}
        {bullets && bullets.length > 0 && (
          <motion.ul variants={item} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-slate-600 sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Check size={13} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>
        )}
        {ctaLabel && (
          <motion.div variants={item} className="mt-9">
            <Link
              to={ctaTo}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95"
            >
              {ctaLabel}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
