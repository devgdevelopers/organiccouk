"use client";
import React from "react";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
const servicesSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    margin: 10,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="w-full bg-[#EBF1ED]">
        <div className="container mx-auto py-16">
          <p className="text-[20px] text-green uppercase font-semibold text-center">
            Discover Our
          </p>

          <h3 className="text-[44px] font-bold text-center ">
            Featured Services
          </h3>
          <p className="text-[20px] text-center text-[#7E8287]">
            At Organicco, we pride ourselves on providing cutting-edge solutions
            that empower businesses <br /> and farmers to operate more
            sustainably.
          </p>

          <Slider
            {...servicesSettings}
            className="container my-10 mx-auto services-section "
          >
            <div className=" max-w-[416px] bg-white transition-all product-card mx-auto">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/service1.png"
                  width={300}
                  height={300}
                  alt="Product Image"
                  className=" w-full h-[250px] transition-all"
                  unoptimized
                ></Image>
                <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                  <p className="text-[20px] font-semibold m-0 p-0">
                    Odour Control
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                  Regenerative Catalyst
                </h3>
                <p className="text-[16px] font-open-sans">
                  We have a range of odour control and management systems based
                  on wet scrubbers, venturi scrubbers, carbon...
                </p>
                <hr />
                <Link
                  href="#"
                  className="text-[16px] font-medium text-green hover:text-green-500"
                >
                  View More &gt;
                </Link>
              </div>
            </div>
            <div className=" max-w-[416px] bg-white product-card transition-all">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/service2.png"
                  width={300}
                  height={300}
                  alt="Product Image"
                  className=" w-full h-[250px] transition-all"
                  unoptimized
                ></Image>
                <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                  <p className="text-[20px] font-semibold m-0 p-0">
                    Automation & IoT
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                  Electrical Control Panels
                </h3>
                <p className="text-[16px] font-open-sans">
                  We are mechatronic engineering experts and have more than 15
                  years of experience of delivering complex electrical
                  control...
                </p>
                <hr />
                <Link
                  href="#"
                  className="text-[16px] font-medium text-green hover:text-green-500"
                >
                  View More &gt;
                </Link>
              </div>
            </div>
            <div className=" max-w-[416px] bg-white product-card transition-all">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/service3.png"
                  width={300}
                  height={300}
                  alt="Product Image"
                  className=" w-full h-[250px] transition-all"
                  unoptimized
                ></Image>
                <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                  <p className="text-[20px] font-semibold m-0 p-0">Net-zero</p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-[28px] font-semibold text-green leading-[30px]">
                  Organic & food waste management
                </h3>
                <p className="text-[16px] font-open-sans">
                  In today’s business environment, no company can afford to
                  waste money...
                </p>
                <hr />
                <Link
                  href="#"
                  className="text-[16px] font-medium text-green hover:text-green-500"
                >
                  View More &gt;
                </Link>
              </div>
            </div>
            <div className="max-w-[416px] bg-white product-card transition-all">
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/service4.png"
                  width={300}
                  height={300}
                  alt="Product Image"
                  className=" w-full h-[250px] transition-all"
                  unoptimized
                ></Image>
                <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                  <p className="text-[20px] font-semibold m-0 p-0">
                    Consultancy
                  </p>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                  FEED & EPC
                </h3>
                <p className="text-[16px] font-open-sans ">
                  Our project development arm offering Engineering, Procurement,
                  Construction (EPC) and Project Management is a...
                </p>
                <hr />
                <Link
                  href="#"
                  className="text-[16px] font-medium text-green hover:text-green-500"
                >
                  View More &gt;
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default page;
