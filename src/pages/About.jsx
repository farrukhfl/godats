import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Globe2, LineChart, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import StatCounter from '../components/StatCounter'

const facts = [
  { icon: MapPin, text: 'We are based in Chicago, Illinois' },
  { icon: Globe2, text: 'Powered by a team of local and global experts' },
  { icon: LineChart, text: 'Our core expertise is fintech (great news for you businesses!)' },
  { icon: Users, text: 'Local businesses love us' },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Since 2009"
        title="Simplifying Online Success"
        subtitle="15 years ago, we made digital easier. Today, we're still your stress-free solution. Whether you're looking for powerhouse hosting or high-performance web experiences, we've built GoDats as your trusted digital ally."
        ctaLabel="Learn More"
        ctaTo="/contact"
      />

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">The GoDats Story</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 flex flex-col gap-5 text-slate-500">
          <p>Every great invention starts with a simple goal: to make life easier. That's why we built GoDats.</p>
          <p>
            Early in 2009, we set out to take our business online. A straightforward task that turned out to be
            anything but. While we did find some of the best experts to work with, coordinating multiple teams,
            keeping track of tasks, and ensuring everything stayed on schedule quickly turned overwhelming.
          </p>
          <p>We knew there had to be an easier way to do it.</p>
          <p>
            So we built GoDats. A one-stop solution to all these worries. One dedicated team to take care of
            everything from start to end. One point person for each client. No multiple service providers, no
            worries, and no hassle. Just pure ease of letting experts handle the digital while you focus on the
            business.
          </p>
          <p>Today, 15 years later, we're still doing just that. From entrepreneurs to enterprises, making digital easy for all.</p>
        </Reveal>
      </section>

      {/* What drives us */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">What Drives Us</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 flex flex-col gap-5 text-slate-500">
            <p>
              Our mission is simple: make it as easy as possible for businesses to get online — and thrive. We
              believe (and know) that digital growth isn't complicated. You just need a team of absolute experts to
              handle it all, while you focus on the business. No need to juggle multiple vendors, take endless calls,
              or chase after deliverables.
            </p>
            <p>
              GoDats is designed to respond to all your digital access needs — domain, hosting, website, marketing,
              and payments — under one roof. So you can get online fast, grow far, and become the next big name they
              line up for.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Some Facts About Us</h2>
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {facts.map((f) => (
            <StaggerItem key={f.text}>
              <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                  <f.icon size={20} />
                </span>
                <p className="text-sm font-medium text-slate-700">{f.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Culture */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">The GoDats Culture</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 flex flex-col gap-5 text-slate-500">
            <p>
              Great work is only possible with great people around. Brilliant minds who feel valued, happy, and
              driven to succeed together. That's why we have built a culture of creativity, collaboration, and
              continuous learning — minus the pointless meetings — that attracts this top talent.
            </p>
            <p>
              At GoDats, we build each other up, make better decisions, and create smarter solutions. Most of all,
              we've got each other's backs. Teamwork isn't just a value, it's how we win.
            </p>
            <p>Join us and let's build something great together.</p>
          </Reveal>
        </div>
      </section>

      {/* Closing banner + stats */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Digital shouldn't be complicated. We've spent 15 years making sure it isn't. Contact us today for
              stress-free online success.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-600 shadow-lg transition hover:brightness-95">
              Contact Us <ArrowRight size={16} />
            </Link>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-10">
              <StatCounter light value="2M+" label="Total Downloads" />
              <StatCounter light value="150+" label="Design Resources" />
              <StatCounter light value="4.9" label="Users Rating" />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
