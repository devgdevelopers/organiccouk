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
<section className="flex min-h-screen flex-col items-center justify-start md:mt-[8rem]">
        <div className="bg-white dark:bg-gray-800">
          <section className="bg-[#52c42f1f] py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck">
                Odour Control
                </h1>
                <p className="text-[#388521] font-semibold dark:text-gray-400 ">
                We have range of odour control and management systems based on wet scrubbers, venturi scrubbers, carbon filters, regenerative catalysts, centrifugal separators, and plasma systems.
                </p>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Wet scrubbers are cost effective and comes in all shapes and sizes whilst regenerative catalyst and plasma systems require much less water and maintenance.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12">
  <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-2 space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
        Regenerative catalyst system
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
        A regenerative catalyst system eliminates odorous, gaseous compounds such as reduced sulphur compounds (e.g. hydrogen sulphide and mercaptans), aromatics, ammonia and other types of VOCs. These compounds are formed in for example biogas production, biogas upgrading, sludge holding tanks, sanitisation tanks, sewage pipelines, sewage pumping stations and sewage treatment plants. Typically, this process can achieve odour reduction of 98-99.5%.
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
        Impingement plate wet scrubber
        </h2>
        <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify">
        The wet scrubbers use impingement plate to treat exhaust gases due to their ability to remove solid, liquid and gaseous contaminants with a high degree of efficiency. A single stage impingement plate scrubber would be expected to remove 90% of particles with an average size of 1 micron and a two-stage unit would be expected to remove 99% at this size. Gaseous contaminants are removed with the same degree of efficiency when using the appropriate acid/alkaline scrubbing liquor.
        </p>
      </div>
    </div>
    <div className="space-y-6 ">
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
