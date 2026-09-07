import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe, Smartphone, BrainCircuit, ArrowRight, Palette,
  TrendingUp, Headphones, LayoutGrid, Store, RefreshCw,
  ShoppingCart, Layers, Star, Cloud, PenTool,
} from 'lucide-react'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import CardSlider from '../components/CardSlider'
import FAQAccordion from '../components/FAQAccordion'
import BannerCarousel from '../components/BannerCarousel'
import { useParallax } from '../lib/useParallax'

const bannerSlides = [
  { src: '/images/home/banner-talent.png', alt: 'Great talent, merging with great tech' },
  { src: '/images/home/banner-fintech.png', alt: 'Producing phenomenal fintech' },
  { src: '/images/home/banner-process.png', alt: 'The DATS process is simple' },
  { src: '/images/home/banner-appdev.png', alt: 'App development by DATS' },
]

const quickTiles = [
  { label: 'App Development', icon: Smartphone, to: '/app-development' },
  { label: 'AI Consulting', icon: BrainCircuit, to: '/ai-consulting' },
  { label: 'ERP Consulting', icon: Layers, to: '/erp-consulting' },
  { label: 'Cloud Hosting', icon: Cloud, to: '/cloud-hosting' },
  { label: 'Web Design', icon: PenTool, to: '/web-design' },
]

const thriveCards = [
  { image: '/images/home/domains.gif', title: 'Domains', description: "Secure your brand's identity with fast, hassle-free domain registration. Professional setup, ongoing support, and full control in one place.", to: '/domain-search' },
  { image: '/images/home/hosting-security.gif', title: 'Hosting & Security', description: 'Reliable, high-speed hosting with 99.99% uptime, SSL, and built-in security — everything your business needs to stay live and protected.', to: '/cloud-hosting' },
  { image: '/images/home/app-development.gif', title: 'App Development', description: 'Launch sleek, scalable mobile or web apps built for performance. From concept to code, we handle it all. Fast, flawless, and friction-free.', to: '/contact' },
  { image: '/images/home/ai-erp.gif', title: 'AI & ERP Consultation', description: 'Align operations and cut costs with expert AI and ERP consulting: smarter systems, better decisions, and measurable impact all the way through.', to: '/erp-consulting' },
]

const featureBlurbs = [
  { icon: Globe, title: 'Reliable Domain + Hosting', description: 'Get your business on the web with a matching domain + email, beefed up security, and blazing fast hosting. Keep your site alive and kicking no matter the traffic surges.' },
  { icon: TrendingUp, title: 'Digital Marketing Add-ons', description: 'Show off your brand to the world with our digital marketing tools aligned to your goals. From paid ads to social engagement, and influencer marketing to PR, get everything you need.' },
  { icon: Palette, title: 'Custom Branding Solutions', description: 'Stand out with tailor-made logos and website designs created exclusively for you. Built in with modern SEO, a blogging suite, and ecommerce opportunities, your custom sites are ready for traction!' },
  { icon: Headphones, title: 'Dedicated Support, 24/7', description: 'Looking for technical support? Customer services? Social media onboarding? Our team is here to help. We take care of the details so you can focus on the big picture.' },
  { icon: LayoutGrid, title: 'One-Stop-Shop Services', description: 'Experience the cohesion of a centralized service taking care of all your business needs — from the right domain to intentional marketing. All under one roof, designed for growth.' },
]

const ecommerceFeatures = [
  { icon: Store, title: 'Ready-to-go eShop templates', description: 'Pick a design, add your logo, and you’re live — no developer needed.' },
  { icon: RefreshCw, title: 'Real-Time inventory sync', description: 'Sell in-store and online without risking oversells — stock levels update automatically.' },
  { icon: ShoppingCart, title: 'Omnichannel checkout', description: 'One cart for in-store and online sales — charge the same way, track in one dashboard.' },
  { icon: Layers, title: 'Catered to retail verticals', description: 'Templates and features pre-configured for convenience stores, clothing shops, grocery/specialty food, pet stores, gift shops, and more.' },
]

const testimonials = [
  { name: 'Jeniffer Smith', role: 'Chef', rating: 4.5, quote: "GoDats took our restaurant online in days, not months. The site looks sharp and orders haven't stopped since launch." },
  { name: 'Pamela Duncan', role: 'Director', rating: 4, quote: 'Having one team handle hosting, design, and support instead of five vendors changed how we operate. Genuinely stress-free.' },
  { name: 'Steve Tailor', role: 'CFO', rating: 4.5, quote: 'The ERP consulting alone paid for itself within a quarter. Clear process, no jargon, real results on our books.' },
]

const faqs = [
  { q: 'What are website domains?', a: "A website domain is a unique name that identifies a website on the internet. It's the name in a URL that comes after the \"www.\" part. For example, if you wanted to visit Google, you'd type in google.com, which is the company's domain name, in the browser. Domain names are simplified forms of IP addresses to make them easy to remember and recall for users. Domain names are almost always branded — each one unique to a business, person, or idea." },
  { q: 'What is the difference between domain and web hosting?', a: "A domain is your website's address — like yourbusiness.com — that people type to find you online. It's the name that represents your brand on the internet. Web hosting is where your website's files, images, and data are stored. It's the server that makes your site accessible to visitors. Think of it like a house (hosting) and its address (domain) — you need both to be online! With DTS at your side, you can have a dedicated domain plus a managed hosting service to keep your business running smoothly online." },
  { q: 'What is a web design service?', a: 'A web design service creates visually appealing, user-friendly websites that reflect your business and help meet your business goals. It includes everything from great visuals — colors, typography, and imagery — to functional details like navigation and responsiveness to maximize a site’s user experience, ensuring it fulfills all business needs. As a technology services solution, we specialize in custom web design and development, making it a part of our core service package to ensure all your digital presence needs are fulfilled under one roof.' },
  { q: 'Why do I need a website for my business?', a: 'Your website is your most essential presence online. While your social media pages work too, the website brings elevated levels of credibility to the game and inspires trust. A website helps businesses with a range of tasks and goals: establish a business’ presence online, promote its products and services, announce new offers, run campaigns, and make sales, present their brand and compete with bigger businesses, and elevate their brand positioning and improve brand equity. Together with our expert designers, copywriters, and developers, we are here to deliver you a website that drives results.' },
  { q: 'Why do I need a professional email?', a: 'A professional email address that matches your domain is what customers expect to see from a legitimate business. Anything that ends generically with @gmail.com or @yahoo.com won’t have the same ring to it that you@yourbusiness.com can carry. In addition to legitimacy, a professional email also builds trust, strengthens branding, enhances security, improves deliverability, and looks more professional — while keeping work and personal communication separate. To help our clients put their best brand face forward, we offer professional and matching email accounts with all our services.' },
]

export default function Home() {
  const blobA = useParallax(24)
  const blobB = useParallax(-32)

  return (
    <div>
      {/* Hero */}
      <section
        onMouseMove={(e) => {
          blobA.onMouseMove(e)
          blobB.onMouseMove(e)
        }}
        className="relative overflow-hidden bg-white pb-20 pt-40 sm:pt-48"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <motion.div
          style={{ x: blobA.x, y: blobA.y }}
          className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl animate-float-slow"
        />
        <motion.div
          style={{ x: blobB.x, y: blobB.y }}
          className="pointer-events-none absolute -right-32 top-32 h-[26rem] w-[26rem] rounded-full bg-brand-400/15 blur-3xl animate-float-slower"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500"
          >
            The GoDats Group · Since 2009
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl"
          >
            Great talent,<br className="hidden sm:block" /> merging with <span className="text-gradient">great tech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-500"
          >
            Everything you need to get your business on the web. Domain names, cloud hosting, app development, AI and ERP consultation, and more. It all starts here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
              Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-brand-400/40 hover:text-brand-500">
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Quick service tiles — auto-sliding marquee */}
        <Reveal delay={0.1} className="relative mt-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...quickTiles, ...quickTiles].map((tile, i) => (
              <Link
                key={`${tile.label}-${i}`}
                to={tile.to}
                className="group flex w-40 shrink-0 flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center transition hover:border-brand-400/30 hover:bg-slate-50 sm:w-48"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <tile.icon size={20} />
                </span>
                <span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 sm:text-sm">{tile.label}</span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="px-6">
          <BannerCarousel slides={bannerSlides} />
        </Reveal>
      </section>

      {/* POS product spotlight */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-50 p-10 sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <span className="mb-4 inline-block rounded-full bg-brand-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-500">
                  One of our companies
                </span>
                <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                  Meet the POS system that's upgrading retail as we speak
                </h2>
                <p className="mt-5 text-slate-500">
                  Native dual pricing. Faster checkouts. Omnichannel payments. Smart inventory. Self-service kiosks. And zero workarounds.
                </p>
                <p className="mt-3 text-slate-500">
                  Dolphin POS runs retail like it's second nature. From plug-and-play hardware to super-efficient software, it's the POS that's ready for whatever you're selling.
                </p>
                <p className="mt-3 font-medium text-slate-600">
                  Intuitive, customizable, and good-looking. Exactly what a POS should be.
                </p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
                  Contact <ArrowRight size={16} />
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-3">
                  {['Dual Pricing', 'Smart Inventory', 'Omnichannel', 'Self-Service Kiosks'].map((f) => (
                    <div key={f} className="rounded-xl border border-slate-200 bg-white px-4 py-5 text-sm font-medium text-slate-700">
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Get online fast */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Get online fast</h2>
            <p className="mt-5 text-slate-500">
              From dynamic apps to purposeful AI, businesses seek us out for their digital excellence needs. Whether you're looking for groundbreaking innovation or streamlining your ops with ERP, our team is ready to help you upgrade.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {[
                'In-house engineers for on-demand custom development — no templates',
                'Fully owned data centers that deliver the best-in-class hosting and security',
                'Future-focused fintech development that pairs disruption with purpose',
                'Expert consultations to ensure you only get the IT solutions you really need',
                '24/7 product and support expertise that keeps your business moving',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center rounded-2xl bg-brand-50/60 py-8">
            <img
              src="/images/home/get-online-fast.png"
              alt="Go live 10x faster, secure and reliable, 24/7 support"
              className="w-full max-w-[280px]"
            />
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { icon: Palette, title: 'Brand your idea', description: 'Team up with our designers to give your idea a logo design that stands out. Custom designs every time! Smart, stylish, and built to last.' },
            { iconImg: '/images/home/icon-build-website.svg', title: 'Build your website', description: 'Create websites that drive results. We do all the heavy lifting. SEO-rich sites, responsive designs, with ecommerce features.' },
            { iconImg: '/images/home/icon-boost-growth.svg', title: 'Boost your growth', description: 'Speed-dial your growth with personalized digital solutions. Organic, paid, and AI — meet your customers wherever they make decisions.' },
          ].map((pitch) => (
            <StaggerItem key={pitch.title}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  {pitch.iconImg ? <img src={pitch.iconImg} alt="" className="h-5 w-5" /> : <pitch.icon size={20} />}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-slate-900">{pitch.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{pitch.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Everything you need to thrive online */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need to thrive online</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <CardSlider slides={thriveCards} />
        </Reveal>
      </section>

      {/* The Dolphin Advanced Technology Services */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">The Dolphin Advanced Technology Services</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureBlurbs.map((f) => (
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

      {/* Bring your store online */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Bring your store online</h2>
            <p className="mt-5 text-slate-500">
              Don't let "tech setup" slow you down. Launch a branded e-shop in hours, automatically sync inventory, and start selling to anyone, anywhere — no coding required.
            </p>
            <Link to="/ecommerce-store-design" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
              Launch My eStore <ArrowRight size={16} />
            </Link>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ecommerceFeatures.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <f.icon size={18} />
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-500">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Loved by businesses like yours</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <div className="mb-4 flex gap-0.5 text-brand-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill={i < Math.round(t.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">"{t.quote}"</p>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Fintech for the future */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <img src="/images/home/fintech.png" alt="" className="mx-auto mb-6 h-28 w-auto rounded-xl sm:h-32" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Fintech for the Future</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/80">
              Here for the long-term impact? So are we. With ethical innovation, sustainable growth, and resilient infrastructure, we are building fintech solutions that will drive the future.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              From digital financial access to disruptive financial ecosystems, we are here to flip the script.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition hover:brightness-95">
              Join Us <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
