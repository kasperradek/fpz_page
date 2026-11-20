import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../../data/routes'
import { Button } from '../ui/Button'

/**
 * Shared Top Navigation Bar matching Figma:
 * - Desktop: "Nawigacja górna" (#1144:4492) + "rozwijane menu" (#1287:6134)
 * - Mobile: "Nawigacja górna - mobile" (#1656:6416) + "[m] rozwijane menu" (#2947:7411)
 */
export function Navbar() {
  const location = useLocation()
  const navRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState(null)

  // Close menus on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isNavItemActive = (item) => {
    if (location.pathname === item.to) return true
    if (item.children) {
      return item.children.some((child) => {
        const childBase = child.to.split('#')[0]
        return childBase && location.pathname.startsWith(childBase)
      })
    }
    return false
  }

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full">
      {/* Desktop & Mobile Top Bar */}
      <div className="fpz-navbar-glass h-[76px] lg:h-[112px] w-full">
        <div className="w-full max-w-[1250px] h-full mx-auto px-6 xl:px-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Fundacja Pełna Życia — Strona główna"
            onClick={() => {
              setOpenDropdown(null)
              setMobileMenuOpen(false)
            }}
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-xs"
          >
            <img
              src="/images/logo-fpz.png"
              alt="Fundacja Pełna Życia"
              className="w-[54px] h-[32px] lg:w-[90px] lg:h-[53px] object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Nawigacja główna"
            className="hidden lg:flex items-center justify-end gap-6 xl:gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children?.length)
              const active = isNavItemActive(item)
              const isOpen = openDropdown === item.label

              if (!hasChildren) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpenDropdown(null)}
                    className={({ isActive }) =>
                      [
                        'text-body-desktop leading-[1.4] text-blue-800 hover:text-blue-500 transition-colors whitespace-nowrap py-2',
                        isActive ? 'font-bold text-blue-800' : 'font-normal',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-1.5">
                    <Link
                      to={item.to}
                      onClick={() => setOpenDropdown(null)}
                      className={[
                        'text-body-desktop leading-[1.4] text-blue-800 hover:text-blue-500 transition-colors whitespace-nowrap py-2',
                        active ? 'font-bold' : 'font-normal',
                      ].join(' ')}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`Rozwiń menu ${item.label}`}
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === item.label ? null : item.label,
                        )
                      }
                      className="p-0.5 text-blue-800 hover:text-blue-500 cursor-pointer"
                    >
                      <ChevronDown
                        className={[
                          'w-4 h-4 transition-transform duration-200',
                          isOpen ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </button>
                  </div>

                  {/* Desktop Dropdown Panel matching "rozwijane menu" (#1287:6134) */}
                  {isOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                      <div className="relative w-[320px] bg-surface-page border border-blue-75 rounded-dropdown shadow-card-hover overflow-hidden">
                        {/* Pointer caret */}
                        <div
                          aria-hidden="true"
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-surface-page border-l border-t border-blue-75"
                        />
                        <ul className="relative flex flex-col divide-y divide-blue-50/60">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                to={child.to}
                                onClick={() => setOpenDropdown(null)}
                                className="block w-full py-[15px] px-6 text-center text-body-desktop text-blue-800 hover:bg-blue-500 hover:text-surface-page transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:block shrink-0">
            <Button
              to="/darowizna"
              variant="primary"
              onClick={() => setOpenDropdown(null)}
            >
              Wesprzyj Fundację
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-blue-800 hover:text-blue-500 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer matching "Nawigacja górna - mobile / Variant2" (#1656:6421) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] z-40 bg-surface-white border-t border-green-500 overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-6 max-w-md mx-auto">
            <p className="text-display-mobile font-medium text-blue-500 leading-[1.2]">
              Fundacja Pełna
              <br />
              Życia
            </p>

            <nav aria-label="Nawigacja mobilna" className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.children?.length)
                const isExpanded = openMobileSection === item.label

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-5 py-3 rounded-base text-h6 text-blue-800 bg-surface-white hover:bg-blue-25 transition-colors"
                    >
                      <span>{item.label}</span>
                    </Link>
                  )
                }

                return (
                  <div key={item.label} className="flex flex-col gap-2">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setOpenMobileSection((prev) =>
                          prev === item.label ? null : item.label,
                        )
                      }
                      className={[
                        'w-full flex items-center justify-between px-5 py-3 rounded-base text-h6 transition-colors cursor-pointer',
                        isExpanded
                          ? 'bg-blue-500 text-surface-white'
                          : 'bg-surface-white text-blue-800 hover:bg-blue-25',
                      ].join(' ')}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={[
                          'w-5 h-5 transition-transform duration-200',
                          isExpanded ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </button>

                    {isExpanded && (
                      <div className="flex flex-col gap-1.5 pl-3">
                        <Link
                          to={item.to}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-5 py-2.5 rounded-base bg-blue-25 text-h6 font-medium text-blue-500 hover:bg-blue-500 hover:text-surface-white transition-colors"
                        >
                          Wszystko: {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-5 py-2.5 rounded-base bg-blue-25 text-h6 text-blue-800 hover:bg-blue-500 hover:text-surface-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="pt-4">
              <Button
                to="/darowizna"
                variant="primary"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
              >
                Wesprzyj Fundację
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
