import React from "react";
import { generalData } from "@/data/general-data";
import Image from "next/image";

function ContactForm2({ email, phone, social, socialLink }) {
  return (
    <section className="container mx-auto py-32">
      <div className="grid grid-cols-12 gap-4 gap-y-20 lg:gap-y-0">
        <div className="col-span-12 lg:col-span-5 lg:col-start-2">
          <div className="flex flex-col">
            <p className="mb-3 font-primary text-base text-primary-default">
              Contact
            </p>
            <h1 className="mb-6 font-primary text-5xl font-bold text-typo-primary">
              Get in touch.
            </h1>
            <p className="mb-12 max-w-md font-secondary text-lg text-typo-secondary">
              We design, build and ship custom websites by combining design and
              technology to create unique web projects for your brand.
            </p>
            <div className="flex flex-row">
              {generalData.links.map((i) => (
                <a target="_blank" href={i.href} className="mr-4">
                  <Image
                    src={i.image}
                    alt="Social media icon"
                    width={18}
                    height={18}
                    className="transition duration-200 ease-out hover:brightness-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col">
            <div className=" mb-16 ">
              <p className="mb-3 font-primary text-base text-typo-secondary">
                Email
              </p>
              <h1 className="mb-6 font-primary text-5xl font-bold text-typo-primary">
                {email}
              </h1>
            </div>
            <div className=" mb-16 ">
              <p className="mb-3 font-primary text-base text-typo-secondary">
                Phone
              </p>
              <h1 className="mb-6 font-primary text-5xl font-bold text-typo-primary">
                {phone}
              </h1>
            </div>
            <div className=" mb-16 ">
              <p className="mb-3 font-primary text-base text-typo-secondary">
                Social
              </p>
              <h1 className="mb-6 font-primary text-5xl font-bold text-typo-primary">
                {social}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm2;
