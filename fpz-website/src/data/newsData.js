export const NEWS_CATEGORIES = [
  { id: 'terapie', label: 'Terapie', figmaCount: 54 },
  { id: 'grupa-teatralna', label: 'Grupa teatralna', figmaCount: 36 },
  { id: 'baza-wiedzy', label: 'Baza wiedzy', figmaCount: 24 },
  { id: 'praca', label: 'Praca', figmaCount: 18 },
  { id: 'partnerzy', label: 'Partnerzy', figmaCount: 47 },
]

export const POST_GALLERY = [
  {
    src: '/images/post-gal-1.png',
    alt: 'Warsztaty w ŻyWej pracowni z Motorolą — zdjęcie 1',
  },
  {
    src: '/images/post-gal-2.png',
    alt: 'Warsztaty w ŻyWej pracowni z Motorolą — zdjęcie 2',
  },
  {
    src: '/images/post-gal-3.png',
    alt: 'Warsztaty w ŻyWej pracowni z Motorolą — zdjęcie 3',
  },
  {
    src: '/images/post-gal-4.png',
    alt: 'Warsztaty w ŻyWej pracowni z Motorolą — zdjęcie 4',
  },
  {
    src: '/images/post-gal-5.png',
    alt: 'Warsztaty w ŻyWej pracowni z Motorolą — zdjęcie 5',
  },
  {
    src: '/images/post-gal-6.png',
    alt: 'Warsztaty w ŻyWej pracowni z Motorolą — zdjęcie 6',
  },
]

export const FEATURED_POST = {
  slug: 'warsztaty-w-zywej-pracowni-z-motorola',
  date: '23 października 2024',
  shortDate: '23.10.2024',
  title: 'Warsztaty w ŻyWej pracowni z Motorolą',
  subtitle:
    'Fundacja Pełna Życia z całego serca zaprasza na jesienne wydarzenia w Forcie Sztuki (i) Życia!',
  tags: ['WYRÓŻNIONE', 'FORT SZTUKI I ŻYCIA', 'PROJEKTY'],
  categories: ['terapie', 'partnerzy'],
  image: '/images/post-hero.png',
  gallery: POST_GALLERY,
  sections: [
    {
      heading: 'A rozpoczynamy z przytupem.',
      paragraphs: [
        {
          before:
            'Jeszcze w sierpniu wspólnie żegnamy wakacje seansem kina plenerowego „Piraci z Karaibów i Klątwa Czarnej Perły”. Seans odbędzie się 31 sierpnia, a oprócz kultowego filmu uczestnicy spotkania będą mieli możliwość spotkania z piratami, obejrzenia pokazu i skorzystania z innych ciekawych atrakcji. ',
          link: {
            label: 'Więcej informacji na stronie Fortu',
            href: 'https://www.fort-sidzina.pl/kino-plenerowe-piraci-z-karaibow/',
          },
          after: '.',
        },
      ],
    },
    {
      heading: 'Kolejnym niezwykłym wydarzeniem jest Piknik Historyczny',
      intro:
        'Odbędzie się on 14 września. Rozpoczęcie wydarzenia planowane jest na 12:30, a wśród atrakcji znalazły się:',
      bullets: [
        'spotkanie z grupami rekonstrukcyjnymi,',
        'pokazy historycznych broni,',
        'pokazy sprzętu outdoorowego,',
        'trening umiejętności survivalowych,',
        'kino plenerowe,',
        'i wiele, wiele innych!',
      ],
      paragraphs: [
        {
          link: {
            label: 'Więcej informacji o pikniku na stronie internetowej Fortu',
            href: 'https://www.fort-sidzina.pl/pinkik-historyczny-w-forcie-sidzina/',
          },
          after: '.',
        },
        {
          before:
            'To jeszcze nie koniec wydarzeń zaplanowanych na wrzesień. W planach kolejne spotkania w ramach kina plenerowego, Małopolska Noc Naukowców i dużo, dużo więcej!',
        },
      ],
    },
    {
      heading:
        'W ramach obchodów Dni Twierdzy Kraków nie może zabraknąć grup prezentujących epokę, w której Twierdza powstawała.',
      richBullets: [
        {
          before:
            'Jedną z takich grup będą rekonstruktorzy z 45 Infanterie CK Przemyśl.',
        },
        {
          before:
            'Na naszym Pikniku nie zabraknie też czegoś dla entuzjastów dziejów dawniejszych. Grupa rekonstrukcyjna ',
          link: {
            label: 'TYR Hird',
            href: 'https://www.facebook.com/Tyrhird',
          },
          after:
            '. Zaprezentuje Wam fragmenty życia codziennego ludów Skandynawii od IX do XI wieku.',
        },
        {
          before: 'Kolejny wystawca to ',
          link: {
            label: 'Stowarzyszenie Militarne GROT',
            href: 'https://www.facebook.com/stowarzyszeniegrot',
          },
          after:
            ' – grupa ludzi, którzy dzielą się swoją wiedzą z różnych przydatnych dziedzin. Na nasz Piknik Historyczny przyjadą z czymś naprawdę WIELKIM. Kto by nie chciał obejrzeć mocarnych, kultowych ciężarówek pamiętających jeszcze czasy LWP?',
        },
      ],
    },
  ],
}

export const NEWS_POSTS = [
  {
    slug: 'piknik-historyczny-w-forcie',
    date: '23.08.2024',
    longDate: '23 sierpnia 2024',
    tags: ['FORT', 'WYDARZENIA', '+1'],
    categories: ['terapie', 'partnerzy'],
    title: 'Piknik historyczny w Forcie!',
    excerpt:
      'Fundacja Pełna Życia z całego serca zaprasza na jesienne wydarzenia w Forcie Sztuki (i) Życia! A rozpoczynamy z przytupem. Jeszcze w sierpniu wspólnie żegnamy wakacje seansem kina plenerowego "Piraci z Karaibów i Klątwa Czarnej Perły". Seans odbędzie się 31 sierpnia, a oprócz kultowego filmu uczestnicy spotkania będą mieli możliwość spotkania z piratami, obejrzenia pokazu i skorzystania z innych ciekawych atrakcji. Więcej informacji na stronie Fortu.',
    image: '/images/news-piknik.png',
    sections: FEATURED_POST.sections,
  },
  {
    slug: 'gramy-w-zielone',
    date: '23.07.2024',
    longDate: '23 lipca 2024',
    tags: ['WYDARZENIA', 'PROJEKTY', '+1'],
    categories: ['baza-wiedzy', 'partnerzy'],
    title: 'Gramy w zielone',
    excerpt:
      'Z przyjemnością informujemy, że przystąpiliśmy do prac nad projektem "Gramy w zielone - element ekologicznej ścieżki edukacyjnej w Forcie Sidzina" realizowanego w ramach programu "wESpół wspieramy ekonomię społeczną".',
    image: '/images/news-zielone.png',
    sections: [
      {
        heading: 'Ekologiczna ścieżka edukacyjna w Forcie Sidzina',
        paragraphs: [
          {
            before:
              'Z przyjemnością informujemy, że przystąpiliśmy do prac nad projektem „Gramy w zielone – element ekologicznej ścieżki edukacyjnej w Forcie Sidzina”, realizowanego w ramach programu „wESpół wspieramy ekonomię społeczną”.',
          },
          {
            before:
              'Naszym celem jest stworzenie przyjaznej, dostępnej przestrzeni przyrodniczej wokół Fortu Sztuki (i) Życia, w której dzieci, młodzież i rodziny mogą wspólnie odkrywać bogactwo lokalnej flory i fauny.',
          },
        ],
      },
    ],
  },
  {
    slug: 'awantura-w-chioggi',
    date: '28.06.2024',
    longDate: '28 czerwca 2024',
    tags: ['WYDARZENIA', 'TEATR', '+1'],
    categories: ['grupa-teatralna', 'terapie'],
    title: '„Awantura w Chioggi”',
    excerpt:
      'Do przedstawienia grupa przygotowywała się prawie 10 miesięcy. Teraz nadszedł czas, by pokazać efekty swojej pracy. W ubiegły czwartek Starsza Integracyjna Grupa Teatralna zaprezentowała szerokiej publiczności spektakl pt. „Awantura w Chioggi, akt I” Carla Goldoniego.',
    image: '/images/news-awantura.png',
    sections: [
      {
        heading: 'Premiera Starszej Integracyjnej Grupy Teatralnej',
        paragraphs: [
          {
            before:
              'Do przedstawienia grupa przygotowywała się prawie 10 miesięcy. W ubiegły czwartek Starsza Integracyjna Grupa Teatralna zaprezentowała szerokiej publiczności spektakl pt. „Awantura w Chioggi, akt I” Carla Goldoniego.',
          },
          {
            before:
              'Pełna humoru i włoskiego temperamentu inscenizacja spotkała się z entuzjastycznym przyjęciem widzów i owacjami na stojąco. Gratulujemy wszystkim aktorom i terapeutom!',
          },
        ],
      },
    ],
  },
  {
    slug: 'darowizna-firmy-strumin',
    date: '30.07.2024',
    longDate: '30 lipca 2024',
    tags: ['WYDARZENIA', 'PARTNERZY', '+1'],
    categories: ['partnerzy'],
    title: 'Darowizna firmy Strumin',
    excerpt:
      'Każda darowizna motywuje nas do działania! Z wdzięcznością dziękujemy naszemu Darczyńcy - firmie STRUMIN. Państwa wsparcie ułatwia nam realizację projektów i rozmaitych działań, związanych między innymi ze wspieraniem osób niepełnosprawnych. Wspólnie czyńmy dobro!',
    image: '/images/news-strumin.png',
    sections: [
      {
        heading: 'Dziękujemy za zaufanie i wsparcie',
        paragraphs: [
          {
            before:
              'Każda darowizna motywuje nas do działania! Z wdzięcznością dziękujemy naszemu Darczyńcy – firmie STRUMIN. Państwa wsparcie ułatwia nam realizację projektów i rozmaitych działań, związanych między innymi ze wspieraniem osób z niepełnosprawnościami. Wspólnie czyńmy dobro!',
          },
        ],
      },
    ],
  },
  {
    slug: 'wsparcie-od-firmy-nafto',
    date: '25.08.2024',
    longDate: '25 sierpnia 2024',
    tags: ['WYDARZENIA', 'PARTNERZY', '+1'],
    categories: ['partnerzy', 'baza-wiedzy'],
    title: 'Wsparcie od firmy NAFTO',
    excerpt:
      'Z całego serca dziękujemy firmie NAFTO za wsparcie finansowe naszej Fundacji! NAFTO to firma od lat angażująca się na polu społecznym i ekologicznym. Biorąc pod uwagę potencjał i potrzeby Fortu 52 1/2 S Sidzina, firma po raz kolejny postanowiła wesprzeć naszą Fundację, tym razem poprzez dofinansowanie powstania ścieżki ekologicznej.',
    image: '/images/news-nafto.png',
    sections: [
      {
        heading: 'Kolejny krok w rozwoju Fortu Sztuki (i) Życia',
        paragraphs: [
          {
            before:
              'Z całego serca dziękujemy firmie NAFTO za wsparcie finansowe naszej Fundacji! NAFTO to firma od lat angażująca się na polu społecznym i ekologicznym. Biorąc pod uwagę potencjał i potrzeby Fortu 52 1/2 S Sidzina, firma po raz kolejny postanowiła wesprzeć naszą Fundację, tym razem poprzez dofinansowanie powstania ścieżki ekologicznej.',
          },
          {
            before:
              'Bardzo serdecznie dziękujemy! Dzięki Wam Fort Sztuki (i) Życia może się rozwijać, by jeszcze bardziej rozszerzać świadomość ekologiczną społeczności.',
          },
        ],
      },
    ],
  },
  {
    slug: 'spektakl-chopin',
    date: '25.06.2024',
    longDate: '25 czerwca 2024',
    tags: ['WYDARZENIA', 'TEATR', '+1'],
    categories: ['grupa-teatralna', 'terapie'],
    title: 'Spektakl „Chopin”',
    excerpt:
      'Znów podbili nasze serca! 21 czerwca 2024 roku na Scenie Teatru Zależnego Młodsza Integracyjna Grupa Teatralna zaprezentowała spektakl „Chopin" na podstawie wierszy Wandy Chotomskiej. Spektakl rozpoczął się o 18:00, lecz goście przychodzili wcześniej, by obejrzeć i zakupić piękne rękodzieło wykonane przez Podopiecznych Fundacji na Arteterapii.',
    image: '/images/news-chopin.png',
    sections: [
      {
        heading: 'Młodsza Integracyjna Grupa Teatralna na Scenie Teatru Zależnego',
        paragraphs: [
          {
            before:
              'Znów podbili nasze serca! 21 czerwca 2024 roku na Scenie Teatru Zależnego Młodsza Integracyjna Grupa Teatralna zaprezentowała spektakl „Chopin” na podstawie wierszy Wandy Chotomskiej.',
          },
          {
            before:
              'Spektakl rozpoczął się o 18:00, lecz goście przychodzili wcześniej, by obejrzeć i zakupić piękne rękodzieło wykonane przez Podopiecznych Fundacji na Arteterapii. Następnie wszyscy przenieśli się do sali, gdzie powitała ich Aleksandra Włodarczyk, Prezes Fundacji.',
          },
        ],
      },
    ],
  },
  {
    slug: 'dzien-dziecka-w-forcie',
    date: '10.06.2024',
    longDate: '10 czerwca 2024',
    tags: ['WYDARZENIA', 'FORT', '+1'],
    categories: ['terapie', 'partnerzy'],
    title: 'Dzień Dziecka w Forcie!',
    excerpt:
      '1 czerwca 2024 w Forcie Sztuki (i) Życia po raz kolejny odbył się integracyjny Dzień Dziecka! Na uczestników czekało mnóstwo atrakcji takich jak balony napełniane helem, dojenie krowy (oczywiście sztucznej, ale liczą się zdobyte umiejętności), ognisko, głaskanie i karmienie lam, lody, zabawy z Musiconem, strzelnica pneumatyczna oraz strefa chillu i relaksu!',
    image: '/images/news-dzien-dziecka.png',
    sections: [
      {
        heading: 'Integracyjny Dzień Dziecka w Forcie Sztuki (i) Życia',
        paragraphs: [
          {
            before:
              '1 czerwca 2024 w Forcie Sztuki (i) Życia po raz kolejny odbył się integracyjny Dzień Dziecka! Na uczestników czekało mnóstwo atrakcji takich jak balony napełniane helem, dojenie sztucznej krowy, ognisko, głaskanie i karmienie lam, lody, zabawy z Musiconem, strzelnica pneumatyczna oraz strefa chillu i relaksu!',
          },
          {
            before:
              'W ramach Dnia Dziecka odbyły się także: zwiedzanie Fortu z przewodnikiem, występ teatru Eden oraz kino plenerowe, na którym oglądaliśmy kultowego „Shreka”.',
          },
        ],
      },
    ],
  },
  {
    slug: 'carlo-goldoni-awantura-w-chioggi',
    date: '14.06.2024',
    longDate: '14 czerwca 2024',
    tags: ['WYDARZENIA', 'TEATR', '+1'],
    categories: ['grupa-teatralna'],
    title: 'Carlo Goldoni - Awantura w Chioggi',
    excerpt:
      'Zaproszenie na wyjątkowy wieczór teatralny z udziałem Starszej Integracyjnej Grupy Teatralnej Fundacji Pełna Życia. Włoski temperament, humor i miesiące wspólnych prób na scenie.',
    image: '/images/news-goldoni.png',
    sections: [
      {
        heading: 'Zapraszamy na spektakl Starszej Integracyjnej Grupy Teatralnej',
        paragraphs: [
          {
            before:
              'Serdecznie zapraszamy na spektakl „Awantura w Chioggi” Carla Goldoniego w wykonaniu Starszej Integracyjnej Grupy Teatralnej Fundacji Pełna Życia.',
          },
        ],
      },
    ],
  },
  {
    slug: 'pozytywne-wiesci-o-nowym-darczyncy',
    date: '21.06.2024',
    longDate: '21 czerwca 2024',
    tags: ['WYDARZENIA', 'PARTNERZY', '+1'],
    categories: ['partnerzy', 'praca'],
    title: 'Pozytywne wieści o nowym Darczyńcy!',
    excerpt:
      'Wsparcie od zewnętrznych firm jest dla nas dużą motywacją do działania. Wspólnie działajmy w ramach niesienia opieki dzieciom z niepełnosprawnościami oraz opieki wytchnieniowej! Oficjalnie witamy w gronie Fundacyjnych Przyjaciół Centrum Pomocy Odszkodowawczej.',
    image: '/images/news-darczynca.png',
    sections: [
      {
        heading: 'Nowy Partner w gronie Fundacyjnych Przyjaciół',
        paragraphs: [
          {
            before:
              'Wsparcie od zewnętrznych firm jest dla nas dużą motywacją do działania. Wspólnie działajmy w ramach niesienia opieki dzieciom z niepełnosprawnościami oraz opieki wytchnieniowej! Oficjalnie witamy w gronie Fundacyjnych Przyjaciół Centrum Pomocy Odszkodowawczej.',
          },
        ],
      },
    ],
  },
]
