/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unknown-property */
import react, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import {
  IcHabit1,
  IcHabit2,
  IcHabit3,
  IcHabit4,
  IcHabit5,
  ImPost,
  ImQuote,
} from "../assets";
import { Menus } from "../components";

export default function Home() {
  const [show, setShow] = useState({ status: false, key: "" });
  const datas = [{}, {}, {}, {}];
  const showData = (key) => {
    show.key === key
      ? setShow({ status: false, key: "" })
      : setShow({ status: true, key });
  };
  return (
    <div>
      <Menus />
      <div className="container mx-auto mt-4 pb-32 flex flex-row items-center justify-around">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube-nocookie.com/embed/oKHs_-6oR6s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div>
          <Image src={ImQuote} />
        </div>
      </div>
      <div className="bg-gray-200 py-14">
        <div className="container mx-auto  flex flex-col items-center relative">
          <div className="flex flex-row -mt-32">
            <div className="relative">
              <div className="bg-blue-500 w-52 flex py-8 items-center flex-col after:content-['+'] after:absolute after:bottom-0 after:-right-4 after:text-6xl after:text-white after:z-10">
                <Image src={IcHabit5} />
                <br />
                <span className="uppercase font-semibold text-white">
                  mindset
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-300 w-52 flex py-8 items-center flex-col after:content-['+'] after:absolute after:bottom-0 after:-right-4 after:text-6xl after:text-white after:z-10">
                <Image src={IcHabit1} />
                <br />
                <span className="uppercase font-semibold text-white">
                  hydration
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-500 w-52 flex py-8 items-center flex-col after:content-['+'] after:absolute after:bottom-0 after:-right-4 after:text-6xl after:text-white after:z-10">
                <Image src={IcHabit2} />
                <br />
                <span className="uppercase font-semibold text-white">
                  nutrition
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-300 w-52 flex py-8 items-center flex-col after:content-['+'] after:absolute after:bottom-0 after:-right-4 after:text-6xl after:text-white after:z-10">
                <Image src={IcHabit3} />
                <br />
                <span className="uppercase font-semibold text-white">
                  sleep
                </span>
              </div>
            </div>
            <div className="bg-blue-500 w-52 flex flex-col py-8 items-center flex-7xl">
              <Image src={IcHabit4} />
              <br />
              <span className="uppercase font-semibold text-white">
                movement
              </span>
            </div>
          </div>

          <div className="relative">
            <Carousel
              autoPlay={true}
              showStatus={false}
              autoFocus={true}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}
              stopOnHover={true}
              swipeable={true}
              dynamicHeight={false}
              useKeyboardArrows={true}
              centerMode={false}
              ariaLabel={undefined}
              // className="before:content-[' '] before:bg-[url('https://www.myhealthchallenge.com/images/invertd_open.png')] before:absolute before:w-45px before:h-39px before:top-16 before:left-0 after:content-[' '] after:bg-[url('https://www.myhealthchallenge.com/images/invertd_close.png')] after:absolute after:w-45px after:h-39px after:bottom-16 after:right-0 after:bg-contain px-20"
            >
              <div className="text-4xl italic font-light my-16">
                <div>
                  I loved the motivation and accountability provided during the
                  program. This is more than just a fun, online challenge; its
                  a sustainable set of habits for life.
                </div>
                <div className="flex justify-end">ajidk</div>
              </div>
              <div className="text-4xl italic font-light my-16">
                <div>
                  I started my health challenge with a group of friends.
                  Together, we lost a total of 23 kg over 8 weeks. Who knew that
                  making a game out of health could be so enjoyable!
                </div>
                <div className="flex justify-end">bejodk</div>
              </div>
              <div className="text-4xl italic font-light my-16">
                <div>
                  All I can say is follow these habits! I now have more energy,
                  can fit clothes I thought I’d never wear again and those aches
                  and pains of the past, are all but gone!
                </div>
                <div className="flex justify-end">adk</div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 bg-[url('https://www.myhealthchallenge.com/images/food.jpg')] bg-contain bg-no-repeat bg-right py-8%">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <div className="text-white mx-8">
              <div className="uppercase text-5xl tracking-tighter">
                free recipes
              </div>
              <div className="text-2xl mt-4">
                Enter your details here to receive a recipe guide with some of
                our delicious breakfasts, lunches, dinners and desserts.
              </div>
            </div>
            <div className="grid mx-8">
              <input placeholder="Name" className="p-4 mb-4 rounded-md" />
              <input placeholder="Email Address" className="p-4 rounded-md" />
              <div className="flex flex-row items-center my-4 text-white">
                <input type="checkbox" className="mr-4 bg-lime-400 " />
                <span>
                  I agree to receive health related emails from My Health
                  Challenge.
                </span>
              </div>
              <div className="flex justify-end">
                <button className="p-4 bg-lime-400 rounded-md">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container mx-auto py-10 flex flex-row gap-32">
          <div className="basis-2/3">
            <div className="text-2xl mb-4 tracking-tighter">FAQs</div>
            {datas.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className="bg-lime-300 px-4 py-3 border-b border-b-white cursor-pointer"
                    onClick={() => showData(index)}
                  >
                    + How much does the challenge cost?
                  </div>
                  {show.key === index && (
                    <div className="px-4 py-3 bg-green-50">
                      Yes. We pride ourselves on being one of the few challenges
                      in the world where you can customise both the length of
                      your challenge and the way you play it. Healthy living is
                      about choice, fun and sustainablility - three key factors
                      you will enjoy everyday in our challenge.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="basis-full px-10">
            <div className="text-2xl uppercase tracking-tighter text-left mb-4">
              recent post
            </div>
            {datas.map((data, index) => {
              return (
                <div key={index} className="flex flex-row gap-8 mb-5">
                  <Image src={ImPost} className="basis-1/2" />
                  <div className="basis-3/4">
                    <div className="uppercase text-xl">
                      how to get healty by querying the expert
                    </div>
                    <div className="text-sm">nama ~ jabatan</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
