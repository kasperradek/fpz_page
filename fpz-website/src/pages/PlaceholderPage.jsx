import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Layers, Monitor, Smartphone } from 'lucide-react'
import { Button, Card, PageBanner } from '../components/ui'

/**
 * Clean placeholder page for each Figma view prior to full section-by-section implementation.
 */
export function PlaceholderPage({ view }) {
  const { slug } = useParams()

  return (
    <div className="flex flex-col">
      <PageBanner
        title={view.title}
        subtitle={view.summary}
        badge={view.category}
      />

      <section className="fpz-container py-12 lg:py-20">
        <Card hoverable={false} className="p-6 lg:p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 text-body-small font-medium text-blue-500">
              <Layers className="w-4 h-4" />
              <span>Widok szkieletowy — gotowy do wdrożenia na podstawie Figmy</span>
            </div>
            <h2 className="text-heading-mobile lg:text-h1 font-semibold text-blue-500">
              {view.title}
              {slug ? ` — ${slug}` : ''}
            </h2>
            <p className="text-body-mobile lg:text-body-desktop text-blue-800 max-w-3xl">
              {view.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-base bg-blue-25 border border-blue-50">
              <Monitor className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-body-small font-medium text-blue-500">
                  Figma Desktop Frame
                </span>
                <span className="text-body-mobile text-blue-800">
                  {view.desktopFrame}
                </span>
                <code className="text-caption text-gray-3">
                  node-id: {view.desktopNodeId}
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-base bg-blue-25 border border-blue-50">
              <Smartphone className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-body-small font-medium text-blue-500">
                  Figma Mobile Frame
                </span>
                <span className="text-body-mobile text-blue-800">
                  {view.mobileFrame}
                </span>
                <code className="text-caption text-gray-3">
                  node-id: {view.mobileNodeId}
                </code>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button to="/" variant="secondary">
              <ArrowLeft className="w-4 h-4" />
              Strona główna
            </Button>
            <Button to="/mapa-strony" variant="primary">
              Wszystkie widoki (Mapa strony)
            </Button>
            <Link
              to="/kontakt"
              className="text-body-desktop text-blue-500 underline hover:text-blue-700 ml-auto"
            >
              Przejdź do kontaktu
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}
