/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { IcLogo } from "../../assets";

export default function Menus() {
  return (
    <div className="bg-white">
      <div className="container mx-auto mt-4 flex flex-row items-center justify-between">
        <Image src={IcLogo} className="my-3" />
        <div className="ml-auto">
          <a className="uppercase ml-14 hover:text-gray-500" href="#">
            how to play
          </a>
          <a className="uppercase ml-14 hover:text-gray-500" href="#">
            the habits
          </a>
          <a className="uppercase ml-14 hover:text-gray-500" href="#">
            the rules
          </a>
          <a className="uppercase ml-14 hover:text-gray-500" href="#">
            pricing
          </a>
          <a className="uppercase ml-14 hover:text-gray-500" href="#">
            blog
          </a>
          <a className="uppercase ml-14 hover:text-gray-500" href="#">
            support
          </a>
        </div>
      </div>
      <div className="container mx-auto justify-end flex flex-row items-center -mt-2">
        <a
          href=""
          className="mr-2 bg-lime-500 px-14 py-4 rounded-xl text-white capitalize"
        >
          register
        </a>
        <a
          href=""
          className="bg-lime-500 px-14 py-4 rounded-xl text-white capitalize"
        >
          login
        </a>
      </div>
    </div>
  );
}
