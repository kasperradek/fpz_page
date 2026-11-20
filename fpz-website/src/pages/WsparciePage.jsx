import { ContactStrip, PageBanner } from '../components/ui'

/**
 * All 6 caregiver support services extracted verbatim from Figma:
 * - "Wsparcie / Desktop" (#2972:9435), content frame #2972:9441
 * - "Wsparcie / Mobile" (#3004:8264)
 */
const SUPPORT_SERVICES = [
  {
    id: 'doradztwo',
    title: 'Doradztwo w sprawach życiowych',
    description:
      'Pomagamy osobom z niepełnosprawnościami i ich opiekunom. Dowiedz się, jak uzyskać orzeczenie, dodatki i gdzie szukać wsparcia w nietypowych sprawach.',
    image: '/images/wsparcie-doradztwo.png',
  },
  {
    id: 'psycholog',
    title: 'Pomoc psychologa',
    description:
      'Oferujemy profesjonalną pomoc psychologiczną w radzeniu sobie ze stresem, lękiem i depresją. Gwarantujemy dyskrecję i komfortową atmosferę.',
    image: '/images/wsparcie-psycholog.png',
  },
  {
    id: 'szkolenia-opiekunowie',
    title: 'Szkolenia dla opiekunów',
    description:
      'Organizujemy specjalistyczne kursy dla opiekunów osób niesamodzielnych. Zdobądź praktyczną wiedzę i umiejętności, aby zyskać pewność w codziennej opiece.',
    image: '/images/wsparcie-szkolenia.png',
  },
  {
    id: 'prawnik',
    title: 'Pomoc prawnika',
    description:
      'Nasi prawnicy oferują wsparcie w sprawach z zakresu prawa rodzinnego, spadkowego i cywilnego. Skontaktuj się, aby uzyskać fachową poradę.',
    image: '/images/wsparcie-prawnik.png',
  },
  {
    id: 'szkolenia-fizjoterapia',
    title: 'Szkolenia z fizjoterapii',
    description:
      'Prowadzimy kursy z fizjoterapii dla opiekunów. Naucz się, jak skutecznie i profesjonalnie wspierać rehabilitację bliskich lub podopiecznych.',
    image: '/images/card-fizjoterapia.png',
  },
  {
    id: 'opieka-wytchnieniowa',
    title: 'Opieka wytchnieniowa',
    description:
      'Zapewniamy profesjonalną opiekę nad Twoimi bliskimi w Krakowie, abyś mógł znaleźć czas na odpoczynek, załatwienie swoich spraw lub wyjazd.',
    image: '/images/wsparcie-opieka.png',
  },
]

export function WsparciePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner (#2972:9437) */}
      <PageBanner title="Wsparcie" image="/images/banner-wsparcie.png" />

      {/* Main Content Container (#2972:9441): padding 80px 120px, gap 128px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-32">
        {/* Intro + 6 Support Services (#3160:10279, gap 80px) */}
        <section className="flex flex-col gap-12 lg:gap-20">
          {/* Intro Copy (#2972:9442) */}
          <div className="max-w-[1118px] flex flex-col gap-5 text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
            <p>
              Prowadzimy dwa projekty{' '}
              <strong className="font-bold">
                bezpłatnej opieki wytchnieniowej
              </strong>
              , skierowane do mieszkańców Krakowa. Opiekunowie osób
              niesamodzielnych otrzymują indywidualne, kompleksowe{' '}
              <strong className="font-bold">wsparcie informacyjne</strong> oraz{' '}
              <strong className="font-bold">porady specjalistów</strong> m.in.
              psychologa, lekarza, pielęgniarki, fizjoterapeuty, pracownika
              socjalnego i doradcy.
            </p>
            <p>
              Oferujemy też{' '}
              <strong className="font-bold">indywidualne szkolenia</strong>{' '}
              dotyczące pielęgnacji i opieki nad chorymi, a także{' '}
              <strong className="font-bold">
                fizjoterapię i grupę wsparcia
              </strong>
              . Najważniejszym wsparciem dla opiekunów jest bezpłatna usługa{' '}
              <strong className="font-bold">opieki odciążeniowej</strong>,
              świadczona w miejscu zamieszkania podopiecznego.
            </p>
          </div>

          {/* Wsparcie dla opiekunów (#2972:9445) */}
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
                Wsparcie dla opiekunów
              </h2>
              <p className="text-body-mobile lg:text-h5 text-blue-800">
                Dla wszystkich z Krakowa, którzy opiekują się osobą
                niesamodzielną z rodziny lub niespokrewnioną
              </p>
            </div>

            <div className="flex flex-col gap-10 lg:gap-12">
              {SUPPORT_SERVICES.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 flex flex-col lg:flex-row items-start gap-6 lg:gap-8"
                >
                  <div className="w-full lg:w-[488px] h-[210px] sm:h-[250px] lg:h-[235px] rounded-base overflow-hidden bg-blue-50 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3 lg:gap-4 max-w-[574px]">
                    <h3 className="text-heading-mobile lg:text-display-mobile font-medium text-blue-800 leading-[1.2]">
                      {service.title}
                    </h3>
                    <p className="text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.45]">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zdecydowani? Contact Strip (#2972:9459) */}
        <ContactStrip subtitle="Jeśli możemy jakoś pomóc, nie wahaj się z nami skontaktować!" />

        {/* Bottom EU Co-financing Posters (#2972:9456) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[101px] items-center">
          <div className="w-full rounded-base overflow-hidden border border-blue-50 bg-surface-white shadow-card-hover">
            <img
              src="/images/wsparcie-eu-1.png"
              alt="Informacja o współfinansowaniu projektu opieki wytchnieniowej ze środków Unii Europejskiej"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full rounded-base overflow-hidden border border-blue-50 bg-surface-white shadow-card-hover">
            <img
              src="/images/wsparcie-eu-2.png"
              alt="Informacja o projekcie Wspornik — punkt wsparcia opiekunów osób niesamodzielnych"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
