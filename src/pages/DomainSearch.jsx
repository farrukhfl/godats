import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Globe, ShieldCheck, RefreshCw, Tag, CheckCircle2, XCircle, Loader2,
  ArrowRight, Mic, Wand2, Gem,
} from 'lucide-react'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import FAQAccordion from '../components/FAQAccordion'
import { useParallax } from '../lib/useParallax'
import { checkDomainAvailability, CHECK_TLDS } from '../lib/domainCheck'

const valueProps = [
  { icon: Tag, title: 'Straightforward Pricing, No Gotchas', description: 'Unlike big registrars that lure you in with cheap first year prices and steep renewals, we keep it transparent: no surprise fees, no forced upsells.' },
  { icon: RefreshCw, title: 'Fast, Hassle-Free Setup', description: 'Register your domain with us in minutes. Our streamlined process is a no-frills approach that keeps everything efficient. Find what you like and get online fast.' },
  { icon: Globe, title: 'More Than Just a Domain', description: 'Need hosting, email, or a custom website? We offer seamless integration with everything you need to run and grow your business online. All in one place.' },
  { icon: ShieldCheck, title: 'Real Support, Real People', description: 'No chatbots and no endless ticket loops. Get expert help when you need it from a team who actually cares about your success.' },
]

const domainRoof = [
  { iconImg: '/images/domain/icon-1.svg', title: 'Free Registration', description: 'Our turn key domain setup solutions come with hosting, branding, and site design, all in one neat package. So you receive your domain registration at no extra cost. Instant, brand-ready convenience!' },
  { iconImg: '/images/domain/icon-2.svg', title: 'Free Domain Privacy Protection', description: 'After you register your domain, your personal information becomes public on databases like WHOIS. Guided by our IT foundations, we offer the highest levels of compliance and protection to keep your data secure from third-party access.' },
  { iconImg: '/images/domain/icon-3.svg', title: 'Sweat-Free Transfers', description: 'Keep your site alive and well as you move it from your current host to us. We offer a straightforward setup with just a few clicks, ensuring no downtime and no problems during the move.' },
]

const remember = [
  { title: 'Short is sweet', description: 'The best domain names are short and easy to recall. Use acronyms for longer business names. Ex: Johnson & Johnson becomes jnj.com but try and keep things under 3-words long to aid maximum recall.' },
  { title: 'Keep it simple', description: 'No numbers, hyphens, slangs, or special characters in your domain name. Avoid misspellings by registering misspellings of your domain name and more than one extension to protect your brand name.' },
  { title: 'Must be branded', description: 'A branded domain strengthens identity, boosts trust, improves SEO, and prevents confusion. If unavailable, use keywords like Get[YourBrand].com or [YourBrand]Online.com for a relevant and memorable alternative.' },
  { title: 'Is it available?', description: "Before registering your branded domain, ensure the name hasn't been trademarked before. Also add social media handles to ensure consistency across your domain URL, ecommerce storefront, social media pages, and the physical shop." },
  { title: 'Consider the extension', description: "Don't put all your eggs in the .com basket. Try alternatives that can be cheaper and more useful. Country-specific extensions are great for local SEO, niche-specific ones bring a higher level of user trust, and creative ones like get.fit let you include a CTA right there in your domain!" },
  { title: 'Register right away', description: 'Great domains fly out fast. Pick yours the moment you find it and register immediately. Business owners usually buy more than one domain extension for their branded domains to reduce competition and confusion.' },
]

const futureProof = [
  { icon: Mic, title: 'Plan for voice search', description: "Voice search has become the norm. Get yourself a domain name that's easier to pronounce and remember. That means clear words and shorter names." },
  { icon: Wand2, title: 'Adopt niche domains', description: "Show your audience you're not just another .com. Niche domains can set you up for instant rapport with audiences. Adopt .xyz, embrace .earth, and satisfy shoppers with .store!" },
  { icon: Gem, title: 'Be creative!', description: 'Your exact match domain already taken? Time to get creative. Elevate your URL and make your brand name stand out with unique TLDs like .myway, .care, .dev, .secure, and so many more!' },
]

const faqs = [
  { q: 'What is a domain name?', a: "In the simplest terms, the domain name is your web address on the internet. It's an easy-to-remember name given to your unique IP address (a string of characters and numbers) online. When you type in godats.com to find us, you're typing in our domain name into your browser. The domain name consists of two parts: the site name (godats), also known as the second-level domain, and the TLD (top-level domain) extension (.com). All domain names are unique identifiers, with no two being exactly the same." },
  { q: 'What is a domain name search?', a: "It's the process where you use an online tool or service to see if your desired domain name is available. Since there can only be one domain name of a kind, the search can become competitive and exhaustive. Most businesses secure a .com domain because it's the default for users searching for new brands. To stay ahead of the competition, we suggest either coming up with a creative business/website name so its .com TLD will be available, or going with another domain extension that's descriptive, niche-specific, and sets you apart from the crowd." },
  { q: 'How do I buy a domain name?', a: "Buying your domain name with us is quick and easy but also very intentional — just fill out the form or buy one of our website packages to get things going. Unlike most other domain registrars, we offer a personalized approach: no automatic domain searches forcing you to pick from a handful of available options. We dive in deep to find domain names and TLDs that align with your industry, market, and business goals, plus protective domain registrations to prevent competitors, typosquatting, or user confusion." },
  { q: 'Can I have multiple domains for the same business?', a: 'Yes, a business should have multiple domains to protect its brand, capture more traffic, and avoid user confusion. This includes: defensive domains (misspellings, plural forms, hyphenated versions), different TLDs (.net, .org, country-specific domains), and marketing-specific domains (campaign URLs, keyword-rich domains). These can redirect to your main site, ensuring users always find you even if they mistype. Focus on quality over quantity to avoid unnecessary costs and complexity.' },
  { q: 'Can I change my domain name after registration?', a: 'Unfortunately, a domain name cannot be changed once registered. You can buy a new domain and redirect traffic from the old website, but that can be a lot of work depending on how old or populated the site is, and might require a rebrand. We recommend being careful when finalizing your domain name — confirm it matches your long-term business goals and industry practices.' },
  { q: 'What is domain privacy?', a: 'Domain privacy is a service that hides your domain profile data from public databases like WHOIS. Without this protection, your personal information (name, email, phone number, address) can be publicly accessible. We offer domain privacy protection as an integral part of all our domain registration services.' },
  { q: 'Can I do a domain name search by the owner?', a: "Yes, you can look up a site's owner via ICANN's WHOIS lookup tool. By entering the domain name, you can view who the site's owner is and their publicly available information. We offer stringent domain privacy protection services as part of our domain registrations to keep these details safe." },
]

function DomainSearchBox() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | results
  const [results, setResults] = useState([])

  async function handleSearch(e) {
    e.preventDefault()
    const clean = query.trim()
    if (!clean) return
    setStatus('loading')
    const data = await checkDomainAvailability(clean, CHECK_TLDS)
    setResults(data)
    setStatus('results')
  }

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="yourbusiness"
            maxLength={63}
            autoComplete="off"
            spellCheck={false}
            className="w-full rounded-full border border-slate-200 bg-slate-100 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-400/50 focus:bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
          {status === 'loading' ? 'Searching…' : 'Search Domain'}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {status === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-sm"
          >
            {results.map((r, i) => (
              <motion.div
                key={r.domain}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ${r.available ? 'bg-brand-50' : 'bg-slate-50'}`}
              >
                <div className="flex items-center gap-3">
                  {r.available ? (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  ) : (
                    <XCircle size={18} className="shrink-0 text-slate-300" />
                  )}
                  <span className={`text-sm font-medium ${r.available ? 'text-slate-900' : 'text-slate-400 line-through'}`}>
                    {r.domain}
                  </span>
                </div>
                {r.available ? (
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:brightness-110 active:scale-95"
                  >
                    ${r.price.toFixed(2)}/yr <ArrowRight size={12} />
                  </Link>
                ) : (
                  <span className="text-xs font-medium text-slate-400">Taken</span>
                )}
              </motion.div>
            ))}
            <p className="px-1 pt-1 text-center text-xs text-slate-400">
              Availability and pricing shown here are a preview — final availability and price are confirmed by our team before you check out.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function DomainSearch() {
  const blobA = useParallax(20)
  const blobB = useParallax(-28)

  return (
    <div>
      <section
        onMouseMove={(e) => {
          blobA.onMouseMove(e)
          blobB.onMouseMove(e)
        }}
        className="relative overflow-hidden bg-white pb-24 pt-40 sm:pt-48"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <motion.div
          style={{ x: blobA.x, y: blobA.y }}
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl animate-float-slow"
        />
        <motion.div
          style={{ x: blobB.x, y: blobB.y }}
          className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl animate-float-slower"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-block rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500"
          >
            Domain Search
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Find your dream domain here
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 font-display text-xl font-semibold text-brand-600"
          >
            Or transfer a domain you already own.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-lg text-slate-500"
          >
            Dolphin Advanced Technology Services offers hundreds of domain names to choose from. Go global or think local — we'll find you a domain that fits your goals.
          </motion.p>

          <DomainSearchBox />
        </div>
      </section>

      {/* Smarter search experience + value props */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right" className="text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">A smarter search experience</h2>
            <p className="mt-4 text-slate-500">
              We help you find the perfect domain, not just push whatever's available. Use our intuitive filters and expert suggestions to find a domain that fits your brand.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center rounded-2xl bg-brand-50/60 py-8 lg:justify-self-end">
            <img src="/images/domain/hero-illustration.png" alt="" loading="lazy" className="w-full max-w-[280px]" />
          </Reveal>
        </div>
        <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <ServiceCard key={v.title} {...v} />
          ))}
        </StaggerGroup>
      </section>

      {/* All things domain */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">All Things Domain — Under One Roof</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {domainRoof.map((f) => (
              <StaggerItem key={f.title}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <img src={f.iconImg} alt="" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TLD chip list */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Find the Perfect Domain for Your Brand</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
          {CHECK_TLDS.map((tld) => (
            <span key={tld} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-600">
              .{tld}
            </span>
          ))}
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
            Learn More <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Things to remember */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Things to Remember Before You Buy a Domain</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {remember.map((r, i) => (
              <StaggerItem key={r.title}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="mb-3 font-display text-2xl font-bold text-brand-500/20">0{i + 1}</span>
                  <h3 className="font-display font-semibold text-slate-900">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{r.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Future-proof tips */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Future-Proof Your Domain Name</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {futureProof.map((f) => (
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

      {/* Closing */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-10 sm:p-14 lg:grid-cols-[auto_1fr] lg:items-center lg:text-left text-center">
          <img src="/images/domain/support.png" alt="" loading="lazy" className="mx-auto h-40 w-auto rounded-2xl lg:mx-0" />
          <div>
            <p className="mx-auto max-w-xl text-lg text-slate-600 lg:mx-0">
              Still searching for your perfect domain name? Click on the button below to fill out a short form and let our experts help you out.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
              Get Help <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
