import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Upload, Check } from 'lucide-react'
import Reveal from './Reveal'
import { postForm } from '../lib/api'
import { sanitizeInput, isValidEmail, checkRateLimit } from '../lib/security'

// The API's contact-inquiry endpoint has a fixed contract (name, email,
// businessName, service, message, +optional phone/country/companySize/industry)
// regardless of which page's form fields collected the data — map each
// source page onto a human-readable "service" label for the backend.
const SERVICE_LABELS = {
  'erp-consulting': 'ERP Consulting',
  'ai-consulting': 'AI Consulting',
  'careers': 'Careers Application',
  'partner-program': 'Partner Program',
  'general': 'General Inquiry',
}

function buildInitialValues(fields, prefill) {
  const initial = { website_url_hp: '' }
  for (const field of fields) initial[field.name] = field.type === 'checkbox' ? false : ''
  return { ...initial, ...prefill }
}

function validate(fields, values) {
  const errors = {}
  for (const field of fields) {
    const raw = values[field.name]
    if (field.type === 'checkbox') {
      if (field.required && !raw) errors[field.name] = `Please check "${field.label}" to continue.`
      continue
    }
    const clean = field.type === 'email' ? (raw || '').trim() : sanitizeInput(raw || '')
    if (field.required && !clean) {
      errors[field.name] = `${field.label} is required.`
      continue
    }
    if (field.type === 'email' && clean && !isValidEmail(clean)) {
      errors[field.name] = 'Please enter a valid email address.'
    }
  }
  return errors
}

/**
 * Generic lead-capture form. Renders text/email/tel/textarea/select/checkbox/file
 * fields from a schema and submits to the shared contact-inquiry API.
 *
 * Set `mockSubmit` for forms the backend can't accept yet (e.g. anything with a
 * file upload — the contact-inquiry endpoint is JSON-only, not multipart). Mock
 * submissions just log the payload to the console, matching the website-brief
 * wizard, instead of silently dropping the file against the wrong endpoint.
 */
export default function LeadForm({
  title, subtitle, fields, submitLabel = 'Submit', closing, source = 'general', mockSubmit = false, prefill, id,
}) {
  const [values, setValues] = useState(() => buildInitialValues(fields, prefill))
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const formLoadTime = useRef(null)
  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  function update(name, value) {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }))
    if (submitError) setSubmitError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Honeypot: bots that fill this hidden field are silently "succeeded"
    if (values.website_url_hp) {
      setStatus('success')
      return
    }

    // Automated scripts fill forms faster than any human can
    if (formLoadTime.current && Date.now() - formLoadTime.current < 1200) {
      setSubmitError('Please take your time filling out the form.')
      return
    }

    const rateCheck = checkRateLimit(`lead_form_submit_${source}`, 8000)
    if (!rateCheck.allowed) {
      setSubmitError(`Please wait ${rateCheck.remainingSeconds} seconds before submitting again.`)
      return
    }

    const nextErrors = validate(fields, values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        document.getElementById(`${source}-${Object.keys(nextErrors)[0]}`)?.focus()
      })
      return
    }

    setStatus('loading')
    setSubmitError('')

    if (mockSubmit) {
      // TODO(backend): this form collects a file upload (or other data the
      // JSON contact-inquiry endpoint can't take) — wire up a real multipart
      // submission once that API exists. For now we just log the payload.
      const payload = { source, ...values }
      delete payload.website_url_hp
      console.log('Form submission (mock, no backend yet):', payload)
      setTimeout(() => setStatus('success'), 600)
      return
    }

    const messageField = fields.find((f) => f.type === 'textarea')
    const companyField = fields.find((f) => f.name === 'company')
    const phoneField = fields.find((f) => f.type === 'tel')
    const selectField = fields.find((f) => f.type === 'select')

    let message = messageField ? sanitizeInput(values[messageField.name]) : ''
    if (selectField && values[selectField.name]) {
      message = `${selectField.label}: ${values[selectField.name]}\n\n${message}`.trim()
    }

    const payload = {
      source,
      name: sanitizeInput(values.name || ''),
      email: (values.email || '').trim(),
      businessName: companyField ? sanitizeInput(values[companyField.name]) : 'Not provided',
      service: SERVICE_LABELS[source] || 'General Inquiry',
      message,
    }
    if (phoneField && values[phoneField.name]) payload.phone = sanitizeInput(values[phoneField.name])

    try {
      await postForm('/contact-inquiry', payload)
      setStatus('success')
    } catch (error) {
      setErrors(error.fieldErrors || {})
      setSubmitError(error.message || 'Unable to submit your request. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <section id={id} className="relative overflow-hidden bg-slate-50 py-24 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-slate-500">{subtitle}</p>}
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-10 text-center"
            >
              <CheckCircle2 size={44} className="text-brand-500" />
              <p className="text-lg font-semibold text-slate-900">Thanks — we got it.</p>
              <p className="text-sm text-slate-500">Our team will reach out shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {submitError && (
                <div role="alert" className="flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700 sm:col-span-2">
                  <AlertCircle size={17} className="shrink-0" />
                  {submitError}
                </div>
              )}

              {/* Honeypot — hidden from real visitors, catches bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor={`${source}-website_url_hp`}>Leave this field empty</label>
                <input
                  type="text"
                  id={`${source}-website_url_hp`}
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website_url_hp}
                  onChange={(e) => update('website_url_hp', e.target.value)}
                />
              </div>

              {fields.map((field) => {
                const fieldId = `${source}-${field.name}`
                const hasError = Boolean(errors[field.name])
                const fieldClass = `w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white ${
                  hasError ? 'border-rose-400 bg-rose-50 focus:border-rose-400' : 'border-slate-200 bg-slate-100 focus:border-brand-400/50'
                }`

                if (field.type === 'checkbox') {
                  return (
                    <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                      <button
                        type="button"
                        id={fieldId}
                        onClick={() => update(field.name, !values[field.name])}
                        className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition ${
                          hasError ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white hover:border-brand-400/40'
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-2 ${
                            values[field.name] ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
                          }`}
                        >
                          {values[field.name] && <Check size={10} className="text-white" />}
                        </span>
                        <span className="text-slate-600">{field.label}</span>
                      </button>
                      {hasError && <p className="mt-1 text-xs font-medium text-rose-600">{errors[field.name]}</p>}
                    </div>
                  )
                }

                if (field.type === 'file') {
                  return (
                    <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                        {field.label}
                        {field.required && <span className="text-brand-500"> *</span>}
                      </label>
                      <label
                        htmlFor={fieldId}
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 text-sm transition hover:border-brand-400/50 hover:text-brand-600 ${
                          hasError ? 'border-rose-300 text-rose-500' : 'border-slate-200 text-slate-500'
                        }`}
                      >
                        <Upload size={16} />
                        {values[field.name] || `Click to choose a file${field.accept ? ` (${field.accept})` : ''}`}
                        <input
                          id={fieldId}
                          type="file"
                          accept={field.accept}
                          className="hidden"
                          onChange={(e) => update(field.name, e.target.files?.[0]?.name || '')}
                        />
                      </label>
                      {hasError && <p className="mt-1 text-xs font-medium text-rose-600">{errors[field.name]}</p>}
                    </div>
                  )
                }

                return (
                  <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                    <label htmlFor={fieldId} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                      {field.label}
                      {field.required && <span className="text-brand-500"> *</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={fieldId}
                        rows={4}
                        value={values[field.name]}
                        onChange={(e) => update(field.name, e.target.value)}
                        aria-invalid={hasError}
                        className={fieldClass}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={fieldId}
                        value={values[field.name]}
                        onChange={(e) => update(field.name, e.target.value)}
                        aria-invalid={hasError}
                        className={fieldClass}
                      >
                        <option value="" disabled>Select an option</option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={fieldId}
                        type={field.type || 'text'}
                        value={values[field.name]}
                        onChange={(e) => update(field.name, e.target.value)}
                        aria-invalid={hasError}
                        className={fieldClass}
                      />
                    )}
                    {hasError && <p className="mt-1 text-xs font-medium text-rose-600">{errors[field.name]}</p>}
                  </div>
                )
              })}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95 disabled:opacity-70"
                >
                  {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                  {status === 'loading' ? 'Sending…' : submitLabel}
                </button>
              </div>
            </form>
          )}
        </Reveal>

        {closing && (
          <Reveal delay={0.15} className="mt-8 text-center text-sm text-slate-400">
            {closing}
          </Reveal>
        )}
      </div>
    </section>
  )
}
