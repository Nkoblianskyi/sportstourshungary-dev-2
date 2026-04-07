import { Backpack, Thermometer, Droplets, ShieldCheck, Sun, Map } from 'lucide-react'
import { RevealSection } from '@/hooks/use-reveal'

const tips = [
  {
    icon: Backpack,
    title: 'Megfelelő felszerelés',
    description:
      'Mindig hordd magaddal az időjárásnak megfelelő ruházatot. Rétegezés a kulcs: alap-, közép- és külső réteg szükséges a változékony hegyi időjárásban.',
  },
  {
    icon: Droplets,
    title: 'Hidratálás',
    description:
      'Napi 2-3 liter víz az ajánlott minimális folyadékbevitel aktív túrán. Mindig vigyél magaddal töltött kulacsot és tölts fel forrásokból.',
  },
  {
    icon: Thermometer,
    title: 'Időjárás figyelés',
    description:
      'Elindulás előtt ellenőrizd az időjárás-előrejelzést. Hegyvidéken az idő gyorsan változhat – legyél felkészülve esőre is.',
  },
  {
    icon: Sun,
    title: 'Napvédelem',
    description:
      'Hosszabb túrákon nélkülözhetetlen a fényvédő krém, napszemüveg és kalap. Az UV sugárzás a felhős idő ellenére is intenzív lehet.',
  },
  {
    icon: Map,
    title: 'Útvonal tervezés',
    description:
      'Ismerd az útvonalat előre, és tájékozódj a terepen. Offline térképet is vigyél, mert a hegyekben a telefon jelzése gyenge lehet.',
  },
  {
    icon: ShieldCheck,
    title: 'Biztonság mindenekelőtt',
    description:
      'Soha ne indulj el egyedül nehezebb terepen. Szólj valakinek, hova mész és mikor térsz vissza. Szakértő vezetőinkkel minden túra biztonságos.',
  },
]

export function TravelTips() {
  return (
    <section className="py-24 bg-sand/30">
      <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Tanácsok</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Természetjáró tippek
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Ezek az egyszerű tanácsok biztonságosabbá és élvezetesebbé teszik a kalandot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => {
            const Icon = tip.icon
            return (
              <div
                key={tip.title}
                className="reveal bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
              </div>
            )
          })}
        </div>
      </RevealSection>
    </section>
  )
}
