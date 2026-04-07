// Tour data – all future dates, no prices, no brands, no real venues
export type TourCategory = 'kerékpár' | 'gyalogtúra' | 'futás' | 'felfedezés'
export type TourDifficulty = 'kezdő' | 'közép' | 'haladó'

export interface Tour {
  id: string
  title: string
  slug: string
  category: TourCategory
  difficulty: TourDifficulty
  duration: string
  distance: string
  region: string
  date: string
  image: string
  shortDesc: string
  longDesc: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  minParticipants: number
  maxParticipants: number
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'dunamenti-kerekparos-tura',
    title: 'Dunamenti kerékpáros túra',
    category: 'kerékpár',
    difficulty: 'kezdő',
    duration: '2 nap',
    distance: '80 km',
    region: 'Dunántúl',
    date: '2026-05-10',
    image: '/images/tour-cycling.jpg',
    shortDesc: 'Fedezze fel a Duna mente vadregényes tájait kerékpáron, páratlan természeti panorámával.',
    longDesc:
      'Kétnapos kerékpáros kalandtúránk során a Duna mentén haladva fedezzük fel a folyó és az erdők csodálatos találkozását. Az útvonal széles kavicsos ösvényeken és erdei utakon vezet át, és minden fordulónál lenyűgöző panoráma vár. Az éjszakát egy természet közeli szálláshelyen töltjük, ahol visszatölthetjük energiáinkat a másnapi kalandhoz.',
    highlights: ['Folyóparti ösvények', 'Madárles', 'Őserdei pihenők', 'Napfelkeltés a vízparton'],
    included: ['Szakértő vezető', 'Kerékpár és sisak', 'Szállás', 'Reggelik', 'Balesetbiztosítás'],
    notIncluded: ['Ebéd és vacsora', 'Személyes felszerelés'],
    minParticipants: 4,
    maxParticipants: 12,
  },
  {
    id: '2',
    slug: 'erdo-gyalogtura-eszak-magyarorszag',
    title: 'Észak-magyarországi erdőtúra',
    category: 'gyalogtúra',
    difficulty: 'közép',
    duration: '3 nap',
    distance: '45 km',
    region: 'Észak-Magyarország',
    date: '2026-06-14',
    image: '/images/tour-hiking.jpg',
    shortDesc: 'Háromnapos gyalogtúra erdős hegyvidéken, patakok és sziklakilátók mentén.',
    longDesc:
      'Háromnapos gyalogtúránk az északi hegyvidék legszebb erdős ösvényein vezet keresztül. Bükkös és tölgyes erdők váltakoznak patakok mentén húzódó szurdokokkal. Minden nap más-más természeti élmény vár: napfelkeltés sziklakilátóból, reggeli ködfelhők a völgyek felett, és csillagos éjszaka tábortűz mellett.',
    highlights: ['Sziklakilátók', 'Erdei patakok', 'Barlangi kaland', 'Tábortűz'],
    included: ['Szakértő vezető', 'Hátizsák', 'Sátrak vagy menedékház', 'Minden étkezés', 'Balesetbiztosítás'],
    notIncluded: ['Személyes felszerelés', 'Túrabakancs'],
    minParticipants: 3,
    maxParticipants: 10,
  },
  {
    id: '3',
    slug: 'futotabor-alfold',
    title: 'Alföldi futótábor',
    category: 'futás',
    difficulty: 'közép',
    duration: '2 nap',
    distance: '30 km/nap',
    region: 'Alföld',
    date: '2026-07-05',
    image: '/images/tour-running.jpg',
    shortDesc: 'Futótábor az Alföld természetes ösvényein, reggeli edzéssel és szakmai coaching-gal.',
    longDesc:
      'Kétnapos futótáborunkban az alföldi természetvédelmi területek ösvényein tréningezünk. A kora reggeli futás a napfelkeltés hangulatában, az esti könnyed tempós futás az esti szellőben – mindkét nap különleges élmény. Szakértő futóedzőnk személyre szabott tippeket és technikafejlesztési segítséget nyújt minden résztvevőnek.',
    highlights: ['Napfelkeltés futás', 'Technikaelemzés', 'Természetes terep', 'Esti relaxáció'],
    included: ['Futóedző', 'Étkezések', 'Szállás', 'Balesetbiztosítás'],
    notIncluded: ['Futócipő', 'Sportfelszerelés'],
    minParticipants: 5,
    maxParticipants: 15,
  },
  {
    id: '4',
    slug: 'dunantuli-felfedezotabor',
    title: 'Dunántúli felfedezőtábor',
    category: 'felfedezés',
    difficulty: 'haladó',
    duration: '5 nap',
    distance: '120 km',
    region: 'Dunántúl',
    date: '2026-08-22',
    image: '/images/tour-exploration.jpg',
    shortDesc: 'Ötnapos multi-sport kalandtúra: kerékpár, gyaloglás és kajakozás ötvözése.',
    longDesc:
      'Ötnapos multi-sport expedíciónk a legmozgalmasabb természeti kalandot kínálja: kerékpározás erdei utakon, gyalogtúra sziklavidéken, és kajakozás nyugodt folyóvizeken. Minden nap más közlekedési módot kombinálunk, hogy a táj minden dimenzióját megtapasztalhassa. Ez az ideális program azoknak, akik ki akarják törni a komfortzónájukból.',
    highlights: ['Multi-sport kombináció', 'Kajak szakasz', 'Sziklamászó bemutató', 'Csillagászati este'],
    included: ['Több vezető', 'Összes felszerelés', 'Minden étkezés', 'Szállás', 'Balesetbiztosítás'],
    notIncluded: ['Személyes sportruházat'],
    minParticipants: 4,
    maxParticipants: 8,
  },
  {
    id: '5',
    slug: 'kajakos-folyotours',
    title: 'Folyókajakos természettúra',
    category: 'felfedezés',
    difficulty: 'kezdő',
    duration: '1 nap',
    distance: '22 km',
    region: 'Közép-Magyarország',
    date: '2026-05-30',
    image: '/images/tour-kayak.jpg',
    shortDesc: 'Napos kajakozás egy nyugodt folyón, páratlan vízi természeti panorámával.',
    longDesc:
      'Egynapos kajakos túránk egy csendes, természetvédelmi területen áthaladó folyón vezet. A vízszint tökéletes kezdőknek is, a tájkép pedig lenyűgöző: nádasok, fűzfaerdők, vízimadarak. Túravezető egész nap kísér, és szükség esetén technikai segítséget nyújt. Délben part menti pihenőn frissítjük fel magunkat.',
    highlights: ['Vízimadár megfigyelés', 'Nádas átkelő', 'Part menti piknik', 'Napnyugta a vízen'],
    included: ['Kajakos vezető', 'Kajak és mentőmellény', 'Evező', 'Piknik ebéd', 'Balesetbiztosítás'],
    notIncluded: ['Átváltó ruha'],
    minParticipants: 2,
    maxParticipants: 10,
  },
  {
    id: '6',
    slug: 'oszi-erdo-kerekpar',
    title: 'Őszi erdei kerékpártúra',
    category: 'kerékpár',
    difficulty: 'haladó',
    duration: '3 nap',
    distance: '150 km',
    region: 'Észak-Magyarország',
    date: '2026-09-19',
    image: '/images/tour-cycling.jpg',
    shortDesc: 'Háromnapos intenzív kerékpártúra az őszi színpompás erdőkben.',
    longDesc:
      'Szeptemberi háromnapos kerékpártúránk az ősz legszebb időszakában visz az északi hegyek erdős útjain. A sárga-vörös lombkorona alatt tekergő ösvények, friss erdei levegő és változatos domborzat teszik ezt a túrát igazán különlegessé. Ez haladóbb kerékpárosoknak ajánlott, mert az útvonal hosszabb kapaszkodókat is tartalmaz.',
    highlights: ['Őszi lombkorona', 'Hegytetői kilátók', 'Erdei szállás', 'Éjjeli csillagok'],
    included: ['Vezető', 'Kerékpár', 'Szállás', 'Reggelik és vacsorák', 'Balesetbiztosítás'],
    notIncluded: ['Kerékpáros ruházat', 'Ebéd'],
    minParticipants: 4,
    maxParticipants: 10,
  },
]

export const categoryLabels: Record<TourCategory, string> = {
  kerékpár: 'Kerékpáros',
  gyalogtúra: 'Gyalogtúra',
  futás: 'Futótúra',
  felfedezés: 'Felfedezés',
}

export const difficultyLabels: Record<TourDifficulty, string> = {
  kezdő: 'Kezdő',
  közép: 'Középhaladó',
  haladó: 'Haladó',
}

export const difficultyColors: Record<TourDifficulty, string> = {
  kezdő: 'bg-moss/20 text-moss',
  közép: 'bg-terracotta/20 text-terracotta',
  haladó: 'bg-primary/20 text-primary',
}
