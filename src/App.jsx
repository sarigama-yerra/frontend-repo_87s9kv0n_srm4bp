import React, { Suspense, lazy } from 'react'
import ScrollOrchestrator from './components/ScrollOrchestrator'

const Gateway = lazy(() => import('./components/Gateway'))
const CreatorCore = lazy(() => import('./components/CreatorCore'))
const InnovationLab = lazy(() => import('./components/InnovationLab'))
const Masterpieces = lazy(() => import('./components/Masterpieces'))
const PathForward = lazy(() => import('./components/PathForward'))
const PortalOut = lazy(() => import('./components/PortalOut'))

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <ScrollOrchestrator />
      <Suspense fallback={<div className="py-24 text-center text-white/60">Loading universe…</div>}>
        <div data-world>
          <Gateway />
        </div>
        <div data-world>
          <CreatorCore />
        </div>
        <div data-world>
          <InnovationLab />
        </div>
        <div data-world>
          <Masterpieces />
        </div>
        <div data-world>
          <PathForward />
        </div>
        <div data-world>
          <PortalOut />
        </div>
      </Suspense>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#gateway" className="font-semibold tracking-wide text-white/90">Creative Engineer</a>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#gateway" className="hover:text-white">Gateway</a>
          <a href="#about" className="hover:text-white">Core</a>
          <a href="#lab" className="hover:text-white">Lab</a>
          <a href="#projects" className="hover:text-white">Masterpieces</a>
          <a href="#mission" className="hover:text-white">Path</a>
          <a href="#contact" className="hover:text-white">Portal Out</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 py-10 text-center text-white/60">
      <div className="mx-auto max-w-7xl px-6">
        <p>© {new Date().getFullYear()} The Creative Engineer — Built with imagination and code.</p>
      </div>
    </footer>
  )
}

export default App
