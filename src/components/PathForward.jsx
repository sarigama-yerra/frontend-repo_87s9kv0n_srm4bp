import React from 'react'
import { motion } from 'framer-motion'

export default function PathForward() {
  const quotes = [
    'Build tools that amplify human creativity.',
    'Design for wonder. Engineer for reliability.',
    'Make the future feel inevitable.'
  ]
  return (
    <section id="mission" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="text-3xl font-bold sm:text-5xl">The Path Forward</motion.h3>
        <div className="mt-8 grid gap-4">
          {quotes.map((q, i) => (
            <motion.blockquote key={q} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.05}} className="text-xl text-white/85">
              “{q}”
            </motion.blockquote>
          ))}
        </div>
        <div className="mt-8 text-white/80">An evolving roadmap guided by curiosity, craft and impact.</div>
      </div>
    </section>
  )
}
