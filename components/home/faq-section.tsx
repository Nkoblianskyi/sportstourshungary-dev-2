'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RevealSection } from '@/hooks/use-reveal'

const faqs = [
  {
    question: 'Milyen fizikai állapot szükséges a túrákhoz?',
    answer:
      'Minden túránkat nehézségi szint szerint jelöljük: kezdő, középhaladó és haladó. A kezdő szintű programokhoz elegendő az általános mozgékonyság, míg a haladó útvonalakhoz rendszeres aktív testmozgás javasolt. Az indulás előtt mindig küldünk részletes tájékoztatót a szükséges fizikai feltételekről.',
  },
  {
    question: 'Mi van, ha nem rendelkezem saját felszereléssel?',
    answer:
      'Nem probléma! A legtöbb programunkon biztosítjuk az alapfelszerelést (kerékpár, sisak, mentőmellény, sátor stb.). A pontos lista a túra leírásában a "Belefoglalt" szekcióban található. Ha valami hiányzik, segítünk a pótlásban.',
  },
  {
    question: 'Milyen korúaknak ajánlottak a túrák?',
    answer:
      'Programjaink általában 16 éves kortól ajánlottak önállóan. 16 éven aluli résztvevők szülői kísérővel csatlakozhatnak bizonyos könnyebb programokra. A pontos feltételeket minden túra leírásánál jelezzük.',
  },
  {
    question: 'Mi történik rossz idő esetén?',
    answer:
      'Kisebb esőre, felhős időre felkészülten indulunk – ezek a természetjárás részei. Extrém időjárási körülmények (vihar, erős szél, veszélyes csúszás) esetén a vezető dönt az útvonal módosításáról vagy a program biztonsági okokból történő elhalasztásáról.',
  },
  {
    question: 'Hogyan jutok el a túra kiindulópontjára?',
    answer:
      'Minden foglalás után részletes tájékoztatót küldünk, amelyben megtalálható a találkozási pont, a megközelítési lehetőségek és a parkolási informáicók. Egyes programokhoz csoportos transzfert is szervezünk – erről az egyéni programleírásokban tájékozódhat.',
  },
  {
    question: 'Hogyan lehet jelentkezni a túrákra?',
    answer:
      'A Kapcsolat oldalon lévő webes jelentkezési forma kitöltésével. Hamarosan visszajelzünk, megerősítjük a helyet és elküldjük a részletes felkészülési útmutatót. Részleges előleg szükséges a hely megerősítéséhez, amelynek módját az visszaigazoló levélben ismertetjük.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <RevealSection className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">GYIK</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Gyakran ismételt kérdések
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nem találja a válaszát? Keressen meg bennünket a Kapcsolat oldalon.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal bg-card border border-border rounded-2xl overflow-hidden transition-all hover:border-primary/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-serif font-semibold text-foreground">{faq.question}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5 text-primary" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                </span>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  open === i ? 'max-h-60' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  )
}
