import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { AktualnosciPage } from './pages/AktualnosciPage'
import { BiznesPage } from './pages/BiznesPage'
import { ChcePomocPage } from './pages/ChcePomocPage'
import { DarowiznaPage } from './pages/DarowiznaPage'
import { DarowiznaPotwierdzeniePage } from './pages/DarowiznaPotwierdzeniePage'
import { DostepnoscPage } from './pages/DostepnoscPage'
import { FaqPage } from './pages/FaqPage'
import { FortPage } from './pages/FortPage'
import { GaleriaPage } from './pages/GaleriaPage'
import { HomePage } from './pages/HomePage'
import { InneDokumentyPage } from './pages/InneDokumentyPage'
import { KontaktPage } from './pages/KontaktPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OFundacjiPage } from './pages/OFundacjiPage'
import { ONasPage } from './pages/ONasPage'
import { PodatekPage } from './pages/PodatekPage'
import { PodziekowanieNewsletterPage } from './pages/PodziekowanieNewsletterPage'
import { PolitykaPrywatnosciPage } from './pages/PolitykaPrywatnosciPage'
import { PostPage } from './pages/PostPage'
import { PotwierdzenieWiadomosciPage } from './pages/PotwierdzenieWiadomosciPage'
import { ProjektyPage } from './pages/ProjektyPage'
import { RodoPage } from './pages/RodoPage'
import { SitemapPage } from './pages/SitemapPage'
import { TerapiePage } from './pages/TerapiePage'
import { WolontariatPage } from './pages/WolontariatPage'
import { WsparciePage } from './pages/WsparciePage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/terapie" element={<TerapiePage />} />
          <Route path="/wsparcie" element={<WsparciePage />} />
          <Route path="/fort" element={<FortPage />} />
          <Route path="/chce-pomoc" element={<ChcePomocPage />} />
          <Route path="/1-5-procent" element={<PodatekPage />} />
          <Route path="/darowizna" element={<DarowiznaPage />} />
          <Route
            path="/darowizna/potwierdzenie"
            element={<DarowiznaPotwierdzeniePage />}
          />
          <Route path="/wolontariat" element={<WolontariatPage />} />
          <Route path="/o-nas" element={<ONasPage />} />
          <Route path="/o-fundacji" element={<OFundacjiPage />} />
          <Route path="/projekty" element={<ProjektyPage />} />
          <Route path="/aktualnosci" element={<AktualnosciPage />} />
          <Route path="/aktualnosci/:slug" element={<PostPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/dla-biznesu" element={<BiznesPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route
            path="/kontakt/potwierdzenie"
            element={<PotwierdzenieWiadomosciPage />}
          />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/newsletter/podziekowanie"
            element={<PodziekowanieNewsletterPage />}
          />
          <Route
            path="/polityka-prywatnosci"
            element={<PolitykaPrywatnosciPage />}
          />
          <Route path="/rodo" element={<RodoPage />} />
          <Route path="/dostepnosc" element={<DostepnoscPage />} />
          <Route path="/inne-dokumenty" element={<InneDokumentyPage />} />

          <Route path="/mapa-strony" element={<SitemapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
