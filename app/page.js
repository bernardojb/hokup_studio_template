"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-forms/ContactForm";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Hero1 from "@/components/hero/Hero1";
import Hero2 from "@/components/hero/Hero2";
import Services1 from "@/components/services/Services1";
import LogoClouds1 from "@/components/logo-clouds/LogoClouds1";
import LogoClouds2 from "@/components/logo-clouds/LogoClouds2";
import AccordionSection1 from "@/sections/accordion/AccordionSection1";
import AccordionSection2 from "@/sections/accordion/AccordionSection2";
import Stats1 from "@/components/stats/Stats1";
import Content1 from "@/components/content/Content1";

const Home = () => {
  return (
    <>
      <Hero1
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        background="bg-hero"
        pill={true}
        pillText="Hokup studio pill component."
        pillLink="#pill-link"
        pillHighlightText="See More"
        pillHighlightColor="text-typo-primary"
        buttonText="h studio btn"
        buttonLink="#button-link-1"
        buttonText2="h studio btn"
        buttonLink2="#button-link-2"
      />

      <LogoClouds1
        title="Over 10.000 projects created."
        backgroundColor="bg-black"
      />

      {/* <LogoClouds2
        title="Over 10.000 projects created."
        backgroundColor="bg-black"
      /> */}

      <Content1
        subtitle={"A better solution"}
        title={"Hokup studio. Custom template websites made on demand."}
        text={
          "We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        }
        backgroundColor="bg-black"
        image="/assets/images/image-1.jpg"
      />

      <Services1
        backgroundColor="bg-black"
        subtitle="A better solution"
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        pillColor="bg-primary-default"
      />

      <section>
        <Stats1 />
      </section>

      {/* <section className="py-20">
        <Marquee
          gradient
          gradientColor="#000"
          direction="right"
          className="pb-10"
        >
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
        </Marquee>
        <Marquee
          gradient
          gradientColor="#000"
          direction="left"
          className="pb-10"
        >
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
          <div className="mx-20 h-[50px] w-[180px] bg-slate-900"></div>
        </Marquee>
      </section> */}

      {/* <section className="container">
        <AccordionSection1 />
      </section> */}
      {/* <section>
        <div className="grid grid-cols-12">
          <div className="col-span-5 bg-primary-light">teste</div>
          <div className="col-span-7 bg-primary-default">teste</div>
        </div>
      </section> */}

      {/* <section> */}
      {/* <AccordionSection1 /> */}
      {/* <AccordionSection2 /> */}
      {/* </section> */}

      {/* <section>
        <div className=" grid grid-cols-12 gap-4">
          <div className="col-span-4 col-start-2 flex flex-col ">
            <p className="mb-3 font-semibold text-primary-default">Process</p>
            <h1 className="pb-10 font-primary text-5xl font-bold text-typo-primary">
              How we merge and get things done.
            </h1>
            <p className="font-secondary text-lg text-typo-secondary">
              We design, build and ship custom websites by combining design and
              technology to create unique web projects for your brand.
            </p>
          </div>
          <div className="col-span-6 bg-white">teste</div>
        </div>
      </section> */}

      {/* <section className="py-20">
        <div className="flex items-center justify-center">
          <h1 className="hover-base cursor-pointer text-[100px] text-white hover:text-blue-700">
            HOVER-BASE
          </h1>
        </div>
      </section> */}
      {/* CONTATO */}
      {/* <ContactForm /> */}
    </>
  );
};

export default Home;
