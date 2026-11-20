import { Link } from 'react-router-dom'
import { AccordionItem } from '../components/ui'

const RODO_SECTIONS = [
  {
    id: 'cel-regulaminu',
    title: 'Cel regulaminu',
    content: (
      <div className="space-y-4">
        <p>
          Niniejszy Regulamin zawiera informacje na temat danych osobowych,
          które przetwarza – jako administrator – Fundacja Pełna Życia z
          siedzibą w Krakowie, 31–133 Kraków, ul. Dunajewskiego 5/29, wpisana do
          rejestru przedsiębiorców Krajowego Rejestru Sądowego pod nr KRS
          0000043097 (dalej zwana „Fundacją”).
        </p>
        <p>
          W celu prowadzenia swojej statutowej działalności Fundacja zbiera i
          wykorzystuje informacje identyfikujące osoby fizyczne – dane osobowe.
          Zadaniem Regulaminu jest poinformowanie podopiecznych Fundacji i stron
          zainteresowanych o celu, zakresie i kategoriach przetwarzania ich
          danych osobowych, czasie przetwarzania danych oraz o przysługujących
          im prawach, zgodnie z obowiązującym od 25 maja 2018 r. Rozporządzeniem
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych, w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (dalej zwane „RODO”).
        </p>
        <p>
          Regulamin dotyczy wszelkich form wykorzystywania, czyli przetwarzania
          przez Fundację jako administratora danych osobowych na terenie Polski.
          Obecnie dane osobowe pozostające w zasobach Fundacji nie są
          przekazywane poza Europejski Obszar Gospodarczy (UE). Jeżeli doszłoby
          do takiego przekazania, Fundacja niezwłocznie poinformuje o tym fakcie
          za pomocą swojej strony internetowej, w tym w niniejszym Regulaminie.
        </p>
        <p>
          Poza niniejszym Regulaminem Fundacja przyjęła również{' '}
          <Link
            to="/polityka-prywatnosci"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Politykę prywatności serwisów internetowych
          </Link>
          , która znajduje się na stronie internetowej Fundacji.
        </p>
      </div>
    ),
  },
  {
    id: 'zasady-ochrony',
    title: 'Zasady ochrony danych osobowych',
    content: (
      <div className="space-y-3">
        <p>
          Fundacja przetwarza dane osobowe z poszanowaniem następujących zasad:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            zasada legalności – Fundacja przetwarza dane osobowe zgodnie z
            obowiązującymi przepisami prawa,
          </li>
          <li>
            zasada przejrzystości – dane osobowe są przetwarzane w sposób
            rzetelny i przejrzysty dla osoby, której dane dotyczą
            („transparentność”),
          </li>
          <li>
            zasada minimalizacji przetwarzanych danych – Fundacja przetwarza
            dane wyłącznie w takim zakresie, jaki jest niezbędny do realizacji
            poszczególnych celów,
          </li>
          <li>
            zasada prawidłowości – Fundacja dba o prawidłowość przetwarzanych
            danych i w tym celu podejmuje wszelkie rozsądne działania, aby dane
            osobowe, które są nieprawidłowe (biorąc pod uwagę cel ich
            przetwarzania) zostały niezwłocznie usunięte lub sprostowane,
          </li>
          <li>
            zasada czasowości – dane osobowe są przetwarzane wyłącznie przez
            okres niezbędny do realizacji poszczególnych celów przetwarzania,
          </li>
          <li>
            zasada integralności i poufności – przetwarzanie danych osobowych
            odbywa się w sposób zapewniający im odpowiednie bezpieczeństwo, w
            tym ochronę przed ich niedozwolonym lub niezgodnym z prawem
            przetwarzaniem, przypadkową utratą, zniszczeniem lub uszkodzeniem –
            za pomocą odpowiednich środków technicznych lub organizacyjnych,
          </li>
          <li>
            zasada rozliczalności – Fundacja jest odpowiedzialna za
            przestrzeganie przepisów regulujących ochronę danych osobowych i w
            tym zakresie jest zobowiązana wykazać ich przestrzeganie,
          </li>
          <li>
            „privacy by design” – Fundacja uwzględnia konieczność dokonania
            oceny wpływu programów, projektów, wydarzeń na ochronę danych
            osobowych osób, których dane dotyczą i zapewnia zgodność ich
            przetwarzania – już w fazie ich projektowania,
          </li>
          <li>
            „privacy by default” – Fundacja wprowadza ustawienia zapewniające
            ochronę danych osobowych jako pierwotne ustawienia systemu
            informatycznego.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 'kategorie-danych',
    title: 'Kategorie zbieranych danych osobowych',
    content: (
      <div className="space-y-5">
        <p>
          Przetwarzanie danych jest niezbędne do realizacji zadań statutowych
          Fundacji, takich jak: świadczenie usług pomocowych, zawarcie umowy,
          realizacja umowy, zapewnienie komunikacji, obsługa programów
          realizowanych przez Fundację, w celach analitycznych i statystycznych.
          Dane osobowe są również potrzebne do przekazywania podziękowania za
          przekazaną darowiznę i wpłatę 1,5% podatku. W związku z prowadzoną
          przez Fundację działalnością statutową przetwarzane są lub mogą być
          przetwarzane dane osobowe w następujących procesach:
        </p>

        <ul className="list-disc pl-6 space-y-5">
          <li>
            <strong className="font-bold block mb-1">
              Dane osobowe podopiecznych Fundacji i ich przedstawicieli
              ustawowych
            </strong>
            <p className="mb-2">
              Fundacja w ramach realizacji swych celów statutowych na podstawie
              i w zakresie zawartym w przepisach prawa przetwarza dane osobowe:
              podopiecznych objętych pomocą przez Fundację, osób reprezentujących
              podopiecznych objętych pomocą przez Fundację, osób zgłaszających
              się do Fundacji z prośbą o pomoc doraźną lub objęcie ich
              projektem, członków ich rodziny lub innych bliskich osób.
            </p>
            <p>
              Wszystkie informacje dotyczące konkretnych osób przetwarzane są
              przez okres wymagany w przepisach prawa, w sposób dający pełną
              gwarancję bezpieczeństwa przetwarzanych informacji. Fundacja
              identyfikuje przypadki, w których przetwarza lub może przetwarzać
              dane wrażliwe oraz utrzymuje mechanizmy zapewnienia zgodności z
              prawem przetwarzania danych wrażliwych.
            </p>
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane osobowe wolontariuszy, zleceniobiorców oraz osób
              współpracujących z Fundacją
            </strong>
            Dane te Fundacja przetwarza w celu możliwości świadczenia pomocy
            podopiecznym Fundacji, organizowania zajęć rehabilitacyjnych,
            zlecania usług oraz prawidłowej współpracy z podwykonawcami.
            Wszystkie informacje dotyczące konkretnych osób będą przetwarzane
            przez okres odpowiednio: opieki nad podopiecznym, współpracy czy
            świadczenia umowy oraz pięć lat po jego wygaśnięciu, jednak nie
            krócej niż wymagają tego przepisy prawa.
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane osób wspierających Fundację darowiznami
            </strong>
            Darowizny na rzecz Fundacji mogą być przekazywane przelewem na
            rachunek bankowy lub przez system płatności online. W przypadku
            przelewu przetwarzamy dane przekazane przez bank: imię i nazwisko,
            numer rachunku, kwotę darowizny, adres. W przypadku darowizny online
            przetwarzamy imię i nazwisko, kwotę darowizny oraz adres e-mail
            konieczny do technicznej obsługi płatności oraz wysłania
            potwierdzenia i podziękowania za wsparcie. Dane przetwarzane są
            przez okres 5 lat od końca roku kalendarzowego, w którym odnotowana
            została ostatnia interakcja z daną osobą.
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane osób przekazujących 1,5% podatku
            </strong>
            Fundacja otrzymuje od urzędu skarbowego dane osób, które przekazały
            na jej rzecz część podatku i zaznaczyły w formularzu PIT zgodę na
            przekazanie swoich danych. Są to: imię i nazwisko podatniczki lub
            podatnika, adres, wysokość przekazanej kwoty podatku, dane
            współmałżonka/-ki oraz ewentualne dodatkowe informacje zamieszczone
            w rubryce formularza PIT. Dane przetwarzane są na podstawie prawnie
            uzasadnionego interesu w celu podziękowania i zarządzania relacjami
            przez 5 lat od końca roku kalendarzowego.
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane osób korzystających z kanałów komunikacji niepublicznej
            </strong>
            Dane osób, z którymi Fundacja kontaktuje się za pośrednictwem poczty
            elektronicznej, telefonicznie, za pośrednictwem SMS-ów czy
            listownie, przetwarzane są na podstawie uzasadnionego interesu w
            celu obsługi korespondencji, w celach wynikających z treści
            komunikacji oraz w celach archiwizacyjnych.
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane subskrybentek i subskrybentów newslettera
            </strong>
            Fundacja przetwarza adresy e-mail subskrybentek i subskrybentów
            newslettera w celu wysyłania zamówionych informacji. Subskrybent
            może w każdej chwili zrezygnować z subskrypcji listy, klikając w
            link rezygnacji w stopce mailingu. Dane byłych subskrybentów
            przetwarzane są przez 2 lata od końca roku kalendarzowego ostatniej
            interakcji.
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane osób komunikujących się z Fundacją przez portale
              społecznościowe
            </strong>
            Portale społecznościowe są administratorami danych osobowych swoich
            użytkowników i przetwarzają je na podstawie własnych regulaminów.
            Jeżeli interakcja z Fundacją następuje poprzez media
            społecznościowe, administratorem danych osobowych staje się także
            Fundacja w celu odpowiedzi na komentarze i wiadomości oraz
            utrzymywania relacji.
          </li>

          <li>
            <strong className="font-bold block mb-1">
              Dane kandydatów/kandydatek do pracy
            </strong>
            Dane te są przetwarzane w celu wywiązania się z obowiązków prawnych
            określonych w Kodeksie pracy oraz na podstawie wyrażonych zgód przez
            czas prowadzenia rekrutacji, a w przypadku zgody na przyszłe
            rekrutacje – przez okres jednego roku.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'podstawa-prawna',
    title: 'Podstawa prawna przetwarzania danych osobowych',
    content: (
      <ol className="list-decimal pl-6 space-y-5">
        <li>
          <strong className="font-bold block mb-1">
            Podstawa prawna przetwarzania danych
          </strong>
          <p className="mb-2">
            Podanie danych osobowych jest dobrowolne, może być jednak niezbędne
            dla realizacji przez Fundację celu. Podstawy prawne przetwarzania
            danych osobowych przez Fundację to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              Realizacja misji oraz celów statutowych – dane przetwarzane na
              podstawie prawnie uzasadnionego interesu Fundacji w celu
              udzielania pomocy podopiecznym (art. 6 ust. 1 lit. f RODO),
            </li>
            <li>Zgoda złożona w formie pisemnej (art. 6 ust. 1 lit. a RODO),</li>
            <li>
              Realizacja usług na podstawie ustnych lub pisemnych umów, np.
              organizacja rehabilitacji, konsultacji, szkoleń, innych projektów
              (art. 6 ust. 1 lit. b RODO),
            </li>
            <li>
              Przetwarzanie danych jako wynik ciążącego na Fundacji obowiązku
              prawnego, np. na mocy ustawy o rachunkowości, ustawy o pożytku
              publicznym i wolontariacie (art. 6 ust. 1 lit. c RODO).
            </li>
          </ul>
        </li>

        <li>
          <strong className="font-bold block mb-1">
            Zgoda na przetwarzanie danych
          </strong>
          Zgoda musi być wyrażona w sposób dobrowolny, konkretny, świadomy i
          jednoznaczny. Jeżeli dane osobowe są przetwarzane na podstawie zgody,
          to może być ona odwołana w każdej chwili w sposób równie łatwy, jak
          została udzielona. W przypadku, gdy podmiot danych jest osobą
          niepełnoletnią poniżej 16 roku życia, odpowiednią zgodę powinna
          wyrazić lub zaaprobować pełnoletnia osoba będąca prawnym jej
          opiekunem.
        </li>

        <li>
          <strong className="font-bold block mb-1">
            Cel i okres przetwarzania danych
          </strong>
          <p className="mb-2">
            Dane osobowe są przetwarzane zawsze w określonym celu, przez okres
            niezbędny do jego realizacji, tj.:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              w zakresie realizacji obowiązków prawnych ciążących na Fundacji –
              do czasu wypełnienia lub wygaśnięcia tych obowiązków;
            </li>
            <li>
              w zakresie realizacji prawnie uzasadnionych interesów Fundacji –
              do czasu ich realizacji lub wygaśnięcia;
            </li>
            <li>
              w zakresie danych przetwarzanych na podstawie udzielonej zgody –
              do czasu odwołania zgody;
            </li>
            <li>
              w zakresie realizacji zawartej umowy – przez okres jej realizacji
              oraz okres wymagany przepisami prawa lub dla zabezpieczenia
              ewentualnych roszczeń.
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    id: 'ochrona-danych',
    title: 'Ochrona danych osobowych',
    content: (
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Wszyscy pracownicy i współpracownicy Fundacji, uzyskujący dostęp do
          danych osobowych, muszą przestrzegać wewnętrznych zasad i procesów
          związanych z przetwarzaniem danych osobowych w celu ich ochrony i
          zapewnienia poufności. Są oni również zobowiązani do przestrzegania
          wszystkich technicznych i organizacyjnych środków bezpieczeństwa
          wprowadzonych w celu ochrony danych osobowych.
        </li>
        <li>
          Fundacja wdrożyła odpowiednie środki techniczne i organizacyjne mające
          na celu ochronę danych osobowych przed nieuprawnionym, przypadkowym
          lub niezgodnym z prawem zniszczeniem, utratą, zmianą, niewłaściwym
          wykorzystaniem, ujawnieniem lub dostępem oraz przed wszelkimi innymi
          nielegalnymi formami przetwarzania, ze szczególnym uwzględnieniem
          danych wrażliwych.
        </li>
      </ol>
    ),
  },
  {
    id: 'udostepnianie',
    title: 'Udostępnianie danych osobowych innym podmiotom',
    content: (
      <div className="space-y-4">
        <p>
          Dane zbierane na podstawie art. 6 ust. 1 lit. b i c RODO mogą być
          powierzane na podstawie odrębnych umów takim podmiotom, jak biuro
          rachunkowe, agencja ubezpieczeniowa, jeżeli umowa i/lub obowiązujące
          prawo tego wymaga. Mogą być też udostępniane innym podmiotom na
          podstawie obowiązujących przepisów prawa, np. organizacjom
          udzielającym grantów na poszczególne działania, do celów
          monitoringowych, ewaluacyjnych, sprawozdawczych. Procesorem danych
          osobowych może być także poczta / firma kurierska, podmiot prowadzący
          serwery poczty elektronicznej.
        </p>
        <p>
          Dane zbierane na podstawie art. 6 ust. 1 lit. a i f RODO przetwarzane
          są wyłącznie na potrzeby wewnętrzne Fundacji. Procesorem danych może
          być podmiot prowadzący serwery poczty elektronicznej.
        </p>
        <p>
          W żadnym wypadku dane osobowe nie są udostępniane odpłatnie oraz
          nieodpłatnie innym podmiotom.
        </p>
      </div>
    ),
  },
  {
    id: 'prawa',
    title: 'Prawa przysługujące podmiotom danych',
    content: (
      <div className="space-y-4">
        <p>
          Na każdym etapie przetwarzania przez Fundację danych osobowych,
          podmiot danych ma prawo do:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            dostępu do swoich danych, w tym uzyskania informacji o zakresie
            przetwarzanych danych oraz uzyskania kopii tych danych,
          </li>
          <li>
            modyfikacji i poprawienia swoich danych, w tym ograniczenia ich
            zakresu przetwarzania,
          </li>
          <li>
            całkowitego usunięcia swoich danych („prawo do bycia zapomnianym”),
            jeżeli nie będą zachodziły inne przeciwwskazania prawne,
          </li>
          <li>niepodlegania automatycznym decyzjom opartym na profilowaniu,</li>
          <li>
            wniesienia sprzeciwu wobec niewłaściwego przetwarzania danych
            osobowych (w tym wycofania zgody),
          </li>
          <li>
            przeniesienia danych do innego administratora danych, jeśli dane
            przetwarzane są w związku z udzieloną zgodą lub zawartą umową.
          </li>
        </ul>
        <p>
          Podmiot danych może w każdym czasie wystąpić do Fundacji z wnioskiem o
          realizację swoich praw osobiście, pocztą na adres siedziby Fundacji
          lub pocztą elektroniczną na adres:{' '}
          <a
            href="mailto:rodo@pelna-zycia.pl"
            className="underline text-blue-500 hover:text-blue-600"
          >
            rodo@pelna-zycia.pl
          </a>
          . Wnioski będą realizowane bez zbędnej zwłoki, maksymalnie w terminie
          miesiąca od ich otrzymania.
        </p>
      </div>
    ),
  },
  {
    id: 'profilowanie',
    title: 'Profilowanie danych osobowych',
    content: (
      <p>
        Dane osobowe przetwarzane przez Fundację nie podlegają profilowaniu i
        segmentowaniu.
      </p>
    ),
  },
  {
    id: 'strona-internetowa',
    title: 'Przetwarzanie danych osobowych za pomocą strony internetowej Fundacji',
    content: (
      <p>
        Zasady przetwarzania danych w ramach serwisów internetowych Fundacji
        szczegółowo określa{' '}
        <Link
          to="/polityka-prywatnosci"
          className="underline text-blue-500 hover:text-blue-600"
        >
          Polityka prywatności
        </Link>
        .
      </p>
    ),
  },
  {
    id: 'iod',
    title: 'Inspektor Ochrony Danych Osobowych',
    content: (
      <p>
        Funkcję Inspektora Ochrony Danych Osobowych w Fundacji pełni Prezes
        Zarządu Aleksandra Włodarczyk, adres e-mail:{' '}
        <a
          href="mailto:rodo@pelna-zycia.pl"
          className="underline text-blue-500 hover:text-blue-600"
        >
          rodo@pelna-zycia.pl
        </a>
        .
      </p>
    ),
  },
  {
    id: 'skarga',
    title: 'Informacja o prawie wniesienia skargi do organu nadzorczego',
    content: (
      <p>
        Osobom upoważnionym przysługuje prawo do wniesienia skargi do organu
        nadzorczego, którym jest:
        <br />
        Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa
        <br />
        tel. 22 531 03 00,{' '}
        <a
          href="mailto:kancelaria@uodo.gov.pl"
          className="underline text-blue-500 hover:text-blue-600"
        >
          kancelaria@uodo.gov.pl
        </a>
        ,{' '}
        <a
          href="https://uodo.gov.pl"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500 hover:text-blue-600"
        >
          www.uodo.gov.pl
        </a>
      </p>
    ),
  },
  {
    id: 'zmiany',
    title: 'Zmiany w zakresie przetwarzania danych osobowych przez Fundację',
    content: (
      <p>
        Aktualna informacja na temat przetwarzania danych osobowych w Fundacji
        dostępna jest w siedzibie oraz na stronie internetowej{' '}
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
    ),
  },
]

export function RodoPage() {
  return (
    <div className="fpz-container py-12 lg:py-20 flex flex-col gap-10 lg:gap-12">
      <h1 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
        Regulamin Ochrony Danych Osobowych
      </h1>

      <div className="flex flex-col gap-6 lg:gap-10">
        {RODO_SECTIONS.map((section) => (
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
