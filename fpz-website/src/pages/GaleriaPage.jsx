import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button, PageBanner } from '../components/ui'
import { POST_GALLERY } from '../data/newsData'

const GALLERY_ALBUMS = [
  {
    id: 'warsztaty-motorola',
    title: 'Warsztaty w ŻyWej pracowni z Motorolą',
    storyTo: '/post',
    defaultExpanded: false,
    photos: [
      ...POST_GALLERY,
      {
        src: '/images/post-hero.png',
        alt: 'Warsztaty w ŻyWej pracowni z Motorolą — wspólna praca',
      },
      {
        src: '/images/card-arteterapia.png',
        alt: 'Warsztaty artystyczne z Podopiecznymi',
      },
      {
        src: '/images/card-wolontariat.png',
        alt: 'Wolontariusze podczas warsztatów',
      },
    ],
  },
  {
    id: 'piknik-historyczny',
    title: 'Piknik historyczny w Forcie!',
    storyTo: '/aktualnosci/piknik-historyczny-w-forcie',
    defaultExpanded: false,
    photos: [
      { src: '/images/news-piknik.png', alt: 'Piknik historyczny w Forcie 1' },
      {
        src: '/images/news-dzien-dziecka.png',
        alt: 'Wydarzenia plenerowe w Forcie 2',
      },
      { src: '/images/fort-slide-1.png', alt: 'Spotkania w Forcie 3' },
      { src: '/images/fort-slide-2.png', alt: 'Warsztaty integracyjne 4' },
      { src: '/images/fort-slide-3.png', alt: 'Zajęcia plenerowe 5' },
      { src: '/images/fort-contact.png', alt: 'Fort 52 ½ S Sidzina 6' },
      { src: '/images/fort-gal-1.png', alt: 'Fort Sidzina — ujęcie 7' },
      { src: '/images/fort-gal-2.png', alt: 'Fort Sidzina — ujęcie 8' },
      { src: '/images/fort-gal-3.png', alt: 'Fort Sidzina — ujęcie 9' },
    ],
  },
  {
    id: 'zycie-fundacji',
    title: 'Z życia Fundacji i Fortu Sztuki (i) Życia',
    storyTo: '/aktualnosci',
    defaultExpanded: true,
    photos: [
      ...POST_GALLERY,
      { src: '/images/news-chopin.png', alt: 'Spektakl grupy teatralnej' },
      { src: '/images/news-awantura.png', alt: 'Awantura w Chioggi' },
      { src: '/images/news-zielone.png', alt: 'Gramy w zielone' },
      { src: '/images/fort-gal-4.png', alt: 'Fort Sztuki (i) Życia' },
      { src: '/images/fort-gal-5.png', alt: 'Zieleń wokół Fortu' },
      { src: '/images/fort-gal-6.png', alt: 'Architektura Fortu Sidzina' },
    ],
  },
]

const COLLAPSED_COUNT = 6

export function GaleriaPage() {
  const [expandedAlbums, setExpandedAlbums] = useState(() =>
    GALLERY_ALBUMS.reduce((acc, album) => {
      acc[album.id] = album.defaultExpanded
      return acc
    }, {}),
  )
  const [lightbox, setLightbox] = useState(null)

  const toggleAlbum = (id) => {
    setExpandedAlbums((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index + 1) % prev.photos.length,
              }
            : null,
        )
      }
      if (e.key === 'ArrowLeft') {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index:
                  (prev.index - 1 + prev.photos.length) % prev.photos.length,
              }
            : null,
        )
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  return (
    <div>
      <PageBanner title="Galeria" image="/images/banner-galeria.png" />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
        {GALLERY_ALBUMS.map((album) => {
          const isExpanded = Boolean(expandedAlbums[album.id])
          const visiblePhotos = isExpanded
            ? album.photos
            : album.photos.slice(0, COLLAPSED_COUNT)

          return (
            <section
              key={album.id}
              className="flex flex-col gap-10 lg:gap-12"
            >
              {/* Album Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
                  {album.title}
                </h2>
                <Link
                  to={album.storyTo}
                  className="text-h6 lg:text-h5 font-normal text-blue-500 underline hover:text-blue-700 transition-colors shrink-0"
                >
                  Przeczytaj relację
                </Link>
              </div>

              {/* 3-Column Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visiblePhotos.map((photo, index) => (
                  <button
                    key={`${album.id}-${photo.src}-${index}`}
                    type="button"
                    onClick={() =>
                      setLightbox({ photos: album.photos, index })
                    }
                    className="group relative h-[220px] sm:h-[244px] rounded-base overflow-hidden bg-blue-25 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              {/* Pokaż więcej / Pokaż mniej */}
              {album.photos.length > COLLAPSED_COUNT && (
                <div className="flex justify-center">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => toggleAlbum(album.id)}
                    className="min-w-[230px]"
                  >
                    {isExpanded ? 'Pokaż mniej' : 'Pokaż więcej'}
                  </Button>
                </div>
              )}
            </section>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      {lightbox && lightbox.photos[lightbox.index] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-blue-900/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Zamknij podgląd"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((prev) => ({
                ...prev,
                index:
                  (prev.index - 1 + prev.photos.length) % prev.photos.length,
              }))
            }}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={lightbox.photos[lightbox.index].src}
            alt={lightbox.photos[lightbox.index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[82vh] rounded-base shadow-hero object-contain"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((prev) => ({
                ...prev,
                index: (prev.index + 1) % prev.photos.length,
              }))
            }}
            aria-label="Następne zdjęcie"
            className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}
