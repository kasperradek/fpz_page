import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * Expandable Accordion item matching Figma component sets:
 * - "FAQ desktop" (#2969:11619) / "terapie opisy desktop" (#2928:11523) / "projekty desktop" (#2969:7580)
 * - Closed: pure white surface, 2px Blue-75 border, 12px radius, 30px 50px desktop padding
 * - Open: Blue-25 (#F2F3FB) body background separated by 2px Blue-75 divider
 */
export function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
  isOpen: controlledOpen,
  onToggle,
  className = '',
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!isOpen)
    } else {
      setInternalOpen((prev) => !prev)
    }
  }

  return (
    <div
      id={id}
      className={[
        'scroll-mt-32 rounded-accordion border-2 border-blue-75 overflow-hidden transition-colors',
        isOpen ? 'bg-blue-25' : 'bg-surface-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={handleToggle}
        className={[
          'w-full flex items-center justify-between gap-4 text-left bg-surface-white px-5 py-5 lg:px-[50px] lg:py-[30px] cursor-pointer transition-colors hover:bg-blue-25/50',
          isOpen ? 'border-b-2 border-blue-75' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span className="text-h6 lg:text-heading-mobile font-normal text-blue-800">
          {title}
        </span>
        <ChevronDown
          className={[
            'w-6 h-6 lg:w-8 lg:h-8 text-blue-800 shrink-0 transition-transform duration-200',
            isOpen ? 'rotate-180' : '',
          ].join(' ')}
        />
      </button>

      {isOpen && (
        <div className="px-5 py-6 lg:px-[35px] lg:py-10 text-body-mobile lg:text-body-desktop text-blue-800 bg-blue-25">
          {children}
        </div>
      )}
    </div>
  )
}
