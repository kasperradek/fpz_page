export const HERO_SLIDES = [
  {
    id: 'fort',
    label: 'Fort Sztuki (i) Życia',
    image: '/images/hero-fort.png',
    alt: 'Fort Sztuki (i) Życia Fundacji Pełna Życia',
  },
  {
    id: 'dzieci',
    label: 'Zajęcia z dziećmi',
    image: '/images/hero-dzieci.png',
    alt: 'Podopieczni Fundacji Pełna Życia podczas zajęć',
  },
  {
    id: 'koniki',
    label: 'Hipoterapia',
    image: '/images/hero-koniki.png',
    alt: 'Zajęcia z hipoterapii Fundacji Pełna Życia',
  },
]

export const EFS_LOGOS = [
  { src: '/images/efs-1.png', alt: 'Fundusze Europejskie', className: 'h-12 lg:h-[74px]' },
  { src: '/images/efs-2.png', alt: 'Rzeczpospolita Polska', className: 'h-8 lg:h-[42px]' },
  { src: '/images/efs-3.png', alt: 'Unia Europejska — Europejski Fundusz Społeczny', className: 'h-11 lg:h-[64px]' },
]

export const OFFER_TABS = [
  {
    id: 'terapie',
    label: 'Terapie',
    ctaTo: '/terapie',
    items: [
      {
        title: 'Arteterapia',
        image: '/images/card-arteterapia.png',
        description:
          'Warsztaty arteterapeutyczne rozwijające kreatywność, wyrażanie emocji i współpracę w grupie.',
        to: '/terapie#arteterapia',
      },
      {
        title: 'Fizjoterapia',
        image: '/images/card-fizjoterapia.png',
        description:
          'Kompleksowe zajęcia rehabilitacyjne (NDT-Bobath, SI) wspierające rozwój ruchowy dzieci.',
        to: '/terapie#fizjoterapia',
      },
      {
        title: 'Hipoterapia',
        image: '/images/card-hipoterapia.png',
        description:
          'Terapia z udziałem konia łącząca oddziaływanie ruchowe, sensoryczne, psychiczne i społeczne.',
        to: '/terapie#hipoterapia',
      },
      {
        title: 'Psychoterapia',
        image: '/images/card-psychoterapia.png',
        description:
          'Indywidualne wsparcie psychologiczne i terapeutyczne dla dzieci i młodzieży w przyjaznej atmosferze.',
        to: '/terapie#psychoterapia',
      },
      {
        title: 'Terapia pedagogiczno-logopedyczna',
        image: '/images/card-logopedia.png',
        description:
          'Ćwiczenia wspierające rozwój mowy, artykulacji, komunikacji werbalnej i alternatywnej.',
        to: '/terapie#pedagogiczno-logopedyczna',
      },
      {
        title: 'Integracyjna grupa teatralna',
        image: '/images/card-teatr.png',
        description:
          'Cotygodniowe zajęcia teatroterapii zwieńczone coroczną premierą na krakowskich scenach.',
        to: '/terapie#grupa-teatralna',
      },
      {
        title: 'Trening umiejętności społecznych',
        image: '/images/card-tus.png',
        description:
          'Rozwijanie empatii, rozpoznawania emocji i współpracy w kontaktach rówieśniczych.',
        to: '/terapie#trening-spoleczny',
      },
    ],
  },
  {
    id: 'wsparcie',
    label: 'Wsparcie',
    ctaTo: '/wsparcie',
    items: [
      {
        title: 'Doradztwo w sprawach życiowych',
        image: '/images/wsparcie-doradztwo.png',
        description:
          'Pomoc w uzyskaniu orzeczeń, świadczeń, dodatków i wsparcia w codziennych sprawach.',
        to: '/wsparcie#doradztwo',
      },
      {
        title: 'Pomoc psychologa',
        image: '/images/wsparcie-psycholog.png',
        description:
          'Profesjonalne wsparcie psychologiczne w radzeniu sobie ze stresem, lękiem i przeciążeniem.',
        to: '/wsparcie#psycholog',
      },
      {
        title: 'Szkolenia dla opiekunów',
        image: '/images/wsparcie-szkolenia.png',
        description:
          'Praktyczne kursy z pielęgnacji i codziennej opieki nad osobami niesamodzielnymi.',
        to: '/wsparcie#szkolenia-opiekunowie',
      },
      {
        title: 'Pomoc prawnika',
        image: '/images/wsparcie-prawnik.png',
        description:
          'Bezpłatne porady prawne z zakresu prawa rodzinnego, spadkowego i cywilnego.',
        to: '/wsparcie#prawnik',
      },
      {
        title: 'Szkolenia z fizjoterapii',
        image: '/images/card-fizjoterapia.png',
        description:
          'Kursy dla opiekunów uczące bezpiecznego wspierania rehabilitacji bliskich w domu.',
        to: '/wsparcie#szkolenia-fizjoterapia',
      },
      {
        title: 'Opieka wytchnieniowa',
        image: '/images/wsparcie-opieka.png',
        description:
          'Bezpłatna opieka domowa nad bliskim w Krakowie, dająca opiekunom czas na odpoczynek.',
        to: '/wsparcie#opieka-wytchnieniowa',
      },
    ],
  },
  {
    id: 'fort',
    label: 'Fort Sztuki (i) Życia',
    ctaTo: '/fort',
    items: [
      {
        title: 'Muzeum',
        image: '/images/card-fort-muzeum.png',
        description:
          'Odkryj historię zrewitalizowanego Fortu Sidzina i jego wyjątkową przestrzeń wystawienniczą.',
        to: '/fort',
      },
      {
        title: 'Wydarzenia kulturalne',
        image: '/images/card-fort-kultura.png',
        description:
          'Koncerty, kino plenerowe, warsztaty i pikniki integrujące lokalną społeczność.',
        to: '/fort',
      },
      {
        title: 'Współpraca',
        image: '/images/card-fort-wspolpraca.png',
        description:
          'Partnerstwa z instytucjami kultury, szkołami, artystami i lokalnymi organizacjami.',
        to: '/fort',
      },
      {
        title: 'Strona Główna Fortu',
        image: '/images/card-fort-glowna.png',
        description:
          'Poznaj pełny harmonogram działań oraz historię projektu Fort Sztuki (i) Życia.',
        to: '/fort',
      },
    ],
  },
]

export const HELP_TABS = [
  {
    id: 'osoba',
    label: 'Osoba',
    ctaTo: '/chce-pomoc',
    items: [
      {
        title: 'Wolontariat',
        image: '/images/card-wolontariat.png',
        description:
          'Podaruj swój czas i energię Podopiecznym Fundacji oraz zdobądź cenne doświadczenie.',
        to: '/wolontariat',
      },
      {
        title: '1,5% podatku',
        image: '/images/card-podatek.png',
        description:
          'Przekaż 1,5% swojego podatku (KRS: 0000043097) i wspieraj codzienne terapie.',
        to: '/1-5-procent',
      },
      {
        title: 'Darowizna',
        image: '/images/card-darowizna.png',
        description:
          'Każda cegiełka realnie finansuje sesje terapii oraz opiekę wytchnieniową.',
        to: '/darowizna',
      },
      {
        title: 'Kup książkę',
        image: '/images/card-ksiazka.png',
        description:
          'Wesprzyj Fundację poprzez zakup wyjątkowych publikacji charytatywnych.',
        to: '/chce-pomoc#kup-ksiazke',
      },
      {
        title: 'Sklep',
        image: '/images/card-sklep.png',
        description:
          'Sprawdź rękodzieło i produkty, z których dochód zasila działania Fundacji.',
        to: '/chce-pomoc#sklep',
      },
    ],
  },
  {
    id: 'biznes',
    label: 'Biznes',
    ctaTo: '/dla-biznesu',
    items: [
      {
        title: 'Wolontariat pracowniczy',
        image: '/images/card-biz-wolontariat.png',
        description:
          'Zaangażuj swój zespół w wspólne akcje integracyjne i projekty społeczne.',
        to: '/dla-biznesu',
      },
      {
        title: 'Licytacje',
        image: '/images/card-podatek.png',
        description:
          'Przekaż przedmioty lub usługi na charytatywne licytacje wspierające Podopiecznych.',
        to: '/dla-biznesu',
      },
      {
        title: 'Warsztaty',
        image: '/images/card-darowizna.png',
        description:
          'Wspólne warsztaty kreatywne i edukacyjne budujące kulturę inkluzywności.',
        to: '/dla-biznesu',
      },
      {
        title: 'Kampanie społeczne',
        image: '/images/card-ksiazka.png',
        description:
          'Twórz z nami kampanie zwiększające świadomość na temat niepełnosprawności.',
        to: '/dla-biznesu',
      },
      {
        title: 'Darowizny',
        image: '/images/card-sklep.png',
        description:
          'Wsparcie finansowe i rzeczowe firm z możliwością odliczenia podatkowego.',
        to: '/dla-biznesu',
      },
      {
        title: 'Organizacje imprez',
        image: '/images/card-biz-imprezy.png',
        description:
          'Współorganizuj pikniki, koncerty i wydarzenia charytatywne z Fundacją.',
        to: '/dla-biznesu',
      },
    ],
  },
]

export const STATS = [
  { target: 35, suffix: '', label: 'lat razem' },
  { target: 1000, suffix: '+', label: 'podopiecznych miesięcznie' },
  { target: 5000000, suffix: '+', label: 'zł na pomoc podopiecznym' },
]

export const LATEST_NEWS = [
  {
    id: 'piknik-historyczny',
    date: '23.08.2024',
    tags: ['WYDARZENIA', 'FORT', '+1'],
    title: 'Piknik historyczny w Forcie!',
    excerpt:
      'Fundacja Pełna Życia z całego serca zaprasza na jesienne wydarzenia w Forcie Sztuki (i) Życia! A rozpoczynamy z przytupem. Jeszcze w sierpniu wspólnie żegnamy wakacje seansem kina plenerowego "Piraci z Karaibów i Klątwa Czarnej Perły".',
    image: '/images/news-piknik.png',
    to: '/aktualnosci/piknik-historyczny-w-forcie',
  },
  {
    id: 'gramy-w-zielone',
    date: '23.07.2024',
    tags: ['WYDARZENIA', 'PROJEKTY', '+1'],
    title: 'Gramy w zielone',
    excerpt:
      'Z przyjemnością informujemy, że przystąpiliśmy do prac nad projektem "Gramy w zielone - element ekologicznej ścieżki edukacyjnej w Forcie Sidzina" realizowanego w ramach programu "wESpół wspieramy ekonomię społeczną".',
    image: '/images/news-zielone.png',
    to: '/aktualnosci/gramy-w-zielone',
  },
  {
    id: 'awantura-w-chioggi',
    date: '28.06.2024',
    tags: ['WYDARZENIA', 'TEATR', '+1'],
    title: '„Awantura w Chioggi”',
    excerpt:
      'Do przedstawienia grupa przygotowywała się prawie 10 miesięcy. Teraz nadszedł czas, by pokazać efekty swojej pracy. W ubiegły czwartek Starsza Integracyjna Grupa Teatralna zaprezentowała szerokiej publiczności spektakl pt. „Awantura w Chioggi, akt I” Carla Goldoniego.',
    image: '/images/news-awantura.png',
    to: '/aktualnosci/awantura-w-chioggi',
  },
]

export const SUPPORTERS = [
  {
    id: 1,
    name: 'Patrycja Krzywoń',
    image: '/images/supporter-1.png',
  },
  {
    id: 2,
    name: 'Igo',
    image: '/images/supporter-2.png',
  },
  {
    id: 3,
    name: 'Przyjaciele Fundacji',
    image: '/images/supporter-3.png',
  },
  {
    id: 4,
    name: 'Oliwier Janiak',
    image: '/images/supporter-4.png',
  },
  {
    id: 5,
    name: 'Ambasadorzy FPŻ',
    image: '/images/supporter-5.png',
  },
]

export const MAP_LOCATIONS = [
  {
    id: 'siedziba',
    name: 'Siedziba Fundacji',
    address: 'ul. Juliana Dunajewskiego 5/29, 31-133 Kraków',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Juliana+Dunajewskiego+5/29+31-133+Krakow',
    hours: 'pon - pt: 9:15 - 16:00',
    phone: '+48 698 28 13 66',
    pinPos: { left: '40%', top: '26%' },
  },
  {
    id: 'wspornik',
    name: 'Wspornik',
    address: 'ul. Fiołkowa 8, 30-058 Kraków',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Fiolkowa+8+30-058+Krakow',
    hours: 'pon - pt: 9:00 - 17:00',
    phone: '+48 726 30 10 40',
    pinPos: { left: '49%', top: '34%' },
  },
  {
    id: 'fort',
    name: 'Fort Sztuki (i) Życia',
    address: 'ul. Kozienicka 24, 30-397 Kraków (Fort Sidzina)',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Fort+Sidzina+Kozienicka+24+Krakow',
    hours: 'pon - pt: 9:00 - 17:00',
    phone: '+48 698 28 13 66',
    pinPos: { left: '33%', top: '87%' },
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Ewelina G.',
    role: 'Uczestnik Arteterapii',
    quote:
      'Fundacja Pełna Życia to bardzo potrzebne i ważne miejsce na mapie Krakowa. Specjaliści od lat służący wsparciem osobom z niepełnosprawnościami i ich rodzinom, empatyczni pracownicy, wspaniała kadra. W Fundacji każdy znajdzie pomoc.',
  },
  {
    id: 2,
    author: 'Jacek B.',
    role: 'Uczestnik Hipoterapii',
    quote:
      'Pracownicy Fundacji otaczają swoich podopiecznych fachową, pełną profesjonalizmu i cierpliwości opieką. Pomoc jest nieoceniona w codziennym trudzie opieki nad osobą chorą i leżącą. Polecam z całego serca i dziękuję za zaangażowanie i życzliwość ❤',
  },
  {
    id: 3,
    author: 'Konrad G.',
    role: 'Uczestnik programu Wspornik',
    quote:
      'Korzystam z pomocy Fundacji Pełna Życia w zakresie programu „Wspornik” – konkretna i fachowa pomoc jakiej doświadczam wraz z rodziną ze strony bardzo przyjaznego personelu sprawia, że mogę polecić tę Fundację innym osobom.',
  },
  {
    id: 4,
    author: 'Agnieszka S.',
    role: 'Opiekun w projekcie Wspornik',
    quote:
      'Serdecznie dziękuję Fundacji za pomoc i opiekę nad moimi rodzicami oraz wsparcie dla mnie w opiece nad nimi. Dzięki projektowi Wspornik czuję, że mogę liczyć na osoby, które rozumieją potrzeby osób niepełnosprawnych.',
  },
  {
    id: 5,
    author: 'Gosia S.',
    role: 'Uczestnik Arteterapii',
    quote:
      'Fundacja pomogła mi jako jedyna w sytuacji, kiedy nikt inny nie oferował pomocy. Życzliwość i empatia na najwyższym poziomie. Kompetentni i bardzo mili pracownicy i koordynatorzy. Gorąco polecam wszystkim, którzy potrzebują wsparcia!',
  },
  {
    id: 6,
    author: 'Żaneta O.',
    role: 'Uczestnik Hipoterapii',
    quote:
      'Cudowni, życzliwi i pomocni ludzie, dla których ważny jest drugi człowiek. Mają dużą wiedzę i doświadczenie, aby wskazać idealne, pomocne rozwiązania w trudnych sytuacjach. Dziękuję, że jesteście.',
  },
]
