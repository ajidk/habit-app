/* eslint-disable react/no-unknown-property */
import Image from "next/image";
import React from "react";
import { ImQuote } from "../../assets";

export default function MainHeader() {
  return (
    <div>
      <div className="container mx-auto px-28 mt-4 flex flex-row items-center justify-between">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/oKHs_-6oR6s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Image src={ImQuote} />
      </div>
    </div>
  );
}
