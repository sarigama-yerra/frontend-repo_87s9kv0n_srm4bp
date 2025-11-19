import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollOrchestrator() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray('[data-world]')

    sections.forEach((sec, i) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      )

      // Parallax inner headings
      const heading = sec.querySelector('h2, h3')
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 20, opacity: 0.6 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: sec,
              start: 'top 75%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        )
      }
    })

    // Cleanup on unmount
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return null
}
