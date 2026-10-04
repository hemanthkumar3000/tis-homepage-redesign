import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const shouldReduceMotion = useReducedMotion()

  const directions = {
    up: { x: 0, y: 32 },
    down: { x: 0, y: -32 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  }

  const hiddenPosition = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...directions[direction] }

  return (
    <motion.div
      initial={hiddenPosition}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}