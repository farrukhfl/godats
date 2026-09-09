import { Link } from 'react-router-dom'
import { ArrowRight, Compass, ShieldCheck, GraduationCap, Wrench, Sparkles, Layers } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import LeadForm from '../components/LeadForm'

const features = [
  { icon: Compass, title: 'Comprehensive AI Development Strategy', description: 'We meet you where you are in your organization\'s AI maturity stage. Prioritizing your urgent needs, we jumpstart your AI development without sacrificing the big-picture vision. By always aligning our AI roadmap with your business goals, we ensure seamless integration and unlock smarter and faster decision-making.' },
  { icon: ShieldCheck, title: 'Robust Data Governance Framework', description: 'Our expert AI professionals guide leaders through the fast-changing, complex world of AI navigation. Understanding and identifying potential risks associated with using AI, its ethical and governance considerations, and compliance policies, we help you establish data protocols that ensure your AI models are built on clean, compliant, and reliable data.' },
  { icon: GraduationCap, title: 'AI-Readiness Training and Onboarding', description: "The AI revolution is well in progress. We bring your team on board by debunking myths, emphasizing AI's collaborative power, and showcasing the impact of human-AI synergy. The result? A team that's not just ready to adapt but equipped to lead." },
  { icon: Wrench, title: 'Ongoing Support and Optimization', description: 'Our expert guidance stays with you long after the implementation. We guide you as you fine-tune your AI, optimize solutions, bring more people on board, and integrate disconnected processes. All the while ensuring your business evolves right and delivers sustained growth.' },
]

const services = [
  { icon: Sparkles, title: 'New AI Product Development', description: 'Instill certainty and guidance in all your new product development with the right AI assistance by your side. No matter your industry, vertical, or goal, we equip you with AI insight that minimizes project risks and brings down costs. Our expert AI consultants help you identify the scope of work, pick the right tools and technologies for the job, and lead you successfully through the ethics and compliance maze. Schedule your AI consulting with our experts and start strong from day one.' },
  { icon: Layers, title: 'Integrating AI into an Existing Product/Process', description: "When there's no need to create the wheel from scratch, we help you find the right AI tool and solution that can maximize the potential of your existing processes. Our AI consultant professionals guide you to how and where AI can best move your business forward. From selection to governance, assessment, and implementation, we lock step with your team to design systems that ready you for a successful AI journey." },
]

export default function AiConsulting() {
  return (
    <div>
      <PageHero
        eyebrow="AI Consulting"
        title="Artificial Intelligence Consultation"
        subtitle="Future-proof your business and its growth by leveraging insights hidden in your data. Our AI experts help you zero in on AI solutions that maximize efficiency, productivity, and business intelligence."
        ctaLabel="Book a Consultation"
      />

      <LeadForm
        source="ai-consulting"
        endpoint="/api/ai-consulting"
        title="Get ready for expertly designed disruption — powered by AI."
        subtitle="Tell us your AI needs. We'll handle the rest."
        submitLabel="Book a Call"
        closing="Eliminate guesswork from your AI implementation. Our experts are here to help."
        fields={[
          { name: 'name', label: 'Name', required: true },
          { name: 'companyName', label: 'Company Name', required: true },
          { name: 'businessEmail', label: 'Business Email', type: 'email', required: true },
          { name: 'phone', label: 'Phone', type: 'tel', required: true },
          { name: 'alternateContact', label: 'Alternate Contact', required: false },
          { name: 'inquiry', label: 'Your Inquiry', type: 'textarea', required: false, full: true },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            It requires more than just knowing about the technology
          </h2>
          <p className="mt-5 text-slate-500">
            Successful AI implementation demands strong data governance, a clear plan of how AI fits into your
            strategy, and a team that is prepared to adopt augmented intelligence. Take a look at how we make this
            transition easy:
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <f.icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Banner */}
      <section className="bg-slate-50 py-16">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xl font-semibold text-slate-900">
            Navigate AI complexity with expert analysis and guidance. It's just a call away.
          </p>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
            Connect Now <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Our AI Consulting Services</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} to="/contact" />
          ))}
        </StaggerGroup>
      </section>
    </div>
  )
}
