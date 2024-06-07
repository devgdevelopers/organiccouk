import React from "react";
import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <section className="w-full bg-grey footer-section overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 align-center justify-center justify-items-start lg:justify-items-center sm:p-6 p-4 m-auto">
          <div className="">
            <Image
              src="/assets/Organicco_no_bg.png"
              className="my-2 bg-white rounded-xl "
              width={100}
              height={100}
              alt="logo"
              
            ></Image>
            <h3 className="text-lg font-bold text-green">Organicco Ltd</h3>
            <p className="text-green">
              Empowering businesses with the power of innovation by transforming
              by-products into valuable resources.
            </p>
             
             <Link href="https://www.bark.com/en/gb/company/organicco-ltd/aMVpo/" target="_blank">
              <Image src="/assets/bark-pro-medium.png" className="bark-logo my-2" width={120} height={100} alt="bark logo">
              </Image>
             </Link>
        
            {/* <Link href='https://www.bark.com/en/gb/company/organicco-ltd/aMVpo/' target='_blank' class='bark-widget' data-type='pro' data-id='aMVpo' data-image='medium-navy' data-version='3.0'>Organicco Ltd</Link>
              <script type='text/javascript' src='https://d3a1eo0ozlzntn.cloudfront.net/assets/js/frontend-v2/widgets-v2.24a197bed6.v2.js' defer></script> */}
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg text-purple font-bold  mt-6 md:mt-0">Product</h2>
            <ul className="flex flex-col gap-y-3 ">
              <Link href="/products/ecohero"><em>eco</em>Hero</Link>
              <Link href="/products/ecodryer"><em>eco</em>Dryer</Link>
              <Link href="/products/ecoenergy"><em>eco</em>Energy</Link>
              <Link href="/products/ecoman"><em>eco</em>Man</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-lg text-purple font-bold mt-6 md:mt-0">Services</h3>
            <ul className="flex flex-col gap-y-3">
              <Link href="/services/odour_control">Odour Control</Link>
              <Link href="/services/automation">Automation</Link>
              <Link href="/services/net_zero">Net Zero</Link>
              <Link href="/services/consultancy">Consultancy</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3 ">
            <h3 className="text-lg  text-purple mt-6 font-bold  md:mt-0">Resources</h3>
            <ul className="flex flex-col gap-y-3">
              <Link href="/news">News</Link>
              <Link href="/blog">Blog</Link>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-green w-full py-3 flex justify-evenly align-center">
        <p className="text-white text-sm">
          Copyright ©Organicco Ltd. All rights reserved | 2024
        </p>
        <a className="text-white text-sm" href="/privacy-policy">
          Privacy Policy
        </a>
      </div>
    </section>
  );
};

export default footer;
