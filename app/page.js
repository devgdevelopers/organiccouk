"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import "aos/dist/aos.css";
import GreenButton from './component/button'


import {
  BlogscardDataArray,
  servicescardDataArray,
  productcardDataArray,
  BannerSlidesData,
} from "../public/assets/data";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {


  const settingsSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "20px",
    pauseOnHover: false,
  };


  var InventorySettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var servicesSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    margin:10,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


 
  return (
    <>
      <main className="flex w-full flex-col items-center bg-white ">
        {/* banner section */}
        <section className="w-full relative">
          <Slider {...settingsSlider} className="flex gap-10 ">
            {BannerSlidesData.map((item, id) => (
              <>
                <div
                  key={id}
                  className={`w-full h-[90vh] main-hero-slide ${item.bgClass}`}
                ></div>
              </>
            ))}
          </Slider>

          <div
            style={{ transform: "translate(-10%,30%)" }}
            className="absolute w-full top-10"
          >
            <div className="banner-text w-1/2 mx-auto my-auto flex flex-col justify-center gap-3 ">
              <p className="text-white text-[20px] font-semibold uppercase ">
                Welcome to Organicco
              </p>
              <h2
                style={{ lineHeight: "95px" }}
                className="text-[95px] font-bold text-white "
              >
                Affordable <br /> Organic Waste <br /> Management
              </h2>

              <p className="text-[22px] text-white mb-5 font-normal">
                We specialise in solving the organic & food waste problems by
                converting <br /> waste into valuable resources.
              </p>

              <GreenButton text="Learn More"  href="/about"/>
            </div>
          </div>
        </section>

        {/* below banner */}
        <section className="w-full z-10 py-2 md:py-20 bg-grey-texture">
          <div className="w-full mx-auto justify-center z-40">
            <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1">
              <div className="p-5 flex flex-col justify-between">
                <p className="text-[20px]  font-semibold  text-green uppercase">
                  Introduction
                </p>
                <h3
                  style={{ lineHeight: "40px" }}
                  className="text-[44px] text-black font-bold "
                >
                  The most advanced organic <br /> waste and food waste
                  recycling <br /> solution in the world.
                </h3>
                <p className="text-[20px]">
                  Organicco is an innovative and modern biotechnology company
                  specialising in organic and food waste recycling, waste to
                  energy, organic fertiliser, and sustainable engineering
                  consultancy services.
                </p>
                <p className=" text-[20px]">
                  Our business offers affordable technology for solving
                  escalating food security problems. The main focus concentrates
                  on decarbonisation whilst reducing costs and providing
                  environmental benefits for all.
                </p>

                <div className="flex justify-between mt-5">
                  <div className="flex flex-col gap-2">
                    <Image
                      src="/assets/intro-icon1.svg"
                      width={60}
                      height={100}
                      alt="icon1"
                    ></Image>
                    <p className="font-semibold text-[20px] leading-6">
                      Enabling the <br /> transition.
                    </p>
                  </div>

                  <hr className="w-[2px] flex bg-[#C2C2C2] h-full" />
                  <div className="flex flex-col gap-2">
                    <Image
                      src="/assets/intro-icon2.svg"
                      width={60}
                      height={100}
                      alt="icon1"
                    ></Image>
                    <p className="font-semibold text-[20px] leading-6">
                      Collaborate with 149MKM <br /> based in Alberta.
                    </p>
                  </div>
                  <hr className="w-[2px] flex bg-[#C2C2C2] h-full" />

                  <div className="flex flex-col gap-2">
                    <Image
                      src="/assets/intro-icon3.svg"
                      width={60}
                      height={100}
                      alt="icon1"
                    ></Image>
                    <p className="font-semibold text-[20px] leading-6">
                      10+ year’s of research <br /> and development
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden relative w-[70%] mx-auto rounded-[30px]">
                <Image
                  src="/assets/intro-right.png"
                  width={100}
                  height={100}
                  alt="Intro Image"
                  className="w-full h-auto mx-auto object-fill  transition-all hover:scale-110"
                  unoptimized
                />
                <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                  <div>
                    <Image
                      src="/assets/person-icon.svg"
                      width={100}
                      height={100}
                      alt="person-icon"
                      className="mx-auto"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[24px] font-bold">500+</h4>
                    <p className="text-[20px] font-semibold m-0 p-0">
                      Happy <br /> Customer’s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* inventory display section */}
        <section className="w-full  inventory-machine pb-20">
          <div className=" mx-auto">
            <Slider {...InventorySettings} className="w-[70%] mx-auto">
              <div className="  bg-[#EBF1ED] p-10">
                <div className="flex justify-center gap-10">
                  <div className="">
                    <Image
                      src="/assets/machine1.png"
                      width={400}
                      height={300}
                      alt="Inventory Image"
                      className=" w-full"
                      unoptimized
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <p className="text-[20px] font-semibold uppercase text-green">
                      Lorem Ipsum
                    </p>
                    <h3 className="text-[44px] font-bold text-black leading-[45px]">
                      Inventing affordable <br /> organic waste <br />{" "}
                      management
                    </h3>
                    <p className="text-[16px] font-medium">
                      Organicco is an innovative and modern biotechnology
                      company.
                    </p>
                  </div>
                </div>
              </div>

              <div className="  bg-[#EBF1ED] p-10">
                <div className="flex justify-center gap-10">
                  <div className="">
                    <Image
                      src="/assets/machine2.png"
                      width={400}
                      height={300}
                      alt="Inventory Image"
                      className=" w-full"
                      unoptimized
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <p className="text-[20px] font-semibold uppercase text-green">
                      Lorem Ipsum
                    </p>
                    <h3 className="text-[44px] font-bold text-black leading-[45px]">
                      Efficient dryer <br /> technology
                    </h3>
                    <p className="text-[16px] font-medium">
                      Using our innovative rotary drum design
                    </p>
                  </div>
                </div>
              </div>

              <div className="  bg-[#EBF1ED] p-10">
                <div className="flex justify-center gap-10">
                  <div className="">
                    <Image
                      src="/assets/machine3.png"
                      width={400}
                      height={300}
                      alt="Inventory Image"
                      className=" w-full"
                      unoptimized
                    ></Image>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <p className="text-[20px] font-semibold uppercase text-green">
                      Lorem Ipsum
                    </p>
                    <h3 className="text-[44px] font-bold text-black leading-[45px]">
                      Completing the food <br /> cycle!
                    </h3>
                    <p className="text-[16px] font-medium">
                      We specialise in solving the organic & food <br /> waste
                      problems by converting waste by into <br /> valuable
                      resources.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        {/* products section  */}
        <section className="w-full bg-[#EBF1ED] ">
          <div className="container mx-auto py-20">
           <div className=" pl-[100px]">
           <p className="text-[20px] text-green uppercase font-semibold">
              Discover Our
            </p>
            <h3 className="text-[44px] font-bold">Featured Products</h3>
           </div>
            <div className="flex flex-col justify-center lg:flex-row gap-10 my-10">
              <div className=" max-w-[416px] bg-white transition-all product-card">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/product1.png"
                    width={300}
                    height={300}
                    alt="Product Image"
                    className=" w-full h-[300px] transition-all"
                    unoptimized
                  ></Image>
                  <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                    <p className="text-[20px] font-semibold m-0 p-0">
                      <i>eco</i>HERO
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                    Organic Fertiliser Plant
                  </h3>
                  <p className="text-[16px] font-open-sans">
                    The ‘ecoHERO’ is a revolutionary accelerated thermophilic
                    aerobic digestion (ATAD) system.
                  </p>
                  <hr />
                  <Link
                    href="#"
                    className="text-[16px] font-medium text-green "
                  >
                    View More <span className="btn-sign"> &gt;</span>
                  </Link>
                </div>
              </div>
              <div className="max-w-[416px] bg-white product-card transition-all">
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/product2.png"
                    width={300}
                    height={300}
                    alt="Product Image"
                    className=" w-full h-[300px] transition-all"
                    unoptimized
                  ></Image>
                  <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                    <p className="text-[20px] font-semibold m-0 p-0">
                      <i>eco</i>DRYER
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                    Digestate Dryer
                  </h3>
                  <p className="text-[16px] font-open-sans">
                    The ‘ecoDRYER’ is Organicco’s unique efficient dryer. It
                    uses a combination of hot water and...
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
                    src="/assets/product3.png"
                    width={300}
                    height={300}
                    alt="Product Image"
                    className=" w-full h-[300px] transition-all"
                    unoptimized
                  ></Image>
                  <div className="bg-green text-white rounded-l-full w-fit absolute right-0 bottom-5 px-10 py-3 flex justify-center items-center">
                    <p className="text-[20px] font-semibold m-0 p-0">
                      <i>eco</i>ENERGY
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[45px]">
                    Waste-to-Energy
                  </h3>
                  <p className="text-[16px] font-open-sans">
                    Organicco’s ‘ecoENERGY’ is an integrated waste to energy
                    solution. Carefully selected combinations...
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
            </div>
          </div>
        </section>

        {/* video section  */}
        <section className="video-section-img ">
          <div className="container mx-auto py-40">
          <p className="text-[44px] text-white font-bold text-center">
          Organicco Presentation
            </p>
           
            <p className="text-[20px] text-center text-white my-3 mb-10 leading-8">At Organicco, we are committed to revolutionizing sustainable agriculture and eco-friendly <br /> solutions. Our mission is to deliver innovative products that help farmers and businesses <br /> transition to a more sustainable and environmentally conscious future.</p>
            <video width="70%" height="240" controls className="mx-auto" poster="/assets/organicco-vid-poster.jpg">
              <source src="/assets/videoSec.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>




          {/* services section  */}
          <section className="w-full bg-[#EBF1ED]">
          <div className="container mx-auto py-16">
            <p className="text-[20px] text-green uppercase font-semibold text-center">
              Discover Our
            </p>
           
            <h3 className="text-[44px] font-bold text-center ">Featured Services</h3>
            <p className="text-[20px] text-center text-[#7E8287]">
            At Organicco, we pride ourselves on providing cutting-edge solutions that empower businesses <br /> and farmers to operate more sustainably. 
            </p>

             <Slider {...servicesSettings} className="container my-10 mx-auto services-section ">
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
                  We have a range of odour control and management systems based on wet scrubbers, venturi scrubbers, carbon...
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
                  We are mechatronic engineering experts and have more than 15 years of experience of delivering complex electrical control...
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
                    <p className="text-[20px] font-semibold m-0 p-0">
                    Net-zero
                    </p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-[28px] font-semibold text-green leading-[30px]">
                  Organic & food waste management
                  </h3>
                  <p className="text-[16px] font-open-sans">
                  In today’s business environment, no company can afford to waste money...
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
                    Our project development arm offering  Engineering, Procurement, Construction (EPC) and Project Management is a...
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

        {/* fixed button section  */}

        <div className="my-auto fixed -bottom-1  right-20">
      <GreenButton href="#lala" text="Contact Us"></GreenButton>
    </div>

        {/* contact us section  */}
           <div id="lala">
           </div>
      </main>
    </>
  );
}
