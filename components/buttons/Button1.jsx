import React from "react";
import Link from "next/link";

const Button1 = ({ link, text, style, target }) => {
  return (
    <Link href={link} target={target}>
      <div
        className={`bg-primary-default group flex flex-row items-center whitespace-nowrap rounded-lg px-10 py-4 transition-all ${style}`}
      >
        <p className="flex items-center justify-center break-keep">{text}</p>
      </div>
    </Link>
  );
};

export default Button1;
