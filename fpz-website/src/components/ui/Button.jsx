import { Link } from 'react-router-dom'

/**
 * Button component faithful to Figma component sets:
 * - "primary button" (#1283:4452): Green-500 fill, Blue-800/Blue-500 text, 16px 32px padding, 8px radius, Green-600 hover ring & active fill
 * - "secondary button" (#2008:4967): Pure white fill, Blue-500 1px border & text, 16px 22px padding, 8px radius, 2px hover ring & Blue-25 active fill
 * - "tab" ("button-oferta --mobile" #5009:6415): Blue-50 off / Blue-500 active toggle
 */
const VARIANT_CLASSES = {
  primary:
    'bg-green-500 text-blue-800 border-2 border-transparent hover:border-green-600 active:bg-green-600 px-8 py-4 rounded-base',
  secondary:
    'bg-surface-white text-blue-500 border border-blue-500 hover:ring-1 hover:ring-blue-500 active:bg-blue-25 px-[22px] py-4 rounded-base',
  outlineGreen:
    'bg-surface-white text-blue-800 border border-green-500 hover:bg-green-50 active:bg-green-100 px-6 py-3 rounded-base',
  tab: 'bg-blue-50 text-blue-800 hover:bg-blue-100 px-6 py-4 rounded-none',
  tabActive: 'bg-blue-500 text-surface-white px-6 py-4 rounded-none',
}

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  fullWidth = false,
  className = '',
  type = 'button',
  ...props
}) {
  const baseClasses = [
    'inline-flex items-center justify-center gap-2.5 font-normal text-body-mobile lg:text-body-desktop leading-[1.4] transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none',
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={baseClasses} {...props}>
      {children}
    </button>
  )
}
