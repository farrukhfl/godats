import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal delay={index * 0.05} className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 rounded-xl px-3 py-5 -mx-3 text-left transition hover:bg-slate-50"
      >
        <span className="text-base font-semibold text-slate-900 transition group-hover:text-brand-600 sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-500 transition group-hover:bg-brand-500 group-hover:text-white"
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm leading-relaxed text-slate-500">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default function FAQAccordion({ items, title = 'Frequently Asked Questions' }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      {title && (
        <Reveal>
          <h2 className="mb-10 text-center font-display text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
        </Reveal>
      )}
      <div>
        {items.map((it, i) => (
          <FAQItem key={i} q={it.q} a={it.a} index={i} />
        ))}
      </div>
    </section>
  )
}
