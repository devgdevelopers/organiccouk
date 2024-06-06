"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const page = () => {


  return (

<>
<section className="flex  flex-col items-center justify-start md:mt-[8rem]">
        <div className="bg-white  w-full">
          <section className="bg-[#52c42f1f] py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck">
                Consultancy
                </h1>
                <p className="text-[#388521] font-semibold  ">
                Organicco is a multifaceted company focused on sustainable and responsible development, front-end engineering design, EPC and project management
                </p>

              </div>
            </div>
          </section>
          <section className="py-12">
  <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    <div className="md:col-span-2 space-y-6">
      <div>
        <p className="text-gray-500  mt-4 leading-relaxed text-justify">
          Our project development arm is fully disciplined in Engineering, Procurement, Construction (EPC) and Project Management being a company in facility design for the refined fuels, renewable fuels, renewable energy, fertiliser, and transportation industries. We are a nimble group that uses the fundamentals of engineering and management practices allowing us to pivot as necessary adding significant value to our clients’ projects.
        </p>
        <p className="text-gray-500  mt-4 leading-relaxed text-justify">
          Our expertise includes commodities such as organic fertiliser, Hydrogenation-Derived Renewable Diesel (HDRD), biogas, hydrogen, tallow, propane, butane, renewable diesel, various refined fuels, ammonia, urea, bentonite, potash, and sulphur. Our past broad experience includes material handling, processing, full facility design, carbon capture, transportation, rail design, blending, and rail and truck loading & unloading. Putting all of this together, Organicco’s Engineering team offers full project execution, flexible pricing structures and cost assurance, providing the best customer experience possible.
        </p>
        </div>
        <div className="grid grid-cols-2 md:gap-48 gap-2 justify-center items-center">
          <div>
            <p className="text-gray-500  mt-4 leading-relaxed">

              <span className="text-[#2e2e84] font-medium"> We offer the following services: </span>
              <br />
              <DoneAllIcon className="text-green" /> pre-feasibility and feasibility studies
              <br />
              <DoneAllIcon className="text-green" /> front-end engineering design
              <br />
              <DoneAllIcon className="text-green" /> detailed engineering design
              <br />
              <DoneAllIcon className="text-green" /> making of prototypes
              <br />
              <DoneAllIcon className="text-green" /> electrical and control panel design
              <br />
              <DoneAllIcon className="text-green" /> procurement and project management
              <br />
              <DoneAllIcon className="text-green" /> value engineering & cost-effective manufacturing
            </p>
          </div>
          <div>
            <p className="text-gray-500  mt-4 leading-relaxed ">
            <span className="text-[#2e2e84] font-medium"> Experts In: </span>
              <br />
              <DoneAllIcon className="text-green" /> Waste Management
              <br />
              <DoneAllIcon className="text-green" /> Wastewater treatment
              <br />
              <DoneAllIcon className="text-green" /> Energy Transition
              <br />
              <DoneAllIcon className="text-green" /> Housing & Construction
              <br />
              <DoneAllIcon className="text-green" /> Transportation
              <br />
              <DoneAllIcon className="text-green" /> IT & Software
              <br />
              <DoneAllIcon className="text-green" /> Product Development
              <br />
              <DoneAllIcon className="text-green" /> Disruptive Technologies
              <br />
              <DoneAllIcon className="text-green" /> Research & Development
            </p>
          </div>
        </div>

    </div>
    <div className="md:flex md:items-center md:justify-center">
      <div className="w-full max-w-md mx-auto">

          <div>
            <Image
              src="/assets/net-zero-consultancy-1.jpg"
              width={600}
              height={600}
              alt="Product Image"
              className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300"
            />
          </div>

      </div>
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
        <p className="text-gray-500  max-w-xl mx-auto">
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
