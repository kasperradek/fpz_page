import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { SITE_VIEWS } from './data/routes'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { SitemapPage } from './pages/SitemapPage'
import { TerapiePage } from './pages/TerapiePage'
import { WsparciePage } from './pages/WsparciePage'

const IMPLEMENTED_IDS = new Set(['home', 'terapie', 'wsparcie'])

export function App() {
  const placeholderViews = SITE_VIEWS.filter(
    (view) => !IMPLEMENTED_IDS.has(view.id),
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/terapie" element={<TerapiePage />} />
          <Route path="/wsparcie" element={<WsparciePage />} />

          {placeholderViews.map((view) => (
            <Route
              key={view.id}
              path={view.routePattern || view.path}
              element={<PlaceholderPage view={view} />}
            />
          ))}

          {/* Direct alias for blog post preview */}
          <Route
            path="/post"
            element={
              <PlaceholderPage
                view={SITE_VIEWS.find((v) => v.id === 'post')}
              />
            }
          />

          <Route path="/mapa-strony" element={<SitemapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
