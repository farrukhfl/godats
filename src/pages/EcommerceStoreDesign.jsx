import { Link } from 'react-router-dom'
import {
  Zap, Smartphone, Search, ShoppingCart, Sparkles, LayoutDashboard, RefreshCw, Share2,
  SlidersHorizontal, BarChart3, ShieldCheck, Timer, RotateCcw, Cpu, Expand, Compass,
  Megaphone, LifeBuoy, ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import PricingCard from '../components/PricingCard'
import PricingDisclaimer from '../components/PricingDisclaimer'
import FAQAccordion from '../components/FAQAccordion'
import { getStandardTiers } from '../lib/pricingTiers'

const tiers = getStandardTiers({
  startUp: 'To Kick-start Your Business Online',
  growBig: 'Perfect to Grow Your Business',
  goGeek: 'More Power for Your Online Store',
})

const salesFeatures = [
  { icon: Zap, title: 'Ultra-Fast Load Times', description: 'Slow pages cost you money. We design high-performing ecommerce websites that load fast, are always up, and handle traffic spikes like a breeze.' },
  { icon: Smartphone, title: 'Mobile-Optimized Experience', description: 'Built mobile-first so shoppers get a smooth, fast experience on any device.' },
  { icon: Search, title: 'Built-in SEO and Marketing Tools', description: 'Your store comes pre-packaged with all the goodness of modern SEO. Enjoy stronger online visibility, better rankings, and a clear way forward — right on day one.' },
  { icon: ShoppingCart, title: 'Smart Checkout Options', description: 'Make it easy for your customers to pay you. We empower your online store with smart checkout designs and strong security at the root.' },
  { icon: Sparkles, title: 'AI-Powered Personalization', description: 'Integrate with the best AI plug-ins for a hyper personalized shopping experience, from dynamic pricing to product recommendations.' },
]

const managementFeatures = [
  { icon: LayoutDashboard, title: 'Intuitive Dashboard and Controls', description: 'Easily manage products, orders, and settings from a clean, user-friendly dashboard. No tech headaches, no complex controls.' },
  { icon: RefreshCw, title: 'Automated Inventory & Order Syncing', description: 'Sell with efficiency and total control. Your inventory updates instantly, preventing stockouts and overselling.' },
  { icon: Share2, title: 'Multi-Channel Selling', description: 'Sell everywhere your customers shop — social media, your website, marketplaces, and beyond. One store, endless opportunities.' },
  { icon: SlidersHorizontal, title: 'Flexible Store Customization', description: 'Make your store truly yours. Customize layout, features, and functionality — with no coding needed.' },
  { icon: BarChart3, title: 'Real-Time Analytics & Insights', description: 'Make informed decisions about sales, discounts, inventory, and more. Get live data on sales, spot trends, and customer behavior for smarter growth and scaling.' },
]

const durabilityFeatures = [
  { icon: ShieldCheck, title: 'Enterprise-Grade Security', description: 'Our ecommerce web design services are rooted in strong security — encryption, firewalls, fraud protection, and more — to keep your business and customers safe at the store.' },
  { icon: Timer, title: '99.99% Uptime & Reliable Hosting', description: 'Handle traffic spikes like a pro with an ecommerce store that never slows down. Benefit from robust hosting plans that keep your store up and running always.' },
  { icon: RotateCcw, title: 'Automatic Backups & Recovery', description: 'No outdated software, no downtime. We keep your store running fresh with automatic software updates, fixes, and behind-the-scenes tech.' },
  { icon: Cpu, title: 'Built on the Latest Tech', description: 'Our ecommerce web design services keep your store fitted with the latest tech so you\'re always miles ahead of the competition.' },
  { icon: Expand, title: 'Scalable Infrastructure', description: 'More customers? More products? Zero worries. Your responsive ecommerce store is built with cloud-based hosting, load balancing, and optimized caching to ensure sweat-free growth.' },
]

const processSteps = [
  { icon: Compass, title: 'Thoughtful Designs that Deliver You the Right Store', description: "We sit with you to understand your business, audience, and goals. Then design you a responsive ecommerce store that's built with purpose — driving growth, success, and results." },
  { icon: Megaphone, title: 'Digital Marketing Add-Ons That Drive More Sales', description: 'A great store is just the start. Get expert digital marketing support to attract, convert, and retain customers. Our add-on services include SEO, PPC, email marketing, and more.' },
  { icon: LifeBuoy, title: "We Stick With You Beyond the Setup", description: "Our team doesn't disappear after launch. With ongoing training and expert guidance, we ensure you feel confident managing your store. From inventory to marketing and payments to performance, our support evolves with you." },
]

const faqs = [
  { q: 'What is an ecommerce website?', a: 'An ecommerce website is a purpose-built platform where businesses can sell products or services online. It allows customers to browse product galleries, add items to a cart, and complete purchases using secure payment methods — ranging from a small store selling two or three products to a global marketplace like Amazon or eBay. Ecommerce websites vary greatly depending on industry, market, business goals, audience, and product category, so it\'s important to work with experienced ecommerce designers. Our team offers decades of ecommerce design expertise to build an online store tailored to your goals, with expert support and affordable pricing along the way.' },
  { q: 'Why does your business need responsive ecommerce web design?', a: 'Over 70% of all online sales happen on mobile devices. A responsive ecommerce web design is created with a mobile-first approach, ensuring your online store loads and performs perfectly across smartphones, tablets, and more. A fully responsive design offers beautiful online experiences by displaying your store correctly without technical constraints — shoppers see your products properly, enjoy a smooth experience, and benefit from a secure checkout that loads and performs quickly. Mobile responsiveness is an integral part of our design services, so your store is always ready to make sales.' },
  { q: "What's the difference between an ecommerce website and a traditional website?", a: 'An ecommerce website is designed to accept and facilitate transactions — customers can directly make purchases. A traditional website is built to be more informational than transactional (think a fashion magazine site vs. a clothing store site). Some business models mix the two (like a blog selling an online course), but for the most part these remain distinct. If you need a website built to facilitate online sales, you\'re looking for ecommerce web design — built to handle complex operations, better online security, and features designed for business success and growth.' },
  { q: 'Can I use my own domain name with your ecommerce web design services?', a: "Yes. Whether you bring a pre-owned domain or want us to create one from scratch, we can handle it. If you already own a domain and only need our ecommerce design services, talk to our support team and we'll devise a custom plan. We also offer high-performing hosting plans you can pair with your ecommerce store design package. To connect your domain to your new store, you'll just go to your store's admin panel and initiate the request." },
  { q: 'What kind of tech knowledge do I need to run an online store?', a: 'Almost none. When you collaborate with our ecommerce web design experts, all the technical aspects are taken care of — you provide the vision, ideas, and goals, while we manage the backend: layout, functionality, plugins, development, design, and maintenance. That said, our team offers ongoing training every step of the way so you\'re informed and able to manage things expertly as you grow more comfortable.' },
]

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <StaggerItem>
      <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
          <Icon size={20} />
        </span>
        <h3 className="font-display font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
    </StaggerItem>
  )
}

export default function EcommerceStoreDesign() {
  return (
    <div>
      <PageHero
        eyebrow="E-commerce Store Design"
        title="Sell More Online"
        subtitle="Profit from an ecommerce store that's designed to make you money."
        bullets={[
          'Fully responsive, high-impact designs',
          'Packed with the power of WooCommerce',
          'Engineered for easy shopping',
        ]}
        ctaLabel="Build My Store"
      />

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Choose Your Plan</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </StaggerGroup>
        <PricingDisclaimer />
      </section>

      {/* Optimized for sales */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Optimized for More Sales, Every Step of the Way
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salesFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
          </StaggerGroup>
        </div>
      </section>

      {/* Effortless management */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Effortless Management, Even as You Scale
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {managementFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
        </StaggerGroup>
      </section>

      {/* Built to last */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Built to Last — Secure, Stable, & Future-Ready
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {durabilityFeatures.map((f) => <FeatureCard key={f.title} {...f} />)}
          </StaggerGroup>
        </div>
      </section>

      {/* How we build better ecommerce */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Here's How We Build Better Ecommerce
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {processSteps.map((s) => (
            <StaggerItem key={s.title}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <s.icon size={20} />
                </span>
                <h3 className="font-display font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Closing banner */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Our ecommerce web design experts are at hand. Let's talk business.
            </p>
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
