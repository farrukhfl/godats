import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
}

export default function CardSlider({ slides, interval = 5000 }) {
  const [[index, direction], setIndex] = useState([0, 1])
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex(([i]) => [(i + 1) % slides.length, 1])
    }, interval)
    return () => clearInterval(timer)
  }, [paused, slides.length, interval])

  function go(dir) {
    setIndex(([i]) => [(i + dir + slides.length) % slides.length, dir])
  }

  const slide = slides[index]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(e, info) => {
              if (info.offset.x < -60) go(1)
              else if (info.offset.x > 60) go(-1)
            }}
            className="grid cursor-grab grid-cols-1 items-center gap-2 p-8 active:cursor-grabbing sm:p-10 lg:grid-cols-2 lg:gap-10"
          >
            <div className="order-2 lg:order-1">
              <span className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
                {index + 1} / {slides.length}
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{slide.title}</h3>
              <p className="mt-4 text-slate-500">{slide.description}</p>
              {slide.to && (
                <Link
                  to={slide.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110 active:scale-95"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              )}
            </div>
            <div className="order-1 flex justify-center rounded-2xl bg-brand-50/60 p-6 lg:order-2">
              <img src={slide.image} alt="" draggable={false} className="pointer-events-none w-full max-w-[260px]" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-0 top-1/2 hidden -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 shadow-lg transition hover:text-brand-600 sm:flex"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 shadow-lg transition hover:text-brand-600 sm:flex"
      >
        <ChevronRight size={18} />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === index ? 20 : 8,
              backgroundColor: i === index ? 'var(--color-brand-500)' : 'rgba(148,163,184,0.4)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
