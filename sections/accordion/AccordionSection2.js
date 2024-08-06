import React from "react";
import { motion } from "framer-motion";
import Accordion1 from "@/components/accordions/Accordion1";

function AccordionSection2() {
  return (
    <section className="px-[10px] md:px-5">
      <div className="pt-[80px]">
        <div className="pb-[80px]">
          <p className="text-primary-default">Process</p>
          <h1 className="text-5xl" style={{ color: "white" }}>
            How we merge and get things done.
          </h1>
          <p className="font-secondary text-lg text-typo-secondary">
            We design, build and ship custom websites by combining design and
            technology to create unique web projects for your brand.
          </p>
        </div>

        <div
          initial={{ y: "1.1em", opacity: 0 }}
          whileInView={{ y: "0em", opacity: 1 }}
          transition={{
            delay: 2,
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 0.8,
          }}
          viewport={{ once: true, margin: "0px" }}
          className=""
        >
          <Accordion1 />
        </div>
      </div>
    </section>
  );
}

export default AccordionSection2;
