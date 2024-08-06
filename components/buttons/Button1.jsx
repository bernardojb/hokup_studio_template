import React from "react";
import Link from "next/link";

const Button1 = ({ link, text, style, target }) => {
  return (
    <Link href={link} target={target}>
      <div
        className={`group flex flex-row items-center whitespace-nowrap rounded-lg bg-primary-default px-10 py-4 transition-all ${style}`}
      >
        <p className="flex items-center justify-center break-keep font-primary text-sm font-bold">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default Button1;
