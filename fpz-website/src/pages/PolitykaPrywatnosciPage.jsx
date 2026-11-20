import { Link } from 'react-router-dom'
import { AccordionItem } from '../components/ui'

const PRIVACY_SECTIONS = [
  {
    id: 'dane-uzytkownikow',
    title: 'Dane użytkowników wchodzących na strony internetowe',
    content: (
      <ol className="list-decimal pl-6 space-y-5">
        <li>
          <strong className="font-bold block mb-1">
            Dane zbierane bezpośrednio
          </strong>
          Fundacja zbiera, przechowuje i wykorzystuje dane osobowe, które
          przekazane zostały przez użytkowników dobrowolnie wchodzących na
          strony internetowe, takie jak adresy protokołu internetowego osób
          odwiedzających serwis Fundacji, a także tzw. dane zbiorowe, czyli
          informacje o tym, ilu odwiedzających zalogowało się na stronie, jakie
          strony zostały odwiedzone przez nich wcześniej, itp. Dane te zbierane
          są automatycznie.
        </li>
        <li>
          <strong className="font-bold block mb-1">
            Dane zbierane z innych źródeł
          </strong>
          Fundacja może również zbierać dane z mediów społecznościowych, takich
          jak portal Facebook w zakresie danych dotyczących działań użytkowników
          na takich portalach, np. faktu polubienia profilu Fundacji.
          Przekazywanie danych odbywa się automatycznie – w oparciu o
          odpowiednie umowy lub regulaminy takich portali.
        </li>
        <li>
          <strong className="font-bold block mb-1">
            Dane odbiorców newslettera
          </strong>
          Od odbiorców newslettera zbierane są podstawowe dane kontaktowe: imię
          i nazwisko i e-mail oraz fakt ukończenia 16 roku życia. W przypadku
          odbiorców, którzy nie ukończyli 16 roku życia, przetwarzany jest
          również adres e-mail ich rodzica lub innego opiekuna prawnego w celu
          zaaprobowania zgody na przesyłanie newslettera. Podanie danych jest
          dobrowolne, jednak niezbędne do umożliwienia przesyłania użytkownikowi
          newslettera.
        </li>
        <li>
          <strong className="font-bold block mb-1">
            Dane osób dokonujących wpłat darowizn
          </strong>
          Od osób dokonujących wpłat darowizn za pośrednictwem strony
          internetowej zbierane są podstawowe dane niezbędne do przetworzenia
          płatności: imię, nazwisko oraz adres e-mail lub – opcjonalnie – numer
          telefonu, a także dane dotyczące płatności, takie jak kwota płatności
          oraz numer rachunku bankowego, z którego została dokonana płatność.
          Dane te udostępniane są przez podmioty obsługujące płatności. Podanie
          danych jest dobrowolne, jednak niezbędne do dokonania płatności i
          umożliwienia identyfikacji osoby dokonującej wpłaty.
        </li>
        <li>
          <strong className="font-bold block mb-1">
            Dane osób korzystających z formularzy kontaktowych, zgłoszeń do
            wolontariatu oraz ankiet
          </strong>
          Od osób korzystających z formularzy kontaktowych, zgłoszenia do
          wolontariatu oraz ankiety za pośrednictwem strony internetowej
          zbieramy podstawowe dane umożliwiające kontakt z Użytkownikiem: imię,
          nazwisko oraz adres e-mail lub – opcjonalnie – numer telefonu, a także
          wszelkie dane podane w formularzu kontaktowym, zgłoszeniu do
          wolontariatu oraz ankiecie. Podanie danych jest dobrowolne, jednak
          niezbędne do korzystania z formularza kontaktowego i umożliwienia
          Fundacji udzielenia odpowiedzi na zapytania za pośrednictwem tych
          formularzy.
        </li>
        <li>
          <strong className="font-bold block mb-1">Rejestry i zgody</strong>
          Fundacja prowadzi elektroniczny rejestr zgód udzielonych na piśmie lub
          drogą mailową. Fundacja przechowuje wszystkie udzielone zgody oraz
          oświadczenia o ich cofnięciu.
        </li>
      </ol>
    ),
  },
  {
    id: 'cofniecie-zgody',
    title: 'Cofnięcie zgody na przetwarzanie danych osobowych',
    content: (
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Administratorem wyżej wymienionych danych osobowych jest Fundacja
          Pełna Życia z siedzibą w Krakowie przy ul. Dunajewskiego 5/29.
        </li>
        <li>
          Użytkownik może w każdej chwili wycofać zgodę na przetwarzanie jego
          danych osobowych, wysyłając e-mail na odpowiedni adres e-mail (podany
          w miejscu pozyskiwania danych osobowych użytkownika, w razie braku
          takiego wskazania e-mail z wycofaniem zgody należy wysłać na adres
          ogólny Fundacji:{' '}
          <a
            href="mailto:fundacja@pelna-zycia.pl"
            className="underline text-blue-500 hover:text-blue-600"
          >
            fundacja@pelna-zycia.pl
          </a>{' '}
          z zaznaczeniem w tytule: „Wycofanie zgody na przetwarzanie danych
          osobowych”).
        </li>
        <li>
          W razie wycofania zgody na przetwarzanie danych osobowych świadczenie
          niektórych usług z serwisów Fundacji może okazać się niemożliwe.
        </li>
        <li>
          Użytkownik może także zrezygnować z otrzymywania newslettera – poprzez
          kliknięcie w odpowiedni link umieszczony na końcu każdego numeru
          newslettera.
        </li>
      </ol>
    ),
  },
  {
    id: 'cookies',
    title: 'Pliki cookies',
    content: (
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Serwisy Fundacji wykorzystują tzw. pliki cookies. Fundacja
          wykorzystuje te pliki w celu:
          <ul className="list-none pl-4 mt-2 space-y-1">
            <li>
              a) dostosowania zawartości serwisów do preferencji użytkownika
              oraz optymalizacji korzystania z nich;
            </li>
            <li>
              b) tworzenia statystyk, dotyczących sposobu korzystania przez
              użytkowników z serwisów.
            </li>
          </ul>
        </li>
        <li>
          W wielu przypadkach przeglądarka internetowa, z której korzysta
          użytkownik, domyślnie dopuszcza przechowywanie plików cookies w
          urządzeniu końcowym użytkownika.
        </li>
        <li>
          Użytkownicy serwisu mogą dokonać w każdym czasie zmiany ustawień
          dotyczących plików cookies, w szczególności w taki sposób, aby:
          <ul className="list-none pl-4 mt-2 space-y-1">
            <li>
              a) zablokować automatyczną obsługę plików cookies w ustawieniach
              przeglądarki internetowej lub
            </li>
            <li>
              b) informować o ich każdorazowym zamieszczeniu w urządzeniu
              użytkownika serwisu.
            </li>
          </ul>
        </li>
        <li>
          Szczegółowe informacje o możliwości i sposobach obsługi plików cookies
          dostępne są w ustawieniach przeglądarki internetowej.
        </li>
        <li>
          Po zablokowaniu przez użytkownika instalacji plików cookies w
          ustawieniach przeglądarki, niektóre funkcje serwisów Fundacji mogą nie
          działać.
        </li>
      </ol>
    ),
  },
  {
    id: 'inne-postanowienia',
    title: 'Inne postanowienia',
    content: (
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Podczas korzystania z serwisów Fundacji automatycznie zapisywane są
          tzw. logi systemowe – anonimowe informacje takie jak czas wizyty
          użytkownika w serwisie, adres IP użytkownika, adres URL, rodzaj
          przeglądarki, dane o pobieranych plikach itp.
        </li>
        <li>
          Zebrane logi przechowywane są przez czas nieokreślony w celu
          statystycznym / analizy statystycznej.
        </li>
        <li>
          Serwisy Fundacji korzystają z Google Analytics w celu pozyskania
          anonimowych danych statystycznych (liczba odwiedzin, kraj logowania,
          rodzaj przeglądarki, czas wizyty itp.). Szczegóły związane z
          korzystaniem przez serwisy z tej usługi można znaleźć w{' '}
          <a
            href="https://policies.google.com/privacy?hl=pl"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 hover:text-blue-600"
          >
            polityce prywatności Google Analytics
          </a>
          .
        </li>
        <li>
          Serwisy Fundacji korzystają z wtyczki społecznościowej Facebook.com.
          Informacje w zakresie ochrony prywatności związane z korzystaniem z
          wtyczki Facebook.com dostępne są w zasadach prywatności serwisu
          Facebook.
        </li>
        <li>
          W serwisach Fundacji znajdują się odesłania do serwisu YouTube i do
          subskrypcji kanału Fundacji w tym serwisie. Informacje w zakresie
          ochrony prywatności związane z korzystaniem z YouTube dostępne są w{' '}
          <a
            href="https://policies.google.com/privacy?hl=pl"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 hover:text-blue-600"
          >
            zasadach prywatności Google
          </a>
          .
        </li>
        <li>
          Serwisy Fundacji zawierają odnośniki do innych stron internetowych.
          Fundacja nie ponosi odpowiedzialności za zasady zachowania prywatności
          obowiązujące na innych stronach.
        </li>
        <li>
          Niniejsza Polityka prywatności może podlegać zmianom. O wszystkich
          zmianach użytkownicy będą informowani poprzez opublikowanie zmienionej
          polityki prywatności na tej podstronie.
        </li>
      </ol>
    ),
  },
]

export function PolitykaPrywatnosciPage() {
  return (
    <div className="fpz-container py-12 lg:py-20 flex flex-col gap-10 lg:gap-12">
      <h1 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
        Polityka prywatności
      </h1>

      <p className="text-body-mobile lg:text-body-desktop text-blue-800 leading-[1.5]">
        Fundacja Pełna Życia (dalej: Fundacja), prowadząc serwisy www, ma na
        celu przede wszystkim wsparcie rozwoju oraz aktywizację podopiecznych
        Fundacji, szczególnie młodych osób z niepełnosprawnościami, osób
        niesamodzielnych oraz ich rodzin i opiekunów, a także osób zagrożonych
        niepełnosprawnością. Fundacja Pełna Życia szczególną uwagę zwraca na
        ochronę prywatności użytkowników swoich serwisów, zwłaszcza użytkowników
        małoletnich i osób z niepełnosprawnościami. Niniejsza Polityka ma na
        celu wyjaśnienie, jakie dane użytkowników serwisów i w jakim celu
        przetwarza Fundacja. Pozostałe zasady dotyczące przetwarzania danych
        osobowych przez Fundację zawarte zostały w{' '}
        <Link to="/rodo" className="underline text-blue-500 hover:text-blue-600">
          Regulaminie Ochrony Danych Osobowych
        </Link>
        , znajdującym się na stronie{' '}
        <a
          href="https://pelna-zycia.pl"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500 hover:text-blue-600"
        >
          www.pelna-zycia.pl
        </a>
        .
      </p>

      <div className="flex flex-col gap-6 lg:gap-10">
        {PRIVACY_SECTIONS.map((section) => (
          <AccordionItem
            key={section.id}
            id={section.id}
            title={section.title}
          >
            {section.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
