import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <Reveal className="relative text-center">
        <Compass size={40} className="mx-auto mb-6 text-brand-500" />
        <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-500">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
          Back to Home <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  )
}
