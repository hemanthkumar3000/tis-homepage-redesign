import { motion } from 'framer-motion'

export default function StatCard({ value, label, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-cream">
          <Icon size={20} aria-hidden="true" />
        </div>

        <p className="font-display text-3xl text-forest sm:text-4xl">{value}</p>
      </div>

      <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.12em] text-ink/60">
        {label}
      </p>
    </motion.div>
  )
}