import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import { Button, NewsCard, PageBanner } from '../components/ui'
import { NEWS_CATEGORIES, NEWS_POSTS } from '../data/newsData'

const TOTAL_PAGES_DISPLAY = 9

export function AktualnosciPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [draftCategories, setDraftCategories] = useState([])
  const [appliedCategories, setAppliedCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const toggleDraftCategory = (categoryId) => {
    setDraftCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    )
  }

  const draftResultsCount = useMemo(() => {
    if (draftCategories.length === 0) return 69
    return NEWS_CATEGORIES.filter((c) => draftCategories.includes(c.id)).reduce(
      (sum, c) => sum + c.figmaCount,
      0,
    )
  }, [draftCategories])

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    return NEWS_POSTS.filter((post) => {
      const matchesCategory =
        appliedCategories.length === 0 ||
        post.categories.some((cat) => appliedCategories.includes(cat))
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      return matchesCategory && matchesQuery
    })
  }, [appliedCategories, searchQuery])

  const handleApplyCategories = () => {
    setAppliedCategories(draftCategories)
    setCurrentPage(1)
    setDropdownOpen(false)
  }

  const handleClearFilters = () => {
    setDraftCategories([])
    setAppliedCategories([])
    setSearchQuery('')
    setCurrentPage(1)
  }

  const hasActiveFilters =
    appliedCategories.length > 0 || searchQuery.trim().length > 0

  const pageNumbers = [1, 2, 3, 'ellipsis', TOTAL_PAGES_DISPLAY]

  return (
    <div>
      <PageBanner title="Aktualności" image="/images/banner-aktualnosci.png" />

      <div className="fpz-container py-12 lg:py-20 flex flex-col gap-12 lg:gap-20">
        {/* Intro copy */}
        <p className="max-w-[1011px] text-h6 lg:text-h5 font-normal text-blue-800">
          Sprawdź, czym zajmuje się nasza Fundacja. Tutaj znajdziesz wszystkie
          przeszłe i przyszłe{' '}
          <strong className="font-bold">
            wydarzenia, w których bierzemy udział.
          </strong>{' '}
          Śledź nas na bieżąco, aby nie przegapić najnowszych ogłoszeń i
          relacji.
        </p>

        {/* Najnowsze wpisy */}
        <section className="flex flex-col gap-8">
          <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Najnowsze wpisy
          </h2>

          {/* Filter & Search Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
            {/* Multi-select Kategorie Dropdown */}
            <div ref={dropdownRef} className="relative w-full sm:w-[268px]">
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-full h-[56px] px-4 bg-surface-white border border-blue-75 rounded-xs flex items-center justify-between text-body-desktop text-blue-800 hover:border-blue-500 transition-colors cursor-pointer"
              >
                <span>
                  Kategorie
                  {appliedCategories.length > 0
                    ? ` (${appliedCategories.length})`
                    : ''}
                </span>
                <ChevronDown
                  className={[
                    'w-5 h-5 text-blue-800 transition-transform duration-200',
                    dropdownOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-[calc(100%+4px)] z-30 w-full bg-surface-white border border-blue-75 rounded-dropdown shadow-card-hover overflow-hidden">
                  <div className="flex flex-col py-1">
                    {NEWS_CATEGORIES.map((category) => {
                      const checked = draftCategories.includes(category.id)
                      return (
                        <label
                          key={category.id}
                          className="flex items-center gap-3 px-6 py-3.5 text-body-desktop text-blue-800 hover:bg-blue-25 cursor-pointer select-none transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleDraftCategory(category.id)}
                            className="w-5 h-5 rounded-xs border border-blue-75 accent-blue-500 cursor-pointer shrink-0"
                          />
                          <span>
                            {category.label} ({category.figmaCount})
                          </span>
                        </label>
                      )
                    })}
                  </div>

                  <div className="px-5 py-4 border-t border-blue-50 flex flex-col items-center gap-2">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleApplyCategories}
                      className="w-full"
                    >
                      Pokaż {draftResultsCount} wyników
                    </Button>
                    {draftCategories.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setDraftCategories([])}
                        className="text-body-small text-blue-500 hover:underline cursor-pointer"
                      >
                        Odznacz wszystkie
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Search input */}
            <div className="w-full sm:w-[282px] h-[56px] px-3 bg-surface-white border border-blue-75 rounded-xs flex items-center gap-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-colors">
              <Search className="w-6 h-6 text-gray-2 shrink-0" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                placeholder="Znajdź wydarzenie"
                aria-label="Znajdź wydarzenie"
                className="w-full bg-transparent text-body-desktop text-blue-800 placeholder:text-gray-2 focus:outline-none"
              />
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 text-body-small font-medium text-blue-500 hover:text-blue-700 cursor-pointer self-start sm:self-center"
              >
                <X className="w-4 h-4" />
                Wyczyść filtry
              </button>
            )}
          </div>

          {/* 3-column News Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {filteredPosts.map((post) => (
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
          ) : (
            <div className="bg-surface-white border border-blue-75 rounded-base p-10 text-center flex flex-col items-center gap-4">
              <p className="text-h5 font-semibold text-blue-800">
                Brak wyników dla wybranych kryteriów
              </p>
              <p className="text-body-desktop text-gray-3 max-w-md">
                Spróbuj wpisać inną frazę lub wyczyścić wybrane kategorie.
              </p>
              <Button variant="secondary" onClick={handleClearFilters}>
                Pokaż wszystkie wpisy
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <nav
              aria-label="Paginacja aktualności"
              className="mt-4 flex items-center justify-center gap-5 sm:gap-8"
            >
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Poprzednia strona"
                className="w-12 h-12 rounded-full bg-blue-500 text-surface-white flex items-center justify-center hover:bg-blue-600 disabled:opacity-45 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-6 sm:gap-8">
                {pageNumbers.map((item, idx) =>
                  item === 'ellipsis' ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="text-h6 font-normal text-blue-800 select-none"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCurrentPage(item)}
                      aria-current={currentPage === item ? 'page' : undefined}
                      className={[
                        'transition-colors cursor-pointer',
                        currentPage === item
                          ? 'text-h5 font-bold text-blue-800'
                          : 'text-h6 font-normal text-blue-800 hover:text-blue-500',
                      ].join(' ')}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((p) => Math.min(TOTAL_PAGES_DISPLAY, p + 1))
                }
                disabled={currentPage === TOTAL_PAGES_DISPLAY}
                aria-label="Następna strona"
                className="w-12 h-12 rounded-full bg-blue-500 text-surface-white flex items-center justify-center hover:bg-blue-600 disabled:opacity-45 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          )}
        </section>
      </div>
    </div>
  )
}
