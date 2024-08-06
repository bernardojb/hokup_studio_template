import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobCTA from "../buttons/MobCTA";
import Button1 from "../buttons/Button1";

function Hero2({ title, text, background }) {
  return (
    <section className={`h-[100svh] w-full text-white ${background}`}>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 max-w-5xl text-center text-4xl font-bold sm:text-6xl">
            {title}
          </h1>
          <p className="mb-11 max-w-xl text-center text-lg font-normal">
            {text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Button1
            style="bg-blue-500 mr-0 sm:mr-6 mb-5 sm:mb-0"
            text="Button 1"
            link="#scroll-solucoes"
          />
          <Button1 style="btn-clear" text="Button 1" link="/contato" />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
