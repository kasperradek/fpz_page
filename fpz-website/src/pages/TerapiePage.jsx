import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AccordionItem, PageBanner } from '../components/ui'

/**
 * All 7 therapy offerings extracted verbatim from Figma:
 * - "Terapie / Desktop" (#2971:7150), content frame #2571:13176
 * - "terapie opisy desktop" (#2928:11523) & "Terapie / Mobile" (#1663:7275)
 */
const THERAPIES = [
  {
    id: 'fizjoterapia',
    title: 'Fizjoterapia',
    where: (
      <>
        Zajęcia prowadzone są w siedzibie Fundacji przy{' '}
        <strong>ul. Dunajewskiego 5/29 w Krakowie</strong> (oficyna, wejście D,
        parter) w dobrze wyposażonej salce.
      </>
    ),
    when: (
      <>
        Zajęcia prowadzone są <strong>od poniedziałku do soboty</strong>.
        Godziny zajęć ustalane są indywidualnie z rodzicami pacjentów.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko ma{' '}
        <strong>
          problemy z poruszaniem się, napięciem mięśniowym, deformacjami ciała
        </strong>{' '}
        lub innymi <strong>problemami ortopedycznymi</strong>, fizjoterapia może
        pomóc w poprawie ich zdrowia i funkcjonowania.
      </>,
      <>
        Nasze kompleksowe zajęcia fizjoterapeutyczne obejmują{' '}
        <strong>ćwiczenia rehabilitacyjne</strong>, które wykorzystują{' '}
        <strong>elementy metod NDT-Bobath, SI i inne</strong>, indywidualnie
        dobrane do potrzeb Twojego dziecka. Dzięki temu Twoje dziecko może{' '}
        <strong>
          nauczyć się prawidłowych wzorców ruchowych, zwiększyć mobilność oraz
          uniknąć deformacji ciała
        </strong>
        . Prowadzone przez doświadczonych fizjoterapeutów, zajęcia fizjoterapii
        dla dzieci z problemami neurologicznymi, w tym z mózgowym porażeniem
        dziecięcym, zapewniają także wzmocnienie efektów hipoterapii oraz
        hamowanie odruchów przetrwałych.
      </>,
      <>
        Oprócz tego nasze zajęcia fizjoterapii mogą pomóc dzieciom z problemami
        natury psychicznej i społecznej, takimi jak autyzm, zespół Downa,
        upośledzenie umysłowe, nerwice, nadpobudliwość psychoruchowa czy
        zaburzenia zachowania.
      </>,
      <>
        Zapraszamy do kontaktu z nami i umówienia się na zajęcia
        fizjoterapeutyczne, które pomogą Twojemu dziecku poprawić jego zdrowie i
        jakość życia. Warunkiem uczestnictwa w zajęciach jest posiadanie
        aktualnego orzeczenia o niepełnosprawności lub orzeczenia o stopniu
        niepełnosprawności.
      </>,
    ],
    images: [
      '/images/terapie-fizjo-1.png',
      '/images/terapie-fizjo-2.png',
      '/images/terapie-fizjo-3.png',
    ],
  },
  {
    id: 'arteterapia',
    title: 'Arteterapia',
    where: (
      <>
        Zajęcia prowadzone są w siedzibie Fundacji przy{' '}
        <strong>ul. Dunajewskiego 5/29 w Krakowie</strong> (oficyna, wejście D,
        parter) w dobrze wyposażonej salce.
      </>
    ),
    when: (
      <>
        Zajęcia prowadzone są <strong>od poniedziałku do soboty</strong>.
        Godziny zajęć ustalane są indywidualnie z rodzicami pacjentów.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko z niepełnosprawnościami ma{' '}
        <strong>
          trudności w nawiązywaniu kontaktów z innymi, wyrażaniu swoich emocji
          lub współpracy w grupie
        </strong>
        , mamy dla Ciebie rozwiązanie –{' '}
        <strong>
          warsztaty arteterapeutyczne z autorskim programem terapeutycznym
        </strong>
        .
      </>,
      <>
        Podczas zajęć wykorzystujemy różnorodne metody arteterapeutyczne, takie
        jak{' '}
        <strong>
          malarstwo, rysunek, formy rzeźbiarskie, origami, wycinanki,
          wydzieranki, wyklejanki, obrysowywanie kształtów i wypełnianie ich
          różnymi materiałami
        </strong>
        . Zajęcia prowadzone są <strong>zarówno w sali, jak i w terenie</strong>
        , aby zapewnić kompleksową edukację kulturową i integrację społeczną.
      </>,
      <>
        Warsztaty prowadzone są przez specjalistów, którzy dostosowują program
        do indywidualnych potrzeb i możliwości uczestników.{' '}
        <strong>
          Dzieci uczą się rozpoznawać swoje emocje i wyrażać je w sposób
          odpowiedni, a także nawiązywać kontakty z innymi ludźmi i współpracować
          z nimi w grupie
        </strong>
        .
      </>,
      <>
        Zapraszamy do kontaktu z nami i zapisania dziecka na warsztaty
        arteterapeutyczne. Wspólnie pomożemy mu rozwijać umiejętności społeczne
        i odkryć swoje talenty.
      </>,
    ],
    images: [
      '/images/terapie-arte-1.png',
      '/images/terapie-arte-2.png',
      '/images/terapie-arte-3.png',
    ],
  },
  {
    id: 'hipoterapia',
    title: 'Hipoterapia',
    where: (
      <>
        Zajęcia prowadzone są w hali przy{' '}
        <strong>ul. Kobierzyńskiej 175a w Krakowie</strong> – wewnątrz budynku
        lub w przypadku ładnej pogody na terenie go okalającym.
      </>
    ),
    when: (
      <>
        Zajęcia prowadzone są <strong>od poniedziałku do soboty</strong>.
        Godziny zajęć ustalane są indywidualnie z rodzicami pacjentów.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko ma{' '}
        <strong>
          problemy neurologiczne, ortopedyczne lub z natury psychicznej i
          społecznej
        </strong>
        , hipoterapia może być skuteczną formą rehabilitacji.
      </>,
      <>
        Hipoterapia polega na wykorzystaniu konia do terapii, co pozwala na{' '}
        <strong>
          jednoczesne oddziaływanie ruchowe, sensoryczne, psychiczne i społeczne
        </strong>
        . Dzięki temu kodowany jest w mózgu{' '}
        <strong>
          prawidłowy wzorzec ruchu miednicy podczas chodu, normalizowane
          napięcie mięśniowe, doskonalona równowaga, koordynacja, orientacja w
          przestrzeni i poczucie rytmu oraz redukowane są skutki zaburzeń
          emocjonalnych
        </strong>
        .
      </>,
      <>
        Hipoterapia jest szczególnie polecana dla dzieci z{' '}
        <strong>
          mózgowym porażeniem dziecięcym, autyzmem, zespołem Downa,
          upośledzeniem umysłowym, nerwicami, nadpobudliwością psychoruchową,
          zaburzeniami zachowania
        </strong>{' '}
        i problemami szkolnymi wynikającymi z{' '}
        <strong>zaburzeń integracji zmysłów</strong>. Jeśli zastanawiasz się,
        czy hipoterapia może pomóc Twojemu dziecku, zachęcamy do skontaktowania
        się z nami. Wspólnie omówimy <strong>indywidualny plan terapii</strong>,
        który pomoże Twojemu dziecku osiągnąć najlepsze efekty.
      </>,
      <>
        Warunkiem uczestnictwa w zajęciach jest posiadanie aktualnego orzeczenia
        o niepełnosprawności lub orzeczenia o stopniu niepełnosprawności.
      </>,
    ],
    images: [
      '/images/terapie-hipo-1.png',
      '/images/terapie-hipo-2.png',
      '/images/terapie-hipo-3.png',
    ],
  },
  {
    id: 'psychoterapia',
    title: 'Psychoterapia',
    where: (
      <>
        Zajęcia prowadzone są w siedzibie Fundacji przy{' '}
        <strong>ul. Dunajewskiego 5/29 w Krakowie</strong> (oficyna, wejście D,
        parter) w dobrze wyposażonej salce.
      </>
    ),
    when: (
      <>
        Zajęcia prowadzone są <strong>od poniedziałku do soboty</strong>.
        Godziny zajęć ustalane są indywidualnie z rodzicami pacjentów.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko zmaga się z niepełnosprawnością, w tym{' '}
        <strong>problemami neurologicznymi, psychicznymi lub społecznymi</strong>
        , psychoterapia może pomóc mu w pokonaniu trudności. Nasz zespół
        specjalistów pracuje z dziećmi i młodzieżą, aby pomóc im wykorzystać swój
        pełen potencjał,{' '}
        <strong>
          radzić sobie z lękami, trudnościami w koncentracji, agresją, zaniżonym
          poczuciem wartości oraz budować pozytywne relacje z rówieśnikami
        </strong>
        .
      </>,
      <>
        Nasze zajęcia odbywają się w{' '}
        <strong>troskliwej i intymnej atmosferze</strong>, z poszanowaniem
        prywatności i indywidualnych potrzeb uczestników. Pracujemy z dziećmi z
        różnymi niepełnosprawnościami, w tym{' '}
        <strong>
          z autyzmem, zespołem Downa, upośledzeniem umysłowym, nerwicą,
          nadpobudliwością psychoruchową, zaburzeniami zachowania i problemami
          szkolnymi
        </strong>
        .
      </>,
      <>
        Jeśli szukasz pomocy dla swojego dziecka, zapraszamy do kontaktu. Razem
        będziemy pracować nad osiągnięciem sukcesu i pełnego wykorzystania
        potencjału Twojego dziecka poprzez{' '}
        <strong>psychoterapię dopasowaną do jego indywidualnych potrzeb</strong>
        .
      </>,
      <>
        Warunkiem uczestnictwa w zajęciach jest posiadanie aktualnego orzeczenia
        o niepełnosprawności lub orzeczenia o stopniu niepełnosprawności.
      </>,
    ],
    images: [
      '/images/terapie-arte-1.png',
      '/images/terapie-arte-2.png',
      '/images/terapie-arte-3.png',
    ],
  },
  {
    id: 'pedagogiczno-logopedyczna',
    title: 'Terapia pedagogiczno-logopedyczna',
    where: (
      <>
        Zajęcia prowadzone są w siedzibie Fundacji przy{' '}
        <strong>ul. Dunajewskiego 5/29 w Krakowie</strong> (oficyna, wejście D,
        parter) w dobrze wyposażonej salce.
      </>
    ),
    when: (
      <>
        Zajęcia prowadzone są <strong>od poniedziałku do soboty</strong>.
        Godziny zajęć ustalane są indywidualnie z rodzicami pacjentów.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko ma{' '}
        <strong>trudności z mową, rozumieniem języka lub artykulacją</strong>,
        terapia pedagogiczno-logopedyczna może pomóc mu poprawić te
        umiejętności. Podczas terapii logopedycznej prowadzone będą ćwiczenia,
        które{' '}
        <strong>
          pomogą w rozwoju sprawności narządów artykulacyjnych, poprawie oddechu
          i fonacji, zrozumieniu mowy oraz w artykulacji
        </strong>
        . Terapeuta będzie dobierał ćwiczenia odpowiednio do potrzeb i
        możliwości dziecka, a także stosował{' '}
        <strong>indywidualne metody pracy</strong>, aby zapewnić jak największą
        skuteczność terapii. W niektórych przypadkach,{' '}
        <strong>gdy dziecko ma problemy z komunikacją werbalną</strong>,
        terapeuta może zastosować odpowiednio dobrany{' '}
        <strong>system komunikacji alternatywnej</strong>, który pomoże dziecku
        porozumiewać się w codziennych sytuacjach.
      </>,
      <>
        Zapraszamy do kontaktu z nami i zapisania dziecka na terapię
        logopedyczną. Razem pomożemy mu rozwijać umiejętności językowe i
        osiągnąć sukces w szkole i życiu codziennym. Warunkiem uczestnictwa w
        zajęciach jest posiadanie aktualnego orzeczenia o niepełnosprawności lub
        orzeczenia o stopniu niepełnosprawności.
      </>,
    ],
    images: [
      '/images/terapie-logo-1.png',
      '/images/terapie-arte-2.png',
      '/images/terapie-arte-3.png',
    ],
  },
  {
    id: 'trening-spoleczny',
    title: 'Trening umiejętności społecznych',
    where: (
      <>
        Zajęcia prowadzone są w siedzibie Fundacji przy{' '}
        <strong>ul. Dunajewskiego 5/29 w Krakowie</strong> (oficyna, wejście D,
        parter) w dobrze wyposażonej salce.
      </>
    ),
    when: (
      <>
        Zajęcia prowadzone są <strong>od poniedziałku do soboty</strong>.
        Godziny zajęć ustalane są indywidualnie z rodzicami pacjentów.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko ma trudności z{' '}
        <strong>
          kontrolowaniem swoich emocji, komunikowaniem się z innymi lub
          współpracą w grupie
        </strong>
        , trening umiejętności społecznych (TUS) może okazać się pomocny. Ta
        metoda terapeutyczna ma na celu rozwijanie umiejętności społecznych
        poprzez{' '}
        <strong>
          doświadczanie pierwszych kontaktów rówieśniczych i społecznych, a
          także kształtowanie empatii i umiejętności wspólnego działania
        </strong>
        .
      </>,
      <>
        Trening społeczny odbywa się pod opieką doświadczonego terapeuty, który
        dostosowuje scenariusze i ćwiczenia do indywidualnych potrzeb i
        możliwości każdego pacjenta. Dzieci uczą się{' '}
        <strong>
          rozpoznawać swoje emocje i wyrażać w sposób odpowiedni, a także
          nawiązywać kontakty z innymi ludźmi i współpracować z nimi w grupie
        </strong>
        . TUS może być skuteczną metodą terapeutyczną dla dzieci z różnymi
        niepełnosprawnościami, w tym z{' '}
        <strong>
          zaburzeniami ze spektrum autyzmu, ADHD, zaburzeniami emocjonalnymi i
          behawioralnymi oraz innymi trudnościami w zakresie umiejętności
          społecznych
        </strong>
        .
      </>,
      <>
        Zapraszamy do kontaktu z nami i zapisania dziecka na TUS. Wspólnie
        pomożemy mu rozwijać umiejętności społeczne i odnaleźć swoje miejsce w
        świecie. Warunkiem uczestnictwa w zajęciach jest posiadanie aktualnego
        orzeczenia o niepełnosprawności lub orzeczenia o stopniu
        niepełnosprawności.
      </>,
    ],
    images: [
      '/images/terapie-tus-1.png',
      '/images/terapie-tus-2.png',
      '/images/terapie-tus-3.png',
    ],
  },
  {
    id: 'grupa-teatralna',
    title: 'Integracyjna grupa teatralna - terapia przez sztukę',
    where: (
      <>
        Cotygodniowe zajęcia prowadzone są w siedzibie Fundacji przy{' '}
        <strong>ul. Dunajewskiego 5/29, w Krakowie</strong> (oficyna, wejście D,
        parter). Spektakle wystawiane są na deskach krakowskich teatrów oraz
        zaprzyjaźnionych instytucji.
      </>
    ),
    when: (
      <>
        <strong>Grupa starsza</strong> spotyka się w{' '}
        <strong>poniedziałki o godzinie 18:00</strong>.
        <br />
        <strong>Grupa młodsza</strong> spotyka się w{' '}
        <strong>soboty o godzinie 15:00</strong>.
        <br />
        Zajęcia odbywają się co tydzień i trwają <strong>1,5 godziny</strong>.
      </>
    ),
    paragraphs: [
      <>
        Jeśli Twoje dziecko szuka sposobu na{' '}
        <strong>
          zdobycie nowych umiejętności i rozwój w sferze społecznej,
          emocjonalnej, poznawczej i komunikacyjnej
        </strong>
        , to arteterapia może być dla niego idealnym rozwiązaniem.
      </>,
      <>
        Integracyjna Grupa Teatralna działa od 2003 roku i składa się z{' '}
        <strong>
          dzieci z niepełnosprawnościami oraz ich zdrowych rówieśników
        </strong>{' '}
        – tworzą ją <strong>dwa zespoły – młodszy i starszy</strong>. Grupa ta
        pozwala na <strong>doświadczanie sztuki i kreatywności</strong>, a także
        na <strong>zdobywanie nowych umiejętności społecznych</strong> poprzez
        współpracę i komunikację w grupie. Dzieci uczestniczą w cotygodniowych
        zajęciach teatroterapii, gdzie ćwiczą swoje umiejętności,{' '}
        <strong>
          przygotowują jedną premierę rocznie i prezentują ją na zawodowych
          scenach teatralnych w Krakowie
        </strong>
        .
      </>,
      <>
        Zajęcia teatralne są prowadzone przez doświadczonych terapeutów, którzy
        indywidualnie dopasowują scenariusze i ćwiczenia do potrzeb i możliwości
        każdego uczestnika.{' '}
        <strong>
          Uczestnicy są dobierani do grupy jedynie z uwagi na zbliżony wiek, bez
          podziału na typ niepełnosprawności
        </strong>
        .
      </>,
      <>
        Jeśli Twoje dziecko chciałoby wziąć udział w zajęciach teatroterapii,
        skontaktuj się z Fundacją i zapisz swoje dziecko na te zajęcia. Razem
        pomożemy mu rozwijać umiejętności społeczne i kreatywność. Warunkiem
        uczestnictwa w zajęciach jest posiadanie aktualnego orzeczenia o
        niepełnosprawności lub orzeczenia o stopniu niepełnosprawności.
      </>,
    ],
    images: [
      '/images/terapie-teatr-1.png',
      '/images/terapie-teatr-2.png',
      '/images/terapie-teatr-3.png',
    ],
  },
]

const REGISTRATION_STEPS = [
  {
    number: '1',
    title: 'Skontaktuj się z nami',
    content: (
      <>
        <a href="tel:+48698281366" className="block hover:text-blue-500">
          +48 698 28 13 66
        </a>
        <a href="tel:+48726301040" className="block hover:text-blue-500">
          +48 726 30 10 40
        </a>
        <a
          href="mailto:terapia@pelna-zycia.pl"
          className="block mt-1 font-medium text-blue-500 hover:underline"
        >
          terapia@pelna-zycia.pl
        </a>
      </>
    ),
  },
  {
    number: '2',
    title: 'Wypełnij dokumenty',
    content: (
      <>
        Podpisz{' '}
        <a
          href="https://pelna-zycia.pl/wp-content/uploads/2025/03/REGULAMIN_od-01.04.2025.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-blue-500 underline hover:text-blue-700"
        >
          regulamin
        </a>
        . Wypełnij{' '}
        <a
          href="https://pelna-zycia.pl/wp-content/uploads/2025/03/ANKIETA-DLA-RODZICOW_2025-2028.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-blue-500 underline hover:text-blue-700"
        >
          ankietę
        </a>{' '}
        i{' '}
        <a
          href="https://pelna-zycia.pl/wp-content/uploads/2025/03/KLAUZULA-INFORMACYJNA-DLA-BENEFICJENTA_2025.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-blue-500 underline hover:text-blue-700"
        >
          klauzulę RODO
        </a>
        . W przypadku zapisu na hipoterapię wypełnij również{' '}
        <a
          href="https://pelna-zycia.pl/wp-content/uploads/2025/03/Skierowanie-na-hipoterapie.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-blue-500 underline hover:text-blue-700"
        >
          skierowanie
        </a>
        .
      </>
    ),
  },
  {
    number: '3',
    title: 'Prześlij dokumenty',
    content: (
      <>
        Prześlij wypełnione dokumenty na adres{' '}
        <a
          href="mailto:terapia@pelna-zycia.pl"
          className="font-bold text-blue-500 underline hover:text-blue-700"
        >
          terapia@pelna-zycia.pl
        </a>{' '}
        lub przynieś je do nas osobiście na{' '}
        <strong className="font-bold text-blue-800">
          ul. Dunajewskiego 5/29 w Krakowie
        </strong>
      </>
    ),
  },
]

export function TerapiePage() {
  const { hash } = useLocation()
  const hashTarget = hash ? hash.slice(1) : ''
  const validHashTarget = THERAPIES.some((t) => t.id === hashTarget)
    ? hashTarget
    : null

  const [prevHashTarget, setPrevHashTarget] = useState(validHashTarget)
  const [openId, setOpenId] = useState(validHashTarget || 'fizjoterapia')

  if (validHashTarget !== prevHashTarget) {
    setPrevHashTarget(validHashTarget)
    if (validHashTarget) {
      setOpenId(validHashTarget)
    }
  }

  useEffect(() => {
    if (!validHashTarget) return
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(validHashTarget)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [validHashTarget])

  return (
    <div className="flex flex-col">
      {/* Hero Banner (#2971:7149) */}
      <PageBanner title="Terapie" image="/images/banner-terapie.png" />

      {/* Main Content Container (#2571:13176): padding 80px 120px, gap 128px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-32">
        {/* Intro + Therapy Accordions (#3160:10281, gap 80px) */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <p className="max-w-[945px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
            Prowadzimy{' '}
            <strong className="font-bold">
              kompleksową terapię dla dzieci i młodzieży z niepełnosprawnościami
            </strong>{' '}
            (w wieku od 3 do 28 lat), która dzięki udziale w wieloaspektowej
            skorelowanej terapii ma na celu przygotowanie ich do możliwie
            maksymalnie samodzielnego funkcjonowania w przyszłym, dorosłym
            życiu.
          </p>

          <div className="flex flex-col gap-8 lg:gap-12">
            <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
              Sprawdź naszą ofertę
            </h2>

            <div className="flex flex-col gap-6 lg:gap-10">
              {THERAPIES.map((therapy) => (
                <AccordionItem
                  key={therapy.id}
                  id={therapy.id}
                  title={therapy.title}
                  isOpen={openId === therapy.id}
                  onToggle={(nextOpen) => setOpenId(nextOpen ? therapy.id : null)}
                >
                  <div className="flex flex-col gap-8 lg:gap-10">
                    {/* White Rounded Info Box: Gdzie? / Kiedy? */}
                    <div className="bg-surface-white rounded-[15px] p-5 lg:px-[46px] lg:py-[27px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[20px] lg:text-[22px] font-semibold text-blue-500 leading-[1.4]">
                          Gdzie?
                        </h3>
                        <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                          {therapy.where}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[20px] lg:text-[22px] font-semibold text-blue-500 leading-[1.4]">
                          Kiedy?
                        </h3>
                        <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                          {therapy.when}
                        </p>
                      </div>
                    </div>

                    {/* Therapy Description Paragraphs */}
                    <div className="flex flex-col gap-5 text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.5]">
                      {therapy.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* 3-Photo Therapy Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7">
                      {therapy.images.map((src, idx) => (
                        <div
                          key={`${therapy.id}-img-${idx}`}
                          className="aspect-[358/238] w-full rounded-base overflow-hidden bg-surface-white"
                        >
                          <img
                            src={src}
                            alt={`${therapy.title} — zdjęcie ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        {/* Jak zgłosić dziecko na zajęcia? (#2661:39740) */}
        <section className="flex flex-col gap-10 lg:gap-12">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Jak zgłosić dziecko na zajęcia?
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {/* Desktop connecting lines between step circles */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[18%] right-[18%] h-px bg-green-400"
            />

            {REGISTRATION_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center gap-5"
              >
                <div className="relative z-10 w-16 h-16 rounded-full bg-surface-page border-2 border-green-500 flex items-center justify-center text-display-mobile font-semibold text-blue-800">
                  {step.number}
                </div>
                <div className="flex flex-col items-center gap-3 max-w-[300px]">
                  <h3 className="text-h6 font-semibold text-blue-800">
                    {step.title}
                  </h3>
                  <div className="text-body-mobile lg:text-body-desktop text-blue-800/90 leading-[1.45]">
                    {step.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ważne informacje (#2696:8814) */}
        <section className="grid grid-cols-1 lg:grid-cols-[532px_1fr] gap-8 lg:gap-10 items-center">
          <div className="w-full h-[260px] sm:h-[360px] lg:h-[425px] rounded-base overflow-hidden bg-blue-50">
            <img
              src="/images/terapie-wazne.png"
              alt="Ważne informacje dotyczące terapii w Fundacji Pełna Życia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 lg:px-4">
            <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
              Ważne informacje
            </h2>

            <div className="flex flex-col gap-5 text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.45]">
              <p>
                Terapia rozpoczyna się po spotkaniu komisji
                lekarsko-terapeutycznej (lekarz i terapeuci Fundacji), która
                ustala indywidualny plan działania (IPD) dla dziecka. Zajęcia
                odbywają się na zlecenie lekarza i wniosku rodzica po pozytywnej
                decyzji komisji.
              </p>

              <div>
                <p className="font-semibold mb-2">
                  Rodzic/Opiekun zobowiązany jest do:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>przekazania informacji o stanie zdrowia dziecka,</li>
                  <li>informowania o innych równoległych terapiach,</li>
                  <li>
                    udostępnienia pełnej, aktualnej dokumentacji medycznej.
                  </li>
                </ul>
              </div>

              <p>
                Zakres i metody terapii w IPD są dostosowane do potrzeb i
                możliwości dziecka. Ostateczny plan zajęć uzgadnia z rodzicami
                Koordynator projektu z Fundacji.
              </p>
            </div>
          </div>
        </section>

        {/* PFRON Section (#2571:13172) */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-[100px]">
          <div className="w-full max-w-[386px] rounded-base overflow-hidden border border-blue-50 bg-surface-white shadow-card-hover shrink-0">
            <img
              src="/images/terapie-pfron.png"
              alt="Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych (PFRON)"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="max-w-[380px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
            <strong className="font-bold">
              Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych
            </strong>{' '}
            – organ administracji publicznej wspierający rehabilitację oraz
            zatrudnienie osób niepełnosprawnych. Fundusz utworzono na mocy
            ustawy z dnia 9 maja 1991 r. o zatrudnianiu i rehabilitacji
            zawodowej osób niepełnosprawnych.
          </p>
        </section>
      </div>
    </div>
  )
}
