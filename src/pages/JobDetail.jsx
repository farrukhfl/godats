import { Link, useParams } from 'react-router-dom'
import { CalendarDays, Briefcase, Clock, MapPin, CheckCircle2, ArrowLeft } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import { getJobBySlug } from '../lib/jobs'

const applicationFields = [
  { name: 'fullName', label: 'Full Name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'bio', label: 'Bio', type: 'textarea', required: true, full: true },
  { name: 'resume', label: 'Upload CV/Resume', type: 'file', accept: '.pdf,.doc,.docx', required: true, full: true },
  { name: 'dataConsent', label: 'By using this form you agree with the storage and handling of your data by this website.', type: 'checkbox', required: true, full: true },
]

export default function JobDetail() {
  const { slug } = useParams()
  const job = getJobBySlug(slug)

  if (!job) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 pt-24 text-center">
        <h1 className="font-display text-3xl font-bold text-slate-900">Job not found</h1>
        <p className="text-slate-500">This position may have been filled or removed.</p>
        <Link to="/job-openings" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95">
          <ArrowLeft size={16} /> Back to Job Openings
        </Link>
      </section>
    )
  }

  return (
    <div>
      <PageHero eyebrow={job.category} title={job.title} />

      <section className="mx-auto -mt-10 max-w-3xl px-6 pb-8">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="flex items-center gap-1.5"><CalendarDays size={15} /> Posted {job.postedDate}</span>
          <span className="flex items-center gap-1.5"><Briefcase size={15} /> {job.category}</span>
          <span className="flex items-center gap-1.5"><Clock size={15} /> {job.type.join(' / ')}</span>
          <span className="flex items-center gap-1.5"><MapPin size={15} /> {job.location.join(' / ')}</span>
        </Reveal>
      </section>

      <LeadForm
        source={`job-${job.slug}`}
        endpoint={`/api/jobs/${job.slug}/apply`}
        title={`Apply for this position — ${job.title}`}
        submitLabel="Submit Application"
        fields={applicationFields}
      />

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal className="mb-10">
          <h2 className="font-display text-xl font-bold text-slate-900">Key Responsibilities</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {job.responsibilities.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05} className="mb-10">
          <h2 className="font-display text-xl font-bold text-slate-900">Requirements</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {job.requirements.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>

        {job.preferredQualifications?.length > 0 && (
          <Reveal delay={0.1}>
            <h2 className="font-display text-xl font-bold text-slate-900">Preferred Qualifications</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {job.preferredQualifications.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </section>
    </div>
  )
}
