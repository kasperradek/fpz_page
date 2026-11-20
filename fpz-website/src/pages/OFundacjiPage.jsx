import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Accessibility,
  Globe,
  Handshake,
  LifeBuoy,
  Lightbulb,
  Play,
} from 'lucide-react'
import { PageBanner } from '../components/ui'

const MISSION_ITEMS = [
  {
    icon: Handshake,
    text: 'Codziennie wytrwale pracujemy z dziećmi i osobami z niepełnosprawnością.',
  },
  {
    icon: LifeBuoy,
    text: 'Rodzinom i opiekunom osób niesamodzielnych dajemy wytchnienie i pomagamy zorganizować opiekę.',
  },
  {
    icon: Globe,
    text: 'Intensywnie działamy na polu społecznym, by świat był przyjazny osobom z niepełnosprawnościami i niesamodzielnym.',
  },
]

const VISION_ITEMS = [
  {
    icon: Lightbulb,
    text: 'Chcemy być wiodącą organizacją, która odkrywa i popularyzuje najnowsze metody skutecznej rehabilitacji i terapii.',
  },
  {
    icon: Accessibility,
    text: 'Chcemy inspirować terapeutów do sięgania po nowsze metody terapii, korzystania z najnowszych technologii i metod oraz osiągania coraz lepszych efektów terapeutycznych.',
  },
]

const TIMELINE_ERAS = [
  {
    year: '1989',
    shortLabel:
      'Fundacja „Hipoterapia” na Rzecz Rozwoju Rehabilitacji Konnej Dzieci Niepełnosprawnych',
    title:
      'Fundacja „Hipoterapia” – Na Rzecz Rozwoju Rehabilitacji Konnej Dzieci Niepełnosprawnych',
    image: '/images/ofundacji-historia-1989.png',
    imageAlt: 'Początki działalności hipoterapeutycznej Fundacji w 1989 roku',
    content: (
      <div className="space-y-4">
        <p>
          W 1989 r. rozpoczęliśmy{' '}
          <strong className="font-semibold">
            propagowanie hipoterapii w Polsce
          </strong>
          . Organizowaliśmy ogólnopolskie i międzynarodowe konferencje, w tym
          założycielską Polskiego Towarzystwa Hipoterapeutycznego.
        </p>
        <p>
          Prowadziliśmy szkolenia dla lekarzy, kursy zawodowe, praktyki, staże i
          warsztaty. Współtworzyliśmy programy specjalizacyjne na uczelniach i
          wydaliśmy pierwsze polskojęzyczne publikacje o hipoterapii.
        </p>
        <p>
          Od początku działalności oferujemy rodzinom osób z niepełnosprawnością
          kompleksowe doradztwo, pomagając odnaleźć się w systemie przepisów i
          instytucji oferujących wsparcie.
        </p>
      </div>
    ),
  },
  {
    year: '2002',
    shortLabel:
      'Fundacja Hipoterapia na Rzecz Rehabilitacji Dzieci Niepełnosprawnych',
    title:
      'Fundacja Hipoterapia - Na Rzecz Rehabilitacji Dzieci Niepełnosprawnych',
    image: '/images/ofundacji-historia-2002.png',
    imageAlt: 'Działalność Fundacji Hipoterapia od 2002 roku',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Prowadzimy{' '}
          <strong className="font-semibold">
            terapię z hipoterapią
          </strong>{' '}
          jako metodę wsparcia leczenia,
        </li>
        <li>
          Organizujemy{' '}
          <strong className="font-semibold">
            integracyjne turnusy rehabilitacyjne
          </strong>{' '}
          dla rodzin z dziećmi z niepełnosprawnością z całej Polski,
        </li>
        <li>
          Rozwijamy unikalny{' '}
          <strong className="font-semibold">Integracyjny Teatr Kucyki</strong>,
        </li>
        <li>
          Promujemy pozytywny wizerunek osób z niepełnosprawnością (projekt{' '}
          <strong className="font-semibold">Moda Bez Ograniczeń</strong>),
        </li>
        <li>
          Oferujemy{' '}
          <strong className="font-semibold">
            psychoterapię, szkolenia i doradztwo
          </strong>{' '}
          dla rodzin,
        </li>
        <li>
          Współtworzymy i kształtujemy{' '}
          <strong className="font-semibold">
            Miejskie Centrum Informacji Społecznej
          </strong>{' '}
          m.in. z Gminą Kraków.
        </li>
      </ul>
    ),
  },
  {
    year: '2014',
    shortLabel: 'Fundacja Pełna Życia',
    title: 'Fundacja Pełna Życia',
    image: '/images/ofundacji-historia-2014.png',
    imageAlt: 'Współczesne działania Fundacji Pełna Życia',
    content: (
      <div className="space-y-4">
        <p>
          <strong className="font-semibold">Rozszerzamy działalność</strong>,
          oferując wsparcie rodzinom opiekującym się dorosłymi osobami z
          niepełnosprawnościami lub niesamodzielnymi. Pomagamy w organizacji
          opieki, czasowo ją przejmujemy i oferujemy doradztwo.
        </p>
        <p>
          <strong className="font-semibold">Remontujemy Fort Sidzina</strong>,
          by stworzyć przestrzeń integracji osób z niepełnosprawnościami ze
          społeczeństwem.
        </p>
        <div>
          <p>
            <strong className="font-semibold">
              Realizujemy projekty terapeutyczne
            </strong>{' '}
            i wspierające opiekunów:
          </p>
          <ul className="list-disc pl-6 mt-1.5 space-y-1">
            <li>Terapia-Wsparcie-Samodzielność (PFRON),</li>
            <li>Krakowskie Centrum Informacji i Wsparcia (EFS),</li>
            <li>Wspornik – Punkt Wsparcia Opiekunów (EFS, od 2020 r.).</li>
          </ul>
        </div>
        <p>
          <strong className="font-semibold">
            Z nadzieją patrzymy w przyszłość
          </strong>{' '}
          – przed nami wyzwania, ale i rosnąca otwartość świata na potrzeby osób
          z niepełnosprawnościami.
        </p>
      </div>
    ),
  },
]

const TEAM_MEMBERS = [
  {
    name: 'Aleksandra Włodarczyk',
    role: 'Prezes Zarządu',
    image: '/images/team-aleksandra.png',
  },
  {
    name: 'Michał Ryś',
    role: 'Wiceprezes Zarządu',
    image: '/images/team-michal.png',
  },
  {
    name: 'Agnieszka Suchy',
    role: 'Członek Zarządu/Główna księgowa',
    image: '/images/team-agnieszka.png',
  },
  {
    name: 'Marek Kapturkiewicz',
    role: 'Przewodniczący Rady',
    image: '/images/team-marek.png',
  },
]

export function OFundacjiPage() {
  const [activeYear, setActiveYear] = useState('2014')
  const [playVideo, setPlayVideo] = useState(false)

  const activeEra =
    TIMELINE_ERAS.find((era) => era.year === activeYear) || TIMELINE_ERAS[2]

  return (
    <div>
      <PageBanner title="O Fundacji" image="/images/banner-o-fundacji.png" />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
        {/* Intro + Misja & Wizja */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <p className="max-w-[1124px] text-h6 lg:text-h5 font-normal text-blue-800">
            Od 1989 roku wspieramy{' '}
            <strong className="font-bold">
              osoby z niepełnosprawnościami oraz osoby im asystujące
            </strong>
            . Dzieci, dorosłych, seniorów. Jesteśmy tuż obok w każdym okresie
            ich życia. Szukamy nowych sposobów terapii, pomagamy w aktywizacji
            społecznej i zawodowej.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[77px]">
            {/* Misja */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 max-w-[530px]">
                <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
                  Misja
                </h2>
                <p className="text-body-mobile lg:text-body-desktop font-bold text-blue-800">
                  Dajemy nadzieję na lepsze jutro osobom z niepełnosprawnościami
                  i osobom niesamodzielnym!
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {MISSION_ITEMS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-body-mobile lg:text-body-desktop text-blue-800">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wizja */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 max-w-[530px]">
                <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
                  Wizja
                </h2>
                <p className="text-body-mobile lg:text-body-desktop font-bold text-blue-800">
                  Chcemy przygotować osoby z niepełnosprawnością na możliwie
                  maksymalnie samodzielne funkcjonowanie w dorosłym życiu.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {VISION_ITEMS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-body-mobile lg:text-body-desktop text-blue-800">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Historia (Interactive Timeline) */}
        <section className="flex flex-col gap-10 lg:gap-12">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Historia
          </h2>

          {/* Interactive Timeline Header */}
          <div className="w-full max-w-[840px] mx-auto">
            <div
              role="tablist"
              aria-label="Historia Fundacji"
              className="relative grid grid-cols-3 gap-3 sm:gap-6"
            >
              {/* Horizontal Green Track */}
              <div
                aria-hidden="true"
                className="absolute top-[52px] left-[8%] right-[8%] h-px bg-green-500"
              />

              {TIMELINE_ERAS.map((era) => {
                const isActive = era.year === activeYear
                return (
                  <button
                    key={era.year}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveYear(era.year)}
                    className="group relative flex flex-col items-center text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 rounded-base py-1"
                  >
                    <span
                      className={[
                        'text-h6 sm:text-h5 font-semibold transition-colors mb-3',
                        isActive
                          ? 'text-green-700'
                          : 'text-blue-500 group-hover:text-blue-700',
                      ].join(' ')}
                    >
                      {era.year}
                    </span>

                    {/* Point node */}
                    <span
                      className={[
                        'relative z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                        isActive
                          ? 'bg-green-500 border-green-700 scale-110'
                          : 'bg-surface-white border-green-500 group-hover:bg-green-50',
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'w-2 h-2 rounded-full',
                          isActive ? 'bg-surface-white' : 'bg-blue-500',
                        ].join(' ')}
                      />
                    </span>

                    {/* Vertical stem */}
                    <span
                      aria-hidden="true"
                      className={[
                        'w-px h-7 sm:h-9 transition-colors my-1',
                        isActive ? 'bg-green-700' : 'bg-blue-500/60',
                      ].join(' ')}
                    />

                    {/* Era short label */}
                    <span
                      className={[
                        'text-caption sm:text-body-small text-blue-800 max-w-[240px] transition-all',
                        isActive ? 'font-bold' : 'font-normal opacity-80',
                      ].join(' ')}
                    >
                      {era.shortLabel}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Era Content Split */}
          <div
            role="tabpanel"
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_559px] gap-8 lg:gap-12 items-start pt-4"
          >
            <div className="flex flex-col gap-6 lg:p-6">
              <h3 className="text-h5 font-semibold text-blue-500 leading-[1.25]">
                {activeEra.title}
              </h3>
              <div className="text-body-mobile lg:text-body-desktop text-blue-800">
                {activeEra.content}
              </div>
            </div>

            <div className="w-full h-[260px] sm:h-[340px] lg:h-[410px] rounded-base overflow-hidden bg-blue-25">
              <img
                src={activeEra.image}
                alt={activeEra.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Nasz zespół */}
        <section className="flex flex-col gap-10">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Nasz zespół
          </h2>

          <div className="max-w-[800px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-[132px] gap-y-10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-blue-25 border border-blue-50 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="text-h5 font-semibold text-blue-500">
                    {member.name}
                  </h3>
                  <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sprawozdania */}
        <section className="grid grid-cols-1 lg:grid-cols-[571px_minmax(0,1fr)] gap-8 lg:gap-10 items-center">
          <div className="w-full h-[260px] sm:h-[320px] lg:h-[357px] rounded-base overflow-hidden bg-blue-25">
            <img
              src="/images/ofundacji-sprawozdania.png"
              alt="Sprawozdania finansowe i merytoryczne Fundacji Pełna Życia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
              Sprawozdania
            </h2>

            <div className="flex flex-col gap-4 text-body-mobile lg:text-body-desktop text-blue-800">
              <p>
                Możesz sprawdzić, w jaki sposób wydatkujemy przekazane nam
                pieniądze. Jako organizacja pożytku publicznego składamy{' '}
                <strong className="font-bold">
                  coroczne sprawozdania finansowe i merytoryczne
                </strong>
                . Zapraszamy na stronę i wyszukanie nas po KRS.
              </p>

              <p className="text-h5 font-semibold text-blue-500">
                KRS: 0000043097
              </p>

              <div className="flex flex-col gap-2">
                <p>
                  <strong className="font-semibold">Sprawozdania:</strong>{' '}
                  dostępne{' '}
                  <Link
                    to="/inne-dokumenty"
                    className="underline text-blue-500 hover:text-blue-600"
                  >
                    TUTAJ
                  </Link>
                </p>
                <p>
                  <strong className="font-semibold">Statut Fundacji:</strong>{' '}
                  dostępny{' '}
                  <a
                    href="https://pelna-zycia.pl/wp-content/uploads/2023/12/STATUT-FUNDACJI-PELNEJ-ZYCIA-uchwalony-uchwala-Rady-Fundacji-z-dnia-5-maja-2023-r.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-500 hover:text-blue-600"
                  >
                    TUTAJ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fundacja Pełna Życia RAP Wiola feat QLMOVSKY */}
        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_571px] gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
                Fundacja Pełna Życia RAP Wiola feat QLMOVSKY
              </h2>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                Może to nie jest{' '}
                <a
                  href="https://www.youtube.com/hashtag/hot16challenge2"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500 hover:text-blue-600"
                >
                  #Hot16Challenge2
                </a>{' '}
                ale u nas również wspaniali artyści przygotowali piosenkę o
                naszej Fundacji!
              </p>
            </div>

            <div className="flex flex-col gap-3 text-body-mobile lg:text-body-desktop text-blue-800">
              <p>
                <strong className="font-semibold">Tekst:</strong> Krzysztof
                Galos
              </p>
              <p>
                <strong className="font-semibold">Muzyka:</strong> remix Wioleta
                Więckowska (sample iMovie oraz scale75{' '}
                <a
                  href="https://freesound.org/people/scale75/sounds/323252/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500 hover:text-blue-600 break-all"
                >
                  https://freesound.org/people/scale75/...
                </a>
                )
              </p>
              <p>
                <strong className="font-semibold">Wykonanie:</strong> Wiola ft
                QLMOVSKY
              </p>
            </div>
          </div>

          {/* YouTube Video Card */}
          <div className="w-full h-[240px] sm:h-[320px] lg:h-[357px] rounded-base overflow-hidden bg-blue-900 relative">
            {playVideo ? (
              <iframe
                src="https://www.youtube.com/embed/udbuvjjEu7Y?autoplay=1"
                title="Fundacja Pełna Życia RAP Wiola feat QLMOVSKY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlayVideo(true)}
                aria-label="Odtwórz film: Fundacja Pełna Życia RAP Wiola feat QLMOVSKY"
                className="group relative w-full h-full block cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <img
                  src="/images/ofundacji-rap.png"
                  alt="Miniatura filmu Fundacja Pełna Życia RAP"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25 backdrop-blur-[1.5px] group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <span className="w-[120px] h-[80px] lg:w-[156px] lg:h-[102px] rounded-base bg-[#EB0000] group-hover:bg-[#CC0000] transition-transform duration-200 group-hover:scale-105 flex items-center justify-center shadow-hero">
                    <Play className="w-11 h-11 lg:w-12 lg:h-12 text-surface-white fill-surface-white ml-1" />
                  </span>
                </div>
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
