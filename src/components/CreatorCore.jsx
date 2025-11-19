import React, { Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, Line, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function ParticleMind() {
  const count = 1500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.2 * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return pos
  }, [])

  return (
    <group>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial transparent color="#22d3ee" size={0.02} sizeAttenuation depthWrite={false} />
      </Points>
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
        <Line
          points={[[-1.5, 0.2, 0], [-0.3, 0.8, 0.2], [0.6, -0.1, -0.3], [1.8, 0.4, 0.1]]}
          color="#a855f7"
          lineWidth={2}
          dashed={false}
        />
      </Float>
    </group>
  )
}

export default function CreatorCore() {
  return (
    <section id="about" className="relative bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/20 blur-[120px]" />
      </div>
      <div className="h-[70vh] sm:h-[80vh]">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <color attach="background" args={[0, 0, 0]} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[3, 3, 5]} intensity={1} color={'#93c5fd'} />
          <Suspense fallback={null}>
            <ParticleMind />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 mx-auto -mt-10 max-w-5xl px-6 pb-20 text-center">
        <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="text-3xl font-bold sm:text-5xl">
          The Creator's Core
        </motion.h3>
        <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.9, delay:0.05}} className="mt-4 text-white/80">
          Floating thoughts. Structured systems. Sparks of innovation. This is the engine room of ideas.
        </motion.p>
      </div>
    </section>
  )
}
