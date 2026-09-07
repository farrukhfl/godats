import { useEffect, useRef, useState } from 'react'
import { useInView, motion, animate } from 'framer-motion'

function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d.]+)(.*)$/)
  if (!match) return { prefix: '', value: 0, suffix: String(raw), decimals: 0 }
  const [, prefix, num, suffix] = match
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { prefix, value: parseFloat(num), suffix, decimals }
}

function Counter({ raw }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState('0')
  const { prefix, value, suffix, decimals } = parseValue(raw)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, value, decimals])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default function StatCounter({ value, label, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`font-display text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-gradient'}`}>
        <Counter raw={value} />
      </div>
      <div className={`mt-2 text-sm ${light ? 'text-white/70' : 'text-slate-500'}`}>{label}</div>
    </motion.div>
  )
}
