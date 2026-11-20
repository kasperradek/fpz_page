import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { SITE_VIEWS } from './data/routes'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { SitemapPage } from './pages/SitemapPage'

export function App() {
  const innerViews = SITE_VIEWS.filter((view) => view.id !== 'home')

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          {innerViews.map((view) => (
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
