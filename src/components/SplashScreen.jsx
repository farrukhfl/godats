import { useEffect } from 'react'

const MIN_VISIBLE_MS = 550
const FADE_MS = 400

export default function SplashScreen() {
  useEffect(() => {
    const el = document.getElementById('splash')
    if (!el) return

    const elapsed = Date.now() - performance.timeOrigin
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed)

    const hideTimer = setTimeout(() => {
      el.classList.add('splash-hide')
    }, remaining)
    const removeTimer = setTimeout(() => {
      el.remove()
    }, remaining + FADE_MS)

    return () => {
      clearTimeout(hideTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return null
}
