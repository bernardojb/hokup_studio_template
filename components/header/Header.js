"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MenuToggle from "./Toggle";
import Link from "next/link";
import { generalData } from "@/data/general-data";
import { headerData } from "@/data/header-data";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [display, setDisplay] = useState(false);
  const pathname = usePathname();

  //anim
  const openNav = {
    open: {
      height: "100svh",
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
    closed: {
      height: "80px",
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.3,
      },
    },
  };

  const openLinks = {
    open: {
      opacity: 1,
      transition: {
        // type: 'spring',
        duration: 0.5,
        delay: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0,
      },
    },
  };

  const openSocial = {
    open: {
      opacity: 1,
      transition: {
        // type: 'spring',
        duration: 0.5,
        delay: 0.6,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        // type: 'spring',
        // bounce: 0.2,
        duration: 0.2,
        delay: 0,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed z-[999] flex min-h-[80px] w-screen flex-col bg-white bg-opacity-10 backdrop-blur-md"
        animate={toggle ? "open" : "closed"}
        variants={openNav}
        initial={false}
      >
        <div className="container mx-auto flex h-[80px] min-h-[80px] w-full flex-row items-center">
          {/* Logo */}
          <a href="/" className="pr-5">
            <Image
              src="/assets/main/main-logo.svg"
              alt="Hokup Logo"
              width={144}
              height={44}
            />
          </a>

          {/* Navigation */}
          <div className="ml-auto hidden w-full flex-row items-center justify-end text-xs text-white md:flex">
            {headerData.map((i) => (
              <Link
                key={i.id}
                href={i.href}
                className="pl-10 text-white hover:text-red-800 "
              >
                {i.text}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <motion.nav
            initial={false}
            animate={toggle ? "open" : "closed"}
            className="ml-auto block md:hidden"
          >
            <MenuToggle
              toggle={() => {
                setToggle(!toggle);
              }}
            />
          </motion.nav>
        </div>

        <div
          className={`${toggle ? "" : "hidden"} container flex h-full flex-col justify-between md:hidden`}
        >
          <motion.div
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openLinks}
            style={{}}
            className="block"
          >
            <ul className=" mt-5 text-lg uppercase text-white">
              {headerData.map((i) => (
                <Link
                  key={i.id}
                  href={i.href}
                  className={`mx-5 transition duration-300 ease-in-out`}
                  onClick={() => setToggle(false)}
                >
                  <p
                    className={`${pathname === "/sobre" && "text-green"} py-2 text-base transition duration-500 ease-out hover:text-white hover:transition hover:duration-500 hover:ease-out`}
                  >
                    {i.text}
                  </p>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div
            style={{}}
            className={`block pb-4`}
            initial={false}
            animate={toggle ? "open" : "closed"}
            variants={openSocial}
          >
            <div className="mb-1 flex flex-row">
              {generalData.links.map((i) => (
                <a target="_blank" href={i.href} className="mr-4">
                  <Image
                    src={i.image}
                    alt={`asd ${i.name}`}
                    width={18}
                    height={18}
                  />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${generalData.email}`}
              className="hover:text-dark-gray font-manrope text-gray font-normal"
            >
              {generalData.email}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
