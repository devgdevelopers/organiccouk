import React from "react";
import Link from "next/link";
import Image from "next/image";

const footer = () => {
  return (
    <section className="w-full bg-purple footer-section overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 align-center justify-items-start sm:justify-items-center sm:p-16 p-4 m-auto">
          <div className="">
            <Image
              src="/assets/Organicco_no_bg.png"
              className="my-2 bg-white rounded-xl "
              width={100}
              height={100}
              alt="logo"
            ></Image>
            <h3 className="text-lg font-bold text-green">Organicco Ltd</h3>
            <p className="text-white">
              Empowering businesses with the power of innovation by transforming
              by-products into valuable resources.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg text-green-light-link mt-6 md:mt-0">Product</h2>
            <ul className="flex flex-col gap-y-3 ">
              <Link href="/products/ecohero">ECOHero</Link>
              <Link href="/products/ecodryer">ECODryer</Link>
              <Link href="/products/ecoenergy">ECOEnergy</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-lg text-green-light-link mt-6 md:mt-0">Services</h3>
            <ul className="flex flex-col gap-y-3">
              <Link href="/services/odour-control">Odour Control</Link>
              <Link href="/services/automation">Automation</Link>
              <Link href="/services/net-zero">Net Zero</Link>
              <Link href="/services/consultancy">Consultancy</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-lg  text-green-light-link mt-6 md:mt-0">Resources</h3>
            <ul className="flex flex-col gap-y-3">
              <Link href="/products/ecohero">News</Link>
              <Link href="/products/ecohero">Blog</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-dark-purple w-full py-3 flex justify-evenly align-center">
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
