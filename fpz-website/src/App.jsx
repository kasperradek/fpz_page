import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { SITE_VIEWS } from './data/routes'
import { BiznesPage } from './pages/BiznesPage'
import { ChcePomocPage } from './pages/ChcePomocPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ONasPage } from './pages/ONasPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { PodatekPage } from './pages/PodatekPage'
import { SitemapPage } from './pages/SitemapPage'
import { TerapiePage } from './pages/TerapiePage'
import { WolontariatPage } from './pages/WolontariatPage'
import { WsparciePage } from './pages/WsparciePage'

const IMPLEMENTED_IDS = new Set([
  'home',
  'terapie',
  'wsparcie',
  'chce-pomoc',
  'o-nas',
  'biznes',
  'wolontariat',
  'podatek',
])

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
          <Route path="/chce-pomoc" element={<ChcePomocPage />} />
          <Route path="/o-nas" element={<ONasPage />} />
          <Route path="/dla-biznesu" element={<BiznesPage />} />
          <Route path="/wolontariat" element={<WolontariatPage />} />
          <Route path="/1-5-procent" element={<PodatekPage />} />

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
