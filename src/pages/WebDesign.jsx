import { Link } from 'react-router-dom'
import {
  Rocket, PenTool, Eye, CheckCircle2, Smartphone, Gauge, LayoutTemplate,
  MousePointerClick, Server, LayoutDashboard, Layers, Wallet, Palette,
  Wrench, TrendingUp, Lock, Settings2, ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import PricingCard from '../components/PricingCard'
import PricingDisclaimer from '../components/PricingDisclaimer'
import FAQAccordion from '../components/FAQAccordion'
import { getStandardTiers } from '../lib/pricingTiers'

const tiers = getStandardTiers({
  startUp: 'For personal projects and tiny sites',
  growBig: 'Perfect for your growing business',
  goGeek: 'More power for bigger sites',
})

const howItWorks = [
  { icon: PenTool, title: 'Getting Started', description: "Let's dive into your business goals and map out a website design plan that works for you." },
  { icon: LayoutTemplate, title: 'Design in Progress', description: "Our team gets to work, designing a website that's both stunning and strategic." },
  { icon: Eye, title: 'Review & Refine', description: "We present the finished website — take a look, share your thoughts, and we'll perfect every detail." },
  { icon: Rocket, title: 'Website is Live', description: "But live doesn't mean final — update it yourself or let us keep things running smoothly." },
]

const featureGroups = [
  {
    icon: Smartphone,
    title: 'Essential Website Features',
    description: 'Your website is designed for performance, security, and ease of use.',
    items: [
      { name: 'Mobile-Responsive Design', detail: 'looks great on all devices' },
      { name: 'Fast & Optimized Performance', detail: 'speed matters for visitors and search engines' },
      { name: 'Security Features', detail: 'SSL certificates and strong protection' },
      { name: 'SEO-Ready Structure', detail: 'built for better search rankings' },
      { name: 'CMS for Easy Updates', detail: 'make changes anytime, no coding required' },
      { name: 'Lead Capture & Forms', detail: 'convert visitors into customers' },
      { name: 'Social Media Integration', detail: 'connect with your audience everywhere' },
    ],
  },
  {
    icon: Server,
    title: 'Hosting & Domain Services',
    description: 'A reliable website starts with solid hosting and a custom domain.',
    items: [
      { name: 'Domain Registration & Management', detail: 'find, secure, and renew your domain' },
      { name: 'Fast & Secure Hosting', detail: 'dependable uptime and strong security' },
      { name: 'Automatic Backups', detail: 'your data is always protected' },
      { name: 'One Dashboard for Full Control', detail: 'manage everything from a single place' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Future-Ready Scalability',
    description: 'Your website grows with your business.',
    items: [
      { name: 'Add New Features Anytime', detail: 'blogs, booking systems, and more' },
      { name: 'Expand to Ecommerce', detail: 'ready to sell? easily add a store' },
      { name: 'Scale Hosting as You Grow', detail: 'more traffic? no problem' },
      { name: 'Ongoing Support & Updates', detail: 'our pros keep your site running smoothly' },
    ],
  },
]

const smarterGrid = [
  { icon: Layers, title: 'One-Stop Solution', description: 'Forget the hassle of juggling multiple providers. We handle design, hosting, domains, and more — in one seamless solution.' },
  { icon: Settings2, title: 'Fully-Managed Website', description: "Your website should support business — not demand extra work. We take care of setup, updates, and ongoing support so you don't have to." },
  { icon: Palette, title: 'On-Brand Design & Copy', description: 'From compelling visuals to engaging copywriting, we create tailor-made websites that reflect your brand and vision.' },
  { icon: Wallet, title: 'Pricing That Fits You', description: "Our affordable pricing makes great design accessible to all. Our custom solutions fit your budget, whether you're launching or expanding." },
  { icon: MousePointerClick, title: 'Designed to Convert', description: 'With SEO optimization, conversion-focused design, and add-on digital marketing, we help you turn visitors into customers.' },
  { icon: Lock, title: 'Secure and Reliable', description: 'We build your sites with secure and reliable hosting, SSL encryption, and automatic backups so it is always up and running safely.' },
  { icon: LayoutDashboard, title: 'Intuitive CMS', description: "We keep your website a breeze to manage. Our intuitive CMS makes edits simple and we're here if you need ongoing support." },
  { icon: Gauge, title: 'Scales With Your Growth', description: 'Whether you need a simple site today or a full ecommerce solution tomorrow, our scalable options evolve with your needs.' },
  { icon: Wrench, title: 'A Smooth User Experience', description: 'Speed, usability, and performance matter. Join us to create websites that load fast, are optimized for mobile, and provide butter-smooth navigation for a fantastic UX.' },
]

const faqs = [
  { q: 'What are website design services?', a: 'Website design services are professional services offered by web designers (or agencies) to create custom sites for individuals and businesses. While a single designer may only be able to create the site and its visual structure, working with a company like ours gives you the full-service experience — everything from the site\'s overall look to its distinct design features, SEO capabilities, security, scalability, and more. Using our web design services, you get access to everything you need to bring your idea online: domain registration, hosting, and digital marketing are all add-ons you can build into your package. Everything is taken care of under one roof, so you\'re free to focus more fully on the business.' },
  { q: 'How much does it cost to pay someone to design a website?', a: 'The cost varies from one designer or agency to the next, and can increase with more pages or more functionality. A simple 3-5 page website costs way less than a fully-formed ecommerce store. Due to these considerations, we offer tiered pricing for website design needs. Pick a plan that matches your business needs, goals, and plans — our support team is always at hand to help you choose.' },
  { q: 'What services do you offer as a web designer?', a: 'Our core web design services include: a 5 or 7 page website, mobile-friendly designs, web graphics and content taken care of, lead capture and forms integrated, built-in security features, and more. You can always supplement these with add-ons including domain and hosting, payment processing, and digital marketing.' },
  { q: 'Are SEO tools included in your web design services?', a: 'Basic SEO comes built-in with our web design services, but we highly recommend our full-scale digital media treatment to really get your business off the ground. Basic SEO maintains a respectable online presence, but for a highly visible, engaging experience that turns visitors into customers, you want stronger stuff — our digital media services include social media integration, onboarding, maintenance, online ads, influencer marketing, and much more.' },
  { q: 'Can I connect my social media and website?', a: 'Yes. To ensure a cohesive online presence, we design your website so it fully supports your social media presence too. You can connect all the major platforms — Facebook, Instagram, LinkedIn, and YouTube — making it easier for visitors to engage with you across multiple channels.' },
]

export default function WebDesign() {
  return (
    <div>
      <PageHero
        eyebrow="Web Design"
        title="No Cookie-Cutter Websites."
        subtitle="You've built your idea from scratch. Why settle now with a copy-paste website? Work with our top web designers to create a tailor-made website shaped to fit your goals. From personal portfolios to brand-building powerhouses, get a website that's designed to deliver."
        ctaLabel="Get Started"
      />

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">How It Works</h2>
        </Reveal>
        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
          {howItWorks.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-brand-600 shadow-sm">
                  <step.icon size={20} />
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-500">Step {i + 1}</span>
                <h3 className="mt-1.5 font-display font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Find Your Perfect Plan</h2>
            <p className="mt-4 text-slate-500">
              Smart website design means great features, a fair price, and future-ready flexibility.
            </p>
          </Reveal>
          <StaggerGroup className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </StaggerGroup>
          <PricingDisclaimer />
        </div>
      </section>

      {/* Everything your business needs */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Everything Your Business Needs</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featureGroups.map((group) => (
            <StaggerItem key={group.title}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <group.icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-slate-900">{group.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{group.description}</p>
                <ul className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-500" />
                      <span><span className="font-medium text-slate-900">{item.name}</span> — {item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Smarter website grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              A Smarter Website for a Stronger Business
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {smarterGrid.map((f) => (
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
          <Reveal delay={0.1} className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
              Build Your Website <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Closing banner */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Grow your business with the right website by your side.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">Let our pros do the heavy-lifting.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition hover:brightness-95">
              Start Now <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
