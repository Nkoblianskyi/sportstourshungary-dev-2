import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Adatvédelmi irányelvek – Sports Tours Hungary',
  description:
    'Tájékoztatás a Sports Tours Hungary adatkezelési gyakorlatáról, az Ön jogairól és az adatok védelméről.',
}

const lastUpdated = '2026.'

const sections = [
  {
    title: '1. Adatkezelő adatai',
    content: `Az adatkezelő: Sports Tours Hungary (továbbiakban: Társaság). Kapcsolat: info@sportstourshungary.com | sportstourshungary.com.`,
  },
  {
    title: '2. Kezelt adatok és céljuk',
    content: `A Társaság az alábbi személyes adatokat kezeli:\n\n- Kapcsolatfelvételi adatok (név, e-mail cím): az Ön megkeresésére való válaszadás és a túrajelentkezés visszaigazolása céljából.\n- Technikai adatok (IP-cím, böngészőtípus): a weboldal megfelelő működéséhez és statisztikai célokra.\n\nAz adatkezelés jogalapja a GDPR 6. cikk (1) bekezdés b) pontja (szerződés teljesítése) és f) pontja (jogos érdek).`,
  },
  {
    title: '3. Adatmegőrzési idő',
    content: `A kapcsolatfelvételi adatokat az ügy lezárásától számított 2 évig, a szerződéses adatokat a jogi kötelezettségek figyelembevételével 5 évig őrizzük meg. A technikai adatokat legfeljebb 12 hónapig tároljuk.`,
  },
  {
    title: '4. Adattovábbítás és harmadik felek',
    content: `Az Ön adatait harmadik feleknek nem adjuk el, és nem adjuk át marketing célokra. Kizárólag az alábbi esetekben kerülhet sor adattovábbításra:\n\n- Jogszabályi kötelezettség teljesítése (hatóságok megkeresése esetén).\n- Tárhelyszolgáltató: az adatok biztonságos tárolása céljából megbízható, EU-s GDPR-kompatibilis szolgáltatóval dolgozunk.`,
  },
  {
    title: '5. Az Ön jogai',
    content: `Ön jogosult:\n\n- Hozzáférni az önről kezelt adatokhoz.\n- Kérni az adatok helyesbítését vagy törlését.\n- Korlátozni az adatkezelést, vagy tiltakozni ellene.\n- Adathordozhatóságot kérni.\n\nJogai érvényesítéséhez írjon az info@sportstourshungary.com e-mail címre. Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat: naih.hu.`,
  },
  {
    title: '6. Adatbiztonság',
    content: `Megfelelő technikai és szervezeti intézkedésekkel védjük adatait az illetéktelen hozzáférés, elvesztés, megsemmisítés vagy nyilvánosságra hozatal ellen. Weboldalunk HTTPS protokollt használ.`,
  },
  {
    title: '7. Módosítások',
    content: `Fenntartjuk a jogot az irányelvek módosítására. Lényeges változás esetén az oldalon értesítjük a látogatókat. Az irányelvek jelenlegi verziója: ${lastUpdated}.`,
  },
]

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="bg-foreground text-background py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Jogi</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-balance mb-3">
              Adatvédelmi irányelvek
            </h1>
            <p className="text-background/60 text-sm">Utolsó frissítés: {lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-muted-foreground leading-relaxed mb-10">
              A Sports Tours Hungary elkötelezett az Ön személyes adatainak védelme iránt. Ez a
              tájékoztató ismerteti, hogy milyen adatokat gyűjtünk, hogyan használjuk azokat, és
              milyen jogok illetik meg Önt.
            </p>

            <div className="flex flex-col gap-8">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-border pt-8">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-5 bg-secondary/50 border border-border rounded-2xl text-sm text-muted-foreground">
              Kérdések esetén forduljon hozzánk:{' '}
              <a href="mailto:info@sportstourshungary.com" className="text-primary underline underline-offset-2">
                info@sportstourshungary.com
              </a>
              . Tekintse meg a{' '}
              <Link href="/cookie-iranyelvek" className="text-primary underline underline-offset-2">
                Cookie irányelveket
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
