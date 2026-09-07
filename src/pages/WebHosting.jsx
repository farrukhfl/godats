import { Link } from 'react-router-dom'
import {
  Globe, Server, PenTool, TrendingUp,
  ArrowRight,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import PricingCard from '../components/PricingCard'
import PricingDisclaimer from '../components/PricingDisclaimer'
import FAQAccordion from '../components/FAQAccordion'
import { getStandardTiers } from '../lib/pricingTiers'

const tiers = getStandardTiers({
  startUp: 'Suitable for Portfolio Sites',
  growBig: 'Perfect to Grow Online',
  goGeek: 'For High-performing Websites',
})
tiers[0].icon = '/images/hosting/web/icon-startup.png'
tiers[2].icon = '/images/hosting/web/icon-gogeek.png'

const featureBlocks = [
  { iconImg: '/images/hosting/web/icon-ultra-fast.svg', title: 'Ultra–fast, every time', description: "Delight your customers with your site's blazing fast speed. Supercharge your sales funnel with page load times that never falter. From arrival to exit, we promise high-speed performance, no matter when or where." },
  { iconImg: '/images/hosting/web/icon-bandwidth.svg', title: 'Bottomless Bandwidth', description: 'We deliver resources on-demand as your business grows from a passion project to a thriving success. Get more CPU, unlimited storage, and scalable bandwidth that supports your wins.' },
  { iconImg: '/images/hosting/web/icon-secure.svg', title: 'Strong & Secure Connections', description: 'Grow with confidence as our top-tier security infrastructure keeps a close watch on your site. Enjoy seamless data safety, free SSL encryption, DDoS protection, and advanced firewalls that guard your site 24/7.' },
  { iconImg: '/images/hosting/web/icon-support.svg', title: 'Support That Never Sleeps', description: "Think of us as your on-demand tech team that's always ready to jump in with solutions, support, and guidance. From simple queries to complex troubleshooting, we've got your back so you can focus on the business." },
]

const solutions = [
  { icon: Globe, title: 'Domain Registration', description: 'We begin the process of bringing you online. This starts with a domain name selection that reflects who you are as a brand and your vision for the future. Our domain registration process is hassle-free, and you have thousands of unique domain extensions to choose from. We also offer the most spotless WHOIS privacy protection, automatic renewals, and DNS management tools to keep your domain secure and under your control always.' },
  { icon: Server, title: 'Reliable Hosting', description: 'Keep running at peak performance with our powerful hosting plans. With 99.9% uptime, SSD storage for faster load times, and automatic backups, we deliver you a website that never tires. Regardless of traffic spikes or growth, our hosting is designed to be lithe and responsive. Whether you are launching a personal site or a high-performing one, our powerful and secure hosting services provide you with the perfect foundation to scale, grow, and succeed nonstop.' },
  { icon: PenTool, title: 'Web Building & Design', description: 'A good looking website is your most valuable online currency. Striking visuals, original photography, engaging imagery, and well-formatted content brings the audience in and keeps them hooked. Benefit from our custom web design services where we create your sites from scratch. Fully-personalized to your goals and needs, laden with the latest SEO goods, and responsive to the max, our web design services give you a professional digital storefront that\'s designed for success.' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'Drive traffic, boost engagement, and delight your fans with digital marketing intelligence that works fast. From SEO to PPC and social media to email campaigns, our digital marketing experts provide you with strategies that bring in impact and influence. Whether you want to improve brand authority or increase engagement, we deliver you data-driven marketing that brings measurable results.' },
]

const hostingTypes = [
  { iconImg: '/images/hosting/web/icon-shared.svg', title: 'Shared Hosting', description: 'An affordable hosting situation where your site is hosted on a server with several other neighbors. You all share resources but also spend less. Perfect for personal websites or small businesses just getting started online!', to: '#pricing' },
  { iconImg: '/images/hosting/web/icon-wordpress.svg', title: 'WordPress Hosting', description: "Hosting that's specifically designed to run WordPress websites smoothly and efficiently. If WP is your jam, this is the hosting plan that suits you best.", to: '#pricing' },
  { iconImg: '/images/hosting/web/icon-vps.svg', title: 'Virtual Private Server (VPS)', description: 'Get more control with your own private space on the server. VPS offers the best operational and performance balance between shared hosting and dedicated servers.', to: '/contact' },
  { iconImg: '/images/hosting/web/icon-dedicated.svg', title: 'Dedicated Servers', description: 'For those seeking maximum control, security, and performance. Dedicated servers are the most powerful options where you have an entire server to yourself.', to: '/contact' },
  { iconImg: '/images/hosting/web/icon-cloud.svg', title: 'Cloud Hosting', description: 'Ensure high uptimes and easy scalability with flexible cloud hosting solutions. Give your website access to multiple servers for speed times and efficiency that never stops.', to: '/cloud-hosting' },
  { iconImg: '/images/hosting/web/icon-reseller.svg', title: 'Reseller Hosting', description: 'Make your mark with our white-labeled hosting plans that offer top-tier hosting technology, unmetered bandwidth, unmatched security, and a friendly customer service dedicated to your success.', to: '/reseller-hosting' },
]

const faqs = [
  { q: 'What is a web hosting service?', a: 'A web hosting service is a platform that provides individuals and businesses space on specially designed computers that store their website data. A hosting server is essentially a computer that "hosts" your website, ensures it remains accessible online, and runs smoothly at all times. Without hosting, your site remains invisible to the world. While you do need a hosting provider to make your website go "live" online, choosing the right one is the real task. You want to pay attention not only to affordable hosting pricing but also technology and support that ensures your site suffers no downtime (affecting traffic and causing losses) and you have expert technical help when you need it the most. As a full-service website solutions provider, we offer you web hosting that\'s fully managed, priced to your needs, with the latest technology to boot, and primed to your success.' },
  { q: 'What is the difference between hosting and website services?', a: 'Hosting refers to a very specific service where you buy server space from a hosting provider to put your website online. Website services, on the other hand, are more varied and broader. They encompass a whole suite of related products or services that you need to successfully run a business online. These include domain search, domain registrations, hosting, website development and design, maintenance, and more. As a full-service business solutions provider with a fintech core, we go a step beyond. We empower your online business with the safest, most secure, and fully agile payment processing solutions that allow you to manage your money smartly. We also offer digital marketing solutions so you can promote your business with fully managed services from day one.' },
  { q: 'What are the benefits of shared web hosting?', a: "Shared web hosting is the best hosting solution for those just starting online. Here's why: Affordable — since you're sharing space and resources with other web owners, you all split the bill when it comes to expenses, so costs remain low without any sacrifices to quality. Stress-free management — this is a managed hosting service where we take full responsibility for managing the server, including all technical tasks, setups, security updates, performance monitoring, and tech support. Scalable with built-in features — shared hosting is perfect for sites that receive low to moderate traffic and thus don't require a ton of server resources; we also offer pre-installed features such as domain search, web design, and digital marketing to offer you a one-stop-shop experience. Give your new business the best shot at success with shared web hosting that lets you do more online with less." },
  { q: 'Is technical knowledge required to use shared web hosting?', a: "No. Since shared web hosting is a managed service, you don't require any technical experience or expertise to maintain your website online. We take care of everything from setup to support to ensure your site remains up and awake at all times." },
]

export default function WebHosting() {
  return (
    <div>
      <PageHero
        eyebrow="Web Hosting"
        title="Connect your website to the internet with our perfect hosting plans"
        subtitle="Experience uninterrupted connections, blazing-fast speed, and custom hosting plans that answer your true needs."
        bullets={[
          'Lightning-quick load times with optimized hosting servers',
          'Strong security with SSL, DDoS protection, & daily backups',
          'Reliable hosting servers that guarantee 99.9% uptime',
          'Shared, VPS, and dedicated servers tailored to your needs',
          'Effortless WordPress and CMS hosting and built-in ecommerce support',
        ]}
        ctaLabel="Find Your Plan"
        ctaTo="#pricing"
      />

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Fast, Secure, and Built for You
          </h2>
          <p className="mt-4 text-slate-500">Choose your perfect plan</p>
        </Reveal>
        <StaggerGroup className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </StaggerGroup>
        <PricingDisclaimer />
      </section>

      {/* Feature blocks */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Web hosting that makes your life a whole lot easier
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureBlocks.map((f) => (
              <StaggerItem key={f.title}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 group transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <img src={f.iconImg} alt="" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{f.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Full-bodied solutions */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Full-Bodied Business Solutions Ready to Take You Live
          </h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {solutions.map((s) => (
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

      {/* Choose your hosting */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Choose your hosting</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hostingTypes.map((h) => (
              <StaggerItem key={h.title}>
                <Link
                  to={h.to}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                    <img src={h.iconImg} alt="" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold text-slate-900">{h.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{h.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Closing banner */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to go live?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Power your website with a hosting plan that's made for you.
            </p>
            <Link to="#pricing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition hover:brightness-95">
              Buy your plan <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} />
    </div>
  )
}
