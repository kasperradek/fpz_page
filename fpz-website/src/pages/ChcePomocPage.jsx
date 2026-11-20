import { PageBanner, TherapyCard } from '../components/ui'

/**
 * "Chcę pomóc / Desktop" (#2948:6984), content frame #2571:12613
 */
const HELP_CARDS = [
  {
    id: 'wolontariat',
    title: 'Wolontariat',
    description:
      'Masz trochę wolnego czasu, który jesteś gotowy/a poświęcić na pomoc innym, zdobyć cenne doświadczenie zawodowe? Dołącz do naszego zespołu wolontariuszy i wspólnie twórzmy lepszą przyszłość dla potrzebujących!',
    image: '/images/card-biz-wolontariat.png',
    to: '/wolontariat',
    ctaLabel: 'Zobacz szczegóły',
  },
  {
    id: 'podatek',
    title: '1,5%',
    description:
      'Przekazując nam swoje 1,5% podatku masz 100% udziału w naszej misji, realizowanej już od 34 lat. To realna pomoc w terapii, rehabilitacji i codziennym wsparciu naszych podopiecznych.',
    image: '/images/card-podatek.png',
    to: '/1-5-procent',
    ctaLabel: 'Zobacz szczegóły',
  },
  {
    id: 'darowizna',
    title: 'Darowizna',
    description:
      'Dzięki darowiznom udaje się nam pomagać i odmieniać życie dzieci oraz osób niesamodzielnych i ich rodzin i opiekunów. Każda wpłata pozwala nam kontynuować nasze działania i nieść nadzieję potrzebującym.',
    image: '/images/card-darowizna.png',
    to: '/darowizna',
    ctaLabel: 'Zobacz szczegóły',
  },
  {
    id: 'kup-ksiazke',
    title: 'Kup książkę',
    description:
      'Zachęcamy do zakupu książki o zaletach i procesie hipoterapii. Dochód z książki pomaga nam w utrzymaniu ośrodka terapeutycznego i codziennej pracy z dziećmi z niepełnosprawnościami. Kupując książkę, wspierasz naszą misję.',
    image: '/images/card-ksiazka.png',
    to: '/kontakt',
    ctaLabel: 'Kup teraz już od 110 zł',
  },
  {
    id: 'sklep',
    title: 'Sklep',
    description:
      'Zapraszamy na aukcje pełne pięknych rzeczy w okazyjnych cenach! Cały dochód z aukcji zostanie przeznaczony na działalność statutową Fundacji Pełna Życia - by budzić uśmiech na twarzach dzieci!',
    image: '/images/card-sklep.png',
    to: '/kontakt',
    ctaLabel: 'Przejdź do sklepu',
  },
]

export function ChcePomocPage() {
  return (
    <div className="flex flex-col">
      <PageBanner title="Chcę Pomóc" image="/images/banner-chce-pomoc.png" />

      {/* Main Content Container (#2571:12613): padding 80px 120px, gap 80px */}
      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-12 lg:gap-20">
        <p className="max-w-[948px] text-body-desktop lg:text-h5 text-blue-800 leading-[1.45]">
          Zostań naszym Przyjacielem i{' '}
          <strong className="font-bold">
            pomagaj w codziennej terapii naszych Podopiecznych
          </strong>
          . Z naszej pomocy codziennie korzystają{' '}
          <strong className="font-bold">
            dzieci, młodzież, dorośli z niepełnosprawnościami oraz ich rodziny
          </strong>
          . Możemy działać dzięki projektom oraz darowiznom od ludzi o wielkich
          sercach - jeśli chcesz wesprzeć nas w działaniu dołóż swoją cegiełkę.
        </p>

        <section className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Formy pomocy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-5 lg:gap-y-10">
            {HELP_CARDS.map((card) => (
              <div key={card.id} id={card.id} className="scroll-mt-32 h-full">
                <TherapyCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  to={card.to}
                  ctaLabel={card.ctaLabel}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
