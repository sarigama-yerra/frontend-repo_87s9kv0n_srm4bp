import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Sparkles, Rocket, Cpu, Atom } from 'lucide-react'

const skills = [
  { icon: <Code2 size={20} />, label: 'TypeScript' },
  { icon: <Cpu size={20} />, label: 'Systems Thinking' },
  { icon: <Atom size={20} />, label: 'WebGL / R3F' },
  { icon: <Rocket size={20} />, label: 'Performance' },
  { icon: <Sparkles size={20} />, label: 'UX Motion' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(192,132,252,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-5xl"
        >
          The Creative Engineer
        </motion.h3>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          {/* Avatar / Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-1"
          >
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_40%)]" />
            <div className="relative z-10 grid h-full place-items-center">
              <div className="text-center">
                <div className="mb-3 text-sm uppercase tracking-widest text-white/60">Avatar</div>
                <div className="text-xl text-white/90">3D styled silhouette</div>
              </div>
            </div>
          </motion.div>

          {/* Text and skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg text-white/80">
              I design and build cinematic web experiences where code feels alive. My work blends
              imaginative worlds with rigorous engineering: precise performance, thoughtful systems,
              and a deep love for motion.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                >
                  <span className="text-cyan-300">{s.icon}</span>
                  {s.label}
                </motion.div>
              ))}
            </div>

            {/* Timeline nodes */}
            <div className="mt-10">
              <div className="mb-3 text-sm uppercase tracking-widest text-white/60">Timeline</div>
              <div className="relative ml-2 border-l border-white/10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative ml-6 py-4">
                    <div className="absolute -left-[11px] top-6 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-[0_0_18px_rgba(168,85,247,0.8)]" />
                    <div className="text-white/90">Innovation Node {i}</div>
                    <div className="text-sm text-white/60">A whimsical milestone blending creativity and engineering.</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
