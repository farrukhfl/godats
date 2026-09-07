import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { StaggerItem } from './Reveal'

export default function ServiceCard({ icon: Icon, image, title, description, to }) {
  const Wrapper = to ? Link : 'div'
  return (
    <StaggerItem>
      <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="h-full">
        <Wrapper
          {...(to ? { to } : {})}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-brand-400/30 hover:bg-slate-50 hover:shadow-xl hover:shadow-brand-500/5"
        >
          {image && (
            <span className="flex h-36 items-center justify-center overflow-hidden bg-brand-50/60">
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
              />
            </span>
          )}
          <div className="flex h-full flex-col p-6">
            {Icon && !image && (
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-brand-400 group-hover:to-brand-600 group-hover:text-white">
                <Icon size={22} />
              </span>
            )}
            <h3 className="font-display text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
            {to && (
              <span className="mt-5 flex items-center gap-1 text-sm font-medium text-brand-500">
                Learn more
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </div>
        </Wrapper>
      </motion.div>
    </StaggerItem>
  )
}
