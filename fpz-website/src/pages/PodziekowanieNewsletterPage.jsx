import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui'
import { KontaktPage } from './KontaktPage'

export function PodziekowanieNewsletterPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])

  return (
    <div className="relative">
      {/* Underlying view matching Figma #5029:6444 */}
      <div aria-hidden="true" className="pointer-events-none select-none">
        <KontaktPage />
      </div>

      {/* Dimmed Modal Backdrop + Newsletter Confirmation Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-confirm-title"
        onClick={() => navigate('/')}
        className="fixed inset-0 z-50 bg-blue-900/50 backdrop-blur-[2px] flex items-center justify-center p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[690px] bg-surface-white rounded-[16px] px-6 py-10 sm:px-14 sm:py-14 lg:px-20 flex flex-col items-center text-center gap-10 lg:gap-14 shadow-hero"
        >
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            <h1
              id="newsletter-confirm-title"
              className="text-heading-mobile sm:text-display-mobile font-semibold text-blue-500"
            >
              Dziękujemy za zapis
              <br />
              do newslettera!
            </h1>
            <p className="text-h6 sm:text-h5 font-normal text-blue-500 max-w-[540px]">
              Sprawdź skrzynkę mailową i potwierdź zapis, aby być na bieżąco z
              działaniami Fundacji.
            </p>
          </div>

          <Button variant="secondary" to="/" className="min-w-[230px]">
            Zamknij
          </Button>
        </div>
      </div>
    </div>
  )
}
