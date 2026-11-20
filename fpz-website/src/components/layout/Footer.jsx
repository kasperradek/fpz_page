import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'

const OFFER_LINKS = [
  { label: 'Terapie', to: '/terapie' },
  { label: 'Wsparcie', to: '/wsparcie' },
  { label: 'Chcę pomóc', to: '/chce-pomoc' },
  { label: 'Dla biznesu', to: '/dla-biznesu' },
  { label: 'O nas', to: '/o-nas' },
  { label: 'Mapa strony', to: '/mapa-strony' },
]

const LEGAL_LINKS = [
  { label: 'Polityka prywatności', to: '/polityka-prywatnosci' },
  { label: 'Regulamin RODO', to: '/rodo' },
  { label: 'Dostępność', to: '/dostepnosc' },
  { label: 'Inne dokumenty', to: '/inne-dokumenty' },
  { label: 'Często zadawane pytania', to: '/faq' },
]

/**
 * Shared Footer matching Figma "Stupka" (#2916:18728) and "Stupka Mobile" (#2917:19119):
 * - Floating white Newsletter card overlapping the top of the Blue-500 (#0B1978) footer
 * - 5-column desktop / stacked mobile layout with official logo, links, contact info, KRS/bank details & socials
 */
export function Footer() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@')) {
      setEmailError('Wpisz poprawny adres e-mail')
      return
    }
    setEmailError('')
    setEmail('')
    navigate('/newsletter/podziekowanie')
  }

  return (
    <footer className="relative mt-24 lg:mt-32">
      {/* Overlapping Newsletter Card */}
      <div className="relative z-10 fpz-container -mb-24 lg:-mb-[92px]">
        <div className="bg-surface-white border border-blue-50 rounded-base p-6 lg:p-10 shadow-card-hover">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            <div className="flex flex-col gap-2 max-w-md">
              <h2 className="text-h6 lg:text-h5 font-semibold text-blue-500">
                Dołącz do Pełni Życia
              </h2>
              <p className="text-body-mobile lg:text-body-desktop text-blue-800">
                Zapisz się do naszego newslettera i bądź częścią naszej
                społeczności!
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              noValidate
              className="flex flex-col gap-2.5 w-full lg:w-[624px]"
            >
              <div className="flex flex-col sm:flex-row w-full">
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Twój adres email
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError('')
                  }}
                  placeholder="Twój adres email"
                  className={[
                    'flex-1 px-4 py-3 lg:py-4 bg-surface-white text-blue-800 placeholder:text-gray-3 text-body-mobile lg:text-body-desktop rounded-dropdown sm:rounded-l-base sm:rounded-r-none border focus:outline-none focus:ring-2 focus:ring-blue-500/30',
                    emailError
                      ? 'border-2 border-danger-border'
                      : 'border-blue-75 sm:border-r-0',
                  ].join(' ')}
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-3 sm:mt-0 sm:rounded-l-none shrink-0"
                >
                  Zapisz się
                </Button>
              </div>
              {emailError && (
                <p role="alert" className="text-body-small text-danger-text">
                  {emailError}
                </p>
              )}
              <p className="text-body-small text-gray-3">
                Zapisując się wyrażasz zgodę na naszą{' '}
                <Link
                  to="/polityka-prywatnosci"
                  className="underline hover:text-blue-500 transition-colors"
                >
                  Politykę prywatności.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Blue-500 Footer Body */}
      <div className="bg-blue-500 text-surface-page pt-36 pb-12 lg:pt-40 lg:pb-20">
        <div className="fpz-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[190px_auto_auto_auto_220px] gap-10 lg:gap-12 xl:gap-16">
            {/* Column 1: Brand & Mission */}
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-6 w-fit"
              >
                <img
                  src="/images/logo-fpz-white.png"
                  alt="Fundacja Pełna Życia"
                  className="w-[89px] h-[57px] lg:w-[97px] lg:h-[61px] object-contain"
                />
                <span className="text-body-mobile lg:text-body-desktop font-medium text-surface-page leading-[1.4]">
                  Fundacja
                  <br />
                  Pełna Życia
                </span>
              </Link>
              <p className="text-caption text-surface-page/90 leading-[1.5]">
                Dajemy nadzieję na lepsze jutro osobom z niepełnosprawnościami i
                osobom niesamodzielnym.
              </p>
            </div>

            {/* Column 2: Oferta */}
            <nav aria-label="Oferta w stopce" className="flex flex-col gap-5">
              {OFFER_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-body-small text-surface-page hover:text-green-400 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Column 3: Dokumenty & Inne */}
            <nav aria-label="Dokumenty w stopce" className="flex flex-col gap-5">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-body-small text-surface-page hover:text-green-400 transition-colors w-fit max-w-[160px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Column 4: Kontakt */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <p className="text-body-small font-normal text-surface-page">
                  Godziny otwarcia
                </p>
                <p className="text-caption text-surface-page/90">
                  pon - pt &nbsp; 9:15 - 16:00
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-body-small font-normal text-surface-page">
                  Adres
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Juliana+Dunajewskiego+5/29+31-133+Krakow"
                  target="_blank"
                  rel="noreferrer"
                  className="text-caption text-surface-page/90 underline hover:text-green-400 transition-colors"
                >
                  Juliana Dunajewskiego 5/29
                  <br />
                  31-133 Kraków
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <Link
                  to="/kontakt"
                  className="text-body-small font-normal text-surface-page hover:text-green-400 transition-colors w-fit"
                >
                  Kontakt
                </Link>
                <div className="text-caption text-surface-page/90 flex flex-col gap-0.5">
                  <a
                    href="mailto:fundacja@pelna-zycia.pl"
                    className="hover:text-green-400 transition-colors"
                  >
                    fundacja@pelna-zycia.pl
                  </a>
                  <a
                    href="tel:+48698281366"
                    className="hover:text-green-400 transition-colors"
                  >
                    +48 698 28 13 66
                  </a>
                  <a
                    href="tel:+48127263010"
                    className="hover:text-green-400 transition-colors"
                  >
                    12 726 30 10 40
                  </a>
                </div>
              </div>
            </div>

            {/* Column 5: Darowizna, KRS & Social Media */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Link
                    to="/1-5-procent"
                    className="text-body-small text-surface-page hover:text-green-400 transition-colors"
                  >
                    Przekaż Fundacji swoje 1,5 procent
                  </Link>
                  <p className="text-caption text-surface-page/90">
                    KRS: 0000043097
                    <br />
                    NIP: 677 16 99 283
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-body-small text-surface-page">Numer konta</p>
                  <p className="text-caption text-surface-page/90">
                    81 1240 4533 1111 0000 5427 6879
                    <br />
                    Bank PEKAO S.A.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.facebook.com/fundacjapelnazycia/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="text-surface-page hover:text-green-400 transition-colors"
                  >
                    <svg className="w-5 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-surface-page hover:text-green-400 transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-surface-page hover:text-green-400 transition-colors"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="text-surface-page hover:text-green-400 transition-colors"
                  >
                    <svg className="w-8 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </a>
                </div>

                <p className="text-caption text-surface-page/80">
                  Projekt Strony - UXberries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
