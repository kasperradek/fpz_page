import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Copy } from 'lucide-react'
import { Button, PageBanner } from '../components/ui'

/**
 * "1.5% Podatku / Desktop" (#2971:12969), content frame #2571:13161
 */
const TAX_STEPS = [
  {
    number: '1',
    title: 'Wypełnij zeznanie podatkowe',
    description:
      'W formularzu PIT znajdziesz odpowiednie miejsce na wpisanie numeru KRS.',
  },
  {
    number: '2',
    title: 'Podaj numer KRS',
    description: (
      <>
        Wpisz numer KRS naszej fundacji:{' '}
        <strong className="font-bold text-blue-500">0000043097</strong>
      </>
    ),
  },
  {
    number: '3',
    title: 'Wyraź zgodę na przekazanie',
    description:
      'Zaznacz odpowiednie pole, wyrażając zgodę na przekazanie 1,5% podatku.',
  },
  {
    number: '4',
    title: 'Złóż zeznanie podatkowe',
    description:
      'Pamiętaj, aby zrobić to w terminie, aby Twoje wsparcie mogło trafić do naszej fundacji.',
  },
]

const INFO_BLOCKS = [
  {
    heading: 'Czym jest 1,5% podatku?',
    body: (
      <>
        1,5% podatku to mechanizm, który pozwala podatnikom w Polsce przekazać
        część swojego podatku dochodowego na rzecz wybranej organizacji pożytku
        publicznego (OPP). Od 2023 roku każdy{' '}
        <strong className="font-bold">
          podatnik może przeznaczyć 1,5% swojego rocznego podatku dochodowego na
          wsparcie organizacji non-profit
        </strong>
        , zamiast przekazywać tę kwotę do budżetu państwa.
      </>
    ),
  },
  {
    heading: 'Komu możesz je przekazać?',
    body: (
      <>
        1,5% podatku można przekazać{' '}
        <strong className="font-bold">
          organizacjom pożytku publicznego (OPP)
        </strong>
        , które są wpisane do Krajowego Rejestru Sądowego (KRS). Mogą to być{' '}
        <strong className="font-bold">
          fundacje, stowarzyszenia, organizacje wspierające osoby
          niepełnosprawne, organizacje charytatywne, instytucje edukacyjne i
          kulturalne, organizacje ekologiczne, sportowe
        </strong>{' '}
        oraz inne non-profit działające na rzecz społecznie ważnych celów.
      </>
    ),
  },
  {
    heading: 'Dlaczego warto?',
    body: (
      <>
        Przekazując nam swoje 1,5% podatku{' '}
        <strong className="font-bold">masz 100% udziału w naszej misji</strong>,
        realizowanej już od 34 lat. 1,5% podatku dla Fundacji Pełnej Życia to{' '}
        <strong className="font-bold">
          szansa na zebranie dodatkowych środków na nasze działanie i rozwój
        </strong>
        .
      </>
    ),
  },
]

const KRS_NUMBER = '0000043097'

export function PodatekPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyKrs = async () => {
    try {
      await navigator.clipboard.writeText(KRS_NUMBER)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback ignored if clipboard API unavailable
    }
  }

  return (
    <div className="flex flex-col">
      <PageBanner title="1,5% Podatku" image="/images/banner-podatek.png" />

      {/* Main Content Container (#2571:13161): padding 80px 120px, gap 128px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-32">
        {/* Intro + 4-Step Timeline (#3160:10276, gap 80px) */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <p className="max-w-[1092px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
            Twoje 1,5% ma <strong className="font-bold">WIELKĄ MOC!</strong> A
            jak wielką – możesz przekonać się sam, już dziś przekazując je na
            naszą Fundację. Jesteśmy Fundacją, która każdego dnia daje osobom z
            niepełnosprawnościami oraz osobom niesamodzielnym nadzieję na lepsze
            dziś i lepsze jutro.
          </p>

          <div className="flex flex-col gap-10 lg:gap-12">
            <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
              Jak przekazać 1,5% podatku na Fundację?
            </h2>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {/* Desktop horizontal connector line */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-8 left-[13%] right-[13%] h-px bg-green-400"
              />

              {TAX_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center gap-5"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-surface-page border-2 border-green-500 flex items-center justify-center text-display-mobile font-semibold text-blue-800">
                    {step.number}
                  </div>
                  <div className="flex flex-col items-center gap-3 max-w-[260px]">
                    <h3 className="text-h6 font-semibold text-blue-800 leading-[1.4]">
                      {step.title}
                    </h3>
                    <p className="text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.45]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Educational Info Sections (#1541:5350, #1541:5353, #1541:5356) */}
        {INFO_BLOCKS.map((block) => (
          <section
            key={block.heading}
            className="max-w-[997px] flex flex-col gap-6 lg:gap-10"
          >
            <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
              {block.heading}
            </h2>
            <p className="text-body-mobile lg:text-h6 text-blue-800 leading-[1.5]">
              {block.body}
            </p>
          </section>
        ))}

        {/* Czy coś Cię to kosztuje? (#2696:8768) */}
        <section className="flex flex-col gap-4 max-w-[997px]">
          <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
            Czy coś Cię to kosztuje?
          </h2>
          <p className="text-body-mobile lg:text-h6 text-blue-800 leading-[1.5]">
            Absolutnie nic! Wystarczy, że wpiszesz w swoim formularzu PIT nasz
            numer KRS podany poniżej
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <span className="text-h5 font-semibold text-blue-500 tracking-wide">
              KRS: {KRS_NUMBER}
            </span>
            <button
              type="button"
              onClick={handleCopyKrs}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-base border border-blue-100 bg-blue-25 text-body-small font-medium text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  Skopiowano KRS
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Kopiuj numer KRS
                </>
              )}
            </button>
          </div>
        </section>

        {/* Inne sposoby na pomoc (#2696:8787) */}
        <section className="grid grid-cols-1 lg:grid-cols-[590px_1fr] gap-8 lg:gap-10 items-center">
          <div className="w-full h-[240px] sm:h-[320px] lg:h-[357px] rounded-base overflow-hidden bg-blue-50">
            <img
              src="/images/podatek-inne.png"
              alt="Inne sposoby wsparcia Fundacji Pełna Życia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-8 lg:gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-inter text-heading-mobile lg:text-h1 font-semibold text-blue-500">
                Inne sposoby na pomoc
              </h2>
              <p className="text-body-mobile lg:text-h6 text-blue-800 leading-[1.5]">
                Nie możesz nam przekazać swojego 1,5%? Nie szkodzi! Możesz nam
                przekazać jednorazową lub cykliczną darowiznę w dogodnej dla
                Ciebie formie.
              </p>
            </div>

            <Button to="/chce-pomoc" variant="secondary">
              Sprawdź inne formy pomocy
            </Button>
          </div>
        </section>

        {/* Bottom 2-Column Transparency Notes (#2971:12979) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.5]">
          <p>
            Darowizny można także odliczyć w zeznaniu rocznym w załączniku PIT/O
            jako darowiznę na rzecz organizacji prowadzących działalność pożytku
            publicznego w ramach limitu 6% dochodu u osób fizycznych, a 10% u
            osób prawnych.
          </p>
          <p>
            Na podstronie{' '}
            <Link
              to="/inne-dokumenty"
              className="underline text-blue-500 hover:text-blue-700"
            >
              „Inne dokumenty”
            </Link>{' '}
            możesz sprawdzić, w jaki sposób wydatkujemy przekazane nam
            pieniądze. Jako organizacja pożytku publicznego składamy coroczne
            sprawozdania finansowe i merytoryczne, które znajdują się na stronie{' '}
            <a
              href="https://sprawozdaniaopp.niw.gov.pl/"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-500 hover:text-blue-700 break-all"
            >
              https://sprawozdaniaopp.niw.gov.pl/
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
