import { useLocation } from 'react-router-dom'
import { FundraiserTabsCard } from '../components/ui/FundraiserTabsCard'
import { FUNDRAISERS } from '../data/fundraisersData'

export function DarowiznaPotwierdzeniePage() {
  const { state } = useLocation()
  const donatedFundraiserId = state?.fundraiserId || FUNDRAISERS[0].id
  const donatedAmount = Number(state?.amount) || 0

  const activeFundraiser =
    FUNDRAISERS.find((f) => f.id === donatedFundraiserId) || FUNDRAISERS[0]

  const effectiveRaised = activeFundraiser.raised + donatedAmount
  const effectivePercent =
    donatedAmount > 0
      ? Math.min(
          100,
          Math.round(
            activeFundraiser.displayPercent +
              (donatedAmount / activeFundraiser.goal) * 100,
          ),
        )
      : activeFundraiser.displayPercent

  const extraDonation =
    donatedAmount > 0
      ? {
          fundraiserId: donatedFundraiserId,
          amount: donatedAmount,
          donorName: state?.donorName,
          anonymous: state?.anonymous,
        }
      : null

  return (
    <div className="fpz-container py-12 lg:py-20 flex flex-col gap-20 lg:gap-[128px]">
      {/* Dziękujemy! + progress summary card */}
      <section className="flex flex-col gap-10 lg:gap-16">
        <div className="flex flex-col gap-4 max-w-[754px]">
          <h1 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
            Dziękujemy!
          </h1>
          <p className="text-body-mobile lg:text-body-desktop text-blue-800">
            Twoja darowizna to dla nas ogromne wsparcie i motywacja do
            działania. Dzięki Tobie możemy skutecznie pomagać i zmieniać świat
            na lepsze. Cieszymy się, że jesteś z nami!
          </p>
        </div>

        <div className="max-w-[754px] bg-surface-white border border-blue-75 rounded-[16px] px-6 py-8 flex flex-col gap-6">
          <p className="text-h6 font-normal text-blue-800">
            Twoja wpłata
            {donatedAmount > 0 ? (
              <>
                {' '}
                (<strong className="font-semibold">{donatedAmount} zł</strong>)
              </>
            ) : null}{' '}
            została doliczona do zbiórki.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-h5 lg:text-heading-mobile font-normal text-blue-500">
                <strong className="font-bold">{effectiveRaised} zł</strong> z{' '}
                {activeFundraiser.goal} zł
              </p>
              <div
                className="w-full h-6 rounded-full bg-surface-page border border-gray-1 overflow-hidden"
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
            </div>

            <p className="text-body-mobile lg:text-body-desktop text-blue-800">
              Razem z Tobą zebraliśmy już{' '}
              <strong className="font-semibold">{effectivePercent}%</strong>{' '}
              celu
            </p>
          </div>
        </div>
      </section>

      {/* Inne zbiórki */}
      <section className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold text-blue-500">
          Inne zbiórki
        </h2>

        <FundraiserTabsCard
          extraDonation={extraDonation}
          showSupportButton
          supportButtonLabel="Wesprzyj ponownie"
          supportButtonTo="/darowizna"
        />
      </section>
    </div>
  )
}
