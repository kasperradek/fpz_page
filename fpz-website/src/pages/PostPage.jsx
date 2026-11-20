import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button, NewsCard, TagBadge } from '../components/ui'
import { FEATURED_POST, NEWS_POSTS, POST_GALLERY } from '../data/newsData'

const EXTRA_GALLERY = [
  {
    src: '/images/news-piknik.png',
    alt: 'Piknik historyczny w Forcie Sztuki (i) Życia',
  },
  {
    src: '/images/news-dzien-dziecka.png',
    alt: 'Integracyjny Dzień Dziecka w Forcie',
  },
  {
    src: '/images/news-chopin.png',
    alt: 'Spektakl Młodszej Integracyjnej Grupy Teatralnej',
  },
]

function RichTextSegment({ segment }) {
  return (
    <>
      {segment.before}
      {segment.link && (
        <a
          href={segment.link.href}
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-500 hover:text-blue-600 transition-colors"
        >
          {segment.link.label}
        </a>
      )}
      {segment.after}
    </>
  )
}

export function PostPage() {
  const { slug } = useParams()
  const [showMorePhotos, setShowMorePhotos] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const matchedPost = slug
    ? NEWS_POSTS.find((item) => item.slug === slug)
    : null

  const article = matchedPost
    ? {
        date: matchedPost.longDate || matchedPost.date,
        title: matchedPost.title,
        subtitle: matchedPost.excerpt,
        tags: matchedPost.tags,
        image: matchedPost.image,
        sections: matchedPost.sections || FEATURED_POST.sections,
      }
    : FEATURED_POST

  const visibleGallery = showMorePhotos
    ? [...POST_GALLERY, ...EXTRA_GALLERY]
    : POST_GALLERY

  const relatedPosts = NEWS_POSTS.filter((item) => item.slug !== slug).slice(
    0,
    3,
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleGallery.length,
        )
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleGallery.length) % visibleGallery.length,
        )
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, visibleGallery.length])

  return (
    <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
      {/* Main Article Column */}
      <article className="max-w-[857px] flex flex-col gap-10">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <time className="text-body-desktop lg:text-h6 font-normal text-blue-800">
              {article.date}
            </time>
            <h1 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="max-w-[733px] text-[18px] lg:text-[22px] leading-[1.4] font-normal text-blue-800">
                {article.subtitle}
              </p>
            )}
          </div>

          {article.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 lg:gap-4">
              {article.tags.map((tag) => (
                <TagBadge key={tag} className="px-4 py-2.5 text-body-mobile">
                  {tag}
                </TagBadge>
              ))}
            </div>
          )}
        </header>

        {/* Featured Hero Image */}
        <div className="w-full max-w-[854px] h-[260px] sm:h-[380px] lg:h-[480px] rounded-base overflow-hidden bg-blue-25">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Structured Article Body */}
        <div className="flex flex-col gap-10 text-body-mobile lg:text-body-desktop text-blue-800">
          {article.sections.map((section, idx) => (
            <section key={idx} className="flex flex-col gap-4">
              {section.heading && (
                <h2 className="text-h5 font-semibold text-blue-800">
                  {section.heading}
                </h2>
              )}

              {section.intro && <p>{section.intro}</p>}

              {section.bullets && (
                <ul className="list-disc pl-6 space-y-1.5">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}

              {section.richBullets && (
                <ul className="list-disc pl-6 space-y-3">
                  {section.richBullets.map((item, bIdx) => (
                    <li key={bIdx}>
                      <RichTextSegment segment={item} />
                    </li>
                  ))}
                </ul>
              )}

              {section.paragraphs && (
                <div className="flex flex-col gap-3">
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      <RichTextSegment segment={paragraph} />
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* Zobacz zdjęcia */}
      <section className="flex flex-col gap-10 lg:gap-12">
        <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
          Zobacz zdjęcia
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleGallery.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative h-[220px] sm:h-[244px] rounded-base overflow-hidden bg-blue-25 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setShowMorePhotos((prev) => !prev)}
            className="min-w-[230px]"
          >
            {showMorePhotos ? 'Pokaż mniej' : 'Pokaż więcej'}
          </Button>
        </div>
      </section>

      {/* Inne wpisy */}
      <section className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-h2 lg:text-h1 font-semibold text-blue-500">
          Inne wpisy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedPosts.map((post) => (
            <NewsCard
              key={post.slug}
              image={post.image}
              date={post.date}
              tags={post.tags}
              title={post.title}
              excerpt={post.excerpt}
              to={`/aktualnosci/${post.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      {lightboxIndex !== null && visibleGallery[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-blue-900/85 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Zamknij podgląd"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex(
                (lightboxIndex - 1 + visibleGallery.length) %
                  visibleGallery.length,
              )
            }}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-surface-white/15 text-surface-white hover:bg-surface-white/25 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={visibleGallery[lightboxIndex].src}
            alt={visibleGallery[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[82vh] rounded-base shadow-hero object-contain"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % visibleGallery.length)
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
