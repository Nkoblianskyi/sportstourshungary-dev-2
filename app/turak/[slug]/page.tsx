import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'
import { tours, categoryLabels, difficultyLabels, difficultyColors } from '@/lib/tours-data'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} – Sports Tours Hungary`,
    description: tour.shortDesc,
  }
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const related = tours.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 3)

  const formattedDate = new Date(tour.date).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main>
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-72 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/55" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pb-10">
              <Link
                href="/turak"
                className="inline-flex items-center gap-2 text-background/70 hover:text-background text-sm mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Vissza a túrákhoz
              </Link>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {categoryLabels[tour.category]}
                </span>
                <span
                  className={cn(
                    'text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm',
                    difficultyColors[tour.difficulty]
                  )}
                >
                  {difficultyLabels[tour.difficulty]}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-background text-balance">
                {tour.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Quick meta */}
              <div className="flex flex-wrap gap-5 p-5 bg-card border border-border rounded-2xl">
                {[
                  { icon: Calendar, label: 'Dátum', value: formattedDate },
                  { icon: Clock, label: 'Időtartam', value: tour.duration },
                  { icon: MapPin, label: 'Régió', value: tour.region },
                  { icon: Users, label: 'Csoport', value: `${tour.minParticipants}–${tour.maxParticipants} fő` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">A túráról</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.longDesc}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Kiemelkedő pillanatok
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {tour.highlights.map((h) => (
                    <div
                      key={h}
                      className="bg-secondary/50 rounded-xl p-3 text-center text-sm text-foreground font-medium border border-border"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Included / Not included */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-5">
                  <h3 className="font-serif font-semibold text-foreground mb-4">A túra tartalmazza</h3>
                  <ul className="flex flex-col gap-2">
                    {tour.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-5">
                  <h3 className="font-serif font-semibold text-foreground mb-4">Nem tartalmazza</h3>
                  <ul className="flex flex-col gap-2">
                    {tour.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-muted-foreground/60 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                  Érdekel ez a túra?
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Vegye fel velünk a kapcsolatot és segítünk minden részletben.
                </p>
                <div className="bg-secondary/40 rounded-xl p-4 mb-5 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Következő indulás</p>
                  <p>{formattedDate}</p>
                  <p className="mt-1">{tour.minParticipants}–{tour.maxParticipants} fős csoportok</p>
                </div>
                <Link
                  href="/kapcsolat"
                  className="w-full block text-center bg-primary text-primary-foreground font-medium py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Jelentkezés / Érdeklődés
                </Link>
                <Link
                  href="/turak"
                  className="w-full block text-center mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Vissza a katalógushoz
                </Link>
              </div>
            </aside>
          </div>

          {/* Related tours */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Hasonló túrák</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((t) => (
                  <TourCard key={t.id} tour={t} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
