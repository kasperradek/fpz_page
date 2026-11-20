import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Check, Copy } from 'lucide-react'
import { Button, Checkbox, Input, PageBanner } from '../components/ui'
import { FundraiserTabsCard } from '../components/ui/FundraiserTabsCard'
import { BANK_DETAILS, FUNDRAISERS } from '../data/fundraisersData'

const PRESET_AMOUNTS = [50, 100, 150]

const REGULAR_STEPS = [
  {
    number: '1',
    content: (
      <>
        Zdecyduj <strong className="font-bold">jak często i jaką kwotą</strong>{' '}
        chcesz wspierać Podopiecznych Fundacji Pełnej Życia. Nawet niewielkie,
        ale regularne wpłaty mają wielką siłę!
      </>
    ),
  },
  {
    number: '2',
    content: (
      <>
        <strong className="font-bold">Wybierz dzień</strong>, w którym chciałbyś
        dokonywać wpłat – w kalendarzu zaznacz jako &quot;Dzień dzielenia się
        dobrem&quot;. Wiele banków oferuje klientom{' '}
        <strong className="font-bold">stałe zlecenie przelewu</strong>.
      </>
    ),
  },
  {
    number: '3',
    content: (
      <>
        Sam ustalasz, jak często i jakiej wysokości kwoty będą przekazywane na
        konto Fundacji Pełnej Życia. Nie musisz o niczym pamiętać –{' '}
        <strong className="font-bold">bank pamięta za Ciebie.</strong>
      </>
    ),
  },
]

export function DarowiznaPage() {
  const navigate = useNavigate()
  const [selectedFundraiser, setSelectedFundraiser] = useState(
    FUNDRAISERS[0].id,
  )
  const [paymentTab, setPaymentTab] = useState('online')
  const [amountMode, setAmountMode] = useState('custom')
  const [customAmount, setCustomAmount] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    privacy: false,
    rodo: false,
    newsletter: false,
    anonymous: false,
  })
  const [errors, setErrors] = useState({})
  const [copiedAccount, setCopiedAccount] = useState(false)

  const handleSelectPreset = (amount) => {
    setAmountMode(String(amount))
    setCustomAmount(String(amount))
    setErrors((prev) => ({ ...prev, amount: undefined }))
  }

  const handleSelectCustom = () => {
    setAmountMode('custom')
    setErrors((prev) => ({ ...prev, amount: undefined }))
  }

  const handleCustomAmountChange = (e) => {
    const val = e.target.value
    setCustomAmount(val)
    if (PRESET_AMOUNTS.map(String).includes(val.trim())) {
      setAmountMode(val.trim())
    } else {
      setAmountMode('custom')
    }
    setErrors((prev) => ({ ...prev, amount: undefined }))
  }

  const handleFieldChange = (field) => (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BANK_DETAILS.accountNumber)
      setCopiedAccount(true)
      setTimeout(() => setCopiedAccount(false), 2500)
    } catch {
      setCopiedAccount(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    const parsedAmount = Number(
      amountMode === 'custom' ? customAmount : amountMode,
    )

    if (!parsedAmount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      nextErrors.amount = 'Podaj poprawną kwotę darowizny (większą od 0 zł).'
    }
    if (!formData.firstName.trim()) {
      nextErrors.firstName = 'Podaj swoje imię.'
    }
    if (!formData.lastName.trim()) {
      nextErrors.lastName = 'Podaj swoje nazwisko.'
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      nextErrors.email = 'Podaj poprawny adres e-mail.'
    }
    if (!formData.privacy) {
      nextErrors.privacy = 'Akceptacja polityki prywatności jest wymagana.'
    }
    if (!formData.rodo) {
      nextErrors.rodo = 'Zgoda na przetwarzanie danych osobowych jest wymagana.'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    const donorName = `${formData.firstName.trim()} ${formData.lastName.trim().charAt(0)}.`
    navigate('/darowizna/potwierdzenie', {
      state: {
        fundraiserId: selectedFundraiser,
        amount: parsedAmount,
        donorName,
        anonymous: formData.anonymous,
      },
    })
  }

  return (
    <div>
      <PageBanner title="Darowizna" image="/images/banner-darowizna.png" />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
        {/* Intro + Bieżące zbiórki */}
        <section className="flex flex-col gap-12 lg:gap-20">
          <div className="max-w-[969px] text-h6 lg:text-h5 font-normal text-blue-800 space-y-6">
            <p>
              Dzięki darowiznom udaje się nam pomagać i odmieniać życie dzieci
              oraz osób niesamodzielnych i ich rodzin i opiekunów!
            </p>
            <div className="space-y-1">
              <p>
                <strong className="font-bold">
                  90 zł to koszt sesji terapii
                </strong>{' '}
                dla 1 Podopiecznego Fundacji
              </p>
              <p>
                <strong className="font-bold">
                  100 zł to koszt sesji hipoterapii
                </strong>{' '}
                dla 1 Podopiecznego Fundacji
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:gap-12">
            <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
              Bieżące zbiórki
            </h2>
            <FundraiserTabsCard
              activeId={selectedFundraiser}
              onSelectTab={setSelectedFundraiser}
            />
          </div>
        </section>

        {/* Darowizny (Online / Przelew tradycyjny) */}
        <section className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Darowizny
          </h2>

          <div className="w-full">
            {/* Folder-style 2-tab header */}
            <div
              role="tablist"
              aria-label="Forma darowizny"
              className="grid grid-cols-1 sm:grid-cols-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={paymentTab === 'online'}
                onClick={() => setPaymentTab('online')}
                className={[
                  'min-h-[60px] lg:min-h-[70px] px-6 py-3 flex items-center justify-center text-center text-h6 lg:text-h5 font-normal rounded-t-[16px] sm:rounded-tl-[16px] sm:rounded-tr-none transition-colors cursor-pointer',
                  paymentTab === 'online'
                    ? 'bg-blue-500 text-surface-white'
                    : 'bg-surface-white text-blue-800 border border-b-0 border-blue-75 hover:bg-blue-25',
                ].join(' ')}
              >
                Darowizna on-line
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={paymentTab === 'traditional'}
                onClick={() => setPaymentTab('traditional')}
                className={[
                  'min-h-[60px] lg:min-h-[70px] px-6 py-3 flex items-center justify-center text-center text-h6 lg:text-h5 font-normal sm:rounded-tr-[16px] transition-colors cursor-pointer',
                  paymentTab === 'traditional'
                    ? 'bg-blue-500 text-surface-white'
                    : 'bg-surface-white text-blue-800 border border-b-0 border-blue-75 hover:bg-blue-25',
                ].join(' ')}
              >
                Darowizna przelewem tradycyjnym
              </button>
            </div>

            {/* Panel */}
            <div
              role="tabpanel"
              className="bg-surface-white border border-blue-75 rounded-b-[20px] px-6 py-8 lg:px-20 lg:py-10"
            >
              {paymentTab === 'online' ? (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-7"
                >
                  {/* Wybierz zbiórkę */}
                  <fieldset className="flex flex-col gap-3">
                    <legend className="text-h5 font-semibold text-blue-800 mb-3">
                      Wybierz zbiórkę
                      <span className="text-danger-text">*</span>
                    </legend>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                      {FUNDRAISERS.map((fundraiser) => (
                        <label
                          key={fundraiser.id}
                          className="inline-flex items-center gap-2.5 cursor-pointer select-none"
                        >
                          <input
                            type="radio"
                            name="fundraiser"
                            value={fundraiser.id}
                            checked={selectedFundraiser === fundraiser.id}
                            onChange={() => setSelectedFundraiser(fundraiser.id)}
                            className="w-5 h-5 accent-blue-500 cursor-pointer"
                          />
                          <span className="text-body-mobile lg:text-body-desktop text-blue-800">
                            {fundraiser.radioLabel}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Wybierz kwotę */}
                  <div className="flex flex-col gap-3 max-w-[772px]">
                    <span className="text-h5 font-semibold text-blue-800">
                      Wybierz kwotę<span className="text-danger-text">*</span>
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
                      {PRESET_AMOUNTS.map((amount) => {
                        const isActive = amountMode === String(amount)
                        return (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => handleSelectPreset(amount)}
                            className={[
                              'h-[51px] rounded-xs bg-surface-white text-h6 font-medium text-blue-500 transition-colors cursor-pointer',
                              isActive
                                ? 'border-2 border-green-500 bg-green-50/40'
                                : 'border border-blue-75 hover:border-blue-500',
                            ].join(' ')}
                          >
                            {amount} zł
                          </button>
                        )
                      })}
                      <button
                        type="button"
                        onClick={handleSelectCustom}
                        className={[
                          'h-[51px] rounded-xs bg-surface-white text-h6 font-medium text-blue-500 transition-colors cursor-pointer',
                          amountMode === 'custom'
                            ? 'border-2 border-green-500 bg-green-50/40'
                            : 'border border-blue-75 hover:border-blue-500',
                        ].join(' ')}
                      >
                        Inna kwota
                      </button>
                    </div>

                    <div className="mt-2">
                      <Input
                        id="darowizna-kwota"
                        type="number"
                        min="1"
                        step="1"
                        placeholder="Wpisz kwotę"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        error={errors.amount}
                        aria-label="Wpisz kwotę darowizny w złotych"
                      />
                    </div>
                  </div>

                  {/* Personal details */}
                  <div className="flex flex-col gap-6 max-w-[772px]">
                    <Input
                      id="darowizna-imie"
                      label="Imię"
                      required
                      placeholder="Wpisz imię"
                      value={formData.firstName}
                      onChange={handleFieldChange('firstName')}
                      error={errors.firstName}
                    />
                    <Input
                      id="darowizna-nazwisko"
                      label="Nazwisko"
                      required
                      placeholder="Wpisz nazwisko"
                      value={formData.lastName}
                      onChange={handleFieldChange('lastName')}
                      error={errors.lastName}
                    />
                    <Input
                      id="darowizna-email"
                      type="email"
                      label="Adres e-mail"
                      required
                      placeholder="Wpisz Twój adres e-mail"
                      value={formData.email}
                      onChange={handleFieldChange('email')}
                      error={errors.email}
                    />
                  </div>

                  {/* Consents */}
                  <div className="flex flex-col gap-5 max-w-[772px] pt-2">
                    <Checkbox
                      id="darowizna-privacy"
                      checked={formData.privacy}
                      onChange={handleFieldChange('privacy')}
                      error={errors.privacy}
                      label={
                        <>
                          * Akceptuję{' '}
                          <Link
                            to="/polityka-prywatnosci"
                            className="underline text-blue-500 hover:text-blue-600"
                          >
                            politykę prywatności
                          </Link>
                          .
                        </>
                      }
                    />
                    <Checkbox
                      id="darowizna-rodo"
                      checked={formData.rodo}
                      onChange={handleFieldChange('rodo')}
                      error={errors.rodo}
                      label="* Wyrażam zgodę na wykorzystanie moich danych osobowych przez Fundację Pełną Życia z siedzibą w Krakowie, ul. Dunajewskiego 5/29, 31-133 Kraków zgodnie z ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (RODO)."
                    />
                    <Checkbox
                      id="darowizna-newsletter"
                      checked={formData.newsletter}
                      onChange={handleFieldChange('newsletter')}
                      label="Chcę dołączyć do newslettera."
                    />
                    <Checkbox
                      id="darowizna-anonymous"
                      checked={formData.anonymous}
                      onChange={handleFieldChange('anonymous')}
                      label="Ukryj moje dane na liście ostatnich wpłat."
                    />

                    <p className="text-body-small text-blue-800">
                      * Pola obowiązkowe
                    </p>
                  </div>

                  <div>
                    <Button type="submit" variant="primary">
                      Przejdź do płatności
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-h5 font-semibold text-blue-800">
                        Dane do przelewu:
                      </h3>
                      <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                        {BANK_DETAILS.recipient}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-h5 font-semibold text-blue-800">
                        Numer konta:
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                          {BANK_DETAILS.bankName}{' '}
                          <span className="font-medium tracking-wide">
                            {BANK_DETAILS.accountNumber}
                          </span>
                        </p>
                        <button
                          type="button"
                          onClick={handleCopyAccount}
                          aria-label="Kopiuj numer konta"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-body-small text-blue-500 hover:bg-blue-25 transition-colors cursor-pointer"
                        >
                          {copiedAccount ? (
                            <>
                              <Check className="w-5 h-5 text-green-600" />
                              <span className="text-green-600 font-medium">
                                Skopiowano
                              </span>
                            </>
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="text-h5 font-semibold text-blue-800">
                        Tytuł przelewu:
                      </h3>
                      <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                        {BANK_DETAILS.transferTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2 border-t border-blue-50">
                    <h3 className="text-h5 font-semibold text-blue-800">
                      Dziękujemy!
                    </h3>
                    <p className="text-h6 lg:text-h5 font-normal text-blue-800">
                      Serdecznie dziękujemy każdej osobie, która wspiera nas i
                      naszych podopiecznych.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Odlicz darowiznę */}
        <section className="flex flex-col gap-6 lg:gap-10">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Odlicz darowiznę
          </h2>
          <p className="max-w-[934px] text-body-mobile lg:text-body-desktop text-blue-800">
            Darowiznę można odliczyć w zeznaniu rocznym w załączniku PIT/O jako
            darowiznę na rzecz organizacji prowadzących działalność pożytku
            publicznego w ramach limitu 6% dochodu u osób fizycznych, a 10% u
            osób prawnych. To odliczenie jest inną formą pomocy niż 1,5%.
          </p>
        </section>

        {/* Pomagaj stale */}
        <section className="flex flex-col gap-6 lg:gap-10">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Pomagaj stale
          </h2>
          <p className="max-w-[928px] text-body-mobile lg:text-body-desktop text-blue-800">
            Twoje comiesięczne wpłaty pozwalają na kontynuację terapii dla
            naszych Podopiecznych. Zachęcamy Cię do stałego wsparcia dzieci i
            młodzieży z niepełnosprawnościami będących pod naszą opieką! Dzięki
            Twoim regularnym wpłatom możemy Im zapewnić ciągłość terapii
            niezbędnej do osiągnięcia możliwie jak najlepszej samodzielności (na
            miarę ich możliwości).
          </p>
        </section>

        {/* Jak wspierać regularnie? To proste: */}
        <section className="flex flex-col gap-8 lg:gap-10">
          <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
            Jak wspierać regularnie? To proste:
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pt-2">
            {/* Desktop connecting green line */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-px bg-green-400"
            />

            {REGULAR_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-surface-page border-2 border-green-500 flex items-center justify-center text-display-mobile font-semibold text-blue-800">
                  {step.number}
                </div>
                <p className="text-body-mobile lg:text-body-desktop text-blue-800 max-w-[260px]">
                  {step.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dziękujemy! split block */}
        <section className="grid grid-cols-1 lg:grid-cols-[532px_minmax(0,1fr)] gap-8 lg:gap-10 items-center">
          <div className="w-full h-[260px] sm:h-[320px] lg:h-[357px] rounded-base overflow-hidden bg-blue-25">
            <img
              src="/images/darowizna-dziekujemy.png"
              alt="Podopieczni Fundacji Pełna Życia"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 lg:px-8">
            <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
              Dziękujemy!
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-body-mobile lg:text-body-desktop text-blue-800">
                <p>
                  Druk przelewu wpłaty - dostępny{' '}
                  <a
                    href="https://pelna-zycia.pl/wp-content/uploads/2021/03/druk-przelewu-wplaty.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-500 hover:text-blue-600"
                  >
                    TUTAJ
                  </a>
                </p>
                <p>
                  Statut Fundacji - dostępny{' '}
                  <a
                    href="https://pelna-zycia.pl/wp-content/uploads/2023/12/STATUT-FUNDACJI-PELNEJ-ZYCIA-uchwalony-uchwala-Rady-Fundacji-z-dnia-5-maja-2023-r.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-500 hover:text-blue-600"
                  >
                    TUTAJ
                  </a>
                </p>
                <p>
                  Regulamin - dostępny{' '}
                  <a
                    href="https://pelna-zycia.pl/wp-content/uploads/2021/01/Zasady-korzystania-z-Wp%C5%82acam-serwisu-darowizn.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-500 hover:text-blue-600"
                  >
                    TUTAJ
                  </a>
                </p>
              </div>

              <blockquote className="text-body-mobile lg:text-body-desktop text-blue-800 max-w-[577px]">
                &ldquo;Nie liczy się to ile posiadasz, ale ile dajesz innym i
                jak się z nimi dzielisz.{' '}
                <strong className="font-medium">
                  Pomagając innym pomagasz i sobie
                </strong>
                . Starajcie się zostawić ten świat choć trochę lepszym, niż go
                zastaliście.&rdquo;
              </blockquote>

              <p className="text-body-small text-blue-800">
                Robert Baden–Powell
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
