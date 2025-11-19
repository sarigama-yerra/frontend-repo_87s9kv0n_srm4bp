import React from 'react'
import { motion } from 'framer-motion'

const bubbles = [
  { title: 'Particle Flow' },
  { title: 'WASM Fractal' },
  { title: 'Shader Toy' },
  { title: 'Soft Body' },
  { title: 'Voronoi' },
]

export default function Lab() {
  return (
    <section id="lab" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h3 className="text-center text-3xl font-bold sm:text-5xl">The Lab — Experiments</h3>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {bubbles.map((b) => (
            <motion.div
              key={b.title}
              whileHover={{ y: -8, scale: 1.05 }}
              className="aspect-square rounded-full border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-0.5"
            >
              <div className="grid h-full place-items-center rounded-full bg-black/60 text-center text-white/80">
                {b.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
