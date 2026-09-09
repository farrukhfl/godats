import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, AlertCircle, CheckCircle2, Loader2, Rocket, Info } from 'lucide-react'
import {
  WizardProgress, TextField, TextAreaField, SelectField, RadioCards, CheckboxGrid,
  FileChoice, SwatchPicker, FontPicker, CheckboxLine,
} from '../components/wizard/WizardFields'
import { postJson, postMultipart } from '../lib/api'
import { sanitizeInput, checkRateLimit } from '../lib/security'

const TOTAL_STEPS = 5

const industries = [
  'Tech / SaaS', 'Health & Fitness', 'Education', 'Retail / E-commerce',
  'Food & Beverage', 'Finance / Legal', 'Events / Lifestyle', 'Other',
]
const businessTypes = [
  'Service-based Business', 'Product-based Business', 'SaaS / Startup', 'E-commerce Store',
  'Portfolio / Freelancer', 'Non-profit / Community', 'Other',
]
const palettes = [
  'Minimal Luxe', 'Lively & Inviting', 'Earthy & Serene', 'Sleek & Futuristic', 'Texture & Contrast', 'Glamorous & Audacious',
]
const purposes = [
  'Informational / Presence', 'Portfolio / Showcase', 'Lead Generation', 'Online Selling (Products/Services)',
  'Booking or Appointments', 'Community or Membership', 'Other',
]
const featuresList = [
  'Contact Form', 'Newsletter Signup', 'Appointment Booking', 'Blog / News', 'E-commerce / Shop',
  'Testimonials', 'Portfolio / Gallery', 'Chat Support', 'Payment Integration', 'Multi-language Support', 'Other',
]
const timelines = ['ASAP (within 1-2 weeks)', '2-4 weeks', '1-2 months', 'No rush, take your time']

const initialData = {
  businessName: '', tagline: '', websiteUrl: '', industry: '', businessType: '',
  hasLogo: '', logoFile: null, hasContent: '', contentFile: null, hasImages: '', imagesFile: null,
  colorPalette: '', fontStyle: '',
  purpose: '', features: [], integrations: '',
  timeline: '', hasDomain: '', needsEmail: '', contactName: '', contactNumber: '', contactEmail: '',
  termsAccepted: false, notes: '', website_url_hp: '',
}

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
}

function StepHeading({ title, subtitle }) {
  return (
    <div className="mb-7">
      <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
      {subtitle && <p className="mt-1.5 text-sm text-slate-500">{subtitle}</p>}
    </div>
  )
}

export default function MakeAWebsite() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [data, setData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const formLoadTime = useRef(null)
  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  const update = (field) => (value) => setData((d) => ({ ...d, [field]: value }))

  function goNext() {
    setDirection(1)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }
  function goBack() {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 0))
  }

  function isStepValid(s) {
    if (s === 1) return Boolean(data.businessName.trim() && data.industry && data.businessType)
    if (s === 2) return Boolean(data.hasLogo && data.hasContent && data.hasImages)
    if (s === 4) return Boolean(data.purpose)
    if (s === 5) return Boolean(data.contactNumber.trim() && data.termsAccepted)
    return true
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isStepValid(5)) return

    // Honeypot: bots that fill this hidden field are silently "succeeded"
    if (data.website_url_hp) {
      setSubmitted(true)
      return
    }

    // Automated scripts fill multi-step forms faster than any human can
    if (formLoadTime.current && Date.now() - formLoadTime.current < 1200) {
      setSubmitError('Please take your time filling out the form.')
      return
    }

    const rateCheck = checkRateLimit('lead_form_submit_make-a-website', 8000)
    if (!rateCheck.allowed) {
      setSubmitError(`Please wait ${rateCheck.remainingSeconds} seconds before submitting again.`)
      return
    }

    setSubmitting(true)
    setSubmitError('')

    const hasFiles = data.logoFile instanceof File || data.contentFile instanceof File || data.imagesFile instanceof File

    try {
      if (hasFiles) {
        const formData = new FormData()
        formData.append('businessName', sanitizeInput(data.businessName))
        if (data.tagline.trim()) formData.append('tagline', sanitizeInput(data.tagline))
        if (data.websiteUrl.trim()) formData.append('websiteUrl', sanitizeInput(data.websiteUrl))
        formData.append('primaryIndustry', data.industry)
        formData.append('businessType', data.businessType)
        formData.append('hasLogo', data.hasLogo)
        formData.append('hasContent', data.hasContent)
        formData.append('hasImages', data.hasImages)
        if (data.colorPalette) formData.append('colorPreference', data.colorPalette)
        if (data.fontStyle) formData.append('fontStyle', data.fontStyle)
        formData.append('primaryPurpose', data.purpose)
        data.features.forEach((f) => formData.append('features', f))
        if (data.integrations.trim()) formData.append('integrations', sanitizeInput(data.integrations))
        if (data.timeline) formData.append('timeline', data.timeline)
        if (data.hasDomain) formData.append('hasDomain', data.hasDomain)
        if (data.needsEmail) formData.append('needsEmail', data.needsEmail)
        if (data.contactName.trim()) formData.append('contactName', sanitizeInput(data.contactName))
        formData.append('contactNumber', sanitizeInput(data.contactNumber))
        if (data.contactEmail.trim()) formData.append('contactEmail', data.contactEmail.trim())
        formData.append('termsAccepted', 'true')
        if (data.notes.trim()) formData.append('anythingElse', sanitizeInput(data.notes))
        if (data.logoFile instanceof File) formData.append('logo', data.logoFile)
        if (data.contentFile instanceof File) formData.append('content', data.contentFile)
        if (data.imagesFile instanceof File) formData.append('images', data.imagesFile)
        await postMultipart('/api/make-a-website', formData)
      } else {
        const payload = {
          businessName: sanitizeInput(data.businessName),
          primaryIndustry: data.industry,
          businessType: data.businessType,
          hasLogo: data.hasLogo,
          hasContent: data.hasContent,
          hasImages: data.hasImages,
          primaryPurpose: data.purpose,
          contactNumber: sanitizeInput(data.contactNumber),
          termsAccepted: true,
        }
        if (data.tagline.trim()) payload.tagline = sanitizeInput(data.tagline)
        if (data.websiteUrl.trim()) payload.websiteUrl = sanitizeInput(data.websiteUrl)
        if (data.colorPalette) payload.colorPreference = data.colorPalette
        if (data.fontStyle) payload.fontStyle = data.fontStyle
        if (data.features.length) payload.features = data.features
        if (data.integrations.trim()) payload.integrations = sanitizeInput(data.integrations)
        if (data.timeline) payload.timeline = data.timeline
        if (data.hasDomain) payload.hasDomain = data.hasDomain
        if (data.needsEmail) payload.needsEmail = data.needsEmail
        if (data.contactName.trim()) payload.contactName = sanitizeInput(data.contactName)
        if (data.contactEmail.trim()) payload.contactEmail = data.contactEmail.trim()
        if (data.notes.trim()) payload.anythingElse = sanitizeInput(data.notes)
        await postJson('/api/make-a-website', payload)
      }
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative overflow-hidden bg-white pb-24 pt-40 sm:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl animate-float-slower" />

      <div className="relative mx-auto max-w-2xl px-6">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm sm:p-14"
          >
            <CheckCircle2 size={48} className="text-brand-500" />
            <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              We've got your brief!
            </h1>
            <p className="max-w-md text-slate-500">
              Thanks, {data.contactName || 'friend'} — our team will review your answers and follow up at{' '}
              {data.contactNumber} to kick off your website.
            </p>
          </motion.div>
        ) : step === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-5 inline-block rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
              Web Development
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ready to get started?
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg text-slate-500">
              Complete this questionnaire to get your website ready!
            </p>
            <button
              onClick={goNext}
              className="group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95"
            >
              Start Now
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-xs text-slate-400">Takes about 5 minutes · 5 quick steps</p>
          </motion.div>
        ) : (
          <div>
            <WizardProgress step={step} totalSteps={TOTAL_STEPS} />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {/* Honeypot — hidden from real visitors, catches bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="make-a-website-website_url_hp">Leave this field empty</label>
                <input
                  type="text"
                  id="make-a-website-website_url_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.website_url_hp}
                  onChange={(e) => update('website_url_hp')(e.target.value)}
                />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 1 && (
                    <div>
                      <StepHeading title="Business Identity" subtitle="Let's start with the basics about your business." />
                      <div className="flex flex-col gap-5">
                        <TextField
                          label="Your Business Name"
                          required
                          helper="The name you want to show on your website and brand materials."
                          value={data.businessName}
                          onChange={update('businessName')}
                          placeholder="e.g. Acme Co."
                        />
                        <TextField
                          label="Tagline / One-Liner"
                          value={data.tagline}
                          onChange={update('tagline')}
                          placeholder="e.g. Coffee that keeps you going"
                        />
                        <TextField
                          label="Website URL, if any"
                          value={data.websiteUrl}
                          onChange={update('websiteUrl')}
                          placeholder="e.g. acme.com"
                        />
                        <SelectField
                          label="Primary Industry / Sector"
                          required
                          value={data.industry}
                          onChange={update('industry')}
                          options={industries}
                        />
                        <SelectField
                          label="Business Type"
                          required
                          value={data.businessType}
                          onChange={update('businessType')}
                          options={businessTypes}
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <StepHeading title="Content & Assets" subtitle="Tell us what you already have — we'll cover the rest." />
                      <div className="flex flex-col gap-6">
                        <FileChoice
                          label="Do you have a logo for the website?"
                          value={data.hasLogo}
                          onChange={update('hasLogo')}
                          options={["No, I'd like you to design one.", 'Yes, uploading now.']}
                          uploadValue="Yes, uploading now."
                          fileValue={data.logoFile}
                          onFileChange={update('logoFile')}
                        />
                        <FileChoice
                          label="Do you already have content for your website?"
                          value={data.hasContent}
                          onChange={update('hasContent')}
                          options={["No, I'd like help writing it.", 'Yes, uploading now.']}
                          uploadValue="Yes, uploading now."
                          fileValue={data.contentFile}
                          onFileChange={update('contentFile')}
                        />
                        <FileChoice
                          label="Do you have images to use on your website?"
                          value={data.hasImages}
                          onChange={update('hasImages')}
                          options={['Generate/source them for me.', 'Yes, uploading now.']}
                          uploadValue="Yes, uploading now."
                          fileValue={data.imagesFile}
                          onFileChange={update('imagesFile')}
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <StepHeading title="Branding Preference" subtitle="Give us a feel for the look you're going for." />
                      <div className="flex flex-col gap-6">
                        <SwatchPicker
                          label="Choose Colors"
                          value={data.colorPalette}
                          onChange={update('colorPalette')}
                          options={palettes}
                        />
                        <FontPicker
                          label="Choose Font Style"
                          value={data.fontStyle}
                          onChange={update('fontStyle')}
                        />
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <StepHeading title="Functionality" subtitle="What should your website actually do?" />
                      <div className="flex flex-col gap-6">
                        <RadioCards
                          label="What's the primary purpose of your website?"
                          required
                          value={data.purpose}
                          onChange={update('purpose')}
                          options={purposes}
                          columns={2}
                        />
                        <CheckboxGrid
                          label="What features would you like to include?"
                          helper="Optional — select as many as apply."
                          value={data.features}
                          onChange={update('features')}
                          options={featuresList}
                        />
                        <TextAreaField
                          label="Any specific tools or services you'd like integrated?"
                          value={data.integrations}
                          onChange={update('integrations')}
                          placeholder="e.g. Mailchimp, Calendly, QuickBooks…"
                          rows={3}
                        />
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div>
                      <StepHeading title="Technical Setup" subtitle="Almost done — just the logistics." />
                      <div className="flex flex-col gap-6">
                        <RadioCards
                          label="Ideal timeline"
                          value={data.timeline}
                          onChange={update('timeline')}
                          options={timelines}
                          columns={2}
                        />
                        <RadioCards
                          label="Do you already have a domain?"
                          value={data.hasDomain}
                          onChange={update('hasDomain')}
                          options={['Yes', 'No, I need help with that']}
                          columns={2}
                        />
                        <RadioCards
                          label="Do you need email addresses matching your domain?"
                          value={data.needsEmail}
                          onChange={update('needsEmail')}
                          options={['Yes, please set them up', 'No, I already have them']}
                          columns={2}
                        />
                        <div className="grid gap-5 sm:grid-cols-2">
                          <TextField label="Name" value={data.contactName} onChange={update('contactName')} placeholder="Jane Doe" />
                          <TextField label="Contact Number" required value={data.contactNumber} onChange={update('contactNumber')} placeholder="(555) 123-4567" type="tel" />
                        </div>
                        <TextField label="Email Address" value={data.contactEmail} onChange={update('contactEmail')} placeholder="jane@acme.com" type="email" />
                        <TextAreaField label="Anything else?" value={data.notes} onChange={update('notes')} placeholder="Tell us anything else we should know." rows={3} />

                        <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
                            <Info size={14} /> Before you submit
                          </div>
                          <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-slate-600">
                            <li>We require a 50% upfront payment to begin website development. The remaining balance is due before launch.</li>
                            <li>We offer domain, hosting, and branded email setup too. If you already have a domain, you can transfer it to our hosting. See our plans for web hosting and cloud hosting.</li>
                            <li>Need merchant services? We also offer credit card payment processing and ACH services. Talk to the sales team to add these to your plan.</li>
                          </ul>
                        </div>

                        <CheckboxLine checked={data.termsAccepted} onChange={update('termsAccepted')}>
                          I agree to the Terms & Conditions and Privacy Policy. <span className="text-brand-500">*</span>
                        </CheckboxLine>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {submitError && step === TOTAL_STEPS && (
                <div role="alert" className="mt-6 flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-700">
                  <AlertCircle size={17} className="shrink-0" />
                  {submitError}
                </div>
              )}

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                {step > 1 ? (
                  <button
                    onClick={goBack}
                    className="flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-brand-400/40 hover:text-brand-600"
                  >
                    <ArrowLeft size={15} /> Back
                  </button>
                ) : (
                  <span />
                )}
                {step < TOTAL_STEPS ? (
                  <button
                    onClick={goNext}
                    disabled={!isStepValid(step)}
                    className="flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next <ArrowRight size={15} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStepValid(5) || submitting}
                    className="flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? <Loader2 size={15} className="animate-spin" /> : <Rocket size={15} />}
                    {submitting ? 'Submitting…' : 'Submit'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
