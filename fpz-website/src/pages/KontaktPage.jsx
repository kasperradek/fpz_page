import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Input, PageBanner } from '../components/ui'

export function KontaktPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (field) => (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}

    if (!formData.firstName.trim()) {
      nextErrors.firstName = 'Podaj swoje imię.'
    }
    if (!formData.lastName.trim()) {
      nextErrors.lastName = 'Podaj swoje nazwisko.'
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      nextErrors.email = 'Podaj poprawny adres e-mail.'
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Wpisz treść wiadomości.'
    }
    if (!formData.consent) {
      nextErrors.consent = 'Zgoda na przetwarzanie danych jest wymagana.'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    navigate('/kontakt/potwierdzenie', {
      state: { senderName: formData.firstName.trim() },
    })
  }

  return (
    <div>
      <PageBanner title="Kontakt" image="/images/banner-kontakt.png" />

      <div className="fpz-container py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[488px_301px] justify-between gap-14 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <section className="flex flex-col gap-10 lg:gap-12">
            <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
              Skontaktuj się z nami
            </h2>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <Input
                  id="kontakt-imie"
                  label="Imię"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  error={errors.firstName}
                />
                <Input
                  id="kontakt-nazwisko"
                  label="Nazwisko"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  error={errors.lastName}
                />
                <Input
                  id="kontakt-email"
                  type="email"
                  label="Adres e-mail"
                  value={formData.email}
                  onChange={handleChange('email')}
                  error={errors.email}
                />
                <Input
                  id="kontakt-telefon"
                  type="tel"
                  label="Numer telefonu"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                />

                {/* Message textarea */}
                <div className="flex flex-col gap-2 lg:gap-4 w-full">
                  <label
                    htmlFor="kontakt-wiadomosc"
                    className="text-body-desktop lg:text-h5 font-normal text-blue-800"
                  >
                    Treść wiadomości
                  </label>
                  <textarea
                    id="kontakt-wiadomosc"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange('message')}
                    aria-invalid={Boolean(errors.message)}
                    className={[
                      'w-full min-h-[123px] p-4 bg-surface-white text-blue-800 placeholder:text-gray-3 text-body-mobile lg:text-body-desktop rounded-tag lg:rounded-base resize-y transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30',
                      errors.message
                        ? 'border-2 border-danger-border focus:border-danger-border'
                        : 'border border-blue-75 focus:border-blue-500',
                    ].join(' ')}
                  />
                  {errors.message && (
                    <p
                      role="alert"
                      className="text-body-mobile lg:text-body-desktop text-danger-text"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <Checkbox
                id="kontakt-consent"
                checked={formData.consent}
                onChange={handleChange('consent')}
                error={errors.consent}
                label={
                  <span className="text-body-small text-blue-800 leading-[1.45] block">
                    Administratorem danych osobowych jest Fundacja Pełna Życia z
                    siedzibą w Krakowie, ul. Dunajewskiego 5/29, 31-133 Kraków.
                    Dane przetwarzane są wyłącznie w celu ustosunkowania się i
                    udzielenia odpowiedzi na Pana/Pani korespondencję, jak
                    również w celu archiwizacji. Przysługuje Panu/Pani prawo
                    dostępu do treści swych danych oraz ich poprawiania.
                  </span>
                }
              />

              <div>
                <Button
                  type="submit"
                  variant="secondary"
                  className="min-w-[230px]"
                >
                  Wyślij
                </Button>
              </div>
            </form>
          </section>

          {/* Right Column: Official Foundation Details */}
          <aside className="flex flex-col gap-6 lg:pt-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-h5 font-semibold text-blue-800">
                Godziny otwarcia
              </h3>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                pon. – pt. &nbsp; 9:15-16:00
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-h5 font-semibold text-blue-800">Adres</h3>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                Juliana Dunajewskiego 5/29
                <br />
                31-133 Kraków
                <br />
                (wejście D od podwórka)
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-h5 font-semibold text-blue-800">Telefon</h3>
              <a
                href="tel:+48726301040"
                className="text-body-mobile lg:text-body-desktop text-blue-800 hover:text-blue-500 transition-colors w-fit"
              >
                +48 726 301 040
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-h5 font-semibold text-blue-800">
                Adres e-mail
              </h3>
              <a
                href="mailto:fundacja@pelna-zycia.pl"
                className="text-body-mobile lg:text-body-desktop text-blue-800 hover:text-blue-500 transition-colors w-fit"
              >
                fundacja@pelna-zycia.pl
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-h5 font-semibold text-blue-800">
                Numer konta
              </h3>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                81 1240 4533 1111 0000 5427 6879
              </p>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                Bank PEKAO S.A.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-h5 font-semibold text-blue-800">KRS</h3>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                0000043097
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-h5 font-semibold text-blue-800">NIP</h3>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                677 16 99 283
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
