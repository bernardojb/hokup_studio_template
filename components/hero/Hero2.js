import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobCTA from "../buttons/MobCTA";
import Button1 from "../buttons/Button1";

function Hero2({ title, text, background, pill, button }) {
  return (
    <section
      className={`h-[100svh] w-full text-white ${background} bg-cover bg-center bg-no-repeat px-4 pb-24`}
    >
      <div className="grid h-full w-full grid-cols-12">
        <div className="col-span-12 lg:col-span-5 lg:col-start-2">
          <div className="flex h-full flex-col items-start justify-end">
            {pill}
            <h1 className=" font-primary text-4xl font-bold text-typo-primary sm:text-6xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-8">
          <div className="flex h-full flex-col items-start justify-end">
            <p className="mb-11 max-w-xl text-start text-2xl font-normal text-typo-secondary">
              {text}
            </p>
            <div className="flex flex-row">{button}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
