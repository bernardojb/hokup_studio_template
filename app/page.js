"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form/ContactForm";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Hero1 from "@/components/hero/Hero1";
import Hero2 from "@/components/hero/Hero2";

const Home = () => {
  return (
    <>
      <Hero1
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        background="bg-hero"
      />

      <Hero2
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
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
