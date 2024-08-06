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
import AccordionSection1 from "./sections/accordion/AccordionSection1";
import AccordionSection2 from "./sections/accordion/AccordionSection2";
import Stats1 from "@/components/stats/Stats1";
import Content1 from "@/components/content/Content1";
import Content2 from "@/components/content/Content2";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import ContactForm2 from "@/components/contact-forms/ContactForm2";
import Pill1 from "@/components/pills/Pill1";
import Button1 from "@/components/buttons/Button1";

const Home = () => {
  return (
    <>
      <Hero1
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        background="bg-hero"
        pill={
          <Pill1
            text="Hokup studio pill component."
            link="/"
            pillHighlightText="See more"
            pillHighlightColor="text-typo-primary"
          />
        }
        button={
          <>
            <Button1
              style="mr-0 sm:mr-6 mb-5 sm:mb-0"
              text="h studio btn"
              link="/"
            />
            <Button1
              style="bg-transparent"
              text="h studio btn"
              link="/"
              arrow
            />
          </>
        }
      />

      <LogoClouds1
        title="Over 10.000 projects created."
        background="bg-black"
      />

      <Content1
        subtitle={"A better solution"}
        title={"Hokup studio. Custom template websites made on demand."}
        text={
          "We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        }
        background="bg-black"
        image="/assets/images/image-1.jpg"
      />

      <Services1
        background="bg-initialGradient"
        subtitle="A better solution"
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        pillColor="bg-primary-default"
      />

      <Stats1 background="bg-middleGradient" />

      <AccordionSection2
        background="bg-finalGradient"
        button={
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0 w-fit text-typo-primary"
            text="h studio btn"
            link="/"
          />
        }
      />

      <Testimonial1
        name="Judith Black"
        image=""
        logo="/assets/icons/logos/logo-hokup.svg"
        text=" “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”"
        position="CEO of Workcation"
        background="bg-transparent"
      />

      <ContactForm2
        background="bg-contactGradient"
        subtitle="Contact"
        title="Get in touch."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        socialLink="https://www.instagram.com/"
        email="contact@hokup.com.br"
        phone="+55 11 9 9697-8140"
        social="@hokup.studio"
      />
    </>
  );
};

export default Home;
