const gradients = [
  'from-brand-400 to-brand-600',
  'from-fuchsia-400 to-purple-600',
  'from-emerald-400 to-teal-600',
  'from-amber-400 to-orange-600',
  'from-sky-400 to-indigo-600',
]

function getInitials(name) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] || ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

function hashIndex(str, length) {
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  return hash % length
}

export default function Avatar({ name, index, size = 44, className = '' }) {
  const gradient = gradients[typeof index === 'number' ? index % gradients.length : hashIndex(name, gradients.length)]
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-display font-bold text-white shadow-sm ${gradient} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      aria-hidden="true"
    >
      {getInitials(name)}
    </span>
  )
}
