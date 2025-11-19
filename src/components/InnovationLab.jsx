import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { OrbitControls, shaderMaterial, Sparkles, Float } from '@react-three/drei'
import * as THREE from 'three'

// Custom shader material for the neon wave field
const WaveMaterial = shaderMaterial(
  { uTime: 0, uColorA: new THREE.Color('#22d3ee'), uColorB: new THREE.Color('#a855f7'), uAmp: 0.22, uFreq: 2.6 },
  // Vertex shader with subtle displacement
  `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  varying vec2 vUv;
  void main(){
    vUv = uv;
    vec3 pos = position;
    float wave = sin((pos.x + uTime) * 1.6 * uFreq) * cos((pos.y + uTime*0.8) * 1.2 * uFreq);
    pos.z += wave * uAmp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
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
  const mesh = useRef()
  useFrame((state, delta) => {
    if (ref.current) ref.current.uTime += delta
    if (mesh.current) {
      mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.08
    }
  })
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}> 
      <planeGeometry args={[8, 8, 128, 128]} />
      {/* lowercase tag matches the extended key */}
      <waveMaterial ref={ref} transparent />
    </mesh>
  )
}

export default function InnovationLab() {
  return (
    <section id="lab" className="relative bg-black text-white">
      <div className="h-[70vh] sm:h-[80vh]">
        <Canvas camera={{ position: [0, 0.5, 6], fov: 60 }}>
          <color attach="background" args={[0,0,0]} />
          <ambientLight intensity={0.15} />
          <directionalLight position={[3,4,2]} intensity={0.9} color={'#a78bfa'} />
          <Suspense fallback={null}>
            <Float speed={1.2}>
              <Waves />
            </Float>
            <Sparkles size={2} count={120} speed={0.7} color={'#22d3ee'} scale={[10,10,10]} />
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
