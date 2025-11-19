import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 40 })
  const rotY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 200, damping: 40 })
  const glow = useSpring(useTransform(mouseX, [0, 1], [0.3, 0.9]))

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Neon gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />
      </div>

      {/* Spline 3D scene */}
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY }}
        className="absolute inset-0"
        aria-hidden
      >
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Overlay for text */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          Welcome to My Mind — Where Creativity Becomes Code.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
          className="mt-6 max-w-3xl text-lg text-white/80 sm:text-xl"
        >
          A software engineer crafting experiences that merge imagination, technology, and innovation.
        </motion.p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <GlowingButton href="#portal" label="Enter the Universe" primary />
          <HoloButton href="#projects" label="View Projects" />
        </div>
      </div>

      {/* subtle scanline and vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.7)_100%)]" />
      </div>
    </section>
  )
}

function GlowingButton({ href, label, primary = false }) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-7 py-3 font-semibold ${
        primary ? 'text-black' : 'text-cyan-300'
      }`}
    >
      {primary ? (
        <>
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />
          <span className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35), transparent 40%)' }} />
          <span className="relative z-10">{label}</span>
        </>
      ) : (
        <>
          <span className="absolute inset-0 rounded-xl border border-cyan-400/40 bg-white/0" />
          <span className="relative z-10">
            <span className="opacity-90 transition-colors group-hover:text-cyan-200">{label}</span>
          </span>
        </>
      )}
    </motion.a>
  )
}

function HoloButton({ href, label }) {
  return <GlowingButton href={href} label={label} />
}
