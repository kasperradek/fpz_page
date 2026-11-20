import { Link } from 'react-router-dom'
import { TagBadge } from './TagBadge'

/**
 * Base surface card matching Figma card tokens:
 * pure white surface, 1px Blue-75 / subtle border, 8px radius, hover shadow-card-hover
 */
export function Card({ children, className = '', hoverable = true }) {
  return (
    <div
      className={[
        'bg-surface-white border border-blue-75 rounded-base overflow-hidden transition-shadow duration-200',
        hoverable ? 'hover:shadow-card-hover' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

/**
 * News Card matching Figma `card-Aktualności-desktop` (#795:4265)
 * - 200px top image, date (body-small Gray-3), green-outlined TagBadges, H5 SEMI title,
 *   Body Desktop excerpt, underlined "Czytaj dalej" link
 */
export function NewsCard({
  image,
  imageAlt = '',
  date,
  tags = [],
  title,
  excerpt,
  to = '/aktualnosci/przykladowy-wpis',
  ctaLabel = 'Czytaj dalej',
}) {
  return (
    <Card className="flex flex-col h-full">
      <div className="h-[200px] w-full bg-blue-50 border-b border-blue-75 overflow-hidden shrink-0">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-25 to-blue-50 text-blue-300 text-body-small">
            Zdjęcie aktualności
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        {date && <time className="text-body-small text-gray-3">{date}</time>}

        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            {tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
        )}

        <h3 className="text-h5 font-semibold text-blue-800 mt-1">{title}</h3>

        {excerpt && (
          <p className="text-body-mobile lg:text-body-desktop text-gray-3 line-clamp-4 flex-1">
            {excerpt}
          </p>
        )}

        <div className="pt-3">
          <Link
            to={to}
            className="inline-block text-h6 font-medium text-blue-800 border-b border-gray-3 pb-0.5 hover:text-blue-500 hover:border-blue-500 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </Card>
  )
}

/**
 * Interactive Offer Card matching Figma `Oferta - card` (#2628:11939)
 * - Default state: image + title bar
 * - Hover / focus state (Variant2): reveals description + "Poznaj szczegóły" in Green-500
 */
export function OfferCard({
  image,
  title,
  description,
  to = '/terapie',
  ctaLabel = 'Poznaj szczegóły',
}) {
  return (
    <Link
      to={to}
      className="group relative block h-[210px] bg-surface-white border border-border-subtle rounded-base overflow-hidden transition-shadow duration-200 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-blue-500"
    >
      {/* Default state */}
      <div className="flex flex-col h-full transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0">
        <div className="flex-1 bg-blue-50 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-green-500/15 flex items-center justify-center text-blue-400 text-body-small">
              {title}
            </div>
          )}
        </div>
        <div className="p-4 bg-surface-white">
          <h3 className="text-h6 font-normal text-blue-800 truncate">{title}</h3>
        </div>
      </div>

      {/* Hover / Variant2 state */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-surface-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
        <p className="text-body-small text-blue-800 line-clamp-4">{description}</p>
        <div className="flex items-center justify-between gap-3 pt-2 border-t border-blue-50">
          <span className="text-h6 font-normal text-blue-800 truncate">
            {title}
          </span>
          <span className="text-h6 font-normal text-green-500 shrink-0">
            {ctaLabel}
          </span>
        </div>
      </div>
    </Link>
  )
}

/**
 * Therapy / Feature Card matching Figma `Terapie A` (#548:1074)
 * - 200px image, H5 SEMI title, body description, underlined "Zobacz szczegóły" CTA
 */
export function TherapyCard({
  image,
  title,
  description,
  to = '/terapie',
  ctaLabel = 'Zobacz szczegóły',
}) {
  return (
    <Card className="flex flex-col h-full border-border-card">
      <div className="h-[200px] w-full bg-blue-50 overflow-hidden shrink-0">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-25 to-blue-100/40 flex items-center justify-center text-blue-400 text-body-small">
            {title}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-h5 font-semibold text-blue-800">{title}</h3>
        <p className="text-body-mobile lg:text-body-desktop text-gray-3 flex-1">
          {description}
        </p>
        <div className="pt-2">
          <Link
            to={to}
            className="inline-block text-h6 font-medium text-blue-800 border-b border-gray-3 pb-0.5 hover:text-blue-500 hover:border-blue-500 transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </Card>
  )
}
