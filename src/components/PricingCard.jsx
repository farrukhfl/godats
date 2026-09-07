import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Crown } from 'lucide-react'
import { StaggerItem } from './Reveal'

export default function PricingCard({
  name,
  tagline,
  badge,
  icon,
  price,
  period = '/mo',
  was,
  priceNote,
  specs,
  featureGroups,
  popular = false,
  ctaLabel = 'Get Started',
  ctaTo = '/contact',
}) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: popular ? -10 : -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className={`relative flex h-full flex-col rounded-3xl p-7 ${
          popular
            ? 'border-2 border-brand-500 bg-white shadow-2xl shadow-brand-500/15 sm:scale-105'
            : 'border border-slate-200 bg-white shadow-sm'
        }`}
      >
        {popular && (
          <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-brand-500/30">
            <Crown size={13} /> Most Popular
          </span>
        )}

        <div className="text-center">
          {icon && (
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
              <img src={icon} alt="" className="h-6 w-6" />
            </span>
          )}
          {badge && (
            <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
              {badge}
            </span>
          )}
          <h3 className="font-display text-xl font-bold text-slate-900">{name}</h3>
          {tagline && <p className="mt-1.5 text-sm text-slate-500">{tagline}</p>}
        </div>

        <div className="mt-6 text-center">
          {was && <div className="text-sm text-slate-400 line-through">{was}</div>}
          <div className="flex items-end justify-center gap-1">
            <span className="font-display text-4xl font-bold text-slate-900">{price}</span>
            {period && <span className="pb-1 text-sm text-slate-500">{period}</span>}
          </div>
          {priceNote && <p className="mt-1 text-xs text-slate-400">{priceNote}</p>}
        </div>

        <Link
          to={ctaTo}
          className={`mt-7 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
            popular
              ? 'bg-gradient-to-r from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/20 hover:brightness-110'
              : 'border border-slate-200 text-slate-900 hover:border-brand-400/50 hover:text-brand-600'
          }`}
        >
          {ctaLabel}
        </Link>

        {specs && specs.length > 0 && (
          <div className="mt-7 flex flex-col gap-2.5 border-t border-slate-100 pt-6">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{s.label}</span>
                <span className="font-medium text-slate-900">{s.value}</span>
              </div>
            ))}
          </div>
        )}

        {featureGroups && featureGroups.length > 0 && (
          <div className="mt-7 flex flex-col gap-6 border-t border-slate-100 pt-6">
            {featureGroups.map((group) => (
              <div key={group.heading}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {group.heading}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </StaggerItem>
  )
}
