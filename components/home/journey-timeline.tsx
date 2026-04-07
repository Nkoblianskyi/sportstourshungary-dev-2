import { Compass, ClipboardList, Footprints, Sparkles } from 'lucide-react'
import { RevealSection } from '@/hooks/use-reveal'

const timelineSteps = [
  {
    phase: 'Felfedezés',
    title: 'Tedd meg az első lépést',
    description:
      'Böngéssz túráinkban és találd meg a hozzád illő útvonalat – könnyedtől a haladóig, egynapos kirándulástól a többnapos expedícióig.',
    Icon: Compass,
    color: 'bg-forest/10 text-forest border-forest/20',
    dotColor: 'bg-forest',
  },
  {
    phase: 'Felkészülés',
    title: 'Személyre szabott tanácsok',
    description:
      'Szakértő csapatunk segít a felszerelés és az előkészítés terén. Küldünk felkészülési útmutatót és mindenre választ adunk kérdéseire.',
    Icon: ClipboardList,
    color: 'bg-terracotta/10 text-terracotta border-terracotta/20',
    dotColor: 'bg-terracotta',
  },
  {
    phase: 'Indulás',
    title: 'Elrajtol a kaland',
    description:
      'Tapasztalt vezetőkkel vágj bele a természetjárásba. Minden túrán maximálisan figyelünk a biztonságodra és az élményre.',
    Icon: Footprints,
    color: 'bg-moss/10 text-moss border-moss/20',
    dotColor: 'bg-moss',
  },
  {
    phase: 'Élmény',
    title: 'Emlékezetes pillanatok',
    description:
      'Erdős ösvények, folyóparti reggelek, sziklakilátók – minden túra egyedi felfedezőutat kínál Magyarország természeti csodái között.',
    Icon: Sparkles,
    color: 'bg-earth/10 text-earth border-earth/20',
    dotColor: 'bg-earth',
  },
]

export function JourneyTimeline() {
  return (
    <section className="py-24 bg-secondary/40 overflow-hidden">
      <RevealSection className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="reveal text-center mb-20">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Az út</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Az utazás idővonala
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Minden nagy kaland kis lépésekkel kezdődik. Így néz ki a tied:
          </p>
        </div>

        {/* Steps — horizontal connector on desktop, vertical list on mobile */}
        <div className="relative">

          {/* Horizontal connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-border"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {timelineSteps.map((step, i) => {
              const Icon = step.Icon
              return (
                <div
                  key={step.phase}
                  className="reveal flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Icon bubble */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 shadow-sm ${step.color}`}
                  >
                    <Icon className="w-6 h-6" />
                    {/* Step number */}
                    <span
                      className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-primary-foreground text-[10px] font-bold flex items-center justify-center ${step.dotColor}`}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Phase label */}
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                    {step.phase}
                  </p>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-base text-foreground mb-2 text-balance">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </RevealSection>
    </section>
  )
}
