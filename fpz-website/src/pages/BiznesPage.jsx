import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button, ContactStrip, PageBanner } from '../components/ui'

/**
 * "Biznes / Desktop" (#2948:6966), content frame #2948:6961
 * Includes "Caste Study / Desktop" (#2928:22401)
 */
const PARTNER_LOGOS = [
  { src: '/images/partner-1.png', alt: 'Partner Fundacji 1', className: 'h-16 lg:h-24' },
  { src: '/images/partner-2.png', alt: 'Partner Fundacji 2', className: 'h-16 lg:h-24' },
  { src: '/images/partner-3.png', alt: 'Partner Fundacji 3', className: 'h-16 lg:h-24' },
  { src: '/images/partner-nivea.png', alt: 'Nivea', className: 'h-16 lg:h-24' },
  { src: '/images/partner-5.png', alt: 'Partner Fundacji 5', className: 'h-16 lg:h-24' },
  { src: '/images/partner-6.png', alt: 'Partner Fundacji 6', className: 'h-16 lg:h-24' },
  { src: '/images/partner-7.png', alt: 'Partner Fundacji 7', className: 'h-12 lg:h-16' },
]

const COOPERATION_CARDS = [
  {
    title: 'Wolontariat Pracowniczy',
    description:
      'Zintegruj się ze swoimi współpracownikami w szczytnym celu! Weźcie udział w akcjach porządkowych fortu, odwiedźcie nas na zajęciach arteterapii lub zaproponujcie własną inicjatywę.',
  },
  {
    title: 'Licytacje',
    description:
      'Zorganizuj z nami licytację na rzecz naszych Podopiecznych! Przedmiotem licytacji mogą być zarówno prace wykonane przez dzieciaki na arteterapii, jak i rzeczy podarowane konkretnie na jej cel.',
  },
  {
    title: 'Warsztaty',
    description:
      'Twoja firma szuka ciekawej formy integracji? Chodźcie z nami na warsztaty! To świetna okazja do rozwoju artystycznego, ale też pomocy innym.',
  },
  {
    title: 'Kampanie społeczne',
    description:
      'Masz pomysł na kampanię społeczną? Razem możemy zdziałać więcej. Skontaktuj się z nami i stwórzmy razem coś dobrego.',
  },
  {
    title: 'Darowizny',
    description:
      'Twoje wsparcie wspomoże naszych Podopiecznych w terapii i rehabilitacji, a także pozwoli na rozwój projektów i inicjatyw. Darowiznę możesz też odpisać od podatku.',
  },
  {
    title: 'Organizacje imprez',
    description:
      'Szukasz miejsca na imprezę integracyjną, spotkanie firmowe czy inne wydarzenie? Fort Sidzina spełni twoje oczekiwania. Sprawdź, co możemy dla ciebie zrobić.',
  },
]

const CASE_STUDIES = [
  {
    id: 'nivea',
    company: 'Nivea',
    logo: '/images/partner-nivea.png',
    area: 'Wolontariat pracowniczy',
    summary:
      'Współpraca z firmą Nivea to doskonały przykład tego, jak biznes może angażować się w działania społeczne i ekologiczne. Uporządkowanie parku nie tylko przyniosło korzyści środowisku, ale również umożliwiło pracownikom firmy aktywne włączenie się w pozytywne zmiany.',
    goal: 'Uporządkowanie parku wokół fortu zarządzanego przez fundację. Wolontariat miał na celu poprawę bezpieczeństwa, estetyki i funkcjonalności terenu, a także integrację pracowników firmy w ramach działań prospołecznych.',
    challenge:
      'Zależy nam na pogłębieniu współpracy z firmą w taki sposób, aby firma oraz jej pracownicy poczuli, że cel na rzecz którego działa Fundacja jest ważny społecznie. Dzięki temu będziemy mieli możliwość otwarcia nowych projektów wraz z firmą, co korzystnie wpłynie na finanse i wizerunek fundacji.',
    actionsText: 'Akcja porządkowa w Forcie Sztuki (i) Życia',
    term: 'Czerwiec, jednodniowa akcja trwająca kilka godzin',
    scope: [
      'Zbieranie zalegających gałęzi',
      'Wygrabianie trawy',
      'Usuwanie skoszonej trawy i transport odpadów roślinnych',
      'Mycie okien',
      'Zamiatanie dachu fortu',
    ],
    closing:
      'Wydarzenie zwieńczone zostało wspólnym ogniskiem, sprzyjającym integracji uczestników. To ważny element naszych działań na rzecz ochrony środowiska i budowania społecznej odpowiedzialności biznesu. Jednym z naszych partnerów jest firma Nivea, która aktywnie wspiera inicjatywy proekologiczne poprzez wolontariat pracowniczy.',
    results: [
      'Udało się znacząco uporządkować teren, poprawiając jego bezpieczeństwo, wygląd i funkcjonalność',
      'Zaangażowanie pracowników Nivea pokazało ich wysoką świadomość ekologiczną i chęć wsparcia lokalnej społeczności',
      'Budowanie relacji między firmą a fundacją oraz wzmacnianie ducha zespołowego wśród wolontariuszy',
    ],
    photos: [
      '/images/casestudy-photo.png',
      '/images/hero-fort.png',
      '/images/card-fort-wspolpraca.png',
    ],
  },
  {
    id: 'zurich',
    company: 'Zurich Insurance',
    logo: '/images/partner-zurich.png',
    area: 'Wolontariat pracowniczy, licytacje charytatywne',
    summary:
      'Współpraca z Zurichiem pokazuje, jak biznes może realnie wspierać sektor społeczny – nie tylko finansowo, ale także poprzez aktywne zaangażowanie pracowników. To partnerstwo oparte na wspólnych wartościach, które z roku na rok przynosi coraz więcej dobrego. Obie strony są zadowolone ze współpracy i otwarte na nowe inicjatywy.',
    goal: 'Wsparcie podopiecznych fundacji poprzez działania arteterapeutyczne oraz aukcje charytatywne, a także pomoc w działaniach ekologicznych i ochronie zabytku, jakim jest Fort Sztuki i Życia.',
    challenge:
      'Firma poszukiwała długoletniego partnera, którego mogłaby wesprzeć w ramach swojej strategii CSR i ESG. Celem było stworzenie wartościowej i trwałej współpracy, która przyniesie realne korzyści zarówno podopiecznym fundacji, jak i samym wolontariuszom.',
    actionsList: [
      'Licytacje rękodzieła – Zurich organizuje aukcje charytatywne w ramach świąt Bożego Narodzenia i Wielkanocy, na których licytowane są wykonane przez Podopiecznych na arteterapii ozdoby i dekoracje świąteczne. Dochód z licytacji przeznaczany jest na wsparcie działań fundacji.',
      'Wolontariat pracowniczy – Pracownicy Zurichu chętnie angażują się w różne formy pomocy:',
      'Arteterapia – Wspierają podopiecznych w manualnych wyzwaniach, pomagając im rozwijać zdolności plastyczne i budować pewność siebie.',
      'Prace porządkowe i ekologiczne – Na terenie Fortu angażują się w działania na rzecz ochrony środowiska, pomagając w utrzymaniu przestrzeni zielonych i pracach konserwacyjnych.',
    ],
    results: [
      'Wsparcie finansowe dzięki licytacjom rękodzieła i darowiznom od firmy',
      'Zaangażowanie pracowników w działania społeczne, które wzmacnia ich poczucie wspólnoty i wpływu na rzeczywistość',
      'Poprawa jakości terapii dla podopiecznych fundacji dzięki regularnym sesjom arteterapeutycznym',
      'Działania proekologiczne poprawiające stan zabytkowej zieleni fortecznej wokół Fortu Sidzina, jak i działania wspierające ochronę tego zabytku',
    ],
    photos: [
      '/images/terapie-arte-2.png',
      '/images/casestudy-photo.png',
      '/images/card-fort-kultura.png',
    ],
  },
  {
    id: 'motorola',
    company: 'Motorola Solutions',
    logo: '/images/partner-motorola.png',
    area: 'Wolontariat pracowniczy, licytacje charytatywne, wsparcie materialne',
    summary:
      'Współpraca z Motorola Solutions pokazuje, jak biznes może realnie wspierać sektor społeczny – nie tylko poprzez wsparcie finansowe, ale także aktywne zaangażowanie swoich pracowników. To partnerstwo oparte na wspólnych wartościach, które z roku na rok przynosi coraz większe korzyści. Obie strony są zadowolone ze współpracy i otwarte na nowe inicjatywy.',
    goal: 'Wsparcie podopiecznych fundacji poprzez działania arteterapeutyczne oraz aukcje charytatywne, a także pomoc w działaniach ekologicznych i ochronie zabytku, jakim jest Fort Sztuki i Życia.',
    challenge:
      'Motorola Solutions poszukiwała partnera, którego mogłaby wspierać w ramach swojej strategii CSR i ESG. Celem było stworzenie trwałej i wartościowej współpracy, przynoszącej realne korzyści zarówno podopiecznym fundacji, jak i wolontariuszom zaangażowanym w działania.',
    actionColumns: [
      {
        title: 'Wolontariat pracowniczy',
        text: 'Pracownicy Motorola Solutions chętnie angażują się w różne formy wsparcia: wspierają podopiecznych fundacji w zajęciach arteterapeutycznych, pomagając im rozwijać zdolności manualne oraz budować pewność siebie, a w Forcie Sztuki i Życia angażują się w działania na rzecz ochrony środowiska i prace konserwacyjne.',
      },
      {
        title: 'Wsparcie materialne i organizacja paczek świątecznych',
        text: 'Motorola Solutions wspiera fundację poprzez darowizny finansowe oraz zakup sprzętu do arteterapii. Dodatkowo, w ramach działań świątecznych, firma organizuje paczki bożonarodzeniowe dla podopiecznych, zawierające produkty pierwszej potrzeby oraz upominki.',
      },
      {
        title: 'Licytacje charytatywne',
        text: 'Motorola Solutions organizuje aukcje charytatywne rękodzieła wykonanego na arteterapii, z których dochód przeznaczany jest na wsparcie działań fundacji. Pracownicy oraz partnerzy firmy aktywnie angażują się w licytacje.',
      },
    ],
    results: [
      'Wsparcie finansowe dla fundacji dzięki licytacjom oraz darowiznom od firmy',
      'Aktywne zaangażowanie pracowników w działania społeczne, wzmacniające ich poczucie wspólnoty i wpływu na rzeczywistość',
      'Poprawa jakości terapii dla podopiecznych fundacji poprzez zakup nowego sprzętu i organizację regularnych zajęć arteterapeutycznych',
      'Działania proekologiczne poprawiające stan zabytkowej zieleni oraz wspierające ochronę Fortu Sztuki i Życia',
    ],
    photos: [
      '/images/terapie-arte-1.png',
      '/images/casestudy-photo.png',
      '/images/hero-dzieci.png',
    ],
  },
]

function CaseStudyAccordion({ study, isOpen, onToggle }) {
  return (
    <article
      className={[
        'rounded-accordion border-2 border-blue-75 overflow-hidden transition-colors',
        isOpen ? 'bg-blue-25' : 'bg-surface-white',
      ].join(' ')}
    >
      {/* Header Row (#2928:22308) */}
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={[
          'w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-surface-white p-6 lg:p-8 text-left cursor-pointer hover:bg-blue-25/40 transition-colors',
          isOpen ? 'border-b-2 border-blue-75' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 flex-1">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-base bg-surface-white border border-blue-50 p-3 flex items-center justify-center shrink-0">
            <img
              src={study.logo}
              alt={study.company}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-heading-mobile lg:text-display-mobile font-semibold text-blue-800">
              {study.company}
            </h3>
            <div className="flex flex-col gap-2 text-body-mobile lg:text-body-desktop text-blue-800">
              <p>
                <strong className="font-bold">Obszar współpracy:</strong>{' '}
                {study.area}
              </p>
              <p>{study.summary}</p>
            </div>
          </div>
        </div>

        <ChevronDown
          className={[
            'w-7 h-7 lg:w-8 lg:h-8 text-blue-800 shrink-0 self-end sm:self-center transition-transform duration-200',
            isOpen ? 'rotate-180' : '',
          ].join(' ')}
        />
      </button>

      {/* Expanded Details (#2928:22319) */}
      {isOpen && (
        <div className="px-6 py-8 lg:px-11 lg:py-12 flex flex-col gap-8 lg:gap-10 text-body-mobile lg:text-body-desktop text-blue-800">
          <div className="flex flex-col gap-2">
            <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
              Obszar współpracy:
            </h4>
            <p>{study.area}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
              Cel:
            </h4>
            <p>{study.goal}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
              Wyzwanie:
            </h4>
            <p>{study.challenge}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
              Działania:
            </h4>
            {study.actionsText && <p>{study.actionsText}</p>}
            {study.actionsList && (
              <ul className="list-disc pl-6 space-y-2">
                {study.actionsList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {study.actionColumns && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-1">
                {study.actionColumns.map((col) => (
                  <div
                    key={col.title}
                    className="bg-surface-white rounded-base p-5 border border-blue-50 flex flex-col gap-2"
                  >
                    <h5 className="font-bold text-blue-800">{col.title}</h5>
                    <p className="text-body-mobile text-blue-800/90">
                      {col.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {study.term && (
            <div className="flex flex-col gap-2">
              <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
                Termin:
              </h4>
              <p>{study.term}</p>
            </div>
          )}

          {study.scope && (
            <div className="flex flex-col gap-2">
              <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
                Zakres prac:
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                {study.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {study.closing && (
            <div className="flex flex-col gap-2">
              <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
                Zakończenie:
              </h4>
              <p>{study.closing}</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
              Efekty i korzyści:
            </h4>
            <ul className="list-disc pl-6 space-y-1.5">
              {study.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-h6 lg:text-h5 font-semibold text-blue-800">
              Podsumowanie:
            </h4>
            <p>{study.summary}</p>
          </div>

          {/* 3-Photo Strip (#2928:22380) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            {study.photos.map((src, idx) => (
              <div
                key={`${study.id}-photo-${idx}`}
                className="aspect-[356/251] rounded-tag overflow-hidden bg-surface-white"
              >
                <img
                  src={src}
                  alt={`${study.company} — współpraca zdjęcie ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export function BiznesPage() {
  const [openCaseId, setOpenCaseId] = useState('nivea')

  return (
    <div className="flex flex-col">
      <PageBanner title="Dla biznesu" image="/images/banner-biznes.png" />

      {/* Main Content Container (#2948:6961): padding 80px 120px, gap 128px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-32">
        {/* Intro + Partner Logos (#2948:6962, gap 80px) */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <p className="max-w-[921px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
            Społeczna odpowiedzialność biznesu (ang. Corporate Social
            Responsibility – CSR) to strategia zarządzania, zgodnie z którą
            przedsiębiorstwa w swoich działaniach dobrowolnie uwzględniają{' '}
            <strong className="font-bold">interesy społeczne</strong>,{' '}
            <strong className="font-bold">aspekty środowiskowe</strong>, czy{' '}
            <strong className="font-bold">
              relacje z różnymi grupami interesariuszy
            </strong>
            , w szczególności z pracownikami.
          </p>

          <div className="flex flex-col gap-8">
            <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
              Współpracują z nami
            </h2>

            <div className="flex items-center gap-10 lg:gap-16 overflow-x-auto pb-4">
              {PARTNER_LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={[
                    logo.className,
                    'w-auto object-contain shrink-0',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Jak możesz z nami współpracować? (#2498:7719) */}
        <section className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="w-full flex flex-col gap-8 lg:gap-12">
            <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
              Jak możesz z nami współpracować?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {COOPERATION_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-surface-white border border-gray-1 rounded-base overflow-hidden flex flex-col hover:shadow-card-hover transition-shadow"
                >
                  <div className="min-h-[88px] lg:min-h-[117px] px-6 py-5 lg:px-12 flex items-center justify-center border-b border-blue-75">
                    <h3 className="text-h5 lg:text-heading-mobile font-semibold text-blue-500 text-center">
                      {card.title}
                    </h3>
                  </div>
                  <div className="p-6 lg:p-8 flex-1 flex items-center">
                    <p className="text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.45]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button to="/kontakt" variant="secondary" className="w-[230px]">
            Skontaktuj się z nami
          </Button>
        </section>

        {/* Zobacz nasze poprzednie współprace (#2696:7316) */}
        <section className="flex flex-col gap-8 lg:gap-12">
          <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
            Zobacz nasze poprzednie współprace
          </h2>

          <div className="flex flex-col gap-6 lg:gap-10">
            {CASE_STUDIES.map((study) => (
              <CaseStudyAccordion
                key={study.id}
                study={study}
                isOpen={openCaseId === study.id}
                onToggle={() =>
                  setOpenCaseId((prev) => (prev === study.id ? null : study.id))
                }
              />
            ))}
          </div>
        </section>

        {/* Zdecydowani? (#2948:6965) */}
        <ContactStrip subtitle="Jeśli możemy jakoś pomóc, nie wahaj się z nami skontaktować!" />
      </div>
    </div>
  )
}
