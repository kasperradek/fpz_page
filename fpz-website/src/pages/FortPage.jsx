import { useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Landmark,
  Theater,
  Trees,
  Users,
  X,
} from 'lucide-react'
import { Button, PageBanner } from '../components/ui'

const QUICK_CARDS = [
  {
    title: 'Muzeum',
    description:
      'Nowo wyremontowany Fort jest dostępny do zwiedzania. W części muzealnej znajduje się wystawa poświęcona historycznej roli i sposobie funkcjonowania fortu oraz wystawa „Inżynierowie Niepodległości”.',
    ctaLabel: 'Sprawdź aktualne wystawy',
    href: 'https://www.fort-sidzina.pl',
  },
  {
    title: 'Wydarzenia kulturalne',
    description:
      'Planujemy stworzyć tu miejsce pracy, centrum aktywizacji artystycznej oraz punkt prowadzenia nowoczesnych terapii dla osób z niepełnosprawnościami. Realizujemy propozycje kulturalne dla całej społeczności lokalnej.',
    ctaLabel: 'Sprawdź wydarzenia',
    to: '/aktualnosci',
  },
  {
    title: 'Współpraca',
    description:
      'Sieciujemy i tworzymy przestrzeń do nawiązywania współprac, wolontariatu pracowniczego oraz projektów społecznych i artystycznych. Zapraszamy instytucje, firmy oraz organizacje partnerskie.',
    ctaLabel: 'Dowiedz się więcej',
    to: '/dla-biznesu',
  },
]

const PILLARS = [
  {
    icon: Users,
    title: 'Terapia i integracja',
    paragraphs: [
      'Fort to przestrzeń, w której nie ma podziałów, jest otwarta i dostępna dla wszystkich, a nasz cel to stworzenie miejsca w którym każdy będzie się czuł dobrze i swobodnie.',
      'Planujemy stworzyć tu miejsce pracy, centrum aktywizacji artystycznej oraz punkt prowadzenia nowoczesnych terapii dla osób z niepełnosprawnościami. Chcemy też realizować propozycje kulturalne dla całej społeczności lokalnej.',
    ],
  },
  {
    icon: Landmark,
    title: 'Turystyka historyczna',
    paragraphs: [
      'Nowo wyremontowany Fort jest dostępny do zwiedzania. W części muzealnej znajduje się wystawa poświęcona historycznej roli i sposobie funkcjonowania fortu.',
      'Dla zwiedzających udostępniona jest również wystawa „Inżynierowie Niepodległości” upamiętniająca ważne postacie pierwszego okresu odzyskania przez Polskę niepodległości.',
    ],
  },
  {
    icon: Theater,
    title: 'Edukacja kulturowa i kulturalna',
    paragraphs: [
      'W Forcie znajduje się kameralna sala teatralna, która już niebawem wypełni się kreatywną energią oraz wydarzeniami zarówno artystycznymi, jak dydaktycznymi.',
      'W programie znajdą się różnego typu warsztaty, spotkania, wystawy i występy. Nie zabraknie również zajęć plenerowych. Zarówno młodsi, jak i starsi, znajdą tu coś dla siebie.',
    ],
  },
  {
    icon: Trees,
    title: 'Edukacja przyrodniczo-ekologiczna',
    paragraphs: [
      'Poprzez edukację budujemy wrażliwość przyrodniczą i rozwijamy świadomość ekologiczną. Organizujemy spotkania edukacyjne i warsztaty dla dzieci i dorosłych.',
      'Fort otoczony jest dzikim parkiem, sprzyjającym bioróżnorodności. Wokół poprowadzona jest ścieżka ornitologiczno-przyrodnicza, a w planach mamy stworzenie terapeutycznego ogrodu sensorycznego.',
    ],
  },
]

const CAROUSEL_SLIDES = [
  {
    id: 'laczymy-ludzi',
    title: 'Łączymy ludzi',
    image: '/images/fort-slide-1.png',
    alt: 'Spotkania i warsztaty integrujące w Forcie Sztuki (i) Życia',
    content: (
      <p className="text-body-desktop lg:text-h6 font-normal text-blue-800">
        Sieciujemy, tworzymy przestrzeń do nawiązywania współprac i relacji
        projektowych, działań społecznych, twórczych i innych. Prowadzimy
        spotkania i warsztaty integrujące, służące wymianie wiedzy, doświadczeń
        i dobrych praktyk.
      </p>
    ),
  },
  {
    id: 'dlaczego-1',
    title: 'Dlaczego?',
    image: '/images/fort-slide-2.png',
    alt: 'Wspólnota i otwarta przestrzeń kulturalna w Forcie',
    content: (
      <ul className="list-disc pl-6 space-y-3 text-body-desktop lg:text-h6 font-normal text-blue-800">
        <li>
          Chcemy <strong className="font-bold">„oswajać” społeczeństwo</strong>{' '}
          z tematem niepełnosprawności. Otworzyć przestrzeń społeczno–kulturalną
          dla osób z niepełnosprawnościami jako odbiorców, ale i twórców.
          Włączyć ich w proces{' '}
          <strong className="font-bold">tworzenia wspólnoty</strong> jako
          pełnoprawnych uczestników życia społecznego i przeciwdziałać ich
          wykluczeniu.
        </li>
        <li>
          Kształcić kulturę <strong className="font-bold">otwartości</strong>,{' '}
          <strong className="font-bold">empatii</strong>,{' '}
          <strong className="font-bold">kreatywności</strong>,{' '}
          <strong className="font-bold">współpracy</strong> i umiejętnej
          komunikacji.
        </li>
      </ul>
    ),
  },
  {
    id: 'dlaczego-2',
    title: 'Dlaczego?',
    image: '/images/fort-slide-2.png',
    alt: 'Integracja społeczności lokalnej i wolontariat w Forcie',
    content: (
      <ul className="list-disc pl-6 space-y-3 text-body-desktop lg:text-h6 font-normal text-blue-800">
        <li>
          Integrować <strong className="font-bold">społeczność</strong> lokalną
          oraz zachęcać do aktywności obywatelskiej.
        </li>
        <li>
          Rozwijać{' '}
          <strong className="font-bold">wrażliwość i świadomość</strong> ludzi
          na polu społecznym, przyrodniczym i kulturowym.
        </li>
        <li>
          Promować ideę{' '}
          <strong className="font-bold">
            wolontariatu i działań społecznych
          </strong>{' '}
          na rzecz wspólnego dobra jaką jest ochrona środowiska oraz rozwój
          kultury i dialog obywatelski.
        </li>
      </ul>
    ),
  },
  {
    id: 'co-jeszcze',
    title: 'Co jeszcze?',
    image: '/images/fort-slide-3.png',
    alt: 'Hipoterapia i Integracyjna Grupa Teatralna w Forcie Sidzina',
    content: (
      <p className="text-body-desktop lg:text-h6 font-normal text-blue-800">
        Jako Fundacja Pełna Życia od 1989 roku prowadzimy hipoterapię, a od
        kilku lat również arteterapię. Nasi podopieczni wraz ze sprawnymi
        rówieśnikami tworzą Integracyjną Grupę Teatralną, występującą na
        krakowskich scenach, także w naszym Forcie Sztuki (i) Życia, gdzie
        regularnie odbywają się spektakle. Wkrótce do Fortu dołączą nasze kuce
        huculskie – Pela i Gąg, a w planach mamy budowę nowej hali do
        hipoterapii.
      </p>
    ),
  },
]

const FORT_GALLERY = [
  { src: '/images/fort-gal-1.png', alt: 'Fort 52 ½ S Sidzina — widok 1' },
  { src: '/images/fort-gal-2.png', alt: 'Fort 52 ½ S Sidzina — widok 2' },
  { src: '/images/fort-gal-3.png', alt: 'Fort 52 ½ S Sidzina — widok 3' },
  { src: '/images/fort-gal-4.png', alt: 'Fort 52 ½ S Sidzina — widok 4' },
  {
    src: '/images/proj-fort-sztuki.png',
    alt: 'Fort Sztuki (i) Życia — wnętrze i teren',
  },
  {
    src: '/images/proj-inwentaryzacja.png',
    alt: 'Zabytkowa zieleń fortowa wokół Fortu Sidzina',
  },
  { src: '/images/fort-gal-5.png', alt: 'Fort 52 ½ S Sidzina — widok 5' },
  { src: '/images/fort-gal-6.png', alt: 'Fort 52 ½ S Sidzina — widok 6' },
]

export function FortPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const stripRef = useRef(null)

  const scrollGallery = (direction) => {
    if (!stripRef.current) return
    stripRef.current.scrollBy({
      left: direction * 440,
      behavior: 'smooth',
    })
  }

  const slide = CAROUSEL_SLIDES[activeSlide]

  return (
    <div>
      <PageBanner
        title="Fort Sztuki (i) Życia"
        image="/images/banner-fort.png"
      />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
        {/* Intro copy */}
        <section className="max-w-[1025px] text-h6 lg:text-h5 font-normal text-blue-800 space-y-6">
          <p>
            Fort Sztuki (i) Życia jest projektem Fundacji Pełnej Życia.{' '}
            <strong className="font-bold">
              Miejscem nowoczesnych terapii, edukacji, działań artystycznych,
              kulturalnych oraz społecznej integracji
            </strong>
            . Centrum spotkania i dialogu osób działających na polu kultury i
            sztuki, ale nie tylko. Przestrzenią „ponad podziałami” na osoby
            sprawne i z niepełnosprawnością.
          </p>
          <p>
            Rewitalizacja budynku to jedno, lecz podarowanie mu faktycznego,
            drugiego życia, to zupełnie inna sprawa. Odbudowując go, chcieliśmy
            jednak, by żył naprawdę, a nawiązując do swojej historii, uczył
            czegoś ważnego. Potrzebna była więc adaptacja i zmiana, nie tylko na
            poziomie struktury, substancji fizycznej, ale przede wszystkim,
            funkcji.
          </p>
        </section>

        {/* 3 Feature Cards (Muzeum / Wydarzenia kulturalne / Współpraca) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {QUICK_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-surface-white border border-blue-75 rounded-base px-6 py-8 flex flex-col justify-between gap-6 transition-shadow duration-200 hover:shadow-card-hover"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-h5 font-semibold text-blue-500">
                  {card.title}
                </h2>
                <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                  {card.description}
                </p>
              </div>

              <div>
                <Button
                  variant="secondary"
                  to={card.to}
                  href={card.href}
                  className="w-full"
                >
                  {card.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </section>

        {/* Photo + Fort Contact Info Split */}
        <section className="grid grid-cols-1 lg:grid-cols-[572px_minmax(0,1fr)] gap-8 items-center">
          <div className="w-full h-[260px] sm:h-[340px] lg:h-[397px] rounded-base overflow-hidden bg-blue-25">
            <img
              src="/images/fort-contact.png"
              alt="Fort Sztuki (i) Życia — Fort 52 ½ S Sidzina"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-10 lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 max-w-[500px]">
              <div className="flex flex-col gap-1">
                <h3 className="text-h5 font-semibold text-blue-500">Telefon</h3>
                <a
                  href="tel:+48726301040"
                  className="text-body-mobile lg:text-body-desktop text-blue-800 hover:text-blue-500 transition-colors"
                >
                  +48 726 301 040
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-h5 font-semibold text-blue-500">
                  Godziny otwarcia
                </h3>
                <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                  pon - pt 9:00-17:00
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-h5 font-semibold text-blue-500">Adres</h3>
                <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                  ul. Kozienicka 33
                  <br />
                  30-397 Kraków
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-h5 font-semibold text-blue-500">E-mail:</h3>
                <a
                  href="mailto:kontakt@fort-sidzina.pl"
                  className="text-body-mobile lg:text-body-desktop text-blue-800 hover:text-blue-500 transition-colors"
                >
                  kontakt@fort-sidzina.pl
                </a>
                <a
                  href="mailto:fort@pelna-zycia.pl"
                  className="text-body-mobile lg:text-body-desktop text-blue-800 hover:text-blue-500 transition-colors"
                >
                  fort@pelna-zycia.pl
                </a>
              </div>
            </div>

            <div>
              <Button
                variant="secondary"
                href="https://www.fort-sidzina.pl"
                className="min-w-[230px]"
              >
                Odwiedź stronę Fortu
              </Button>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-12">
          {PILLARS.map(({ icon: Icon, title, paragraphs }) => (
            <div key={title} className="flex flex-col gap-6 py-4">
              <div className="flex items-center gap-6 lg:gap-8">
                <Icon className="w-10 h-10 text-blue-500 shrink-0" />
                <h2 className="text-h5 font-semibold text-blue-500">{title}</h2>
              </div>
              <div className="flex flex-col gap-4 text-body-mobile lg:text-body-desktop text-blue-800">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 4-Slide Interactive Story Carousel */}
        <section className="flex flex-col items-center gap-6">
          <div className="relative w-full">
            <div className="bg-surface-white border border-blue-75 rounded-base overflow-hidden grid grid-cols-1 lg:grid-cols-[480px_minmax(0,1fr)] min-h-[357px]">
              <div className="h-[240px] sm:h-[300px] lg:h-full bg-blue-25 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 lg:p-8 flex flex-col justify-center gap-5">
                <h2 className="text-heading-mobile lg:text-h1 font-semibold text-blue-500">
                  {slide.title}
                </h2>
                {slide.content}
              </div>
            </div>

            {/* Prev / Next arrows on desktop */}
            <button
              type="button"
              onClick={() =>
                setActiveSlide(
                  (prev) =>
                    (prev - 1 + CAROUSEL_SLIDES.length) %
                    CAROUSEL_SLIDES.length,
                )
              }
              aria-label="Poprzedni slajd"
              className="hidden xl:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 text-surface-white hover:bg-blue-600 items-center justify-center shadow-card-hover transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
              }
              aria-label="Następny slajd"
              className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 text-surface-white hover:bg-blue-600 items-center justify-center shadow-card-hover transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div
            role="tablist"
            aria-label="Slajdy Fort Sztuki (i) Życia"
            className="flex items-center gap-5"
          >
            {CAROUSEL_SLIDES.map((item, idx) => {
              const isActive = idx === activeSlide
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slajd ${idx + 1}: ${item.title}`}
                  onClick={() => setActiveSlide(idx)}
                  className={[
                    'w-4 h-4 rounded-full transition-colors cursor-pointer',
                    isActive
                      ? 'bg-blue-500'
                      : 'bg-blue-100 hover:bg-blue-300',
                  ].join(' ')}
                />
              )
            })}
          </div>
        </section>

        {/* Bottom Horizontal Photo Gallery Strip */}
        <section className="relative">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              aria-label="Przewiń galerię w lewo"
              className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-blue-500 text-surface-white hover:bg-blue-600 items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={stripRef}
              className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
            >
              {FORT_GALLERY.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  className="group shrink-0 w-[280px] sm:w-[360px] lg:w-[420px] h-[220px] sm:h-[260px] lg:h-[300px] rounded-base border border-blue-50 overflow-hidden bg-blue-25 snap-start cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollGallery(1)}
              aria-label="Przewiń galerię w prawo"
              className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-blue-500 text-surface-white hover:bg-blue-600 items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && FORT_GALLERY[lightboxIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia Fortu"
          onClick={() => setLightboxIdx(null)}
          className="fixed inset-0 z-50 bg-blue-900/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setLightboxIdx(null)}
            aria-label="Zamknij podgląd"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIdx(
                (lightboxIdx - 1 + FORT_GALLERY.length) % FORT_GALLERY.length,
              )
            }}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={FORT_GALLERY[lightboxIdx].src}
            alt={FORT_GALLERY[lightboxIdx].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[82vh] rounded-base shadow-hero object-contain"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIdx((lightboxIdx + 1) % FORT_GALLERY.length)
            }}
            aria-label="Następne zdjęcie"
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}
