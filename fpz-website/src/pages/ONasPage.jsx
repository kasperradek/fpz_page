import { PageBanner, TherapyCard } from '../components/ui'

/**
 * "O nas / Desktop" (#3115:9368), content frame #3115:9375
 */
const ABOUT_CARDS = [
  {
    id: 'aktualnosci',
    title: 'Aktualności',
    description:
      'Chcesz wiedzieć, czym aktualnie żyje nasza fundacja? Od warsztatów i wydarzeń po nowe inicjatywy i sukcesy – tutaj dzielimy się tym, co ważne. Zaglądaj regularnie, by być na bieżąco z naszymi działaniami i planami na przyszłość.',
    image: '/images/onas-aktualnosci.png',
    to: '/aktualnosci',
  },
  {
    id: 'o-fundacji',
    title: 'O Fundacji',
    description:
      'Fundacja Pełna Życia to ludzie, wartości i działania, które mają realny wpływ na życie innych. Dowiedz się, skąd się wzięliśmy, jaka jest nasza misja i co nas każdego dnia motywuje do niesienia pomocy najbardziej potrzebującym.',
    image: '/images/onas-fundacja.png',
    to: '/o-fundacji',
  },
  {
    id: 'projekty',
    title: 'Nasze projekty',
    description:
      'Realizujemy wiele różnorodnych działań wspierających dzieci, dorosłych i osoby starsze. Projekty terapeutyczne, artystyczne, edukacyjne i społeczne – każdy z nich ma na celu budowanie bardziej wspierającego świata.',
    image: '/images/onas-projekty.png',
    to: '/projekty',
  },
  {
    id: 'faq',
    title: 'Często zadawane pytania',
    description:
      'Zachęcamy do zapoznania się z najczęściej zadawanymi nam pytaniami dotyczącymi terapii, wolontariatu oraz darowizn. Jeśli nie znajdziesz odpowiedzi na swoje pytanie, zachęcamy do wypełnienia formularza kontaktowego lub kontaktu osobistego.',
    image: '/images/onas-faq.png',
    to: '/faq',
  },
  {
    id: 'kontakt',
    title: 'Kontakt',
    description:
      'Jesteśmy otwarci na pytania, pomysły i współpracę. Niezależnie od tego, czy chcesz zostać wolontariuszem, partnerem, czy po prostu porozmawiać – tutaj znajdziesz wszystkie potrzebne dane, by się z nami skontaktować.',
    image: '/images/onas-kontakt.png',
    to: '/kontakt',
  },
  {
    id: 'galeria',
    title: 'Galeria',
    description:
      'Codzienność naszej fundacji to nie tylko praca, ale przede wszystkim ludzie i emocje. W naszej galerii znajdziesz zdjęcia z wydarzeń, spotkań i wspólnych działań, które pokazują, jak wygląda pomoc w praktyce – autentycznie i z sercem.',
    image: '/images/onas-galeria.png',
    to: '/galeria',
  },
]

export function ONasPage() {
  return (
    <div className="flex flex-col">
      <PageBanner title="O nas" image="/images/banner-o-nas.png" />

      {/* Main Content Container (#3115:9375): padding 80px 120px, gap 80px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-12 lg:gap-20">
        <p className="max-w-[948px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
          Każdego dnia staramy się zmieniać świat na lepszy – krok po kroku,
          człowiek po człowieku. Wierzymy, że wsparcie, empatia i wspólne
          działanie mają realną moc. Poznaj naszą historię, misję i to, co
          naprawdę napędza nasze działania.
        </p>

        <section className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Poznaj nas!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-5 lg:gap-y-10">
            {ABOUT_CARDS.map((card) => (
              <TherapyCard
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                to={card.to}
                ctaLabel="Zobacz szczegóły"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
