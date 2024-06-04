"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from 'aos';
import 'aos/dist/aos.css';
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
          <section className="bg-[#52c42f1f] py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck"><i>eco</i>HERO ATAD</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  Harnessing the power of the naturally occurring process of aerobic digestion, the ‘ecoHERO’ converts organic waste into fertiliser in typically 24 – 72 hours. Systems vary in sizes and are customised to suit individual requirements.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12 ">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">

                <div>
                  <Slider {...settings}>
                    <div>
                      <Image
                        src="/assets/ecohero-olut-1.jpg"
                        width={600}
                        height={600}
                        alt="Product Image"
                        className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300  "
                      />
                    </div>
                    <div>
                      <Image
                        src="/assets/ecohero-loctroi-1.jpg"
                        width={600}
                        height={600}
                        alt="Product Image"
                        className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300  "
                      />
                    </div>
                  </Slider>
                  <div className="md:mt-14 mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Typical Applications</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                    • Agriculture & Farming <br />
                    • Municipal Food Waste<br />
                    • Food Manufacturers & Abattoirs<br />
                    • Commercial Kitchens & Restaurants<br />
                    • Airlines & Cruise Ships<br />
                    • Hotels & Resorts<br />
                    • Supermarkets & Shopping Complexes<br />
                    • Universities & Institutions<br />
                    • Digestate & Sludge Treatment
                  </p>
                </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Product Description</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                    Organicco’s ‘ecoDRYER’ harnesses the surplus thermal energy left unused by AD plants and uses this to heat and dry the digestate. This ensures that running costs are minimal, as not only is the digestate being recycled but the heat of the AD system! is utilised in the process.
                    A rotary drum helps granulation of the fertiliser which is sanitised before being continuously discharged from the system. Unlike digestate, this output is biologically inactive and ready for immediate use.
                    The system is highly automated. The feedstock is automatically pumped into the ‘ecoDRYER’ producing the fertiliser for collection. Organicco will also offer to buy the fertiliser, adding an additional revenue stream to compliment the biogas production.
                  </p>
                </div>
              </div>
              <div className="space-y-6 md:col-span-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Bespoke Solutions</h2>
                  <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify ">
                    Experience shows all clients require a unique solution. Quick fix ‘off the shelf’ products with their ‘square pegs round holes’ approach are never the answer. Organicco’s experienced work force would ensure the correct solution is applied to solve all problems.
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Any size</h2>
                  <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify">
                    Volume is not a problem. Organicco’s systems process daily from as little as 250kg per day up to 30 tonnes per day. In addition, the modular design ensures that increasing the system size is cost effectively managed.
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Superior Design</h2>
                  <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify">
                    All systems are manufactured using only the finest materials and workmanship. The design and manufacture of all our systems is carried out in high-tech facilities using the most reputable suppliers and engineers guaranteeing quality, reliability and longevity.
                  </p>
                </div>
              </div>
            </div>
          </section>
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
