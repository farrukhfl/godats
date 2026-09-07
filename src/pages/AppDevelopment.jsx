import {
  ClipboardList, Smartphone, Plug, LifeBuoy, CheckCircle2, BarChart3, Rocket,
  Activity, Gauge, Users, Landmark, HeartPulse, Building2, Boxes, Bot, Layers,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from '../components/FAQAccordion'

const whatWeDo = [
  { icon: ClipboardList, title: 'Product planning', description: "We start with the problem. We'll map it out, design the flows, test the assumptions, and figure out what's worth building now — and what can wait." },
  { icon: Smartphone, title: 'Mobile apps & more', description: "iOS, Android, browser-based — whatever fits the user's context best. From MVPs to enterprise platforms, we build for performance and maintainability." },
  { icon: Plug, title: 'System integration', description: "Got existing software? Custom backends? Third-party APIs? We'll connect your new app to the tools you already use." },
  { icon: LifeBuoy, title: 'Support & evolution', description: "After launch, we stay in the loop. We track what's working, what's not, and help you scale or adjust based on real usage." },
]

const stats = [
  { value: '40+', label: 'Apps delivered' },
  { value: '2M+', label: 'Monthly active users' },
  { value: '15+', label: 'Years in app development' },
  { value: '99.9%', label: 'Uptime on our private data centers' },
  { value: '60%', label: 'Apps that include AI or ERP integration' },
  { value: '4.8', label: 'Avg. user ratings for client apps' },
]

const industries = [
  { icon: Landmark, label: 'Fintech tools and payment apps' },
  { icon: HeartPulse, label: 'Healthcare and patient-facing platforms' },
  { icon: Building2, label: 'Real estate tech and agent dashboards' },
  { icon: Boxes, label: 'B2B platforms and operational tools' },
  { icon: Bot, label: 'AI-backed service platforms' },
  { icon: Layers, label: 'Custom ERP layers and internal apps' },
]

const techStack = [
  { label: 'Mobile', items: 'Swift, Kotlin, Flutter, React Native' },
  { label: 'Web', items: 'React, Vue, Angular, HTML5' },
  { label: 'Backend', items: 'Node.js, Django, .NET Core, Laravel' },
  { label: 'Cloud', items: 'AWS, DigitalOcean, Azure' },
  { label: 'Data', items: 'Firebase, MongoDB, PostgreSQL' },
  { label: 'DevOps', items: 'Docker, GitHub Actions, Jenkins' },
  { label: 'APIs', items: 'REST, GraphQL, custom-built integrations' },
]

const postLaunch = [
  { icon: BarChart3, title: 'User analytics', description: "See what's working, where users drop off, and how your app is performing in the wild." },
  { icon: Rocket, title: 'Feature rollouts', description: 'Launch updates based on actual usage, not guesswork. We plan new releases that build on what users are already doing.' },
  { icon: Activity, title: 'Monitoring & uptime', description: "We keep an eye on server health, security patches, load times, and crash reports — so you don't have to." },
  { icon: Gauge, title: 'Performance optimization', description: 'From speed tweaks to backend cleanup, we refine the app as it scales. Especially important when usage grows fast.' },
  { icon: Users, title: 'Support & training', description: "Need help onboarding staff, managing your admin panel, or training internal teams? We've got you." },
]

const features = [
  'Tailored Experiences', 'Real-time Data', 'Reliable Offline Mode', 'Push Notifications', 'AI/ERP Integrations',
  'Social Media Integrations', 'Secure & Compliant', 'AR/VR Functionality', 'Embedded Chatbots', 'Multi-lingual UX',
]

const faqs = [
  { q: 'How long does it take to build a custom app?', a: "Most apps take 10–16 weeks from kickoff to launch. MVPs can go live faster, especially if we keep the feature set focused. After a quick discovery session, we'll give you a timeline that reflects your scope." },
  { q: 'Can you work with my existing systems?', a: "Yes. We handle custom integrations, legacy platforms, and third-party tools. Whether you're running on Salesforce, a homegrown CRM, or something completely custom, we'll figure out the cleanest way to connect." },
  { q: 'What if I only have an idea and not a full spec?', a: "That's normal and very similar to how most clients come to app development. We'll help you validate the concept, map out user flows, and turn your idea into a working prototype. You don't need a complete blueprint, just a clearer goal." },
  { q: 'Do you build for both iOS and Android?', a: "We do. Depending on the use case, we'll go native or use cross-platform frameworks like Flutter or React Native. We'll help you decide on the best course of action based on performance needs, budget, and timeline." },
  { q: 'What happens after the app launches?', a: 'We offer comprehensive post-launch support, bug fixes, version updates, and feature rollouts. You can keep us on retainer — or call us back when you\'re ready for the next phase.' },
  { q: 'How much does custom app development cost?', a: "Pricing depends on features, platform(s), and complexity. We don't quote until we've had a real conversation, but we'll always be transparent, phased, and tied to actual value — not vague estimates." },
]

export default function AppDevelopment() {
  return (
    <div>
      <PageHero
        eyebrow="App Development"
        title="Let's Build the App That Actually Solves the Problem"
        subtitle="You've got an idea. Or maybe a bottleneck in your process. Either way, you need more than just code. You need a team that can break down the problem, design something users want to use, and build it in a way that won't crack under pressure. That's what we do."
        ctaLabel="Book a free Consultation"
        size="large"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">What we do</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map((f) => (
            <ServiceCard key={f.title} {...f} to="/contact" />
          ))}
        </StaggerGroup>
      </section>

      {/* Process flow */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">How we build it</h2>
          <p className="mt-4 text-slate-500">From strategy to deployment, every build follows the same disciplined process.</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4">
          <img src="/images/app-development/process-flow.png" alt="Strategy, Planning, Design, Development, Testing, Deployment" loading="lazy" className="w-full rounded-2xl" />
        </Reveal>
      </section>

      {/* Black box dev */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">We're not fans of black-box dev</h2>
            <p className="mt-5 text-slate-500">
              We work in short, visible sprints with real check-ins and usable releases. No vanishing acts or months
              of radio silence.
            </p>
          </Reveal>
          <StaggerGroup className="flex flex-col gap-3">
            {[
              'High-fidelity prototypes (so you can test ideas early)',
              'A lean roadmap (so the build doesn\'t drag out forever)',
              'Clear documentation (so you\'re never guessing)',
              'Ongoing support (because software is never really "done")',
              "We're not here to mystify the process — we're here to ship something solid, together.",
            ].map((line) => (
              <StaggerItem key={line}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-400" />
                  <p className="text-sm text-slate-600">{line}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Our work supports</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <StaggerItem key={i.label}>
                <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <i.icon size={18} />
                  </span>
                  <p className="text-sm text-slate-600">{i.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.15} className="mt-8 text-center text-slate-500">
            If your users are logging in to do something important — not just scroll — we're probably a good fit.
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">The tech we work with</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {techStack.map((t) => (
            <StaggerItem key={t.label}>
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-500">{t.label}</div>
                <div className="mt-1.5 text-sm text-slate-600">{t.items}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.15} className="mt-8 text-center text-slate-500">
          Don't see your stack? Just ask — we've probably touched it.
        </Reveal>
      </section>

      {/* Post launch */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">How we help you post-launch</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {postLaunch.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <p.icon size={18} />
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Feature chips */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Access our top-tier features</h2>
        </Reveal>
        <StaggerGroup className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map((f) => (
            <StaggerItem key={f}>
              <span className="inline-block rounded-full border border-brand-400/20 bg-brand-400/5 px-4 py-2 text-sm font-medium text-brand-300">
                {f}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
