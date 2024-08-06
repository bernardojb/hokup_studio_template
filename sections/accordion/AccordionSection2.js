import React from "react";
import { motion } from "framer-motion";
import Accordion1 from "@/components/accordions/Accordion1";

function AccordionSection2({ background }) {
  return (
    <section className={`${background}`}>
      <div className={`container mx-auto grid grid-cols-12 gap-4 py-32`}>
        <div className="col-span-12 flex flex-col bg-white lg:col-span-4 lg:col-start-2">
          <p className="mb-3 font-semibold text-primary-default">Process</p>
          <h1 className="pb-10 font-primary text-5xl font-bold text-typo-primary">
            How we merge and get things done.
          </h1>
          <p className="font-secondary text-lg text-typo-secondary">
            We design, build and ship custom websites by combining design and
            technology to create unique web projects for your brand.
          </p>
        </div>
        {/* <div className="col-span-12 lg:col-span-3 lg:col-start-7">
          <Accordion1 />
        </div> */}
      </div>
    </section>
  );
}

export default AccordionSection2;
