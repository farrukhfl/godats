import { Search, Puzzle, LayoutTemplate, LifeBuoy } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import LeadForm from '../components/LeadForm'

const steps = [
  { icon: Search, title: 'Comprehensive Discovery', description: 'Initial onboarding starts with our team understanding your unique business challenges and goals, ensuring our solution is aligned with your vision.' },
  { icon: Puzzle, title: 'Seamless Integration', description: 'We integrate your current applications and systems into one unified platform, ensuring that no data is left behind and that processes run smoothly.' },
  { icon: LayoutTemplate, title: 'Tailored Design & Development', description: 'Intuitive and easy-to-use ERP interfaces minimize training time, maximize user adoption, and align with how your team works best.' },
  { icon: LifeBuoy, title: 'End-to-End Support', description: 'Post-implementation, we continually assess performance, fine-tune the system, and provide hands-on support to ensure it evolves with your business.' },
]

export default function ErpConsulting() {
  return (
    <div>
      <PageHero
        eyebrow="ERP Consulting"
        title="ERP & Technology Consulting Services"
        subtitle="Access your business insights from a single place of truth. Implement the right ERP system that simplifies processes, eliminates silos, and aligns your tech with long-term strategy. Talk to our experts on the right-fit ERP for your business."
        ctaLabel="Get a Quote"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Custom ERP Solutions Rooted in Purpose</h2>
          <p className="mt-5 text-slate-500">
            There's a reason you are looking for ERP solutions. Is it to get rid of outdated legacy systems,
            integrate isolated apps, or update to recent technology? Whatever it is, your purpose drives our process.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-5 font-display text-3xl font-bold text-slate-900/10">0{i + 1}</span>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <step.icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Why choose DATS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose DATS?</h2>
              <p className="mt-5 text-slate-500">
                Digital transformations are big ticket items when you think about resources. Dolphin Advanced
                Technology Services brings certainty and strategy into all this chaos. With more than 15+ years of
                industry experience and expertise, we set the standard in digital excellence. Our experts are
                leading industry veterans with deep technological insight, sharp analysis, and an eye on what's
                next. Together, we create solutions that fit like a glove, are future-ready, and scale with ease.
                Reach out today, and let's upgrade your growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-brand-400/20 bg-white p-6 text-center">
                <StatCounter value="5%" label="of annual revenue an ERP system can cost mid-size companies" />
              </div>
              <div className="rounded-2xl border border-brand-400/20 bg-white p-6 text-center">
                <StatCounter value="50%" label="of ERP implementations fail on the first try" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LeadForm
        source="erp-consulting"
        title="Ready to rethink ERP?"
        subtitle="Get a successful ERP solution on your first try. Our experts are here to help."
        submitLabel="Book Your Session"
        closing="Simplify your decision-making. Make the right ERP choice with guidance you can trust."
        fields={[
          { name: 'name', label: 'Name', required: true },
          { name: 'company', label: 'Company Name', required: true },
          { name: 'position', label: 'Position / Title', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'inquiry', label: 'Your Inquiry', type: 'textarea', required: true, full: true },
        ]}
      />
    </div>
  )
}
