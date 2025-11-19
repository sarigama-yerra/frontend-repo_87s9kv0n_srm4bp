import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { OrbitControls, shaderMaterial, Sparkles, Float } from '@react-three/drei'
import * as THREE from 'three'

// Custom shader material for the neon wave field
const WaveMaterial = shaderMaterial(
  { uTime: 0, uColorA: new THREE.Color('#22d3ee'), uColorB: new THREE.Color('#a855f7') },
  // Vertex shader
  `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
  `,
  // Fragment shader
  `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;
  void main(){
    float n = sin(vUv.x*10.0 + uTime*1.5) * cos(vUv.y*10.0 + uTime*1.2);
    vec3 col = mix(uColorA, uColorB, n*0.5 + 0.5);
    gl_FragColor = vec4(col, 0.9);
  }
  `
)

// Register the custom material so it can be used as <waveMaterial /> in JSX
extend({ WaveMaterial })

function Waves() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (ref.current) ref.current.uTime += delta
  })
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[6, 6, 64, 64]} />
      {/* lowercase tag matches the extended key */}
      <waveMaterial ref={ref} transparent />
    </mesh>
  )
}

export default function InnovationLab() {
  return (
    <section id="lab" className="relative bg-black text-white">
      <div className="h-[70vh] sm:h-[80vh]">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <color attach="background" args={[0,0,0]} />
          <ambientLight intensity={0.2} />
          <Suspense fallback={null}>
            <Float speed={1.2}>
              <Waves />
            </Float>
            <Sparkles size={2} count={80} speed={0.6} color={'#22d3ee'} scale={[8,8,8]} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="mx-auto max-w-5xl px-6 -mt-10 pb-20 text-center">
        <h3 className="text-3xl font-bold sm:text-5xl">The Innovation Lab</h3>
        <p className="mt-4 text-white/80">A neon playground of shaders, particles and physics — touch raw imagination.</p>
      </div>
    </section>
  )
}
