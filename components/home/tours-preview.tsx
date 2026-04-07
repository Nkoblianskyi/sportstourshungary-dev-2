import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { tours } from '@/lib/tours-data'
import { TourCard } from '@/components/tour-card'
import { RevealSection } from '@/hooks/use-reveal'

export function ToursPreview() {
  const featured = tours.slice(0, 3)

  return (
    <section className="py-24 bg-background">
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Túráink</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Kiemelt túrák
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
              Válassz kerékpáros, gyalogtúra, futó vagy felfedező programjaink közül.
            </p>
          </div>
          <Link
            href="/turak"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all shrink-0"
          >
            Összes túra <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tour, i) => (
            <div
              key={tour.id}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <TourCard tour={tour} className="h-full" />
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  )
}
