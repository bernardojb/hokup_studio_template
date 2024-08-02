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
        buttonLink2="#button-link-1"
      />

      <LogoClouds1
        title="Over 10.000 projects created."
        backgroundColor="bg-black"
      />

      <Services1
        backgroundColor="bg-black"
        subtitle="A better solution"
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        pillColor="bg-primary-default"
        pillText1="Lorem Ipsum"
        pillText2="Lorem Ipsum"
        pillText3="Lorem Ipsum"
        pillText4="Lorem Ipsum"
      />

      <section className="py-20">
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
      </section>

      <section className="py-20">
        <div className="flex items-center justify-center">
          <h1 className="hover-base cursor-pointer text-[100px] text-white hover:text-blue-700">
            HOVER-BASE
          </h1>
        </div>
      </section>

      {/* CONTATO */}
      <ContactForm />
    </>
  );
};

export default Home;
