import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'

function Planet({ color = '#60a5fa', onClick }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.2
  })
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh ref={ref} onClick={onClick}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} metalness={0.3} roughness={0.4} />
      </mesh>
    </Float>
  )
}

export default function Masterpieces() {
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="relative bg-black text-white">
      <div className="h-[70vh] sm:h-[80vh]">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <color attach="background" args={[0, 0, 0]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[3,3,3]} intensity={1.4} color={'#a78bfa'} />
          <Suspense fallback={null}>
            <group position={[-2.2, 0.4, 0]}>
              <Planet color="#22d3ee" onClick={() => setOpen('Nebula Navigator')} />
            </group>
            <group position={[0, -0.6, 0]}>
              <Planet color="#a855f7" onClick={() => setOpen('Quantum Canvas')} />
            </group>
            <group position={[2.2, 0.3, 0]}>
              <Planet color="#f472b6" onClick={() => setOpen('Echo Lab')} />
            </group>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="mx-auto max-w-5xl px-6 -mt-10 pb-16 text-center">
        <h3 className="text-3xl font-bold sm:text-5xl">Masterpieces — Floating Worlds</h3>
        <p className="mt-4 text-white/80">Hover a planet to feel its gravity. Click to enter a cinematic case study.</p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setOpen(null)}>
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.98, opacity:0}} transition={{type:'spring', stiffness:200, damping:24}} className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800" onClick={(e)=>e.stopPropagation()}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_40%)]" />
              <div className="relative z-10 p-6">
                <div className="text-sm uppercase tracking-widest text-white/60">Case Study</div>
                <div className="mt-2 text-2xl font-semibold text-white/95">{open}</div>
                <div className="mt-2 text-white/75">Timeline, tech stack, challenges and learnings unfold here with a cinematic narrative.</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
