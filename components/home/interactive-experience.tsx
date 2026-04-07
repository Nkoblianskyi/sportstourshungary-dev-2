'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bike, Footprints, PersonStanding, Compass, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { RevealSection } from '@/hooks/use-reveal'

const tourTypes = [
  {
    id: 'kerekpar',
    label: 'Kerékpáros',
    icon: Bike,
    image: '/images/tour-cycling.jpg',
    title: 'Tekerd végig Magyarország legszebb ösvényeit',
    description:
      'Erdei kavicsutaktól folyóparti töltéseken át szőlőhegyi utakig – kerékpáros túráink minden igényt kielégítenek. Kínálunk elektromos kerékpárokat is, hogy senki ne maradjon le a kalandokból.',
    features: ['80–180 km útvonalak', '1–5 napos programok', 'E-bike lehetőség'],
  },
  {
    id: 'gyalogtura',
    label: 'Gyalogtúra',
    icon: Footprints,
    image: '/images/tour-hiking.jpg',
    title: 'Merülj el az erdők és hegyek világában',
    description:
      'Lassulj le és fedezd fel a természet apró részleteit. Gyalogtúráink kis csoportokban zajlanak, hogy mindenki a saját tempójában haladjon és mélyen átélje a tájat.',
    features: ['10–50 km napi táv', 'Kis csoportok', 'Minden szinten'],
  },
  {
    id: 'futas',
    label: 'Futótúra',
    icon: PersonStanding,
    image: '/images/tour-running.jpg',
    title: 'Fusd be Magyarország természetes terepeit',
    description:
      'A trail futás az egyik legjobb módja a természet megismerésének. Programjaink kombinálja az edzést és a kalandot: szakmai coaching, természetes terep, közösségi élmény.',
    features: ['Terep futás', 'Szakmai coaching', 'Csoport edzések'],
  },
  {
    id: 'felfedezes',
    label: 'Felfedezés',
    icon: Compass,
    image: '/images/tour-exploration.jpg',
    title: 'Multi-sport kalandok a természetben',
    description:
      'Kerékpár, gyaloglás és kajak egy programban – multi-sport túráink a legtöbb természeti élményt nyújtják. Ideális azoknak, akik változatosságot és kihívást keresnek.',
    features: ['Multi-sport', '3–7 napos program', 'Kis expedíciók'],
  },
]

export function InteractiveExperience() {
  const [active, setActive] = useState(tourTypes[0].id)
  const current = tourTypes.find((t) => t.id === active)!

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Szerzői túrák</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Melyik túratípus érdekel?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Minden túránkat személyesen terveztük meg – autentikus élmények, nem turizmus, hanem valódi kaland.
          </p>
        </div>

        {/* Type selector buttons */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-14">
          {tourTypes.map((type) => {
            const Icon = type.icon
            return (
              <button
                key={type.id}
                onClick={() => setActive(type.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                  active === type.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                    : 'bg-background border border-border text-foreground/60 hover:border-primary/40 hover:text-foreground'
                )}
                aria-pressed={active === type.id}
              >
                <Icon className="w-4 h-4" />
                {type.label}
              </button>
            )
          })}
        </div>

        {/* Content panel */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="relative h-72 lg:h-[420px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          </div>

          {/* Text content */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-foreground text-balance">
              {current.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {current.description}
            </p>
            
            {/* Features pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {current.features.map((feature) => (
                <span
                  key={feature}
                  className="bg-primary/10 border border-primary/20 text-primary text-xs font-medium px-3.5 py-1.5 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <Link
              href="/turak"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-all hover:gap-3 shadow-md hover:shadow-lg hover:shadow-primary/20"
            >
              Túrák megtekintése <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </RevealSection>
    </section>
  )
}
