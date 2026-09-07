import { Link } from 'react-router-dom'
import { Settings2, TrendingUp, Handshake, Copy, Cog, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import PricingCard from '../components/PricingCard'
import PricingDisclaimer from '../components/PricingDisclaimer'
import FAQAccordion from '../components/FAQAccordion'

const sharedFeatures = [
  'Free WP Installation', 'WordPress Autoupdates', 'Free WP Migrator plugin', 'Daily & on-demand backups',
  'Free SSLs', 'Free CDN', 'Free Email', 'Enhanced Security', 'Ecommerce Enabled', 'WP-CLI and SSH',
  'Out-of-The-Box Caching', 'Unlimited Databases', 'Easy Staging', 'Collaborators',
]
const goGeekCloudExtras = ['White-Label Clients', 'Free Private DNS', 'Priority Support']
const cloudOnlyExtras = ["Customize client's access", "Tailor site's resources"]

const tiers = [
  {
    name: 'GrowBig',
    badge: 'Special Price',
    price: '$6.69',
    was: '$29.99/mo',
    priceNote: '*',
    specs: [
      { label: 'Websites', value: 'Unlimited' },
      { label: 'Web Space', value: '20 GB' },
    ],
    featureGroups: [{ heading: 'Included', items: sharedFeatures }],
  },
  {
    name: 'GoGeek',
    badge: 'Special Price',
    price: '$10.69',
    was: '$44.99/mo',
    priceNote: '*',
    popular: true,
    specs: [
      { label: 'Websites', value: 'Unlimited' },
      { label: 'Web Space', value: '40 GB' },
    ],
    featureGroups: [
      { heading: 'Included', items: sharedFeatures },
      { heading: 'Plus', items: goGeekCloudExtras },
    ],
  },
  {
    name: 'Cloud',
    badge: 'Prices From',
    price: '$100.00',
    specs: [
      { label: 'Websites', value: 'Unlimited' },
      { label: 'Web Space', value: '40+ GB' },
    ],
    featureGroups: [
      { heading: 'Included', items: sharedFeatures },
      { heading: 'Plus', items: goGeekCloudExtras },
      { heading: 'Cloud Exclusive', items: cloudOnlyExtras },
    ],
    ctaLabel: 'Configure your plan',
  },
]

const whyLoveIt = [
  { icon: Settings2, title: 'Seamless management for you and your clients', description: 'Reseller hosting services that are powerful without any complexity. Our easy-to-use management tools including cPanel and WHM, let you run your business hassle-free. Create accounts, set limits, and monitor usage effortlessly. Your clients get a smooth hosting experience and you get full control.' },
  { icon: TrendingUp, title: 'Scalable hosting that pivots with you', description: 'As your hosting business grows, your hosting solution should grow with it. Experience hosting that fits with your needs, not the other way around. Upgrade storage, bandwidth, and resources instantly — the minute you need them.' },
  { icon: Handshake, title: 'A partner you can trust', description: 'With years of experience in digital services, we understand what businesses need to thrive. Our hosting solutions are built with businesses in mind, offering reliability, flexibility, and expert support.' },
]

const features = [
  { icon: Copy, title: 'White-Label Hosting', description: 'Brand your hosting business with full white-label solutions. Customize nameservers, branding, and control panel elements so your clients only see your company, not ours.' },
  { icon: Cog, title: 'Powerful Management Tools', description: 'Get total control over your hosting business with full-scale cPanel and WHM access. Create and manage accounts, set resource limits, monitor server performance, and automate billing with ease.' },
  { icon: ShieldCheck, title: 'High-Performance & Security', description: "We use SSD storage, blazing-fast servers, and global data centers to ensure fast load times. Plus, with built-in firewalls, DDoS protection, and free SSL certificates, your clients' data stays secure." },
  { icon: TrendingUp, title: 'Scalable and Flexible', description: 'Start small and scale as you grow. Our reseller hosting solutions are designed to match your pace. Scale up/down as you please to optimize resources and run your business without server headaches.' },
]

const faqs = [
  { q: 'What is a reseller hosting service?', a: "Reseller hosting allows you to purchase hosting resources from a provider like us, and resell them to your clients under your brand. You get control over account creation, pricing, and management while we handle server maintenance and infrastructure. It's an ideal way to start a business without owning physical servers." },
  { q: 'Who uses reseller hosting?', a: 'Reseller hosting is used by: web developers and designers who want to offer hosting as an added service, digital agencies managing multiple client websites, entrepreneurs looking to start a hosting business, IT consultants providing hosting solutions to businesses, and companies needing separate hosting accounts for different departments or projects.' },
  { q: 'What is the difference between shared and reseller hosting?', a: "Shared hosting is a limited solution if you're looking for reseller purposes — you rent a portion of the server for your own use and cannot create multiple client accounts, which suits creators or small businesses needing a single website. Reseller hosting is where you get allocated server resources that you can divide and resell as independent hosting accounts, managing client accounts via WHM, offering more flexibility and scalability. Reseller hosting is ideal for those who want to run a hosting business." },
  { q: 'What are the key benefits of reseller hosting?', a: 'Reseller hosting is valuable for several reasons: white-label branding so you can sell hosting under your own brand, flexible scalability to upgrade resources as your business grows, revenue generation where you set your own prices and earn profits, full account management with cPanel and WHM, minimal tech responsibility since we handle server maintenance, and an affordable entry point to start a hosting business without heavy infrastructure investment.' },
  { q: 'How do I start a reseller hosting business?', a: 'A simple breakdown: choose a reliable hosting provider like us and buy your plan; brand your hosting service with customized nameservers and more; use WHM to set up client management tools; establish competitive pricing and packages based on market demand; and provide great customer support with our reliable tech help and uptime monitoring.' },
]

export default function ResellerHosting() {
  return (
    <div>
      <PageHero
        eyebrow="Reseller Hosting"
        title="Your Hosting Business Supercharged by Us."
        subtitle="Take control of your hosting business with our powerful reseller hosting solutions. Built for agencies, developers, and entrepreneurs. Exceed what your clients think you can do with reliable hosting that's all about high-speed performance, full management control, and scalable plans."
        ctaLabel="Start Now"
        ctaTo="#pricing"
      />

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Win with the right hosting plan by your side
          </h2>
          <p className="mt-4 text-slate-500">Find the perfect plan and start hosting today.</p>
        </Reveal>
        <StaggerGroup className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </StaggerGroup>
        <PricingDisclaimer />
      </section>

      {/* Why you'll love it */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Why you'll love our reseller hosting
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyLoveIt.map((f) => (
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
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Reseller Hosting Features
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((f) => (
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

      {/* Questions banner */}
      <section className="bg-slate-50 py-16">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500">
              <MessageSquare size={20} />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900">Questions? Our experts are here to help.</h2>
              <p className="mt-1 text-sm text-slate-500">
                Our hosting experts are available 24/7 to assist you with setup, migration, troubleshooting, and optimization so you can focus on your business success.
              </p>
            </div>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
            Chat with an expert <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Closing banner */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Your hosting business starts here.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Are you in? You bring the vision, we deliver the infrastructure. Get the tools, support, and reliability you need to run a successful hosting business.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition hover:brightness-95">
              Let's start <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
