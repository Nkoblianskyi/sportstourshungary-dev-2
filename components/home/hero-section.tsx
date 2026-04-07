'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Magyarország természetes tájképe"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/45" />

      {/* Animated organic blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-wave" />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-wave"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-24 left-0 right-0 overflow-hidden pointer-events-none opacity-30">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="text-background/60 text-xs tracking-[0.3em] uppercase mx-8">
                Kerékpár &nbsp;•&nbsp; Gyalogtúra &nbsp;•&nbsp; Futás &nbsp;•&nbsp; Felfedezés &nbsp;•&nbsp;
              </span>
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-accent text-sm font-medium uppercase tracking-[0.25em] mb-6"
          style={mounted ? { animation: 'flow-in 0.6s ease-out both 0.2s' } : { opacity: 0 }}
        >
          Aktív természetjárás Magyarországon
        </p>
        <h1
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-background font-bold leading-tight text-balance mb-6"
          style={mounted ? { animation: 'flow-in 0.8s ease-out both 0.4s' } : { opacity: 0 }}
        >
          Fedezd fel Magyarország{' '}
          <em className="text-accent not-italic">természeti kincseit</em>
        </h1>
        <p
          className="text-background/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={mounted ? { animation: 'flow-in 0.8s ease-out both 0.6s' } : { opacity: 0 }}
        >
          Kerékpáros, gyalogló, futó és kalandtúrák gondosan tervezett útvonalakon – szakértő
          vezetőkkel, felejthetetlen természeti élményekkel.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={mounted ? { animation: 'flow-in 0.8s ease-out both 0.8s' } : { opacity: 0 }}
        >
          <Link
            href="/turak"
            className="bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Túrák böngészése
          </Link>
          <Link
            href="/hogyan-mukodik"
            className="border border-background/40 text-background font-medium px-8 py-3.5 rounded-full hover:bg-background/10 transition-all"
          >
            Hogyan működik?
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-colors animate-float"
        aria-label="Görgessen le"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  )
}
