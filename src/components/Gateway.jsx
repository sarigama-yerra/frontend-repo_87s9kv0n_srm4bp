import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles, Stars, Float, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

function FloatingOrbs() {
  const group = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.2) * 0.2
    }
  })
  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[1.8, 0.6, -2]}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial color={'#7c3aed'} emissive={'#7c3aed'} emissiveIntensity={0.6} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.1}>
        <mesh position={[-2, -0.3, -1.5]}>
          <dodecahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color={'#22d3ee'} emissive={'#22d3ee'} emissiveIntensity={0.6} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

function PortalRing() {
  const ring = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ring.current) {
      ring.current.scale.setScalar(1 + Math.sin(t * 2) * 0.04)
    }
  })
  return (
    <mesh ref={ring}>
      <torusGeometry args={[2, 0.06, 32, 256]} />
      <meshStandardMaterial color={'#a855f7'} emissive={'#a855f7'} emissiveIntensity={1.2} metalness={0.2} roughness={0.3} />
    </mesh>
  )
}

export default function Gateway() {
  return (
    <section id="gateway" className="relative min-h-screen w-full bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>
      <div className="h-[70vh] sm:h-[80vh]">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <color attach="background" args={[0, 0, 0]} />
          <ambientLight intensity={0.2} />
          <pointLight position={[3, 3, 3]} intensity={1.5} color={"#60a5fa"} />
          <pointLight position={[-3, -2, -2]} intensity={1.2} color={"#f472b6"} />
          <Suspense fallback={null}>
            <Stars radius={60} depth={50} count={2000} factor={2} saturation={0} fade speed={1} />
            <Sparkles size={2} count={100} scale={[10, 10, 10]} speed={0.6} color={"#22d3ee"} />
            <PortalRing />
            <FloatingOrbs />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 -mt-10 text-center">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
          Welcome to My Universe
        </motion.h2>
        <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.9, delay:0.05}} className="mt-4 text-white/80 text-lg">
          A Software Engineer Who Turns Imagination Into Reality.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-black">Begin the Journey</a>
          <a href="#projects" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-cyan-300">Jump to Work</a>
        </div>
      </div>
    </section>
  )
}
