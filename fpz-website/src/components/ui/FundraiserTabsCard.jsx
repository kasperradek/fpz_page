import { useState } from 'react'
import { FUNDRAISERS, RECENT_DONATIONS } from '../../data/fundraisersData'
import { Button } from './Button'

/**
 * Shared 3-tab Fundraiser Progress Card matching Figma:
 * - Darowizna / Desktop (`#2948:7384`)
 * - Darowizna Potwierdzenie / Desktop (`#2972:7594`)
 */
export function FundraiserTabsCard({
  activeId,
  onSelectTab,
  extraDonation = null,
  showSupportButton = false,
  supportButtonLabel = 'Wesprzyj ponownie',
  supportButtonTo = '/darowizna',
}) {
  const [internalId, setInternalId] = useState(FUNDRAISERS[0].id)
  const currentId = activeId ?? internalId

  const handleSelect = (id) => {
    setInternalId(id)
    onSelectTab?.(id)
  }

  const activeFundraiser =
    FUNDRAISERS.find((f) => f.id === currentId) || FUNDRAISERS[0]

  const appliedExtra =
    extraDonation && extraDonation.fundraiserId === activeFundraiser.id
      ? Number(extraDonation.amount) || 0
      : 0

  const effectiveRaised = activeFundraiser.raised + appliedExtra
  const effectivePercent =
    appliedExtra > 0
      ? Math.min(
          100,
          Math.round(
            activeFundraiser.displayPercent +
              (appliedExtra / activeFundraiser.goal) * 100,
          ),
        )
      : activeFundraiser.displayPercent

  const recentList =
    extraDonation &&
    extraDonation.fundraiserId === activeFundraiser.id &&
    appliedExtra > 0
      ? [
          {
            id: 'user-donation',
            name: extraDonation.anonymous
              ? 'Wpłata anonimowa'
              : extraDonation.donorName || 'Darczyńca',
            amount: appliedExtra,
          },
          ...RECENT_DONATIONS.slice(0, 5),
        ]
      : RECENT_DONATIONS

  return (
    <div className="w-full">
      {/* Folder-style tab strip */}
      <div
        role="tablist"
        aria-label="Zbiórki Fundacji"
        className="grid grid-cols-1 md:grid-cols-[1.2fr_0.82fr_1fr]"
      >
        {FUNDRAISERS.map((fundraiser, idx) => {
          const isActive = fundraiser.id === activeFundraiser.id
          const roundedClass =
            idx === 0
              ? 'rounded-t-[16px] md:rounded-tl-[16px] md:rounded-tr-none'
              : idx === FUNDRAISERS.length - 1
                ? 'md:rounded-tr-[16px]'
                : ''

          return (
            <button
              key={fundraiser.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(fundraiser.id)}
              className={[
                'min-h-[60px] lg:min-h-[70px] px-5 py-3 flex items-center justify-center text-center text-h6 lg:text-h5 font-normal transition-colors cursor-pointer',
                roundedClass,
                isActive
                  ? 'bg-blue-500 text-surface-white'
                  : 'bg-surface-white text-blue-800 border border-b-0 border-blue-75 hover:bg-blue-25',
              ].join(' ')}
            >
              {fundraiser.tabLabel}
            </button>
          )
        })}
      </div>

      {/* Tab content body */}
      <div
        role="tabpanel"
        className="bg-surface-white border border-blue-75 rounded-b-[20px] px-6 py-8 lg:px-[65px] lg:py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_288px] gap-10 lg:gap-16 items-start">
          {/* Left column: Headline, progress bar, description */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h3 className="text-h6 lg:text-h5 font-normal text-blue-800 max-w-[540px]">
              {activeFundraiser.headlinePrefix}{' '}
              <strong className="font-bold">
                {activeFundraiser.headlineAmount}
              </strong>{' '}
              {activeFundraiser.headlineSuffix}
            </h3>

            {/* Raised amount + progress bar */}
            <div className="flex flex-col gap-2 max-w-[570px]">
              <p className="text-h5 lg:text-heading-mobile font-normal text-blue-500">
                <strong className="font-bold">
                  {effectiveRaised} zł
                </strong>{' '}
                z {activeFundraiser.goal} zł
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="flex-1 h-6 rounded-full bg-surface-page border border-gray-1 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={effectivePercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-green-500 rounded-l-full transition-all duration-500"
                    style={{ width: `${effectivePercent}%` }}
                  />
                </div>
                <span className="text-h6 lg:text-h5 font-normal text-blue-800 shrink-0 min-w-[48px] text-right">
                  {effectivePercent}%
                </span>
              </div>
            </div>

            <p
              className={[
                'text-blue-800 max-w-[612px]',
                showSupportButton
                  ? 'text-body-mobile lg:text-body-desktop'
                  : 'text-body-desktop lg:text-h5 font-normal',
              ].join(' ')}
            >
              {activeFundraiser.description}
            </p>

            {showSupportButton && (
              <div className="pt-2">
                <Button variant="primary" to={supportButtonTo}>
                  {supportButtonLabel}
                </Button>
              </div>
            )}
          </div>

          {/* Right column: Ostatnie wpłaty */}
          <div className="flex flex-col gap-5">
            <h4 className="text-h5 font-semibold text-blue-800">
              Ostatnie wpłaty
            </h4>
            <ul className="flex flex-col gap-3">
              {recentList.map((donation) => (
                <li
                  key={donation.id}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-body-desktop lg:text-h6 font-normal text-blue-800">
                    {donation.name}
                  </span>
                  <span className="text-h6 lg:text-h5 font-normal text-blue-800 shrink-0">
                    {donation.amount} zł
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
