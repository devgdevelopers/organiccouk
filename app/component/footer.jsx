import React from "react";
import Link from "next/link";
import Image from "next/image";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GreenButton from './button';


const footer = () => {
  return (
   <>
   
   <section className="w-full footer-section overflow-hidden bg-[#EBF1ED] relative">
     
   <section className="w-full py-14 sticky bg-white " >
  <div className="container mx-auto flex justify-between p-5">
    <div >
      <p className="uppercase text-[20px] text-green font-semibold">
      Feel free to reach out to us!

      </p>
    <h3 className="text-[44px] font-bold leading-[45px] mt-3">
    We’re here to help you with any inquiries about our <br /> sustainable solutions and products.
    </h3>
    </div>
    <div className="my-auto right-5">
    <GreenButton text="Contact Us"  href="/contact"/>
    </div>
   
  </div>
</section>

      <div className="container mx-auto py-10 ">
        <div className=" grid grid-cols-5 justify-center align-center">
          <div className="">
            <div>
              <Link href="/">
              <Image
                src="/assets/Organicco_no_bg.png"
                width={100}
                height={250}
                alt="home-below-banner"
                className="items-start justify-start "
                unoptimized
              />


              </Link>
              <p className="text-[#7E8287] text-[16px]">
                Empowering businesses with <br /> the power of innovation by
                transforming <br /> by-products into valuable resources.
              </p>
            </div>
          </div>
          <div className=" pl-20">
            <h2 className="text-[20px] text-black font-bold  mt-6 md:mt-0 uppercase mb-4">
              Product
            </h2>
            <ul className="flex flex-col gap-y-1 text-[#7E8287] hover:text-green text-[16px]">
              <Link
                href="/products/ecohero"
                className=" hover:text-green"
              >
                <em>eco</em>Hero
              </Link>
              <Link href="/products/ecodryer">
                <em>eco</em>Dryer
              </Link>
              <Link href="/products/ecoenergy">
                <em>eco</em>Energy
              </Link>
              <Link href="/products/ecoman">
                <em>eco</em>Man
              </Link>
            </ul>
          </div>
          <div className=" pl-20">
            <h2 className="text-[20px] text-black font-bold  mt-6 md:mt-0 uppercase mb-4">
              Services
            </h2>
            <ul className="flex flex-col gap-y-1 text-[#7E8287]">
              <Link href="/services/odour_control">Odour Control</Link>
              <Link href="/services/automation">Automation</Link>
              <Link href="/services/net_zero">Net Zero</Link>
              <Link href="/services/consultancy">Consultancy</Link>
            </ul>
          </div>
          <div className=" pl-10">
            <h2 className="text-[20px] text-black font-bold  mt-6 md:mt-0 uppercase mb-4">
              Resources
            </h2>
            <ul className="flex flex-col gap-y-1 text-[#7E8287]">
              <Link href="/news">News</Link>
              <Link href="/blog">Blog</Link>
            </ul>
          </div>
          <div className=" pl-8">
            <h2 className="text-[20px] text-black font-bold  mt-6 md:mt-0 uppercase mb-4">
              Contact us
            </h2>
            <ul className="flex flex-col gap-y-1 text-[#7E8287]">
              <p>
                Head Office : Oranicco Ltd, <br /> 3rd. Floor, 86-90 Paul
                Street, <br />
                London EC2A 4NE <br /> United Kingdom
              </p>
              <Link href="tel:+44 (0)20 8133 3129">
                <PhoneIcon className="text-green" /> +44 (0) 20 8133 3129
              </Link>
              <Link href="mailto:enquiry@organicco.uk">
                <EmailOutlinedIcon className="text-green" /> enquiry@organicco.uk
              </Link>
            </ul>
          </div>
        </div>
        
      </div>




     
    </section>

    <section className="w-full bg-[#fff] relative">
       <div className=" container mx-auto text-center  w-full py-3 flex  align-center justify-between gap-3 h-[51px] ">
       
       <div>
        <Link className="underline text-[#7E8287]" href="">Privacy Policy</Link>
       </div>

       <div>
       <p className="text-[#7E8287] text-[16px]">
          Copyright ©Organicco Ltd. All rights reserved | 2024
        </p>
       </div>
        <div className="flex gap-3">
          <Link href="/"> 
          <InstagramIcon className=" text-green " />
        </Link>
        <Link href="/">
          <LinkedInIcon className=" text-green" />
        </Link>
        <Link href="/">
          <XIcon className=" text-green" />
        </Link>
        <Link href="/">
          <LocationOnIcon className=" text-green" />
        </Link>
          </div>
      </div>
    </section>
   
   </>
  );
};

export default footer;
