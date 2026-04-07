import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'
import { type Tour, categoryLabels, difficultyColors, difficultyLabels } from '@/lib/tours-data'
import { cn } from '@/lib/utils'

interface TourCardProps {
  tour: Tour
  className?: string
}

export function TourCard({ tour, className }: TourCardProps) {
  const formattedDate = new Date(tour.date).toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article
      className={cn(
        'group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
          {categoryLabels[tour.category]}
        </span>
        {/* Difficulty */}
        <span
          className={cn(
            'absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm',
            difficultyColors[tour.difficulty]
          )}
        >
          {difficultyLabels[tour.difficulty]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
          {tour.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {tour.shortDesc}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {tour.region}
          </span>
        </div>

        <Link
          href={`/turak/${tour.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          Részletek <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
