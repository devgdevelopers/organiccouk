import React from "react";
import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <section className="w-full footer-section overflow-hidden bg-[#3CAA35] h-[850px] md:h-[364px] relative">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 align-center justify-center items-center justify-items-start lg:justify-items-center sm:p-6 p-4 m-auto  h-[364px] ">
          <div className=" flex   gap-2">
            <div>
            <Image
            src="/Frame 289.svg"
            width={250}
            height={250}
            alt="home-below-banner"
            className="items-start justify-start "
            unoptimized
          />
            </div>

            <div className="flex flex-col gap-5">   
                       <h3 className="text-[30px]  font-extrabold text-white ">Organicco Ltd</h3>
            <p className="text-white text-[18px] font-medium">
              Empowering businesses with the power of innovation by transforming
              by-products into valuable resources.
            </p>
            <span className="flex gap-3 text-white text-[16px] "><u>Follow Us On </u><span><img src="/Vector.svg"/></span>
            </span></div>

             
             {/* <Link href="https://www.bark.com/en/gb/company/organicco-ltd/aMVpo/" target="_blank">
              <Image src="/assets/bark-pro-medium.png" className="bark-logo my-2" width={120} height={100} alt="bark logo">
              </Image>
             </Link> */}
        
            {/* <Link href='https://www.bark.com/en/gb/company/organicco-ltd/aMVpo/' target='_blank' class='bark-widget' data-type='pro' data-id='aMVpo' data-image='medium-navy' data-version='3.0'>Organicco Ltd</Link>
              <script type='text/javascript' src='https://d3a1eo0ozlzntn.cloudfront.net/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js' defer></script> */}
          </div>
          <div className="flex flex-col md:gap-y-3 w-full items-center">
            <h2 className="text-[22px] text-white font-bold  mt-6 md:mt-0">Product</h2>
            <ul className="flex flex-col gap-y-3 text-white">
              <Link href="/products/ecohero" ><em>eco</em>Hero</Link>
              <Link href="/products/ecodryer"><em>eco</em>Dryer</Link>
              <Link href="/products/ecoenergy"><em>eco</em>Energy</Link>
              <Link href="/products/ecoman"><em>eco</em>Man</Link>
            </ul>
          </div>
          <div className=" flex flex-col md:gap-y-3 w-full items-center md:items-start">
            <h2 className="text-[22px] text-white font-bold  mt-6 md:mt-0">Services</h2>
            <ul className="flex flex-col gap-y-3">
              <Link href="/services/odour_control">Odour Control</Link>
              <Link href="/services/automation">Automation</Link>
              <Link href="/services/net_zero">Net Zero</Link>
              <Link href="/services/consultancy">Consultancy</Link>
            </ul>
          </div>
          <div className="flex flex-col md:gap-y-3 md:mt-[-90px] w-full items-center md:items-start">
            <h2 className="text-[22px] text-white font-bold  mt-6 md:mt-0">Resources</h2>
            <ul className="flex flex-col gap-y-3">
              <Link href="/news">News</Link>
              <Link href="/blog">Blog</Link>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#F5F5F5] w-full py-3 flex  align-center justify-center gap-3 h-[51px] absolute bottom-0">
        <p className="text-black text-[16px] font-semibold">
          Copyright ©Organicco Ltd. All rights reserved | 2024
        </p>
        <div className="h-[27px] bg-black w-[1px] flex  align-center justify-center"></div>
        <a className="text-[#312C85] text-[16px] font-semibold" href="/privacy-policy">
          Privacy Policy
        </a>
      </div>
    </section>
  );
};

export default footer;
