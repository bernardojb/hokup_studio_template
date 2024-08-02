import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobCTA from "../buttons/MobCTA";
import Button1 from "../buttons/Button1";
import Pill1 from "../pills/Pill1";

function Hero1({
  title,
  text,
  background,
  pill,
  pillText,
  pillLink,
  pillHighlightText,
  pillHighlightColor,
  buttonText,
  buttonLink,
}) {
  return (
    <section
      className={`bg-hero h-[100svh] w-full bg-cover bg-center text-white`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center text-center">
          {pill && (
            <Pill1
              text={pillText}
              link={pillLink}
              pillHighlightText={pillHighlightText}
              pillHighlightColor={pillHighlightColor}
            />
          )}
          <h1 className="mb-6 max-w-5xl text-center font-primary text-6xl font-bold text-typo-primary">
            {title}
          </h1>
          <p className="mb-11 max-w-xl text-center font-secondary text-lg font-normal text-typo-secondary">
            {text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row">
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0"
            text={buttonText}
            link={buttonLink}
          />
          <Button1 style="bg-transparent" text={buttonText} link={buttonLink} />
        </div>
      </div>
    </section>
  );
}

export default Hero1;
