import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import {
  AccordionItem,
  Button,
  Card,
  Checkbox,
  Input,
  NewsCard,
  OfferCard,
  TagBadge,
  TherapyCard,
} from '../components/ui'
import { SITE_VIEWS } from '../data/routes'

/**
 * Home Page placeholder showcasing:
 * 1. Figma Hero Card layout ("Sekcja hero" #3060:14309)
 * 2. Live preview of shared reusable components (Buttons, Cards, Accordion, Inputs)
 * 3. Clickable checklist of all 24 Figma views wired to react-router-dom
 */
export function HomePage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-20 pt-8 lg:pt-16 pb-8">
      {/* Hero Section Preview matching Figma "Sekcja hero" (#3060:14309) */}
      <section className="fpz-container">
        <div className="relative flex flex-col lg:block lg:min-h-[520px]">
          {/* Right hero visual block */}
          <div className="w-full lg:w-[65%] lg:ml-auto h-[260px] lg:h-[520px] rounded-base overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-green-500/80 flex items-center justify-center">
            <div className="text-center px-6 text-surface-page/90">
              <p className="text-body-small uppercase tracking-widest mb-2">
                Strona główna / Desktop (#3155:9452)
              </p>
              <p className="text-h5 font-semibold">
                Miejsce na zdjęcie główne (Fort / Dzieci / Hipoterapia)
              </p>
            </div>
          </div>

          {/* Floating Hero Card (#3060:14245) */}
          <div className="relative -mt-10 mx-4 lg:mx-0 lg:mt-0 lg:absolute lg:left-0 lg:top-16 lg:w-[613px] bg-surface-white rounded-hero-card p-6 lg:p-8 shadow-hero-card flex flex-col gap-6 lg:gap-8">
            <h1 className="text-display-mobile lg:text-heading-desktop font-semibold text-blue-500 leading-[1.2]">
              Fundacja
              <br />
              Pełna Życia
            </h1>
            <p className="text-body-mobile lg:text-body-desktop text-blue-800">
              Od 1989 roku{' '}
              <strong className="font-semibold">
                wspieramy osoby z niepełnosprawnościami oraz osoby im asystujące
              </strong>
              . Dzieci, dorosłych, seniorów. Jesteśmy tuż obok w każdym okresie
              ich życia. Szukamy nowych sposobów terapii, pomagamy w aktywizacji
              społecznej i zawodowej.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/darowizna" variant="primary">
                Wesprzyj Fundację
              </Button>
              <Button to="/terapie" variant="secondary">
                Zobacz ofertę Fundacji
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Components Preview */}
      <section className="fpz-container flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Komponenty bazowe z Figmy
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-gray-3">
            Wspólne elementy interfejsu zbudowane na tokenach kolorów,
            typografii i zaokrągleń z pliku „Projekt Strony FPŻ”.
          </p>
        </div>

        {/* Buttons & Badges */}
        <Card hoverable={false} className="p-6 lg:p-8 flex flex-col gap-6">
          <h3 className="text-h5 font-semibold text-blue-500">
            Przyciski i tagi kategorii
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Wesprzyj Fundację</Button>
            <Button variant="secondary">Zobacz ofertę Fundacji</Button>
            <Button variant="outlineGreen">Filtruj kategorie</Button>
            <TagBadge>Wydarzenia</TagBadge>
            <TagBadge active>Aktualności</TagBadge>
          </div>
        </Card>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NewsCard
            date="23.10.2024"
            tags={['WYDARZENIA', 'WARSZTATY']}
            title="Warsztaty w ŻyWej pracowni z Motorolą"
            excerpt="Sprawdź, jak przebiegały wspólne warsztaty artystyczne naszych Podopiecznych i wolontariuszy."
            to="/aktualnosci/warsztaty-w-zywej-pracowni"
          />
          <TherapyCard
            title="Trening społeczny"
            description="Prowadzone w parach i/lub grupach, w celu przygotowania dzieci i młodzieży do kontaktów rówieśniczych i społecznych."
            to="/terapie"
          />
          <div className="flex flex-col gap-6">
            <OfferCard
              title="Arteterapia"
              description="Chcielibyśmy serdecznie zaprosić na nasze zajęcia z arteterapii. Zachęcamy do zapoznania się ze szczegółami."
              to="/terapie#arteterapia"
            />
            <OfferCard
              title="Opieka wytchnieniowa"
              description="Bezpłatna opieka wytchnieniowa dla opiekunów osób niesamodzielnych w Krakowie."
              to="/wsparcie#opieka-wytchnieniowa"
            />
          </div>
        </div>

        {/* Accordion & Form Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <AccordionItem title="Jak zgłosić dziecko na zajęcia?" defaultOpen>
              Aby zapisać dziecko na zajęcia terapeutyczne, skontaktuj się z
              naszym biurem telefonicznie lub wypełnij formularz w zakładce
              Kontakt.
            </AccordionItem>
            <AccordionItem title="Jak odliczyć darowiznę od podatku?">
              Darowizny przekazane na cele pożytku publicznego możesz odliczyć
              w rocznym zeznaniu PIT (do 6% dochodu dla osób fizycznych).
            </AccordionItem>
          </div>

          <Card hoverable={false} className="p-6 lg:p-8 flex flex-col gap-5">
            <Input id="demo-name" label="Imię" required placeholder="Jan" />
            <Input
              id="demo-email"
              label="E-mail"
              type="email"
              required
              error="Wpisz adres e-mail"
              placeholder="jan@example.com"
            />
            <Checkbox
              id="demo-policy"
              label="Akceptuję politykę prywatności."
            />
          </Card>
        </div>
      </section>

      {/* Complete 24-View Route Checklist */}
      <section className="fpz-container flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
              Mapa wszystkich widoków ({SITE_VIEWS.length})
            </h2>
            <p className="text-body-mobile lg:text-body-desktop text-gray-3">
              Wszystkie widoki z Figmy podpięte do React Routera jako gotowe
              strony szkieletowe.
            </p>
          </div>
          <Button to="/mapa-strony" variant="secondary">
            Pełna mapa strony
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SITE_VIEWS.map((view, index) => (
            <Link
              key={view.id}
              to={view.path}
              className="group flex items-start justify-between gap-3 p-4 rounded-base bg-surface-white border border-blue-75 hover:border-blue-500 hover:shadow-card-hover transition-all"
            >
              <div className="flex items-start gap-3 min-w-0">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-body-mobile font-medium text-blue-800 group-hover:text-blue-500 truncate">
                    {index + 1}. {view.title}
                  </span>
                  <code className="text-caption text-gray-3 truncate">
                    {view.routePattern || view.path}
                  </code>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
