import { Mail, Phone } from 'lucide-react'

/**
 * Shared 3-column contact strip ("Zdecydowani?") used across:
 * - Wsparcie (#2972:9459)
 * - Dla biznesu (#2948:6965)
 * - Wolontariat (#3020:23291)
 */
export function ContactStrip({
  heading = 'Zdecydowani?',
  subtitle = 'Jeśli możemy jakoś pomóc, nie wahaj się z nami skontaktować!',
  phone = '+48 726 301 040',
  email = 'marketing@pelna-zycia.pl',
  facebookUrl = 'https://www.facebook.com/fundacjapelnazycia/',
}) {
  return (
    <section className="flex flex-col gap-10 lg:gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
          {heading}
        </h2>
        <p className="text-body-mobile lg:text-h5 text-blue-800">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-24 items-start justify-items-center pt-2">
        <div className="flex flex-col items-center text-center gap-2">
          <Phone className="w-10 h-10 text-blue-500" strokeWidth={1.75} />
          <span className="text-h6 lg:text-h5 font-semibold text-blue-500">
            Zadzwoń:
          </span>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="text-h6 lg:text-h5 text-gray-3 hover:text-blue-500 transition-colors"
          >
            {phone}
          </a>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <Mail className="w-10 h-10 text-blue-500" strokeWidth={1.75} />
          <span className="text-h6 lg:text-h5 font-semibold text-blue-500">
            Napisz:
          </span>
          <a
            href={`mailto:${email}`}
            className="text-h6 lg:text-h5 text-gray-3 hover:text-blue-500 transition-colors"
          >
            {email}
          </a>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <svg
            className="w-10 h-10 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <span className="text-h6 lg:text-h5 font-semibold text-blue-500">
            Zaobserwuj:
          </span>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-h6 lg:text-h5 text-gray-3 underline hover:text-blue-500 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
