import { Link } from 'react-router-dom'
import {
  Boxes, CreditCard, Cloud, ShieldCheck, PenTool, Search, ArrowRight,
  Wallet, TrendingUp, Gift, Repeat, GraduationCap, HeartHandshake, Home,
  Send, ClipboardList, ClipboardCheck, MonitorSmartphone, UserCheck, PartyPopper,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import { jobs } from '../lib/jobs'

const whatWeDo = [
  { icon: MonitorSmartphone, label: 'Custom-built applications and business systems' },
  { icon: CreditCard, label: 'Fintech platforms and payment integrations' },
  { icon: Cloud, label: 'Cloud infrastructure and dedicated environments' },
  { icon: ShieldCheck, label: 'Cybersecurity and system hardening' },
  { icon: PenTool, label: 'Web design and e-commerce architecture' },
]

const culture = ['Do good work.', 'Make it hold up.', 'Keep getting better.']

const hiringProcess = [
  { icon: Send, title: 'Your application is received' },
  { icon: ClipboardList, title: 'The application is reviewed and shortlisted' },
  { icon: MonitorSmartphone, title: 'You appear for an online assessment' },
  { icon: UserCheck, title: 'An HR interview is scheduled for successful candidates' },
  { icon: ClipboardCheck, title: 'Shortlisted candidates move to the final interview' },
  { icon: PartyPopper, title: 'A job offer is made, and you begin your incredible journey at DATS' },
]

const perks = [
  { icon: Wallet, label: 'Competitive Salary' },
  { icon: TrendingUp, label: 'Performance Bonuses' },
  { icon: Gift, label: 'Project-based Incentives' },
  { icon: Repeat, label: 'Leave Encashment' },
  { icon: HeartHandshake, label: 'Medical Insurance' },
  { icon: GraduationCap, label: 'Professional Development Opportunities' },
  { icon: Boxes, label: 'Training & Growth' },
  { icon: HeartHandshake, label: 'Supportive Culture' },
  { icon: Home, label: 'Remote Flexibility' },
]

const interestAreas = [...new Set(jobs.map((j) => j.category))].concat('Other')

// NOTE: the live site's "Get Hired" section only showed a bare Submit button —
// the input fields above it weren't captured in the scrape. This is a
// best-guess reconstruction (name/email/phone/interest/resume), and it's kept
// as a mock (console-log) submission since it collects a resume file, which
// the JSON contact-inquiry API can't accept — needs a real multipart backend.
const getHiredFields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'interest', label: 'Area of interest', type: 'select', options: interestAreas, required: true },
  { name: 'resume', label: 'Upload CV / Resume', type: 'file', accept: '.pdf,.doc,.docx', required: true, full: true },
]

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Careers"
        title="At the Intersection of Infrastructure and Intelligence We Build Systems That Power Businesses"
        subtitle="On-site, hybrid, and remote opportunities available"
        ctaLabel="Search Jobs"
        ctaTo="/job-openings"
      />

      {/* What we do */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">What We Do</span>
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">A Full-Spectrum Fintech & IT Solutions Company</h2>
          <p className="mt-4 text-slate-500">Designing platforms, systems, and products that businesses rely on every day.</p>
        </Reveal>
        <StaggerGroup className="mt-10 flex flex-col gap-3">
          {whatWeDo.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <item.icon size={18} />
                </span>
                <p className="text-sm text-slate-700">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.15} className="mt-8 text-center">
          <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-400/40 hover:text-brand-600">
            Learn more about us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Culture */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Our Culture — We keep it simple</h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {culture.map((line, i) => (
              <StaggerItem key={line}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="font-display text-2xl font-bold text-brand-500/30">0{i + 1}</span>
                  <p className="font-display font-semibold text-slate-900">{line}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.15} className="mt-8">
            <p className="font-display text-xl font-semibold text-slate-900">
              And the most important: <span className="text-gradient">Do serious work without taking yourself too seriously.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hiring process */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">A stress-free hiring process</h2>
        </Reveal>
        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
          {hiringProcess.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-brand-600 shadow-sm">
                  <step.icon size={20} />
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-500">Step {i + 1}</span>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-700">{step.title}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Perks */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">We take care of our people</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {perks.map((p) => (
              <StaggerItem key={p.label}>
                <div className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-5 text-center group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <p.icon size={18} />
                  </span>
                  <p className="text-xs font-medium text-slate-700">{p.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Search available positions */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Reveal className="rounded-3xl border border-slate-200 bg-white p-10 sm:p-14">
          <Search size={32} className="mx-auto mb-5 text-brand-500" />
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">Search available positions</h2>
          <p className="mx-auto mt-3 max-w-md text-slate-500">Browse open roles by category, type, and location.</p>
          <Link to="/job-openings" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
            Search Jobs <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <LeadForm
        source="careers-general"
        mockSubmit
        title="Get Hired"
        subtitle="Don't see a role that fits? Send us a general application and we'll keep you in mind."
        submitLabel="Submit Application"
        fields={getHiredFields}
      />
    </div>
  )
}
