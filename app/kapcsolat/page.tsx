'use client'

import { useState } from 'react'
import { Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const categories = ['Kerékpáros túra', 'Gyalogtúra', 'Futótúra', 'Felfedező / Multi-sport', 'Egyéb']
const groupSizes = ['Csak én', '2–4 fő', '5–10 fő', '10+ fő']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="bg-foreground text-background py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
              Kapcsolat
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-balance mb-4">
              Írj nekünk!
            </h1>
            <p className="text-background/70 text-lg leading-relaxed max-w-xl mx-auto">
              Kérdésed van, vagy már tudod melyik túrát szeretnéd? Töltsd ki az alábbi formot és
              1 munkanapon belül visszajelzünk.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <aside className="flex flex-col gap-6">
              <div>
                <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                  Elérhetőségek
                </p>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Sports Tours Hungary.
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Természetjáró programok szervezése Magyarország egész területén. Kérdéseivel
                  bizalommal forduljon hozzánk.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Céginformáció</p>
                    <p className="text-muted-foreground">K.C. NTOMATA LIMITED</p>
                    <p className="text-muted-foreground">Stylianou Lena, 24 Christiana Court,</p>
                    <p className="text-muted-foreground">Flat/Office 202, Strovolos,</p>
                    <p className="text-muted-foreground">2019 Nicosia, Cyprus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-muted-foreground">info@sportstourshungary.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">Web</p>
                    <p className="text-muted-foreground">sportstourshungary.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 border border-border rounded-2xl p-5 text-sm">
                <p className="font-medium text-foreground mb-1">Válaszidő</p>
                <p className="text-muted-foreground leading-relaxed">
                  Minden megkeresésre 1 munkanapon belül válaszolunk. Sürgős esetben jelezze az
                  üzenetben.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-card border border-border rounded-2xl px-8">
                  <span className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Köszönjük az üzenetet!
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    Hamarosan visszajelzünk – legkésőbb 1 munkanapon belül. Addig is böngésszen
                    túráink között!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Név <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Kovács Anna"
                        className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mail <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="pelda@email.hu"
                        className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="category" className="text-sm font-medium text-foreground">
                        Érdeklő kategória
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Válasszon...</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="groupSize" className="text-sm font-medium text-foreground">
                        Csoport mérete
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        className="px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Válasszon...</option>
                        {groupSizes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Üzenet <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Írja le kérdését, igényét vagy melyik túra érdekli..."
                      className="px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 accent-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                      Elolvastam és elfogadom az{' '}
                      <a href="/adatvedelmi-iranyelvek" className="text-primary underline underline-offset-2">
                        adatvédelmi irányelveket
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-60 self-start"
                  >
                    {loading ? 'Küldés...' : 'Üzenet küldése'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
