import Image from 'next/image'
import Link from 'next/link'
import { Heart, Leaf, Mountain, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Rólunk – Sports Tours Hungary',
  description:
    'Megismerjük a csapatot, amely Magyarország természeti kincseinek felfedezéséhez kalauzol.',
}

const pillars = [
  {
    icon: Leaf,
    title: 'Természetszeretet',
    description:
      'Hiszünk abban, hogy a természettel való közvetlen kapcsolat gyógyít, feltölt és perspektívát ad. Minden útvonalunkat azzal a szándékkal tervezzük, hogy a tájat ne csak meglátogassuk, hanem valóban megérezzük.',
  },
  {
    icon: Heart,
    title: 'Szívből jövő gondoskodás',
    description:
      'Kis csapata vagyunk, de nagy szenvedéllyel. Minden résztvevőhöz személyesen viszonyulunk – mert tudjuk, hogy egy jó útitárs és figyelmes vezető életre szóló emlékeket teremt.',
  },
  {
    icon: Mountain,
    title: 'Felelős turizmus',
    description:
      'Útvonalainkat a természetvédelmi területek és helyi közösségek tiszteletben tartásával tervezzük. Célunk, hogy a vidék szépségét évtizedek múlva is ugyanolyan érintetlennek találja a következő generáció.',
  },
]

const stats = [
  { value: '6+', label: 'Év tapasztalat' },
  { value: '400+', label: 'Megelégedett résztvevő' },
  { value: '30+', label: 'Egyedi útvonal' },
  { value: '100%', label: 'Szakképzett vezető' },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="relative bg-foreground text-background py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/images/about-team.jpg')" }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
              Rólunk
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-5">
              Emberek a túrák mögött
            </h1>
            <p className="text-background/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Természetszerető szakemberek kis csapata vagyunk, akik hisznek abban, hogy az aktív
              kikapcsolódás a legjobb módja Magyarország megismerésének.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="A Sports Tours Hungary csapata természetes környezetben"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                Történetünk
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance">
                Szenvedélyből lett hivatás
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  A Sports Tours Hungary alapítói maguk is szenvedélyes természetjárók, akik éveken
                  át fedezték fel Magyarország rejtett ösvényeit, folyóvölgyeit és erdős hegyeit.
                  Felismertük, hogy ezeket az élményeket másokkal is meg kell osztani.
                </p>
                <p>
                  Programjainkat valós tereptapasztalat alapján tervezzük: minden útvonalat
                  személyesen bejárunk, tesztelünk és finomítunk, mielőtt résztvevőkkel indulunk.
                  Így biztosítjuk, hogy minden csavaros ösvény, minden pihenőpont és minden kilátó
                  valóban megéri az energiát.
                </p>
                <p>
                  Ma már több száz résztvevő mondhatja el, hogy velünk fedezte fel Magyarország egy
                  új oldalát – és ez a szám minden évszakban növekszik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 bg-secondary/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
                Értékeink
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Amiben hiszünk
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </span>
                    <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
              Gyere te is velünk!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nézd meg aktuális programjainkat és találd meg a neked való kalandot.
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
                className="border border-border text-foreground font-medium px-8 py-3.5 rounded-full hover:border-primary/50 transition-colors"
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
