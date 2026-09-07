import { Link } from 'react-router-dom'
import {
  HardDrive, Cpu, Globe, Gauge, LayoutGrid, RefreshCw, Database, Zap, Wallet, Network,
  Rocket, Lock, ShieldAlert, ShieldCheck, Server, Headphones, PhoneCall, ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import PricingCard from '../components/PricingCard'
import FAQAccordion from '../components/FAQAccordion'

const tiers = [
  {
    name: 'Jump Start',
    tagline: 'Easy start on the cloud',
    icon: '/images/hosting/cloud/icon-jumpstart.svg',
    price: '$100.00',
    priceNote: 'excl. VAT',
    specs: [
      { label: 'CPU Cores', value: '4' },
      { label: 'Memory', value: '8GB' },
      { label: 'SSD Space', value: '40GB' },
      { label: 'Data Transfer', value: '5TB' },
    ],
  },
  {
    name: 'Business',
    tagline: 'Optimal cloud experience',
    icon: '/images/hosting/cloud/icon-business.svg',
    price: '$200.00',
    priceNote: 'excl. VAT',
    specs: [
      { label: 'CPU Cores', value: '8' },
      { label: 'Memory', value: '12GB' },
      { label: 'SSD Space', value: '80GB' },
      { label: 'Data Transfer', value: '5TB' },
    ],
  },
  {
    name: 'Business Plus',
    tagline: 'Advanced performance',
    icon: '/images/hosting/cloud/icon-business-plus.svg',
    price: '$300.00',
    priceNote: 'excl. VAT',
    specs: [
      { label: 'CPU Cores', value: '12' },
      { label: 'Memory', value: '16GB' },
      { label: 'SSD Space', value: '120GB' },
      { label: 'Data Transfer', value: '5TB' },
    ],
  },
  {
    name: 'Super Power',
    tagline: 'Premium server power',
    icon: '/images/hosting/cloud/icon-superpower.svg',
    price: '$400.00',
    priceNote: 'excl. VAT',
    specs: [
      { label: 'CPU Cores', value: '16' },
      { label: 'Memory', value: '20GB' },
      { label: 'SSD Space', value: '160GB' },
      { label: 'Data Transfer', value: '5TB' },
    ],
  },
]

const performanceFeatures = [
  { icon: HardDrive, title: 'Ultra-fast SSD Storage', description: 'Traditional hard drives can slow you down. Our cloud servers run on high-performance SSDs, delivering brisk read/write speeds for quicker data access and lower load times.' },
  { icon: Cpu, title: 'Optimized Server Architecture', description: "Every millisecond counts when you're running an online venture. Delight your customers with breakneck speeds with our finely-tuned servers, leading-edge hardware, and software optimizations to reduce latency and accelerate page load times." },
  { icon: Globe, title: 'Global CDNs at Every Step', description: 'Your website loads instantly no matter where your visitors are. Our integrated content delivery network caches content across multiple international locations, reducing delays and improving user experience.' },
  { icon: Gauge, title: 'Advanced Caching & Load Balancing', description: 'We keep your site running smoothly even under heavy traffic. Experience advanced caching mechanisms and load-balancing technology that distribute requests efficiently, preventing slowdowns and bottlenecks.' },
]

const managementFeatures = [
  { icon: LayoutGrid, title: 'One dashboard for everything', description: 'Tired of juggling multiple accounts? Our intuitive control panel lets you manage websites, domains, databases, and security settings — all from a single, easy-to-use dashboard.' },
  { icon: RefreshCw, title: 'Instant software and plugin updates', description: 'Say goodbye to manual updates forever. Our hosting platform keeps your CMS, plugins, and software automatically up to date, reducing security risks and compatibility issues.' },
  { icon: Database, title: 'Automated recovery and updates', description: 'Never lose valuable data again. Our cloud hosting includes automated backups and instant recovery options, so you can recover your site in a click, anytime disaster strikes.' },
]

const scalabilityBlurbs = [
  { icon: Zap, title: 'Instant Resource Scaling', description: 'Expand instantly. No limits or interruptions.' },
  { icon: Wallet, title: 'Pay For What You Use', description: 'No wasted resources.' },
  { icon: Network, title: 'Reliable Load Balancing', description: 'Even traffic with maximum uptime.' },
  { icon: Rocket, title: 'Future-proof Tech', description: 'Built to grow with you.' },
]

const securityFeatures = [
  { icon: Lock, title: 'End-to-end encryption', description: 'Your data stays private with advanced encryption protocols that protect information in transit and at rest.' },
  { icon: ShieldCheck, title: 'Firewall and threat protection', description: 'Our multi-layered firewall system and proactive threat monitoring keep hackers, malware, and unauthorized access at bay.' },
  { icon: ShieldAlert, title: 'DDoS mitigation', description: 'Stay online even during cyber attacks. Our real-time DDoS mitigation technology absorbs and neutralizes threats before they reach your site.' },
  { icon: Database, title: 'Automated backups and recovery', description: 'Never worry about losing data again. Our system automatically backups your site, allowing for quick recovery in case of issues.' },
  { icon: ShieldCheck, title: 'Compliance and regulatory standards', description: 'We adhere to industry-leading security and compliance frameworks, ensuring your hosting meets the latest critical standards.' },
  { icon: Headphones, title: '24/7 expert tech support', description: 'Benefit from a support team that wants your success. Our dedicated security constantly scans for vulnerabilities for round-the-clock protection for your data and infrastructure.' },
]

const faqs = [
  { q: 'What is cloud hosting?', a: 'Cloud hosting is a type of managed hosting service that distributes resources across multiple servers instead of relying on a single machine. This way your online platform gets what it needs from several locations, enhancing its speed, reliability, and scalability. It also eliminates single points of failure, keeping your site running and performing at high velocity regardless of server interruptions. Cloud hosting solutions are highly responsive services for websites, apps, and platforms that demand extreme availability and flexibility.' },
  { q: 'Who should get cloud hosting services?', a: 'Cloud hosting is a superior choice for businesses, developers, and content creators that regularly experience high traffic, have a lot of data transfer going on, and need to scale at the drop of a hat. If you run ecommerce stores, SaaS applications, or have a high-traffic blog, cloud hosting is for you. It is also a great, flexible fit for enterprises requiring a stable, high-performance hosting environment with minimal downtime risks.' },
  { q: 'What is the difference between cloud and traditional hosting?', a: 'Traditional hosting runs on a single server, limiting scalability and uptime. Cloud hosting spreads things around — you get more resources as you need them, tapping several different locations, which means essentially unlimited resources, nonstop uptime, perfect reliability, and consistent high speeds. Cloud hosting adapts to traffic spikes dynamically, reducing the risk of downtime or performance delays.' },
  { q: 'Which is better? Cloud hosting or VPS?', a: "VPS (virtual private server) is the best hosting choice for businesses who want a dedicated server for their use. While it offers performance you can count on and grassroots access, it is a self-managed service and you'll need a bit of technical expertise to manage it efficiently. Cloud hosting, on the other hand, is a fully-managed solution — a pre-built environment with all the necessary tools you need to run a successful online venture. You enjoy high speeds, perfect reliability, and rock-solid security without the complexity of managing your own server. We supplement our cloud hosting services with dedicated expert support, available at all times." },
  { q: 'What are the major advantages of hosting on a cloud?', a: 'Key benefits include: Scalability as you need it (instantly expands resources as needed), High availability (multiple servers ensure 99.99% uptime), Optimized performance (faster load times with SSDs and global CDNs), Enhanced security (encryption, firewalls, DDoS protection, and more, all built-in), Cost-efficiency (pay for what you need and nothing more), Global reach (your site remains accessible to visitors no matter where they are). With cloud hosting, you get unparalleled flexibility, speed, and reliability for businesses of all sizes.' },
]

export default function CloudHosting() {
  return (
    <div>
      <PageHero
        eyebrow="Cloud Hosting"
        title="Cloud Hosting Solutions"
        subtitle="Whether you're running an ecommerce store, a SaaS platform, or a high-traffic blog, our cloud hosting services ensure seamless performance with no downtime."
        bullets={[
          'Scalable: Instantly adjust resources to meet demand without downtime.',
          'Reliable: 99.9% uptime backed by multiple data centers, and failover solutions.',
          'Effortless to manage: Intuitive control panel, one-click installs, and automated updates.',
          'Blazing-fast: SSD storage, optimized servers, and global CDNs.',
          'Highly secure: Enterprise-grade encryption, DDoS protection, and automated backups.',
        ]}
        ctaLabel="Find Your Plan"
        ctaTo="#pricing"
      />

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Cloud Hosting Plans for Every Need
          </h2>
          <p className="mt-4 text-slate-500">Find your perfect one here.</p>
        </Reveal>
        <StaggerGroup className="mt-14 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </StaggerGroup>
      </section>

      {/* Performance */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Blazing-fast Performance. No Compromise.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {performanceFeatures.map((f) => (
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

      {/* Effortless management */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Effortless Cloud Management at a Click
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {managementFeatures.map((f) => (
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

      {/* Seamless scalability */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Seamless Scalability on Demand
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {scalabilityBlurbs.map((b) => (
              <StaggerItem key={b.title}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <b.icon size={20} />
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">{b.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-500">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Rock-Solid Security and Compliance
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((f) => (
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
      </section>

      {/* Talk to an expert */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                <PhoneCall size={20} />
              </span>
              <h2 className="font-display text-3xl font-bold text-slate-900">Talk to an expert</h2>
              <p className="mt-4 text-slate-500">
                Benefit from tech support experts intent on your success. Get instant responses and proactive
                solutions that keep pace with your momentum.
              </p>
              <Link to="#pricing" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
                Start hosting on the cloud <ArrowRight size={16} />
              </Link>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                'Certified cloud specialists providing reliable guidance',
                'Instant responses via live chat, email, and phone',
                'Proactive support that fixes problems before they impact you',
                'Guided setups, smooth migrations, and hassle-free management',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600">
                  <Server size={16} className="mt-0.5 shrink-0 text-brand-500" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Closing banner */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to experience the cloud?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              With unmatched speed, security, and agility, you are finally free to go big.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition hover:brightness-95">
              Buy cloud hosting <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
