import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Cookie irányelvek – Sports Tours Hungary',
  description:
    'Tájékoztatás a sportstourshungary.com weboldalon használt sütikről (cookie-król) és azok kezeléséről.',
}

const lastUpdated = '2026.'

const cookieTypes = [
  {
    type: 'Szükséges (elengedhetetlen)',
    purpose: 'A weboldal alapvető működéséhez szükségesek. Nem tilthatók le.',
    examples: 'Cookie-hozzájárulás állapota, munkamenet-azonosítók.',
    duration: 'Munkamenet végéig vagy legfeljebb 1 évig.',
    canDisable: false,
  },
  {
    type: 'Analitikai / statisztikai',
    purpose: 'Segítenek megérteni, hogyan használják a látogatók az oldalt, hogy javítani tudjuk azt.',
    examples: 'Oldalmegtekintések száma, belépési pontok, kilépési arány.',
    duration: 'Legfeljebb 13 hónap.',
    canDisable: true,
  },
]

const sections = [
  {
    title: '1. Mi az a cookie?',
    content: `A cookie (más néven süti) egy kis szövegfájl, amelyet a weboldal helyez el az Ön eszközén (számítógép, telefon, tablet), amikor meglátogatja az oldalt. A cookie-k segítenek az oldal megfelelő működésében és a felhasználói élmény javításában.`,
  },
  {
    title: '2. Milyen cookie-kat használunk?',
    content: null,
  },
  {
    title: '3. Harmadik felek cookie-jai',
    content: `Jelenleg weboldalunk nem tölt be harmadik féltől származó marketing vagy nyomkövető cookie-kat. Amennyiben ez a jövőben változik, az irányelveket frissítjük és értesítjük a látogatókat.`,
  },
  {
    title: '4. Cookie-k kezelése és letiltása',
    content: `A szükséges cookie-kat nem lehet letiltani, mert az oldal működéséhez elengedhetetlenek. Az analitikai cookie-khoz való hozzájárulást az oldal betöltésekor megjelenő banner segítségével adhatja meg vagy tagadhatja meg.\n\nBöngészőjében is beállíthatja a cookie-kezelési preferenciákat. Útmutatók:\n- Chrome: chrome://settings/cookies\n- Firefox: about:preferences#privacy\n- Safari: Beállítások > Adatvédelem\n\nFigyelem: bizonyos cookie-k letiltása esetén az oldal egyes funkciói korlátozottan működhetnek.`,
  },
  {
    title: '5. Módosítások',
    content: `Fenntartjuk a jogot az irányelvek módosítására. Lényeges változás esetén az oldalon értesítjük a látogatókat. Jelenlegi verzió: ${lastUpdated}.`,
  },
]

export default function CookiePolicyPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="bg-foreground text-background py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Jogi</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-balance mb-3">
              Cookie irányelvek
            </h1>
            <p className="text-background/60 text-sm">Utolsó frissítés: {lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ez az irányelv tájékoztatja Önt a sportstourshungary.com weboldalon alkalmazott
              sütikről (cookie-król), azok céljáról és arról, hogyan kezelheti azokat.
            </p>

            <div className="flex flex-col gap-8">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-border pt-8">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                    {section.title}
                  </h2>
                  {section.content ? (
                    <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  ) : (
                    /* Cookie types table */
                    <div className="flex flex-col gap-4">
                      {cookieTypes.map((cookie) => (
                        <div
                          key={cookie.type}
                          className="bg-card border border-border rounded-2xl p-5"
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h3 className="font-serif font-semibold text-base text-foreground">
                              {cookie.type}
                            </h3>
                            <span
                              className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                                cookie.canDisable
                                  ? 'bg-terracotta/10 text-terracotta'
                                  : 'bg-primary/10 text-primary'
                              }`}
                            >
                              {cookie.canDisable ? 'Letiltható' : 'Kötelező'}
                            </span>
                          </div>
                          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div>
                              <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Cél</dt>
                              <dd className="text-muted-foreground leading-relaxed">{cookie.purpose}</dd>
                            </div>
                            <div>
                              <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Példák</dt>
                              <dd className="text-muted-foreground leading-relaxed">{cookie.examples}</dd>
                            </div>
                            <div>
                              <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Megőrzés</dt>
                              <dd className="text-muted-foreground leading-relaxed">{cookie.duration}</dd>
                            </div>
                          </dl>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 p-5 bg-secondary/50 border border-border rounded-2xl text-sm text-muted-foreground">
              Kérdések esetén forduljon hozzánk:{' '}
              <a href="mailto:info@sportstourshungary.com" className="text-primary underline underline-offset-2">
                info@sportstourshungary.com
              </a>
              . Tekintse meg az{' '}
              <Link href="/adatvedelmi-iranyelvek" className="text-primary underline underline-offset-2">
                Adatvédelmi irányelveket
              </Link>{' '}
              is.
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}
