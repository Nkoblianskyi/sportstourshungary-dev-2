'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'sth-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie hozzájárulás"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-card border border-border rounded-2xl shadow-2xl p-5 animate-flow-in"
    >
      <div className="flex items-start gap-3 mb-4">
        <span className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <Cookie className="w-5 h-5 text-primary" />
        </span>
        <div>
          <p className="font-serif font-semibold text-foreground mb-1">Cookie-k</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Weboldalunk cookie-kat használ a jobb felhasználói élmény érdekében.{' '}
            <Link href="/cookie-iranyelvek" className="text-primary underline underline-offset-2">
              Cookie irányelvek
            </Link>
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-primary text-primary-foreground text-sm font-medium py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Elfogadom
        </button>
        <button
          onClick={decline}
          className="flex-1 bg-secondary text-secondary-foreground text-sm font-medium py-2 rounded-full hover:bg-secondary/70 transition-colors"
        >
          Elutasítom
        </button>
      </div>
    </div>
  )
}
