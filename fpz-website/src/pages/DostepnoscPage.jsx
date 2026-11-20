import { AccordionItem } from '../components/ui'

const ACCESSIBILITY_SECTIONS = [
  {
    id: 'deklaracja',
    title: 'Deklaracja dostępności',
    content: (
      <div className="space-y-4">
        <p>
          Fundacja Pełna Życia zobowiązuje się zapewnić dostępność swojej strony
          internetowej zgodnie z przepisami Ustawy z dnia 4 kwietnia 2019 r. o
          dostępności cyfrowej stron internetowych i aplikacji mobilnych
          podmiotów publicznych. Oświadczenie w sprawie dostępności ma
          zastosowanie do strony internetowej www.pelna-zycia.pl.
        </p>
        <div className="space-y-1 font-bold">
          <p>Data publikacji strony internetowej: 2019-02-07.</p>
          <p>Data ostatniej istotnej aktualizacji: 2023-11-05.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'status-zgodnosci',
    title: 'Status pod względem zgodności z ustawą',
    content: (
      <div className="space-y-4">
        <div>
          <p className="mb-2">
            Strona posiada następujące ułatwienia dla osób z
            niepełnosprawnościami:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>podwyższony kontrast,</li>
            <li>możliwość powiększenia wielkości liter na stronie,</li>
            <li>możliwość wyświetlenia strony w skali szarości.</li>
          </ul>
        </div>

        <p>
          Strona internetowa jest{' '}
          <strong className="font-bold">częściowo zgodna</strong> z ustawą z
          dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i
          aplikacji mobilnych podmiotów publicznych z powodu niezgodności lub
          wyłączeń wymienionych poniżej:
        </p>

        <div>
          <p className="font-semibold mb-2">Treści niedostępne</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              część z publikowanych zdjęć nie posiada opisu alternatywnego,
            </li>
            <li>strona nie posiada audiodeskrypcji,</li>
            <li>niektóre dokumenty nie są dostępne cyfrowo.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'data-i-metoda',
    title: 'Data sporządzenia Deklaracji i metoda oceny dostępności cyfrowej',
    content: (
      <div className="space-y-4">
        <p>
          Oświadczenie sporządzono dnia:{' '}
          <strong className="font-bold">2024-01-19</strong>.
        </p>
        <p>
          Deklarację sporządzono na podstawie samooceny przeprowadzonej przez
          podmiot Fundację Pełną Życia na podstawie wytycznych zawartych w
          Ustawie z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron
          internetowych i aplikacji mobilnych podmiotów publicznych.
        </p>
        <p className="font-semibold">Informacje zwrotne i dane kontaktowe</p>
        <p>
          W przypadku problemów z dostępnością strony internetowej prosimy o
          kontakt z biurem Fundacji Pełnej Życia: e-mail:{' '}
          <a
            href="mailto:fundacja@pelna-zycia.pl"
            className="underline text-blue-500 hover:text-blue-600"
          >
            fundacja@pelna-zycia.pl
          </a>
          . Kontaktować można się także dzwoniąc na numer telefonu:{' '}
          <a
            href="tel:+48726301040"
            className="underline text-blue-500 hover:text-blue-600"
          >
            726 30 10 40
          </a>
          . Tą samą drogą można składać wnioski o udostępnienie informacji
          niedostępnej oraz składać żądania zapewnienia dostępności.
        </p>
      </div>
    ),
  },
  {
    id: 'procedura-odwolawcza',
    title: 'Informacje na temat procedury odwoławczej',
    content: (
      <p>
        Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności
        cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich
        elementu. Można także zażądać udostępnienia informacji za pomocą
        alternatywnego sposobu dostępu, na przykład przez odczytanie
        niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez
        audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej
        żądanie, wskazanie, o którą stronę internetową lub aplikację mobilną
        chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę
        otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna
        także określić dogodny dla niej sposób przedstawienia tej informacji.
      </p>
    ),
  },
]

export function DostepnoscPage() {
  return (
    <div className="fpz-container py-12 lg:py-20 flex flex-col gap-10 lg:gap-12">
      <h1 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
        Deklaracja dostępności
      </h1>

      <div className="flex flex-col gap-6 lg:gap-10">
        {ACCESSIBILITY_SECTIONS.map((section) => (
          <AccordionItem
            key={section.id}
            id={section.id}
            title={section.title}
          >
            {section.content}
          </AccordionItem>
        ))}
      </div>

      <div className="flex flex-col gap-2 text-body-mobile lg:text-body-desktop text-blue-800/80 pt-2">
        <p className="font-medium">Aleksandra Włodarczyk</p>
        <p>
          Koordynator dostępności
          <br />
          Fundacji Pełnej Życia
        </p>
      </div>
    </div>
  )
}
