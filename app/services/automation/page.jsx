"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (

<>
<section className="flex flex-col items-center justify-start md:mt-[8rem] ">
  <div className="bg-white dark:bg-gray-800 w-full">
    <section className="bg-[#52c42f1f] py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck">
          Automation & IoT
        </h1>
        <p className="text-[#388521] font-semibold dark:text-gray-400">
          Design, Build, Commission and Train
        </p>
      </div>
    </section>
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 md:flex md:justify-center">
        <div className="md:w-1/2 md:pr-4">
          <div>
            <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              We are <span className="font-semibold text-black">mechatronic engineering experts</span> and have more than 15 years of experience of delivering <span className="font-semibold text-black">complex electrical control panels</span>, with <span className="font-semibold text-black">automations, internet of things</span> (IoT) and <span className="font-semibold text-black">instrumentations</span>.            </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              We work directly with Siemens, but are just as comfortable with other major <span className="font-semibold text-black">PLC products</span>. We offer value without compromising on quality. We have engineers who we can deploy around the world for any complex control and automation processes that need our attention and expertise.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              We design and build panels to meet European and North American standards. We offer a competitively priced fully assembled and programmed control panels.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              No job is too small or too big. Let us know your engineering problem and we will provide solutions.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:m-0 m-5">
          <Slider {...settings}>
            <div>
              <Image
                src="/assets/odour-control-3.jpg"
                width={600}
                height={600}
                alt="Product Image"
                className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300"
              />
            </div>
            <div>
              <Image
                src="/assets/odour-control-4.jpg"
                width={600}
                height={600}
                alt="Product Image"
                className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  </div>
</section>


      <section className="  text-[#2e2e84] py-12 section_bg  ">
      <div className="max-w-6xl mx-auto text-center space-y-4 ">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to contact us?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          If so, please complete
          <Link
           href={`/contact`}>
          <span className="text-[#2e2e84] font-medium"> the form </span>
          </Link>
          and we will endeavour to provide you with a competitive quote.
        </p>
      </div>
    </section>
</>

  );
};

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default page;
