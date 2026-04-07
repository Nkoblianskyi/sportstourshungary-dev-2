import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  MessageSquare,
  ClipboardCheck,
  MapPin,
  Star,
  ShieldCheck,
  Users,
  Compass,
  ArrowRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Hogyan működik? – Sports Tours Hungary',
  description:
    'Lépésről lépésre bemutatjuk, hogyan zajlik a túrajelentkezés és az első közös kaland.',
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Böngéssz a túrák között',
    description:
      'Tekintsd át kínálatunkat: kerékpáros, gyalogtúra, futó és multi-sport programok várnak nehézségi szint és régió szerint szűrve. Minden túra részletes leírással, kiemelkedő pillanatokkal és a belefoglalt szolgáltatások listájával szerepel.',
    color: 'bg-forest/10 text-forest',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Küldj érdeklődést',
    description:
      'Ha megtaláltad a számodra megfelelő programot, töltsd ki a Kapcsolat oldalon lévő rövid jelentkezési formát. Adj meg néhány alapadatot – csoport mérete, dátum, fizikai szint – hogy pontosan tudjuk segíteni.',
    color: 'bg-terracotta/10 text-terracotta',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Személyre szabott ajánlat',
    description:
      'Csapatunk 1 munkanapon belül visszajelez. Egyeztetjük a részleteket, megválaszolunk minden kérdést, és – ha szükséges – módosítjuk az útvonalat az igényeidhez igazítva.',
    color: 'bg-moss/10 text-moss',
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Felkészülési csomag',
    description:
      'A hely visszaigazolása után részletes tájékoztató levelet küldünk: találkozási pont, szükséges felszerelés lista, időjárási tanácsok és minden praktikus tudnivaló az induláshoz.',
    color: 'bg-earth/10 text-earth',
  },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Biztonság mindenekelőtt',
    description:
      'Minden vezető szakképzett mentős és természetvédelmi ismeretekkel rendelkezik. Túráinkon profi elsősegély-felszerelés és biztosítás van.',
  },
  {
    icon: Users,
    title: 'Kis csoportok',
    description:
      'Legfeljebb 12 fős csoportokban dolgozunk, hogy minden résztvevő személyes figyelmet kapjon és valóban belemerüljön a természetbe.',
  },
  {
    icon: Compass,
    title: 'Helyi szakértelem',
    description:
      'Vezetőink évek óta ismerik Magyarország természeti útvonalait. Olyan helyeket és pillanatokat mutatunk, amelyeket egyedül sohasem találnál meg.',
  },
  {
    icon: Star,
    title: 'Minőségi élmény',
    description:
      'A program megtervezésétől az utolsó kilométerig minden részletre odafigyelünk – hogy a kaland valóban felejthetetlen legyen.',
  },
]

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="relative bg-foreground text-background py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/images/how-it-works.jpg')" }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
              Folyamat
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-5">
              Hogyan működik?
            </h1>
            <p className="text-background/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Négy egyszerű lépés választja el egymástól a mai napod és a következő nagy kalandod – mi
              minden lépésnél ott vagyunk melletted.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-12">
              {steps.map((step, i) => {
                const Icon = step.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={step.number}
                    className={`flex flex-col md:flex-row items-start gap-8 ${
                      isEven ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Image / Number block */}
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${step.color}`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="hidden md:block w-px h-24 bg-border" aria-hidden="true" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 pb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {step.number}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-foreground mt-1 mb-3">
                        {step.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="/images/tour-hiking.jpg"
            alt="Erdei ösvényen haladó túracsoport"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <blockquote className="text-center px-4">
              <p className="font-serif text-2xl sm:text-3xl text-background font-bold text-balance max-w-2xl mx-auto">
                &ldquo;Nem az úti cél a fontos, hanem az út maga.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-secondary/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                Értékeink
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Miért válassz minket?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                Több évnyi terepen szerzett tapasztalat, gondos tervezés és szívvel végzett munka áll
                minden túra mögött.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val) => {
                const Icon = val.icon
                return (
                  <div
                    key={val.title}
                    className="bg-card border border-border rounded-2xl p-6 flex gap-5 hover:border-primary/40 transition-colors"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                        {val.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance mb-4">
              Kész vagy az első lépésre?
            </h2>
            <p className="text-background/70 leading-relaxed mb-8">
              Böngéssz túráink között, vagy írj nekünk közvetlenül – segítünk megtalálni a hozzád
              illő kalandot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/turak"
                className="bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Túrák böngészése <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kapcsolat"
                className="border border-background/30 text-background font-medium px-8 py-3.5 rounded-full hover:bg-background/10 transition-colors"
              >
                Kapcsolatfelvétel
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
