import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h3 className="text-center text-3xl font-bold sm:text-5xl">Contact — The Gateway</h3>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="mb-1 block text-sm text-white/70">Your Name</label>
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.25)]"
              placeholder="Neo Programmer"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500/50 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.25)]"
              placeholder="you@future.dev"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.25)]"
              placeholder="Tell me about your world-building idea..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-black"
          >
            Send Transmission
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
