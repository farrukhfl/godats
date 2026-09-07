import PageHero from './PageHero'
import Reveal from './Reveal'

function Block({ block }) {
  if (block.type === 'node') {
    return block.node
  }
  if (block.type === 'quote') {
    return <p className="border-l-2 border-brand-200 pl-4 text-sm italic leading-relaxed text-slate-500">{block.text}</p>
  }
  if (block.type === 'ul') {
    return (
      <ul className="flex flex-col gap-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
            <span>
              {typeof item === 'string' ? item : (
                <>
                  <span className="font-semibold text-slate-900">{item.label}</span>
                  {item.text ? ` — ${item.text}` : ''}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="text-sm leading-relaxed text-slate-600">{block.text}</p>
}

export default function LegalPage({ title, lastUpdated, intro, sections, closing }) {
  return (
    <div>
      <PageHero eyebrow="Legal" title={title} subtitle={lastUpdated ? `Last updated: ${lastUpdated}` : undefined} />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[240px_1fr]">
        {/* Sticky table of contents */}
        <div className="hidden lg:block">
          <nav className="sticky top-32 flex flex-col gap-1 border-l border-slate-200 pl-4 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="py-1.5 text-slate-500 transition hover:text-brand-600"
              >
                {s.heading}
              </a>
            ))}
          </nav>
        </div>

        <div className="min-w-0">
          {intro && (
            <Reveal className="mb-10 flex flex-col gap-4">
              {intro.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-600">{p}</p>
              ))}
            </Reveal>
          )}

          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <Reveal key={s.id} id={s.id} delay={Math.min(i * 0.02, 0.2)} className="scroll-mt-28">
                <h2 className="font-display text-xl font-bold text-slate-900">{s.heading}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {s.content.map((block, bi) => <Block key={bi} block={block} />)}
                </div>
              </Reveal>
            ))}
          </div>

          {closing && (
            <Reveal delay={0.1} className="mt-10 border-t border-slate-200 pt-8 text-sm leading-relaxed text-slate-600">
              {closing}
            </Reveal>
          )}
        </div>
      </div>
    </div>
  )
}
