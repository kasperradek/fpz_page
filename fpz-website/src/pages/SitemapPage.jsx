import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, PageBanner } from '../components/ui'
import { SITE_VIEWS } from '../data/routes'

export function SitemapPage() {
  const categories = [...new Set(SITE_VIEWS.map((v) => v.category))]

  return (
    <div className="flex flex-col">
      <PageBanner
        title="Mapa strony"
        subtitle={`Pełna lista ${SITE_VIEWS.length} widoków z projektu Figma „Projekt Strony FPŻ”.`}
      />

      <section className="fpz-container py-12 lg:py-20 flex flex-col gap-10">
        {categories.map((category) => {
          const items = SITE_VIEWS.filter((v) => v.category === category)
          return (
            <div key={category} className="flex flex-col gap-4">
              <h2 className="text-h5 lg:text-heading-mobile font-semibold text-blue-500">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((view) => (
                  <Card key={view.id} className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={view.path}
                        className="text-h6 font-semibold text-blue-800 hover:text-blue-500 transition-colors"
                      >
                        {view.title}
                      </Link>
                      <ArrowRight className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    </div>
                    <p className="text-body-small text-gray-3 flex-1">
                      {view.summary}
                    </p>
                    <div className="pt-2 border-t border-blue-50 flex items-center justify-between text-caption text-gray-3">
                      <code>{view.routePattern || view.path}</code>
                      <span>#{view.desktopNodeId}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
