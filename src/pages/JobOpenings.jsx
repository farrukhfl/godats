import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight, SearchX } from 'lucide-react'
import PageHero from '../components/PageHero'
import { jobs } from '../lib/jobs'

const categories = ['All', ...new Set(jobs.map((j) => j.category))]
const types = ['All', 'Full Time', 'Part Time']
const locations = ['All', 'Chicago', 'Remote', 'On-site']

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              value === opt
                ? 'border-brand-500 bg-brand-500 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:border-brand-400/40'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function JobOpenings() {
  const [category, setCategory] = useState('All')
  const [type, setType] = useState('All')
  const [location, setLocation] = useState('All')

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      if (category !== 'All' && job.category !== category) return false
      if (type !== 'All' && !job.type.includes(type)) return false
      if (location !== 'All' && !job.location.includes(location)) return false
      return true
    })
  }, [category, type, location])

  return (
    <div>
      <PageHero eyebrow="Careers" title="Job Openings" subtitle="Find your next role at GoDats — filter by category, type, or location." />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <FilterGroup label="Job Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup label="Job Type" options={types} value={type} onChange={setType} />
          <FilterGroup label="Job Location" options={locations} value={location} onChange={setLocation} />
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 py-16 text-center"
            >
              <SearchX size={32} className="text-slate-300" />
              <p className="text-slate-500">No open roles match those filters right now.</p>
            </motion.div>
          ) : (
            <motion.div
              key={`${category}-${type}-${location}`}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {filtered.map((job) => (
                <motion.div
                  key={job.slug}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link
                    to={`/jobs/${job.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5"
                  >
                    <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                      <Briefcase size={12} /> {job.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Clock size={13} /> {job.type.join(' / ')}</span>
                      <span className="flex items-center gap-1"><MapPin size={13} /> {job.location.join(' / ')}</span>
                    </div>
                    <span className="mt-5 flex items-center gap-1 text-sm font-medium text-brand-500">
                      View Details
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
