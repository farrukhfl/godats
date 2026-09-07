import { Link } from 'react-router-dom'
import { MessagesSquare, Users2, HardDrive, ShieldCheck, Smartphone, Lock, Headphones, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import PricingCard from '../components/PricingCard'
import FAQAccordion from '../components/FAQAccordion'

const tiers = [
  {
    name: 'Starter',
    tagline: 'Solo & small teams',
    price: '$6',
    period: '/user/mo',
    specs: [
      { label: 'Mailbox storage', value: '50GB' },
      { label: 'Custom domain email', value: 'Yes' },
      { label: 'Outlook', value: 'Web only' },
      { label: 'Teams, OneDrive, Office', value: 'Teams + OneDrive' },
      { label: 'Support', value: 'Standard' },
    ],
  },
  {
    name: 'Business',
    tagline: 'Growing teams',
    price: '$12.50',
    period: '/user/mo',
    specs: [
      { label: 'Mailbox storage', value: '50GB' },
      { label: 'Custom domain email', value: 'Yes' },
      { label: 'Outlook', value: 'Web + Desktop app' },
      { label: 'Teams, OneDrive, Office', value: 'Full suite' },
      { label: 'Support', value: 'Priority' },
    ],
  },
  {
    name: 'Business Premium',
    tagline: 'Full Microsoft 365 suite',
    price: '$22',
    period: '/user/mo',
    specs: [
      { label: 'Mailbox storage', value: '100GB' },
      { label: 'Custom domain email', value: 'Yes' },
      { label: 'Outlook', value: 'Web + Desktop app' },
      { label: 'Teams, OneDrive, Office', value: 'Full suite + admin' },
      { label: 'Support', value: 'Priority + onboarding' },
    ],
  },
]

const moreThanEmail = [
  { icon: MessagesSquare, title: 'Communicate', description: 'Leverage the power of Teams to stay in touch and accomplish more together.' },
  { icon: Users2, title: 'Collaborate', description: 'Facilitate easy collaboration from anywhere with Word, Excel, and more in tow.' },
  { icon: HardDrive, title: 'Store', description: 'Keep all your important files at a central location and access anywhere, anytime.' },
]

const allPlansInclude = [
  { icon: ShieldCheck, title: 'Advanced Spam & Phishing Protection', description: 'Every plan filters malicious mail before it reaches the inbox, with built-in threat detection that keeps your team safe by default.' },
  { icon: Smartphone, title: 'Sync Across Every Device', description: 'Mail, contacts, and calendars stay in sync across desktop, mobile, and web — no extra setup, no missed messages.' },
  { icon: Lock, title: 'Admin & Security Controls', description: 'Manage users, permissions, and security policies from one admin console, with multi-factor authentication built in.' },
]

const faqs = [
  { q: 'Can I keep my current email while switching?', a: "Yes — we can run a parallel migration so your existing inbox stays active while we move everything over, with zero downtime for your team." },
  { q: 'Do I need a domain first?', a: "You'll need a domain to set up branded email addresses. If you don't have one yet, we can help you register one as part of setup." },
  { q: 'How many mailboxes can I add?', a: 'As many as your team needs — pricing is per user, so you can add or remove mailboxes as you grow.' },
  { q: 'Can I migrate my existing files and calendar too?', a: 'Yes, our migration process brings over mail, contacts, calendar events, and files so nothing gets left behind.' },
]

export default function Email() {
  return (
    <div>
      <PageHero
        eyebrow="Email & Office"
        title="Build trust with domain-based emails and do more every day"
        subtitle="Make your business communications more powerful with emails that match your domain. Set up your business email with Microsoft 365 and let the usability and business intelligence of Microsoft fuel your growth."
        bullets={[
          "Access Outlook's powerful features with your business email.",
          'Sync effortlessly across all your devices.',
          'Enjoy 50GB+ storage, security, and advanced spam protection.',
          'Collaborate seamlessly with Teams, OneDrive, and Office apps.',
          'Stay productive with AI-powered tools and business insights.',
        ]}
        ctaLabel="View Plans"
        ctaTo="#pricing"
      />

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Find Your Email Plan</h2>
          <p className="mt-4 text-slate-500">Per-user pricing that scales with your team.</p>
        </Reveal>
        <StaggerGroup className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </StaggerGroup>
      </section>

      {/* More than business email */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">More than business email</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {moreThanEmail.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <f.icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* All plans include */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">Plus</span>
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">All plans include</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {allPlansInclude.map((f) => (
            <StaggerItem key={f.title}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <f.icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* DATS Support */}
      <section className="bg-slate-50 py-16">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500">
              <Headphones size={20} />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">24/7 Expert Help</h2>
              <p className="mt-1 text-sm text-slate-500">
                Setting up a business can often be overwhelming. Our support team is here to make sure it isn't like that for you. Get in touch and let's get it done.
              </p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
            Get Help <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
