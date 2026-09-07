import { useMotionValue, useSpring } from 'framer-motion'

export function useParallax(strength = 24) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 50, damping: 20 })
  const y = useSpring(my, { stiffness: 50, damping: 20 })

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * strength)
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * strength)
  }

  return { x, y, onMouseMove }
}
