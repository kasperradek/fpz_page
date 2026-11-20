/**
 * Category / filter tag pill matching Figma `card-Aktualności-desktop` (#3020:13539)
 * - White surface, 1px Green-500 border, 6px border-radius, 8px 12px padding, 14px Roboto Blue-800
 */
export function TagBadge({ children, active = false, onClick, className = '' }) {
  const classes = [
    'inline-flex items-center justify-center px-3 py-2 rounded-tag text-body-small uppercase tracking-wide border transition-colors duration-150',
    active
      ? 'bg-green-500 border-green-500 text-blue-800 font-medium'
      : 'bg-surface-white border-green-500 text-blue-800 hover:bg-green-50',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    )
  }

  return <span className={classes}>{children}</span>
}
