/**
 * Inner-page Hero Banner matching Figma banner template (EL-abd3a5bf / EL-97743029)
 * - 1440px full-bleed width, 290px desktop height (220px mobile)
 * - Dark photo overlay rgba(60, 60, 60, 0.4) over image or brand Blue-500/Blue-800 gradient
 * - Display Desktop Semibold (60px) / Display Mobile Semibold (36px) in White (#FCFCFC)
 */
export function PageBanner({ title, subtitle, image, badge }) {
  return (
    <section className="relative w-full h-[220px] lg:h-[290px] overflow-hidden bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[rgba(60,60,60,0.4)] backdrop-blur-[2px]"
      />
      <div className="relative h-full fpz-container flex flex-col justify-end pb-8 lg:pb-14">
        {badge && (
          <span className="inline-block w-fit mb-3 px-3 py-1 rounded-tag bg-green-500 text-blue-800 text-body-small font-medium">
            {badge}
          </span>
        )}
        <h1 className="text-display-mobile lg:text-display-desktop font-semibold text-surface-page">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-body-mobile lg:text-h6 text-surface-page/90 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
