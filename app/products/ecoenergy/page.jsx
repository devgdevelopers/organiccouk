"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from 'aos';
import 'aos/dist/aos.css';
const page = () => {


  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-start md:mt-[8rem]">
        <div className="bg-white dark:bg-gray-800">
          <section className="bg-[#52c42f1f] py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck"><i>eco</i>ENERGY Waste-to-Energy</h1>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                A waste to energy (W2E) system, which uses a gasifier to produce fuel to generate electricity and thermal energy.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12 ">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">

                <div>
                <Image
                        src="/assets/ecoenergy-1.jpg"
                        width={600}
                        height={600}
                        alt="Product Image"
                        className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300  "
                      />
                  <div className="md:mt-14 mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Typical Applications</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                    • Agriculture & Farming <br />
                    • Municipal Food Waste<br />
                    • Food Manufacturers & Abattoirs<br />
                    • Airports & Ship Port<br />
                    • Zoos & Leisure Complexes<br />
                    • Hotels & Resorts<br />
                    • Supermarkets & Shopping Complexes<br />
                    • Universities & Institutions<br />
                    • Mining & Fishing Industries

                  </p>
                </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Product Description</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                  As an optional feature, ''ecoENERGY' can be integrated with the ecoHERO unit for producing and capturing the CO2 emissions from the ecoENERGY. It is captured into a compressed liquid form thus making the entire process carbon negative thus helping meet net-zero targets. The captured CO2 becomes another saleable commodity and usuable in many applications such as refrigerant.
                  </p>
                </div>
              </div>
              <div className="space-y-6 md:col-span-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">How it works</h2>
                  <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify ">
                  The process starts by feeding feedstock into the gasifier, which produces syngas. It goes through a two-stage clean-up process before used as a fuel for producing combine heat and power (CHP). The exhaust from the CHP is pumped into the primary aerobic digester tank and passes through a secondary aerobic digester. It is then treated in a wet-scrubber and a regenerative catalyst scrubber before being released into atmosphere.
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Fuel</h2>
                  <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify">
                  The gasifier process produces hydrogen and becomes fuel for the CHP. Carbon dioxide and nitrogen are also produced. Both these gases are non-combustible, and nitrogen is captured in the aerobic digester in a granular form. The CO2 emission from aerobic digester is captured as compressed liquid CO2.
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">Why gasification?</h2>
                  <p className="text-gray-500 dark:text-gray-400 my-3 leading-relaxed text-justify">
                  Solid biomass fuels are usually inefficient and can only be used for certain limited applications. The direct combustion is generally ineffectual, smokey and difficult to control. In addition, it converts solid fuel to thermal energy and whilst it is possible that heat from this process can be used in cooking, heating space and water or in generating steam (usually with low efficiency), this generation of power requires a high/medium pressure steam boiler along with a steam engine or turbine with accessories. This increases costs and difficulties for small power needs (a few kilowatts to megawatts), this conversion technology is not only capital intensive and complex, but also very inefficient. Gasification is far more efficient and cost effective.
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
  )
}

export default page;

