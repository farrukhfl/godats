import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BannerCarousel({ slides, interval = 4500 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(timer)
  }, [paused, slides.length, interval])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative aspect-[16/7] w-full sm:aspect-[16/6]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt || ''}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === index ? 20 : 8,
              backgroundColor: i === index ? 'var(--color-brand-500)' : 'rgba(148,163,184,0.5)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
