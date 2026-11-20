import { useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
} from 'lucide-react'
import { Button, NewsCard, OfferCard } from '../components/ui'
import {
  EFS_LOGOS,
  HELP_TABS,
  HERO_SLIDES,
  LATEST_NEWS,
  MAP_LOCATIONS,
  OFFER_TABS,
  STATS,
  SUPPORTERS,
  TESTIMONIALS,
} from '../data/homeData'

/* --------------------------------------------------------------------------
 * FolderTabsSection — Reusable Figma "foldery - oferta + wsparcie" (#1658:7362)
 * -------------------------------------------------------------------------- */
function FolderTabsSection({ id, heading, subtitle, tabs }) {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id)
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0]

  return (
    <section id={id} className="scroll-mt-32 fpz-container flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
          {heading}
        </h2>
        <p className="text-body-mobile lg:text-h5 text-blue-800">{subtitle}</p>
      </div>

      <div className="w-full">
        {/* Folder Tab Headers */}
        <div
          role="tablist"
          aria-label={heading}
          className="grid w-full"
          style={{
            gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
          }}
        >
          {tabs.map((tab, idx) => {
            const isActive = tab.id === activeTab.id
            const isFirst = idx === 0
            const isLast = idx === tabs.length - 1
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
                className={[
                  'h-[54px] lg:h-[70px] px-3 lg:px-6 flex items-center justify-center text-center text-body-mobile sm:text-h6 lg:text-h5 font-normal transition-colors cursor-pointer',
                  isFirst ? 'rounded-tl-[16px] lg:rounded-tl-[20px]' : '',
                  isLast ? 'rounded-tr-[16px] lg:rounded-tr-[20px]' : '',
                  isActive
                    ? 'bg-blue-500 text-surface-page border border-blue-500'
                    : 'bg-surface-white text-blue-800 border-t border-x border-blue-75 hover:bg-blue-25',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Folder Body Panel */}
        <div
          role="tabpanel"
          className="bg-surface-white border border-blue-75 border-t-0 rounded-b-base px-5 py-8 lg:px-[35px] lg:py-12 shadow-soft"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-end">
            {activeTab.items.map((item) => (
              <OfferCard
                key={item.title}
                title={item.title}
                image={item.image}
                description={item.description}
                to={item.to}
              />
            ))}

            {/* Right-aligned CTA button inside grid matching Figma layout */}
            <div className="sm:col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-end pt-2 lg:pt-0 lg:ml-auto">
              <Button to={activeTab.ctaTo} variant="secondary" className="w-full sm:w-[230px]">
                Poznaj szczegóły
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------------------
 * AnimatedStat — Count-up metric matching Figma "Fundacja w liczbach" (#3157:9633)
 * -------------------------------------------------------------------------- */
function AnimatedStat({ target, suffix, label }) {
  const ref = useRef(null)
  const [value, setValue] = useState(target)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 900
          const startTime = performance.now()

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const formatted = value.toLocaleString('pl-PL')

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center py-6 lg:py-10 px-4 gap-3"
    >
      <span className="text-[40px] lg:text-[48px] font-bold leading-[1.1] text-green-500 tabular-nums">
        {formatted}
        {suffix}
      </span>
      <p className="text-body-mobile lg:text-body-desktop text-gray-3">{label}</p>
    </div>
  )
}

/* --------------------------------------------------------------------------
 * SupportersCarousel — Matching Figma "Carousel" (#1168:5332)
 * -------------------------------------------------------------------------- */
function SupportersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = SUPPORTERS.length

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total)
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total)

  const getRelativeOffset = (index) => {
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section className="fpz-container flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
          Zobacz kto nas wspiera
        </h2>
        <p className="text-body-mobile lg:text-h5 text-blue-800">
          Czyli znane osoby, które pomagają naszej Fundacji
        </p>
      </div>

      <div className="relative w-full py-4 lg:py-10">
        {/* Stacked / Coverflow Slide Stage */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] w-full overflow-hidden flex items-center justify-center">
          {SUPPORTERS.map((person, index) => {
            const offset = getRelativeOffset(index)
            const isCenter = offset === 0
            const absOffset = Math.abs(offset)

            let transformClass = 'translate-x-0 scale-100 opacity-100 z-30'
            if (offset === -1) {
              transformClass =
                '-translate-x-[52%] sm:-translate-x-[58%] lg:-translate-x-[62%] scale-[0.82] opacity-75 z-20'
            } else if (offset === 1) {
              transformClass =
                'translate-x-[52%] sm:translate-x-[58%] lg:translate-x-[62%] scale-[0.82] opacity-75 z-20'
            } else if (offset === -2) {
              transformClass =
                '-translate-x-[88%] lg:-translate-x-[102%] scale-[0.65] opacity-40 z-10'
            } else if (offset === 2) {
              transformClass =
                'translate-x-[88%] lg:translate-x-[102%] scale-[0.65] opacity-40 z-10'
            } else if (absOffset > 2) {
              transformClass = 'opacity-0 scale-50 pointer-events-none z-0'
            }

            return (
              <button
                key={person.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Pokaż: ${person.name}`}
                className={[
                  'absolute w-[82%] sm:w-[68%] lg:w-[576px] h-[250px] sm:h-[330px] lg:h-[408px] rounded-lg overflow-hidden bg-surface-white shadow-hero-card transition-all duration-300 ease-out cursor-pointer',
                  transformClass,
                ].join(' ')}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                {isCenter && (
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-hero-card bg-white/75 backdrop-blur-[2px]">
                    <span className="text-body-mobile lg:text-body-desktop font-normal text-blue-500 whitespace-nowrap">
                      {person.name}
                    </span>
                  </div>
                )}
              </button>
            )
          })}

          {/* Left / Right Circular Blue-500 Arrows */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Poprzednia osoba"
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-500 text-surface-white flex items-center justify-center shadow-soft hover:bg-blue-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Następna osoba"
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-500 text-surface-white flex items-center justify-center shadow-soft hover:bg-blue-600 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2.5 pt-6">
          {SUPPORTERS.map((person, idx) => (
            <button
              key={person.id}
              type="button"
              aria-label={`Slajd ${idx + 1}: ${person.name}`}
              onClick={() => setActiveIndex(idx)}
              className={[
                'rounded-full transition-all cursor-pointer',
                idx === activeIndex
                  ? 'w-4 h-4 bg-blue-500'
                  : 'w-3 h-3 bg-blue-300/50 hover:bg-blue-400',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------------------
 * LocationsSection — Matching Figma "Lokalizacje" (#3157:9683 / #2940:6976)
 * -------------------------------------------------------------------------- */
function LocationsSection() {
  const [selectedId, setSelectedId] = useState('siedziba')

  return (
    <section className="fpz-container flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
          Lokalizacje
        </h2>
        <p className="text-body-mobile lg:text-h5 text-blue-800">
          Dowiedz się, gdzie znajdują się nasze placówki
        </p>
      </div>

      <div className="relative w-full rounded-base overflow-hidden border border-blue-50 bg-blue-25">
        {/* Map Image & Interactive Pins */}
        <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[661px]">
          <img
            src="/images/map-krakow.png"
            alt="Mapa lokalizacji placówek Fundacji Pełna Życia w Krakowie"
            className="w-full h-full object-cover"
          />

          {MAP_LOCATIONS.map((loc) => {
            const isSelected = loc.id === selectedId
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedId(loc.id)}
                style={{ left: loc.pinPos.left, top: loc.pinPos.top }}
                className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center gap-1.5 group cursor-pointer focus-visible:outline-none"
              >
                <span
                  className={[
                    'w-9 h-9 rounded-full flex items-center justify-center shadow-soft transition-transform duration-200',
                    isSelected
                      ? 'bg-blue-500 text-surface-white scale-110 ring-4 ring-green-500/40'
                      : 'bg-blue-500/90 text-surface-white hover:scale-105',
                  ].join(' ')}
                >
                  <MapPin className="w-5 h-5" />
                </span>
                {isSelected && (
                  <span className="px-2.5 py-1 rounded-xs bg-surface-white border border-gray-1 shadow-card-hover text-body-small lg:text-h6 font-bold text-blue-500 whitespace-nowrap">
                    {loc.name}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Floating Expandable Location Card ("mapa miejsca" #2940:6916) */}
        <div className="sm:absolute sm:left-5 sm:bottom-5 w-full sm:w-[310px] bg-surface-white border-t sm:border border-gray-1 sm:rounded-xs p-3 flex flex-col gap-2 shadow-card-hover">
          {MAP_LOCATIONS.map((loc) => {
            const isOpen = loc.id === selectedId
            return (
              <div
                key={loc.id}
                className="border-b last:border-b-0 border-blue-50 pb-2 last:pb-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setSelectedId(isOpen ? null : loc.id)}
                  className="w-full flex items-center justify-between gap-2 py-1 text-left cursor-pointer"
                >
                  <span className="text-body-desktop lg:text-h6 font-bold text-blue-500">
                    {loc.name}
                  </span>
                  <ChevronDown
                    className={[
                      'w-5 h-5 text-blue-500 shrink-0 transition-transform duration-200',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                  />
                </button>

                {isOpen && (
                  <div className="pt-2 flex flex-col gap-2 text-body-small">
                    <div>
                      <span className="font-semibold text-blue-500">Adres: </span>
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-800 underline hover:text-blue-500"
                      >
                        {loc.address}
                      </a>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-500">
                        Godziny otwarcia:{' '}
                      </span>
                      <span className="text-gray-3">{loc.hours}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-500">
                        Telefon:{' '}
                      </span>
                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                        className="text-gray-3 hover:text-blue-500"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------------------
 * TestimonialsSection — Matching Figma "Podopieczni o Nas" (#3157:9688)
 * -------------------------------------------------------------------------- */
function TestimonialsSection() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(TESTIMONIALS.length / 2)

  const goPrev = () => setPage((prev) => (prev - 1 + pageCount) % pageCount)
  const goNext = () => setPage((prev) => (prev + 1) % pageCount)

  const visibleItems = TESTIMONIALS.slice(page * 2, page * 2 + 2)

  return (
    <section className="fpz-container flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
          Podopieczni o Nas
        </h2>
        <p className="text-body-mobile lg:text-h5 text-blue-800">
          Zobacz, jakie opinie otrzymujemy od społeczności
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 lg:px-14">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="bg-surface-white border border-blue-50 rounded-base p-6 lg:px-7 lg:py-8 flex flex-col justify-between gap-8 shadow-card-hover"
            >
              <div className="flex flex-col gap-6">
                <Quote className="w-8 h-8 text-blue-500/80" />
                <p className="text-body-mobile lg:text-h6 text-blue-800 leading-[1.45]">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-5 pt-2">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-blue-25 border border-blue-100 flex items-center justify-center text-h6 font-semibold text-blue-500 shrink-0">
                  {item.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="flex flex-col">
                  <span className="text-h6 lg:text-h5 font-semibold text-blue-800">
                    {item.author}
                  </span>
                  <span className="text-body-small lg:text-h6 text-gray-3">
                    {item.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Left / Right Carousel Arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Poprzednie opinie"
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 text-surface-white items-center justify-center shadow-soft hover:bg-blue-600 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Następne opinie"
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 text-surface-white items-center justify-center shadow-soft hover:bg-blue-600 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-4 pt-8">
          {Array.from({ length: pageCount }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Strona opinii ${idx + 1}`}
              onClick={() => setPage(idx)}
              className={[
                'w-4 h-4 rounded-full transition-colors cursor-pointer',
                idx === page ? 'bg-blue-500' : 'bg-[#D9D9D9] hover:bg-blue-200',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------------------
 * HomePage — Full implementation of Figma "Strona główna / Desktop" (#3155:9452)
 *            and content frame #3157:9620
 * -------------------------------------------------------------------------- */
export function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const currentHero = HERO_SLIDES[heroIndex]

  return (
    <div className="flex flex-col gap-20 lg:gap-32 pb-16 lg:pb-20">
      {/* 1. Sekcja hero (#3157:9621 / #3060:14309) + EFS Bar */}
      <section className="flex flex-col gap-8 lg:gap-10 pt-6 lg:pt-16">
        <div className="fpz-container">
          <div className="relative flex flex-col lg:block lg:h-[560px]">
            {/* Right Hero Image (780x560 desktop) */}
            <div className="relative w-full lg:w-[780px] lg:ml-auto h-[260px] sm:h-[380px] lg:h-[560px] rounded-base overflow-hidden bg-blue-50">
              <img
                src={currentHero.image}
                alt={currentHero.alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Subtle hero slide selector dots */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-[2px] px-3 py-1.5 rounded-full">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={slide.label}
                    onClick={() => setHeroIndex(idx)}
                    className={[
                      'w-2.5 h-2.5 rounded-full transition-colors cursor-pointer',
                      idx === heroIndex
                        ? 'bg-blue-500'
                        : 'bg-blue-200 hover:bg-blue-400',
                    ].join(' ')}
                  />
                ))}
              </div>
            </div>

            {/* Left Floating White Card (613px wide, y=80px desktop) */}
            <div className="relative -mt-10 mx-2 sm:mx-6 lg:mx-0 lg:mt-0 lg:absolute lg:left-0 lg:top-[80px] lg:w-[613px] bg-surface-white rounded-hero-card p-6 lg:p-8 shadow-hero-card flex flex-col gap-6 lg:gap-8">
              <h1 className="text-display-mobile lg:text-heading-desktop font-semibold text-blue-500 leading-[1.2]">
                Fundacja
                <br />
                Pełna Życia
              </h1>

              <p className="text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.45]">
                Od 1989 roku{' '}
                <strong className="font-semibold">
                  wspieramy osoby z niepełnosprawnościami oraz osoby im
                  asystujące
                </strong>
                . Dzieci, dorosłych, seniorów. Jesteśmy tuż obok w każdym
                okresie ich życia. Szukamy nowych sposobów terapii, pomagamy w
                aktywizacji społecznej i zawodowej.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6">
                <Button to="/darowizna" variant="primary">
                  Wesprzyj Fundację
                </Button>
                <Button
                  href="#oferta-fundacji"
                  variant="secondary"
                  className="sm:w-[230px]"
                >
                  Zobacz ofertę Fundacji
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* EFS Co-financing Strip (#3060:14255) */}
        <div className="fpz-container py-4 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-6 border-y border-blue-50/70">
          <p className="text-body-mobile lg:text-h6 font-semibold text-blue-500 text-center lg:text-left">
            Strona Fundacji współfinansowana ze środków EFS.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {EFS_LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={[logo.className, 'w-auto object-contain'].join(' ')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Oferta Fundacji (#3157:9623) */}
      <FolderTabsSection
        id="oferta-fundacji"
        heading="Oferta Fundacji"
        subtitle="Poznaj naszą ofertę i wybierz wsparcie dopasowane do Twoich potrzeb"
        tabs={OFFER_TABS}
      />

      {/* 3. Chcę pomóc (#3157:9628) */}
      <FolderTabsSection
        id="chce-pomoc-sekcja"
        heading="Chcę pomóc"
        subtitle="Sprawdź jak możesz wesprzeć nasze działania - jako osoba prywatna lub firma"
        tabs={HELP_TABS}
      />

      {/* 4. Fundacja w liczbach (#3157:9633) */}
      <section className="fpz-container flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col gap-4 max-w-[583px]">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Fundacja w liczbach
          </h2>
          <p className="text-body-mobile lg:text-h5 text-blue-800">
            Zobacz, jak rozwijamy się dzięki Waszemu wsparciu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[60px]">
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* 5. Aktualności (#3157:9667) */}
      <section className="fpz-container flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Aktualności
          </h2>
          <p className="text-body-mobile lg:text-h5 text-blue-800">
            Poznaj najciekawsze wydarzenia, w których bierzemy udział
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {LATEST_NEWS.map((post) => (
            <NewsCard
              key={post.id}
              date={post.date}
              tags={post.tags}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              to={post.to}
            />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button to="/aktualnosci" variant="secondary" className="w-[230px]">
            Zobacz więcej
          </Button>
        </div>
      </section>

      {/* 6. Zobacz kto nas wspiera (#3157:9678) */}
      <SupportersCarousel />

      {/* 7. Lokalizacje (#3157:9683) */}
      <LocationsSection />

      {/* 8. Podopieczni o Nas (#3157:9688) */}
      <TestimonialsSection />
    </div>
  )
}
