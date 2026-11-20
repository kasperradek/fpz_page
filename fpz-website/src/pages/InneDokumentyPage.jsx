import { AccordionItem } from '../components/ui'

const REPORT_YEARS = [2023, 2022, 2021, 2020]

export function InneDokumentyPage() {
  return (
    <div className="fpz-container py-12 lg:py-20 flex flex-col gap-12 lg:gap-16">
      <h1 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
        Inne dokumenty
      </h1>

      <section className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-heading-mobile lg:text-display-mobile font-semibold text-blue-500">
          Sprawozdania
        </h2>

        <div className="flex flex-col gap-6 lg:gap-10">
          {REPORT_YEARS.map((year) => (
            <AccordionItem
              key={year}
              id={`sprawozdania-${year}`}
              title={`Sprawozdania ${year}`}
            >
              <div className="flex flex-col gap-4">
                <a
                  href="https://sprawozdaniaopp.niw.gov.pl/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500 hover:text-blue-600 w-fit"
                >
                  Sprawozdanie merytoryczne ({year})
                </a>
                <a
                  href="https://sprawozdaniaopp.niw.gov.pl/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500 hover:text-blue-600 w-fit"
                >
                  Sprawozdanie finansowe ({year})
                </a>
              </div>
            </AccordionItem>
          ))}
        </div>
      </section>

      <div className="text-body-mobile lg:text-body-desktop text-blue-800 space-y-4">
        <p>
          Tu możesz sprawdzić, w jaki sposób wydatkujemy przekazane nam
          pieniądze. Jako organizacja pożytku publicznego składamy coroczne
          sprawozdania finansowe i merytoryczne, które znajdują się pod tym
          linkiem:
          <br />
          <a
            href="https://sprawozdaniaopp.niw.gov.pl/"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-500 hover:text-blue-600 break-all"
          >
            https://sprawozdaniaopp.niw.gov.pl/
          </a>
        </p>
        <p className="font-bold">
          Koniecznie wpisz w wyszukiwarkę nasz KRS: 0000043097
        </p>
      </div>
    </div>
  )
}
