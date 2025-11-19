import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Nebula Navigator',
    description: 'A 3D data explorer with volumetric nebula rendering.',
  },
  {
    title: 'Quantum Canvas',
    description: 'Shader-driven creative coding playground.',
  },
  {
    title: 'Echo Lab',
    description: 'Audio-reactive visualizations in WebGL.',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h3 className="text-center text-3xl font-bold sm:text-5xl">Living Case Studies</h3>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(idx)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-left"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(56,189,248,0.18), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="mb-1 text-sm uppercase tracking-widest text-white/60">Project</div>
                <div className="text-xl font-semibold text-white/95">{p.title}</div>
                <div className="mt-2 text-white/70">{p.description}</div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active !== null && (
            <motion.div
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_40%)]" />
                <div className="relative z-10 p-6">
                  <div className="text-sm uppercase tracking-widest text-white/60">3D Scene Intro</div>
                  <div className="mt-2 text-2xl font-semibold text-white/95">{projects[active].title}</div>
                  <div className="mt-2 text-white/75">
                    A cinematic walkthrough of the project environment appears here.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
