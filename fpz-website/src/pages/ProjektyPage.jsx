import { AccordionItem, PageBanner } from '../components/ui'

const ACTIVE_PROJECTS = [
  {
    id: 'centrum-informacji',
    title: 'Centrum Informacji i Wsparcia dla Opiekunów Osób Niesamodzielnych',
    image: '/images/proj-centrum-info.png',
    imageAlt:
      'Centrum Informacji i Wsparcia dla Opiekunów Osób Niesamodzielnych',
    defaultOpen: true,
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li>Nie masz siły opiekować się osobą niesamodzielną?</li>
          <li>
            Jesteś wyczerpany, planujesz pobyt w szpitalu lub wyjazd na wakacje?
          </li>
          <li>
            Nie wiesz jak opiekować się osobą po udarze, co robić, jak zająć się
            odleżynami, jak im zapobiegać, masz inne problemy opiekuńcze?
          </li>
          <li>
            Nie wiesz, gdzie możesz otrzymać orzeczenie o niepełnosprawności,
            czy należy Ci się dodatek do rachunku za prąd, gdzie szukać pomocy w
            nietypowej sprawie?
          </li>
        </ul>
        <p className="font-medium">Ten Projekt jest dla Ciebie.</p>
        <p>
          Projekt realizowany przez Fundację Pełną Życia w partnerstwie z Gminą
          Miejską Kraków, ze środków Europejskiego Funduszu Społecznego w ramach
          Regionalnego Programu Operacyjnego Województwa Małopolskiego.
        </p>
      </div>
    ),
  },
  {
    id: 'droga-do-samodzielnosci',
    title: 'Droga do samodzielności',
    image: '/images/proj-droga.png',
    imageAlt: 'Projekt Droga do samodzielności',
    content: (
      <div className="space-y-4">
        <p>
          Od lat realizujemy kompleksową terapię dzieci i młodzieży z
          niepełnosprawnościami w wieku od 3 do 28 lat. Indywidualnie dobrane
          formy terapii wpływają na umiejętności motoryczne, stan psychoruchowy
          oraz zachowania społeczne podopiecznych.
        </p>
        <div>
          <p className="font-medium mb-2">Zajęcia realizowane w projekcie:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hipoterapia</li>
            <li>Trening społeczny</li>
            <li>Psychoterapia</li>
            <li>Terapia pedagogiczno-logopedyczna</li>
            <li>Fizjoterapia</li>
            <li>Terapia przez sztukę</li>
            <li>Arteterapia</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'wspornik',
    title: 'WSPORNIK - Punkt Wsparcia Opiekunów',
    image: '/images/proj-wspornik.png',
    imageAlt: 'WSPORNIK - Punkt Wsparcia Opiekunów',
    content: (
      <div className="space-y-4">
        <p>
          Jeśli potrzebujesz wytchnienia w opiece nad bliską osobą – pomożemy
          Ci. Wspornik to punkt wsparcia opiekunów osób niesamodzielnych.
        </p>
        <p>
          Pomagamy mieszkańcom Krakowa, którzy potrzebują wytchnienia w
          codziennych obowiązkach opiekuńczych. Nasz zespół zapewni właściwą
          opiekę bliskiej Ci osobie. Dzięki nam bez obaw odpoczniesz, załatwisz
          w ciągu dnia swoje sprawy, wyjedziesz na weekend lub np. pójdziesz do
          szpitala na zabieg.
        </p>
        <p>
          Opiekę świadczymy w domu podopiecznego, dzięki czemu czuje się
          bezpiecznie. Nasi podopieczni zawsze mogą liczyć na profesjonalną i
          pełną empatii pomoc.
        </p>
        <p>
          Projekt realizowany przez Fundację Pełną Życia w partnerstwie z Gminą
          Miejską Kraków ze środków Europejskiego Funduszu Społecznego w ramach
          Regionalnego Programu Operacyjnego Województwa Małopolskiego.
        </p>
      </div>
    ),
  },
  {
    id: 'fort-sztuki-i-zycia',
    title: 'Fort Sztuki (i) Życia',
    image: '/images/proj-fort-sztuki.png',
    imageAlt: 'Fort Sztuki (i) Życia — Fort 52 ½ S Sidzina',
    content: (
      <p>
        Dawny austro-węgierski obiekt obronny Fort 52 ½ S Sidzina to dziś Fort
        Sztuki (i) Życia. Centrum spotkań i wspólnej aktywności ponad podziałami
        na osoby sprawne i z niepełnosprawnościami; przestrzeń dla nowoczesnych
        terapii i społecznej integracji. Muzeum, miejsce edukacji oraz działań
        artystycznych, przyrodniczych i kulturalnych. Pełen życia przystanek na
        szlaku Twierdzy Kraków.
      </p>
    ),
  },
  {
    id: 'inwentaryzacja-dendrologiczna',
    title:
      'Inwentaryzacja dendrologiczna zabytkowej zieleni fortowej wokół Fortu pancernego głównego 52 ½ S Sidzina',
    image: '/images/proj-inwentaryzacja.png',
    imageAlt:
      'Inwentaryzacja dendrologiczna zabytkowej zieleni wokół Fortu Sidzina',
    content: (
      <div className="space-y-4">
        <p>
          Zadanie „Inwentaryzacja dendrologiczna zabytkowej zieleni fortowej
          wokół Fortu pancernego głównego 52 ½ S Sidzina, należącego do dawnej
          Twierdzy Kraków”, jest dofinansowane ze środków Ministra Kultury i
          Dziedzictwa Narodowego w ramach projektu Narodowego Instytutu
          Dziedzictwa – Wspólnie dla dziedzictwa. W ramach projektu
          inwentaryzację dendrologiczną pod okiem specjalisty przeprowadzały już
          trzy grupy wolontariuszy, w tym jedna w ramach wolontariatu
          pracowniczego firmy Zurich Insurance Kraków. Fotorelację z tych
          spotkań można znaleźć tutaj:
        </p>
        <div className="flex flex-col gap-1.5">
          <a
            href="https://pelna-zycia.pl/akcja-inwentaryzacja-dendrologiczna/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Fotorelacja z inwentaryzacji - dwie pierwsze grupy wolontariuszy
          </a>
          <a
            href="https://pelna-zycia.pl/inwentaryzacja-dendrologiczna-zurich-w-forcie-sidzina/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Fotorelacja z inwentaryzacji - wolontariat pracowniczy Zurich
            Insurance Kraków
          </a>
        </div>
        <p>
          Serdecznie dziękujemy wszystkim osobom zaangażowanym w realizację
          projektu.
        </p>
      </div>
    ),
  },
]

const ARCHIVED_PROJECTS = [
  {
    id: 'moda-bez-ograniczen',
    title: 'Moda bez ograniczeń',
    image: '/images/proj-moda.png',
    imageAlt: 'Projekt Moda bez ograniczeń',
    content: (
      <p>
        „Moda Bez Ograniczeń” to długofalowy program edukacyjny i warsztatowy
        skierowany do osób z niepełnosprawnością, dzięki któremu mogą one
        kreować swój wizerunek, przełamywać negatywne stereotypy i dokonywać
        głębokich zmian wewnętrznych, które są fundamentem dalszego rozwoju.
        Moda nie ma ograniczeń – przekonujemy o tym m.in. z Anją Rubik, Zosią
        Ślotałą, Jillian Mercado (jedną z najbardziej znanych niepełnosprawnych
        modelek, stylistek i blogerek modowych z USA), Olivierem Janiakiem i
        Jackiem Rozenkiem, którzy aktywnie wspierają nasz projekt. Kolejne
        edycje od 2013 r. zmieniły się w wielomiesięczny projekt coachingowy,
        podczas którego odkryliśmy potrzeby wielu osób. Zauważyliśmy, że dla
        wielu wygląd – pozornie nieistotny – jest czymś ważnym, czymś co może
        poprawić samoocenę i poczucie własnej wartości, pewność siebie, a nawet
        nastrój w danej chwili. Odkryliśmy, że to właśnie warsztaty – bardziej
        niż wielka finałowa Gala – pomagają uczestnikom projektu.
      </p>
    ),
  },
  {
    id: 'przybij-5',
    title: 'Przybij 5-tkę koledze bez dłoni',
    image: '/images/proj-przybij5.png',
    imageAlt: 'Poradnik Przybij 5-tkę koledze bez dłoni',
    content: (
      <ul className="list-disc pl-6 space-y-3">
        <li>
          Relacje społeczne – chociaż mamy z nimi do czynienia na co dzień, bo
          przecież ciągle się z kimś spotykamy, rozmawiamy z ludźmi, żyjemy ze
          sobą – to jednak nie zawsze wiemy jak się powinniśmy zachować. Problem
          pojawia się wtedy, gdy osoby z którymi chcemy nawiązać kontakt są inne
          – są np. niepełnosprawne. Zadajemy sobie wtedy pytania: „Co zrobić?”
          „Jak się odezwać?” „Czy mam pomóc?” „Wolno mi patrzeć?” Kolejny
          problem pojawia się gdy sytuację niepełnosprawności próbujemy
          wytłumaczyć dzieciom.
        </li>
        <li>
          Właśnie dlatego na podstawie prawdziwych historii i doświadczeń
          naszych specjalistów powstał kolorowy poradnik dla rodzin, w którym w
          łatwy i przystępny sposób pokazujemy, że możemy przybić 5 koledze bez
          dłoni!
        </li>
        <li>
          Poradnik powstał w ramach kampanii „Równi w różnorodności” prowadzonej
          wraz z DrOmnibusem.
        </li>
        <li>
          <a
            href="https://pelna-zycia.pl/wp-content/uploads/2020/09/Poradnik_Przybij-5tk.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 hover:text-blue-600"
          >
            Zapraszamy do oglądania i pobrania wersji PDF
          </a>
        </li>
      </ul>
    ),
  },
]

function ProjectAccordionContent({ image, imageAlt, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[436px_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
      <div className="w-full h-[220px] sm:h-[280px] lg:h-[306px] rounded-base overflow-hidden bg-surface-white">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-body-mobile lg:text-body-desktop text-blue-800">
        {children}
      </div>
    </div>
  )
}

export function ProjektyPage() {
  return (
    <div>
      <PageBanner title="Nasze projekty" image="/images/banner-projekty.png" />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
        {/* Intro + Aktualnie trwające projekty */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <p className="max-w-[961px] text-h6 lg:text-h5 font-normal text-blue-800">
            Jako Fundacja Pełna Życia od lat realizujemy innowacyjne projekty,
            które wspierają osoby z niepełnosprawnościami oraz ich opiekunów.
            Nasze inicjatywy obejmują{' '}
            <strong className="font-bold">różnorodne formy terapii</strong>,{' '}
            <strong className="font-bold">wsparcia opiekunów</strong>, a także{' '}
            <strong className="font-bold">
              działania edukacyjne i artystyczne
            </strong>
            , które pomagają w codziennym życiu i integracji społecznej.
          </p>

          <div className="flex flex-col gap-8 lg:gap-12">
            <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
              Aktualnie trwające projekty
            </h2>

            <div className="flex flex-col gap-6 lg:gap-10">
              {ACTIVE_PROJECTS.map((project) => (
                <AccordionItem
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  defaultOpen={project.defaultOpen}
                >
                  <ProjectAccordionContent
                    image={project.image}
                    imageAlt={project.imageAlt}
                  >
                    {project.content}
                  </ProjectAccordionContent>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        {/* Projekty archiwalne */}
        <section className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Projekty archiwalne
          </h2>

          <div className="flex flex-col gap-6 lg:gap-10">
            {ARCHIVED_PROJECTS.map((project) => (
              <AccordionItem
                key={project.id}
                id={project.id}
                title={project.title}
              >
                <ProjectAccordionContent
                  image={project.image}
                  imageAlt={project.imageAlt}
                >
                  {project.content}
                </ProjectAccordionContent>
              </AccordionItem>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
