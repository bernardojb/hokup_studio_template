import React from "react";

function LogoClouds1({ title, backgroundColor }) {
  return (
    <div className={` py-24 sm:py-32 ${backgroundColor}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-primary text-2xl font-normal leading-8 text-typo-primary">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="col-span-2 flex h-full max-h-12 w-full justify-center object-contain lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>

          <div className="col-span-2 flex h-full max-h-12 w-full justify-center object-contain lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>
          <div className="col-span-2 flex h-full max-h-12 w-full justify-center object-contain lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>
          <div className="col-span-2 flex h-full max-h-12 w-full justify-center object-contain lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="col-span-2 flex h-full max-h-12 w-full items-center justify-center object-contain object-center lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>
          <div className="col-span-2 flex h-full max-h-12 w-full items-center justify-center object-contain object-center lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>
          <div className="col-span-2 flex h-full max-h-12 w-full items-center justify-center object-contain object-center lg:col-span-1">
            <img
              alt="Transistor"
              src="/assets/icons/logos/logo-hokup.svg"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoClouds1;
