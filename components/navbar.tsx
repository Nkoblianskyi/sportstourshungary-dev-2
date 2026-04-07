'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Mountain } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/turak', label: 'Túrák' },
  { href: '/hogyan-mukodik', label: 'Hogyan működik?' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Mountain className="w-4 h-4 text-primary-foreground" />
          </span>
          <span className="font-serif font-bold text-lg text-foreground leading-tight">
            Sports Tours <span className="text-primary">Hungary</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Főnavigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/turak"
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Túrák böngészése
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden bg-background border-t border-border/60 overflow-hidden transition-all duration-300',
          open ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-4" aria-label="Mobil navigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/turak"
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-primary/90 transition-colors"
            onClick={() => setOpen(false)}
          >
            Túrák böngészése
          </Link>
        </nav>
      </div>
    </header>
  )
}
