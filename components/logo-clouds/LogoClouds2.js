export default function LogoClouds2({ title, backgroundColor }) {
  return (
    <div className={` py-24 sm:py-32 ${backgroundColor}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-typo-primary">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <img
            alt="Transistor"
            src="/assets/icons/logos/logo-hokup.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="/assets/icons/logos/logo-hokup.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="/assets/icons/logos/logo-hokup.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="/assets/icons/logos/logo-hokup.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="/assets/icons/logos/logo-hokup.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="/assets/icons/logos/logo-hokup.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
