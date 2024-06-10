"use client"

import React, { useEffect, useState  } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { SinglePageServicesData } from "/public/assets/data";
import Aos from 'aos';
import 'aos/dist/aos.css'

const page = () => {

  const [products_, setProducts_] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/services');
      const data = await response.json();
      setProducts_(data.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };



  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <section className="flex flex-col  md:mt-[6.5rem] py-10 bg-purple-light">
        <div className="container mx-auto">
          <h2 className=" text-center text-2xl text-purple font-semibold">
            Our Services
          </h2>
          <div className=" pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center mx-auto text-black" data-aos="fade-right" data-aos-duration="600">
            {SinglePageServicesData.map((item, id) => {
              return (
                <Card key={id} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-[450px] h-[500px]">
                  <CardHeader className="">
                    <Image
                      alt="Card background"
                      className="w-full"
                      src={item.titleImage}
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Link
                      href={`/services/${item.link}`}
                      className="text-base uppercase font-bold text-green"
                    >
                      {item.title}
                    </Link>
                    <p className="text-default-500 text-sm text-purple ">
                      <em>{item.subtitle}</em>
                    </p>
                    <p className="text-justify text-sm my-3">
                      {item.servicesDesc}
                    </p>
                    <Link
                      href={`/services/${item.link}`}
                      className="inline-flex items-center rounded-md bg-[#52c42f1f] px-4 py-2 text-sm font-medium text-[#2e2e84] transition-colors duration-300 hover:bg-[#52c42f33] services_link"
                    >
                      Read More
                    </Link>
                  </CardBody>
                </Card>
              );
            })}



            {products_.map((item) => {
              return (
                <Card key={item._id} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-[450px] h-[500px]">
                  <CardHeader className="">
                    <Image
                      alt="Card background"
                      className="w-full"
                      src={item.cardImg}
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Link
                      href={`/services/${item._id}`}
                      className="text-base uppercase font-bold text-green"
                      dangerouslySetInnerHTML={{ __html: item.cardHeading}} 
                    >
                    </Link>
                    <p className="text-default-500 text-sm text-purple ">
                      <em>{item.cardSubHeading}</em>
                    </p>
                    <p className="text-justify text-sm my-3">
                      {item.cardDesc}
                    </p>
                    <Link
                      href={`/services/${item._id}`}
                      className="inline-flex items-center rounded-md bg-[#52c42f1f] px-4 py-2 text-sm font-medium text-[#2e2e84] transition-colors duration-300 hover:bg-[#52c42f33] services_link"
                    >
                      Read More
                    </Link>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto flex flex-col md:flex-row p-3">
          <div className="w-[100%] lg:w-[50%] my-auto mx-auto order-2 lg:order-1">
            <h2 className="text-xl font-semibold text-purple lg:text-left text-center">
              Stay Informed with Our Newsletter
            </h2>
            <p className=" font-normal text-green my-4 lg:text-left text-justify">
              Subscribe to our newsletter and be the first to hear about our
              latest innovations, industry insights, and sustainability tips.
              Join our community and stay connected with Organicco's mission to
              create a greener future.
            </p>

            <form action="" className="flex my-3 gap-3">
              <input type="email" placeholder="Your Email" className="p-3 text-purple w-full newsletter-input rounded-lg"
              />
              <button type="submit" className="newsletter-btn bg-green rounded-lg text-white px-10"> Send</button>
            </form>
          </div>
          <div className="w-[100%] lg:w-[50%] order-1 lg:order-2">
            <Image
              className="w-[100%] mx-auto"
              src="/assets/newsletter.png"
              width={100}
              height={100}
              alt="newsletter"
              unoptimized
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

