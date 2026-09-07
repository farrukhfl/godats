import { useState } from 'react'
import {
  Repeat, LayoutDashboard, Headphones, Layers, Boxes, Server, ShieldCheck, BrainCircuit,
  CreditCard, TrendingUp, Puzzle, Copy, UserCog, Award, Store, Network, Building2,
  Users2, Briefcase, Handshake, Check,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import FAQAccordion from '../components/FAQAccordion'

const pillars = [
  { icon: Repeat, title: 'Recurring Revenue', description: 'Build predictable income with ongoing margins across hosting, cybersecurity, and retained consulting engagements.' },
  { icon: LayoutDashboard, title: 'Partner Portal', description: 'Access a dedicated partner portal to submit referrals and track their status in real time.' },
  { icon: Headphones, title: 'Dedicated Support', description: 'From strategy to deployment and support, our team works alongside you to help you close faster and deliver with confidence.' },
  { icon: Layers, title: 'Full-Spectrum Fintech', description: 'From infrastructure and security to AI, ERP, and fintech development — your clients get everything they need from a single trusted partner.' },
]

const resellServices = [
  { icon: Boxes, title: 'A Complete Digital Stack', description: "You're not selling general IT services. You're selling solutions your clients already need." },
  { icon: Server, title: 'Hosting & Infrastructure', description: 'High-performance hosting, cloud environments, and scalable infrastructure built for reliability and speed.' },
  { icon: ShieldCheck, title: 'Cybersecurity', description: 'Enterprise-grade protection, compliance frameworks, and risk mitigation — without enterprise complexity.' },
  { icon: BrainCircuit, title: 'AI & ERP Consulting', description: 'Help businesses optimize operations, automate workflows, and make smarter decisions with AI-backed consulting.' },
  { icon: CreditCard, title: 'Fintech Development', description: 'Custom fintech solutions — from payment systems to full-scale platforms — built for scalability and compliance.' },
]

const howItWorks = [
  { title: 'Apply to become a partner', description: 'Tell us about your business and client base.' },
  { title: 'Get Approved & Onboarded', description: 'Access partner tools, training, and your sales enablement kit.' },
  { title: 'Start Selling', description: 'Position our services to your clients — under your brand or co-branded.' },
  { title: 'Earn & Scale', description: 'Close deals. Earn margins. Grow recurring revenue streams.' },
]

const betterMargins = [
  { icon: TrendingUp, title: 'Recurring Revenue That Compounds', description: 'Earn predictable, ongoing income through service-based reselling models — designed for long-term growth.' },
  { icon: Puzzle, title: 'Sell Without Building', description: 'No dev team or infrastructure headaches. We handle design, build, and delivery. You stay focused on closing deals.' },
  { icon: Boxes, title: 'Expand Your Portfolio Instantly', description: 'Offer high-demand services like AI, cybersecurity, and fintech without adding operational overhead.' },
  { icon: Copy, title: 'White-Label Ready', description: 'Position everything under your brand. Your client relationship stays yours.' },
  { icon: UserCog, title: 'Sales & Technical Enablement', description: 'Get access to training, sales assets, and technical expertise so you can sell with confidence.' },
  { icon: Award, title: 'Dedicated Partner Support', description: 'From presales to post-sale, we help you win, deliver, and scale, with a dedicated partner portal, giving you full control and visibility.' },
]

const audienceIcons = [
  { icon: CreditCard, label: 'ISOs & payment consultants' },
  { icon: Store, label: 'Digital agencies' },
  { icon: Server, label: 'IT service providers' },
  { icon: Network, label: 'SaaS resellers' },
  { icon: Briefcase, label: 'Business consultants' },
  { icon: Building2, label: 'System integrators' },
]

const partnerModels = [
  { name: 'Reseller Partner', icon: Users2, description: 'Sell directly to clients and own the relationship + margin.' },
  { name: 'White-Label Partner', icon: Copy, description: 'Offer our solutions entirely under your brand.' },
  { name: 'Referral Partner', icon: Handshake, description: 'Prefer introductions over selling? Earn commissions without handling sales.' },
]

const faqs = [
  { q: 'Do I need technical expertise to sell these services?', a: "No, you just need to understand your client's problems. We handle architecture, delivery, and support. You focus on positioning the solution and closing the opportunity." },
  { q: 'How does the partner program actually make me money?', a: 'You earn through margins on resold services, recurring revenue on long-term engagements, or commissions — depending on your partner model. The goal is simple: every client you bring in becomes an ongoing revenue stream, not a one-time win.' },
  { q: 'Can I white-label everything under my own brand?', a: 'Yes. Most partners choose white-label to strengthen their positioning and client retention. We stay invisible — you stay the trusted provider. If you want to leverage the impact of our established brand, cobranding opportunities are also available for partners.' },
  { q: 'What kind of clients are the best fit?', a: 'Businesses actively investing in growth or struggling with scale — think companies needing better infrastructure, stronger security, operational efficiency (ERP/AI), or custom fintech solutions.' },
  { q: 'Is there any cost or minimum commitment to join?', a: 'No heavy upfront investment. The program is designed to be accessible — so you can start selling immediately and scale based on performance.' },
  { q: 'How do I compete with established IT providers or internal teams?', a: "You don't compete on headcount — you compete on capability. You're offering a full-stack solution (AI, cybersecurity, fintech, infrastructure) without the overhead most providers carry. That's your edge." },
]

// NOTE: the live site's scraped markup only exposed a consent checkbox + Submit
// button for this form — the input fields above it weren't captured. This is a
// best-guess reconstruction (name/company/email/phone/model/details) to confirm
// with the backend team, unlike the fully-scraped Contact/ERP/AI forms.
const partnerFields = [
  { name: 'name', label: 'Full Name', required: true },
  { name: 'company', label: 'Business / Company Name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'model', label: 'Which partner model interests you?', type: 'select', options: partnerModels.map((m) => m.name), required: true },
  { name: 'details', label: 'Tell us about your business and client base', type: 'textarea', required: true, full: true },
  { name: 'consent', label: 'By checking this box and submitting the form, you agree to be contacted by Dolphin Advanced Technology Services using the information provided above regarding our products and services. For details on how we handle your personal data, please review our Privacy Policy.', type: 'checkbox', required: true, full: true },
]

export default function PartnerProgram() {
  const [selectedModel, setSelectedModel] = useState('')

  return (
    <div>
      <PageHero
        eyebrow="Partner Program"
        title="Build Revenue Without Building the Tech"
        subtitle="No income cap. Branded Solution. Dedicated Support. Unlock no-cap revenue streams when you resell our IT and fintech solutions. Enjoy up to 25% margin on every sale — with non-profit, education, and government orders bringing more."
        ctaLabel="Join Now"
        ctaTo="#partner-pro"
      />

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Resell High-Demand IT & Fintech Solutions
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <p.icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Resell services */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Resell Services that Customers Need, Value, and Pay For
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resellServices.map((s) => (
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

      {/* How it works — horizontal stepper */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">How it works</h2>
        </Reveal>
        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
          {howItWorks.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-display font-bold text-brand-600 shadow-sm">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Better margins */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              We Offer Better Margins and Stronger Credibility
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {betterMargins.map((f) => (
              <StaggerItem key={f.title}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <f.icon size={20} />
                  </span>
                  <h3 className="font-display font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Built for partners who already have the audience */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for partners who already have the audience
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {audienceIcons.map((a) => (
            <StaggerItem key={a.label}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <a.icon size={20} />
                </span>
                <p className="text-xs font-medium text-slate-600">{a.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Partner models — card selector */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Partner Models</h2>
            <p className="mt-4 text-slate-500">Pick the model that fits how you work — you can tell us for certain in the form below.</p>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {partnerModels.map((m) => {
              const active = selectedModel === m.name
              return (
                <StaggerItem key={m.name}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedModel(m.name)
                      document.getElementById('partner-pro')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`flex h-full w-full flex-col rounded-2xl border-2 p-7 text-left transition ${
                      active ? 'border-brand-500 bg-white shadow-lg shadow-brand-500/10' : 'border-slate-200 bg-white hover:border-brand-400/40'
                    }`}
                  >
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                      <m.icon size={20} />
                    </span>
                    <h3 className="font-display font-semibold text-slate-900">{m.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{m.description}</p>
                    <span className={`mt-5 flex items-center gap-1.5 text-sm font-medium ${active ? 'text-brand-600' : 'text-slate-400'}`}>
                      {active && <Check size={15} />}
                      {active ? 'Selected' : 'Select this model'}
                    </span>
                  </button>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Closing line */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal>
          <p className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
            Your clients already need these services. They just don't want 5 vendors.{' '}
            <span className="text-gradient">You become the one who solves everything.</span>
          </p>
        </Reveal>
      </section>

      <LeadForm
        id="partner-pro"
        source="partner-program"
        key={selectedModel}
        prefill={{ model: selectedModel }}
        title="Ready to become a partner?"
        subtitle="Tell us about your business and how you'd like to work with us."
        submitLabel="Join Now"
        fields={partnerFields}
      />

      <FAQAccordion items={faqs} />
    </div>
  )
}
