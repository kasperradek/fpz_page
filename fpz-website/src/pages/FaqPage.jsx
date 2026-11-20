import { Link } from 'react-router-dom'
import { AccordionItem, PageBanner } from '../components/ui'

const FAQ_ITEMS = [
  {
    id: 'darowizna',
    question: 'Jak odliczyć darowiznę od podatku?',
    answer: (
      <div className="space-y-3">
        <p>
          Darowiznę przekazaną na rzecz Fundacji Pełna Życia można odliczyć w
          zeznaniu rocznym w załączniku PIT/O jako darowiznę na rzecz
          organizacji prowadzących działalność pożytku publicznego — w ramach
          limitu 6% dochodu u osób fizycznych oraz 10% u osób prawnych.
        </p>
        <p>
          Aby skorzystać z odliczenia, wystarczy zachować potwierdzenie
          przelewu na rachunek bankowy Fundacji. Więcej informacji znajdziesz na
          stronie{' '}
          <Link
            to="/darowizna"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Darowizna
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'wolontariat',
    question: 'Jak mogę zapisać się do wolontariatu?',
    answer: (
      <div className="space-y-3">
        <p>
          Do zespołu wolontariuszy Fundacji Pełna Życia można dołączyć w każdej
          chwili — zapraszamy osoby chcące wspierać naszych Podopiecznych
          podczas terapii, wydarzeń kulturalnych w Forcie Sztuki (i) Życia oraz
          akcji społecznych.
        </p>
        <p>
          Wypełnij zgłoszenie lub skontaktuj się z nami pod adresem{' '}
          <a
            href="mailto:fundacja@pelna-zycia.pl"
            className="underline text-blue-500 hover:text-blue-600"
          >
            fundacja@pelna-zycia.pl
          </a>{' '}
          albo telefonicznie:{' '}
          <a
            href="tel:+48698281366"
            className="underline text-blue-500 hover:text-blue-600"
          >
            +48 698 28 13 66
          </a>
          . Szczegóły znajdziesz w zakładce{' '}
          <Link
            to="/wolontariat"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Wolontariat
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'zgloszenie',
    question: 'Jak zgłosić dziecko na zajęcia?',
    defaultOpen: true,
    answer: (
      <div className="space-y-3">
        <p>
          Prowadzimy kompleksową terapię dla dzieci i młodzieży z
          niepełnosprawnościami w wieku od 3 do 28 lat, obejmującą m.in.
          hipoterapię, fizjoterapię, arteterapię, psychoterapię, terapię
          pedagogiczno-logopedyczną, trening umiejętności społecznych oraz
          Integracyjną Grupę Teatralną.
        </p>
        <p>
          Aby zgłosić dziecko na zajęcia i ustalić indywidualny plan terapii,
          skontaktuj się z biurem Fundacji pod numerem{' '}
          <a
            href="tel:+48698281366"
            className="underline text-blue-500 hover:text-blue-600"
          >
            +48 698 28 13 66
          </a>{' '}
          lub napisz na{' '}
          <a
            href="mailto:fundacja@pelna-zycia.pl"
            className="underline text-blue-500 hover:text-blue-600"
          >
            fundacja@pelna-zycia.pl
          </a>
          . Pełen opis zajęć znajdziesz w zakładce{' '}
          <Link
            to="/terapie"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Terapie
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'inicjatywa',
    question: 'Jak zgłosić Fundacji własną inicjatywę?',
    answer: (
      <div className="space-y-3">
        <p>
          Jesteśmy otwarci na wspólne projekty społeczne, kulturalne, edukacyjne
          oraz akcje wolontariatu pracowniczego. Masz pomysł na warsztaty,
          zbiórkę, licytację lub wydarzenie w Forcie Sztuki (i) Życia?
        </p>
        <p>
          Opisz swoją propozycję w{' '}
          <Link
            to="/kontakt"
            className="underline text-blue-500 hover:text-blue-600"
          >
            formularzu kontaktowym
          </Link>{' '}
          lub zapoznaj się z możliwościami współpracy w sekcji{' '}
          <Link
            to="/dla-biznesu"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Dla biznesu
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'opieka',
    question:
      'Czy z projektu opieki wytchnieniowej może skorzystać też rodzic niesamodzielnego dziecka?',
    answer: (
      <div className="space-y-3">
        <p>
          Jeśli potrzebujesz wytchnienia w opiece nad bliską osobą – pomożemy
          Ci. Wspornik to punkt wsparcia opiekunów osób niesamodzielnych.
          Pomagamy mieszkańcom Krakowa, którzy potrzebują wytchnienia w
          codziennych obowiązkach opiekuńczych. Nasz zespół zapewni właściwą
          opiekę bliskiej Ci osobie — dzięki nam bez obaw odpoczniesz,
          załatwisz w ciągu dnia swoje sprawy, wyjedziesz na weekend lub np.
          pójdziesz do szpitala na zabieg.
        </p>
        <p>
          Opiekę świadczymy w domu podopiecznego, dzięki czemu czuje się
          bezpiecznie. Projekt realizowany jest przez Fundację Pełną Życia w
          partnerstwie z Gminą Miejską Kraków ze środków Europejskiego Funduszu
          Społecznego. Szczegóły kwalifikacji sprawdzisz w zakładce{' '}
          <Link
            to="/wsparcie"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Wsparcie
          </Link>
          .
        </p>
      </div>
    ),
  },
]

export function FaqPage() {
  return (
    <div>
      <PageBanner
        title="Często zadawane pytania"
        image="/images/banner-faq.png"
      />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-12 lg:gap-20">
        {/* Intro */}
        <p className="max-w-[954px] text-h6 lg:text-h5 font-normal text-blue-800">
          Masz pytanie? My mamy odpowiedź! Zachęcamy do zapoznania się z
          najczęściej zadawanymi nam pytaniami dotyczącymi terapii, wolontariatu
          oraz darowizn. Jeśli nie znajdziesz odpowiedzi na swoje pytanie,
          zachęcamy do wypełnienia{' '}
          <Link
            to="/kontakt"
            className="font-semibold underline text-blue-800 hover:text-blue-500 transition-colors"
          >
            formularza kontaktowego lub kontaktu osobistego.
          </Link>
        </p>

        {/* Pytania i odpowiedzi */}
        <section className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Pytania i odpowiedzi
          </h2>

          <div className="flex flex-col gap-6 lg:gap-10">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.question}
                defaultOpen={item.defaultOpen}
              >
                {item.answer}
              </AccordionItem>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
