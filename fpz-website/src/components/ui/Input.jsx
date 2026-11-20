/**
 * Text Input & Checkbox components matching Figma "Inputy" (#2659:10787)
 * - Desktop: 56px height, 8px border-radius, H5 label
 * - Mobile: 50px height, 6px border-radius, Body Desktop label
 * - Error state: 2px danger-border (#E2483D) + danger-text (#AE2E24) message
 */
export function Input({
  label,
  id,
  required = false,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={['flex flex-col gap-2 lg:gap-4 w-full', className].join(' ')}>
      {label && (
        <label
          htmlFor={id}
          className="text-body-desktop lg:text-h5 font-normal text-blue-800"
        >
          {label}
          {required && <span className="text-danger-text ml-0.5">*</span>}
        </label>
      )}
      <input
        id={id}
        aria-invalid={Boolean(error)}
        className={[
          'w-full h-[50px] lg:h-[56px] px-4 bg-surface-white text-blue-800 placeholder:text-gray-3 text-body-mobile lg:text-body-desktop rounded-tag lg:rounded-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30',
          error
            ? 'border-2 border-danger-border focus:border-danger-border'
            : 'border border-blue-75 focus:border-blue-500',
        ].join(' ')}
        {...props}
      />
      {error && (
        <p role="alert" className="text-body-mobile lg:text-body-desktop text-danger-text">
          {error}
        </p>
      )}
    </div>
  )
}

export function Checkbox({ id, label, error, className = '', ...props }) {
  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      <label
        htmlFor={id}
        className="inline-flex items-start gap-4 cursor-pointer select-none"
      >
        <input
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error)}
          className={[
            'mt-0.5 w-[26px] h-[26px] shrink-0 rounded-xs bg-surface-white accent-blue-500 cursor-pointer',
            error ? 'ring-2 ring-danger-border' : 'border border-blue-75',
          ].join(' ')}
          {...props}
        />
        <span className="text-body-mobile lg:text-body-desktop text-blue-800">
          {label}
        </span>
      </label>
      {error && (
        <p role="alert" className="text-body-mobile text-danger-text">
          {error}
        </p>
      )}
    </div>
  )
}
