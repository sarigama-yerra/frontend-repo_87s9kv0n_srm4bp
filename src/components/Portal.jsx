import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Portal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section id="portal" ref={ref} className="relative min-h-[120vh] bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-500/20" />
        <div className="absolute left-1/2 top-1/2 h-[90vmax] w-[90vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
        <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20" />
      </div>

      <motion.div style={{ scale, opacity, rotate }} className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 py-32 text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl">
          Step Through the Portal
        </h2>
        <p className="max-w-2xl text-white/70">
          Drift through a warp of particles and neon rings—your passage to the inner lab.
        </p>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
      </div>
    </section>
  )
}
