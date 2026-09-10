import { motion } from 'framer-motion'
import { Check, Upload } from 'lucide-react'
import { maxLengthFor } from '../../lib/security'

export function WizardProgress({ step, totalSteps }) {
  const percent = Math.round((step / totalSteps) * 100)
  return (
    <div className="mb-10">
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
        <span>Step {step} of {totalSteps}</span>
        <span>{percent}% Complete</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function FieldShell({ label, helper, required, children }) {
  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-slate-900">
          {label}
          {required && <span className="text-brand-500"> *</span>}
        </label>
      )}
      {helper && <p className="mb-2 text-xs text-slate-400">{helper}</p>}
      {children}
    </div>
  )
}

export function TextField({ label, helper, required, value, onChange, placeholder, type = 'text' }) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <input
        type={type}
        maxLength={maxLengthFor(type)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400/50 focus:bg-white"
      />
    </FieldShell>
  )
}

export function TextAreaField({ label, helper, required, value, onChange, placeholder, rows = 4 }) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <textarea
        rows={rows}
        maxLength={maxLengthFor('textarea')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400/50 focus:bg-white"
      />
    </FieldShell>
  )
}

export function SelectField({ label, helper, required, value, onChange, options, placeholder = 'Select an option' }) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400/50 focus:bg-white"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </FieldShell>
  )
}

export function RadioCards({ label, helper, required, value, onChange, options, columns = 1 }) {
  return (
    <FieldShell label={label} helper={helper} required={required}>
      <div className={`grid gap-2.5 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
        {options.map((opt) => {
          const active = value === opt
          return (
            <button
              type="button"
              key={opt}
              onClick={() => onChange(opt)}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                active
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-brand-400/40'
              }`}
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                  active ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
                }`}
              >
                {active && <Check size={10} className="text-white" />}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
    </FieldShell>
  )
}

export function CheckboxGrid({ label, helper, value, onChange, options }) {
  function toggle(opt) {
    if (value.includes(opt)) onChange(value.filter((v) => v !== opt))
    else onChange([...value, opt])
  }
  return (
    <FieldShell label={label} helper={helper}>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {options.map((opt) => {
          const active = value.includes(opt)
          return (
            <button
              type="button"
              key={opt}
              onClick={() => toggle(opt)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition sm:text-sm ${
                active
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-brand-400/40'
              }`}
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-2 ${
                  active ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
                }`}
              >
                {active && <Check size={10} className="text-white" />}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
    </FieldShell>
  )
}

export function FileChoice({ label, helper, options, value, onChange, fileValue, onFileChange, uploadValue }) {
  const showUpload = value === uploadValue
  return (
    <FieldShell label={label} helper={helper}>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          const active = value === opt
          return (
            <button
              type="button"
              key={opt}
              onClick={() => onChange(opt)}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                active
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-brand-400/40'
              }`}
            >
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                  active ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
                }`}
              >
                {active && <Check size={10} className="text-white" />}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
      {showUpload && (
        <label className="mt-3 flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 px-4 py-6 text-sm text-slate-500 transition hover:border-brand-400/50 hover:text-brand-600">
          <Upload size={16} />
          {fileValue ? fileValue.name : 'Click to choose a file'}
          <input
            type="file"
            className="hidden"
            onChange={(e) => onFileChange(e.target.files?.[0] || null)}
          />
        </label>
      )}
    </FieldShell>
  )
}

const paletteSwatches = {
  'Minimal Luxe': 'from-slate-100 via-slate-300 to-slate-500',
  'Lively & Inviting': 'from-orange-300 via-pink-400 to-rose-500',
  'Earthy & Serene': 'from-lime-200 via-emerald-300 to-teal-500',
  'Sleek & Futuristic': 'from-slate-700 via-slate-900 to-brand-500',
  'Texture & Contrast': 'from-stone-300 via-stone-500 to-stone-700',
  'Glamorous & Audacious': 'from-fuchsia-400 via-purple-500 to-indigo-600',
}

export function SwatchPicker({ label, helper, value, onChange, options }) {
  return (
    <FieldShell label={label} helper={helper}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {options.map((opt) => {
          const active = value === opt
          return (
            <button
              type="button"
              key={opt}
              onClick={() => onChange(opt)}
              className={`cursor-pointer overflow-hidden rounded-xl border-2 text-left transition ${
                active ? 'border-brand-500' : 'border-slate-200 hover:border-brand-400/40'
              }`}
            >
              <div className={`h-14 w-full bg-gradient-to-br ${paletteSwatches[opt]}`} />
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="text-xs font-medium text-slate-700">{opt}</span>
                {active && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-500">
                    <Check size={10} className="text-white" />
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </FieldShell>
  )
}

const fontPreviews = [
  { name: 'Sans Modern', style: { fontFamily: 'Inter, ui-sans-serif, sans-serif' } },
  { name: 'Elegant Display', style: { fontFamily: 'Sora, ui-sans-serif, sans-serif', fontWeight: 700 } },
  { name: 'Serif Classic', style: { fontFamily: 'Georgia, "Times New Roman", serif' } },
  { name: 'Friendly Rounded', style: { fontFamily: 'ui-rounded, "SF Pro Rounded", Inter, ui-sans-serif, sans-serif' } },
  { name: 'Bold Condensed', style: { fontFamily: 'Sora, ui-sans-serif, sans-serif', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' } },
]

export function FontPicker({ label, helper, value, onChange }) {
  return (
    <FieldShell label={label} helper={helper}>
      <div className="flex flex-col gap-2.5">
        {fontPreviews.map((f) => {
          const active = value === f.name
          return (
            <button
              type="button"
              key={f.name}
              onClick={() => onChange(f.name)}
              className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left transition ${
                active ? 'border-brand-500 bg-brand-50' : 'border-slate-200 bg-white hover:border-brand-400/40'
              }`}
            >
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{f.name}</div>
                <div className="mt-1 text-base text-slate-900" style={f.style}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                  active ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
                }`}
              >
                {active && <Check size={10} className="text-white" />}
              </span>
            </button>
          )
        })}
      </div>
    </FieldShell>
  )
}

export function CheckboxLine({ checked, onChange, children }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left text-sm text-slate-600 transition hover:border-brand-400/40"
    >
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-2 ${
          checked ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
        }`}
      >
        {checked && <Check size={10} className="text-white" />}
      </span>
      {children}
    </button>
  )
}
