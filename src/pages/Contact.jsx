import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe, Server, Smartphone, TrendingUp, PenTool, Palette, Layers, BrainCircuit,
  Mail, Phone, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import { ADDRESS, PHONE, PHONE_TEL, EMAIL_INFO, EMAIL_SALES } from '../lib/nav'
import { postJson } from '../lib/api'
import { sanitizeInput, isValidEmail, checkRateLimit } from '../lib/security'

const talkPoints = [
  'Build a custom app that solves real business problems',
  'Automate the workflows that slow you down',
  'Integrate AI to optimize decision-making and efficiency',
  'Upgrade outdated systems without disrupting your operations',
  'Launch with the right domain, design, and digital stack',
]

const services = [
  { icon: Globe, title: 'Domain', description: 'Secure the perfect domain for your business. We help you choose a memorable, SEO-friendly domain that aligns with your brand and sets the foundation for your online presence and success.' },
  { icon: Server, title: 'Hosting', description: 'Reliable, fast, and secure hosting that keeps your website performing at its best. Our fully managed services ensure optimal uptime, top-notch security, and seamless scalability as your business grows.' },
  { icon: Smartphone, title: 'App Development', description: 'We build apps that get results. From simplifying processes to delivering smooth customer experiences, our custom apps solve real problems, help you scale, and keep your business ahead of the curve.' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'Use our digital marketing add-ons to make an impact online. We craft digital marketing strategies that drive real results — whether it\'s SEO, PPC, or social media. Increase visibility, attract leads, and turn them into loyal customers who keep coming back.' },
  { icon: PenTool, title: 'Web Design', description: 'Stand out online with web design that works. We create stunning, user-friendly websites that not only look great but also drive engagement and conversions. Your digital storefront will be as functional as it is beautiful.' },
  { icon: Palette, title: 'Branding', description: 'Build a brand that speaks volumes. From logos to full-fledged identity systems, we create unforgettable brands that leave a lasting impression, connect with your audience, and elevate your business.' },
  { icon: Layers, title: 'ERP Consulting', description: 'Get your operations firing on all cylinders. Our ERP consulting optimizes workflows, boosts efficiency, and gives you real-time insights so you can make smarter decisions, scale faster, and keep everything running smoothly.' },
  { icon: BrainCircuit, title: 'AI Consulting', description: 'Supercharge your business with AI. We integrate powerful AI solutions that automate tasks, analyze data, and enhance decision-making, giving you the edge to outsmart the competition and lead in your industry.' },
]

const initialValues = { name: '', phone: '', email: '', company: '', message: '', website_url_hp: '' }

function validate(values) {
  const errors = {}
  if (!sanitizeInput(values.name)) errors.name = 'Please enter your name.'
  if (!sanitizeInput(values.phone)) errors.phone = 'Please enter your contact number.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!sanitizeInput(values.message)) errors.message = 'Tell us a little about what you need.'
  return errors
}

function ContactForm() {
  const [values, setValues] = useState(initialValues)
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

    if (values.website_url_hp) {
      setStatus('success')
      return
    }
    if (formLoadTime.current && Date.now() - formLoadTime.current < 1200) {
      setSubmitError('Please take your time filling out the form.')
      return
    }
    const rateCheck = checkRateLimit('contact_form_submit', 8000)
    if (!rateCheck.allowed) {
      setSubmitError(`Please wait ${rateCheck.remainingSeconds} seconds before submitting again.`)
      return
    }

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => document.getElementById(Object.keys(nextErrors)[0])?.focus())
      return
    }

    setStatus('loading')
    setSubmitError('')

    const payload = {
      name: sanitizeInput(values.name),
      contactNumber: sanitizeInput(values.phone),
      email: values.email.trim(),
      message: sanitizeInput(values.message),
    }
    if (values.company.trim()) payload.companyName = sanitizeInput(values.company)

    try {
      await postJson('/api/contact', payload)
      setStatus('success')
    } catch (error) {
      const fieldErrors = {}
      for (const detail of error.details || []) {
        const key = detail.path?.[detail.path.length - 1]
        if (key) fieldErrors[key === 'contactNumber' ? 'phone' : key === 'companyName' ? 'company' : key] = detail.message
      }
      setErrors(fieldErrors)
      setSubmitError(error.message || 'Unable to submit your request. Please try again.')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white p-8 text-center sm:p-10"
      >
        <CheckCircle2 size={44} className="text-brand-500" />
        <p className="text-lg font-semibold text-slate-900">Thanks — we got it.</p>
        <p className="max-w-sm text-sm text-slate-500">Our team will review your message and get back to you shortly.</p>
      </motion.div>
    )
  }

  const fieldClass = (name) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white ${
      errors[name] ? 'border-rose-400 bg-rose-50 focus:border-rose-400' : 'border-slate-200 bg-slate-100 focus:border-brand-400/50'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-2 sm:p-8">
      {submitError && (
        <div role="alert" className="flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700 sm:col-span-2">
          <AlertCircle size={17} className="shrink-0" />
          {submitError}
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Leave this field empty</label>
        <input
          type="text"
          id="website_url_hp"
          tabIndex={-1}
          autoComplete="off"
          value={values.website_url_hp}
          onChange={(e) => update('website_url_hp', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Name</label>
        <input id="name" value={values.name} onChange={(e) => update('name', e.target.value)} className={fieldClass('name')} />
        {errors.name && <p className="mt-1 text-xs font-medium text-rose-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Contact Number</label>
        <input id="phone" type="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} className={fieldClass('phone')} />
        {errors.phone && <p className="mt-1 text-xs font-medium text-rose-600">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Email Address</label>
        <input id="email" type="email" value={values.email} onChange={(e) => update('email', e.target.value)} className={fieldClass('email')} />
        {errors.email && <p className="mt-1 text-xs font-medium text-rose-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Company Name</label>
        <input id="company" value={values.company} onChange={(e) => update('company', e.target.value)} className={fieldClass('company')} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">Message</label>
        <textarea id="message" rows={4} value={values.message} onChange={(e) => update('message', e.target.value)} className={fieldClass('message')} />
        {errors.message && <p className="mt-1 text-xs font-medium text-rose-600">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk business."
        subtitle="Dolphin Advanced Technologies Services gives your business its sharpest edge: From custom-built apps to AI augmentation and purpose-built tools, we simplify complexity and drive momentum where it counts."
      />

      {/* Talk to our team + form */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-slate-900">Talk to our team today to:</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {talkPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-400" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-slate-400">
              Or just share what's not working — and we'll take care of the rest.
            </p>

            <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-8">
              <a href={`mailto:${EMAIL_SALES}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-500">
                <Mail size={16} /> {EMAIL_SALES}
              </a>
              <a href={`mailto:${EMAIL_INFO}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-500">
                <Mail size={16} /> {EMAIL_INFO}
              </a>
              <a href={PHONE_TEL} className="flex items-center gap-3 text-sm text-slate-600 hover:text-brand-500">
                <Phone size={16} /> {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2">
          <iframe
            title="GoDats HQ Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            width="100%"
            height="360"
            className="rounded-2xl"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
        <p className="mt-4 text-center text-sm text-slate-400">{ADDRESS}</p>
      </section>

      {/* Services grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Learn more about our services</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <s.icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  )
}
