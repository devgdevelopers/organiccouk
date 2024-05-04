"use client";
import React, { useState } from "react";
import {
  BlogscardDataArray,
  servicescardDataArray,
  productcardDataArray,
  BannerSlidesData,
} from "../public/assets/data";
import Image from "next/image";
import Card from "./component/card";
import BlogCard from "./component/BlogCard";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
 

  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (key) => {
    setActiveItem(key === activeItem ? null : key);
  };



  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerPadding: "20px",
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "30px",
    arrows: true, // Enable arrows for navigation
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more responsive settings as needed
    ],
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // init Swiper:

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between banner-section bg-white">
        {/* <section className="w-full overflow-hidden">
      <Slider {...settingsSlider} className="flex gap-10 w-full">
        {BannerSlidesData.map((item, id) => (
        <div key={id} className={`main-hero-slide flex justify-center align-center h-[60vh] p-12 ${item.bgClass}`}>
          <div className="my-auto w-inline">
            <h2>{item.heading}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
        ))}
      </Slider>
    </section> */}

        <section className="w-full main-banner-img ">
          <Image
            className="w-full sm:h-screen h-96 "
            src="/assets/banner-hero.jpg"
            height={100}
            width={100}
            unoptimized
          />
        </section>

        {/* below banner */}
        <section className="w-full mx-auto  justify-center py-10 z-40">
          <div className="container mx-auto sm:flex sm:flex-col-2 gap-10">
            <div className="p-10 ">
              <p className="text-klg  text-purple font-semibold">about us</p>
              <p className=" text-xl pb-4 text-purple font-semibold mb-2">
                The most advanced organic waste and food waste recycling
                solution in the world
              </p>
              <p className="sm:text-justify mb-4">
                Organicco is an innovative and modern biotechnology company
                specialising in
                <i className="font-bold "> organic and food waste recycling</i>,
                <i className="font-bold "> waste to energy</i>,
                <i className="font-bold "> organic fertiliser</i>, and
                <i className="font-bold ">
                  {" "}
                  sustainable engineering consultancy{" "}
                </i>
                services.
              </p>

              <p className="m-0 p-0 mb-4">
                Our business offers affordable technology for solving escalating
                food security problems. The main focus concentrates on
                decarbonisation whilst reducing costs and providing
                environmental benefits for all.
              </p>
              <p className="mb-4">
                This has been achieved with the continuous development of
                Organicco’s closed-loop solution where we waste nothing.
                Depending on the input material our technologies convert organic
                waste into other useful resources, such as fertiliser, animal
                feed, animal protein meal, electricity, heat, steam, grey water,
                fuel, and compressed CO2 i.e., the input material is recycled
                into a commodity with financial value.
              </p>
              <h3 className="text-xl my-4 text-green font-bold">
                Empowering Businesses
              </h3>
              <p>
                Organicco provides solutions for empowering businesses to divert
                waste away from expensive traditional disposal options whilst
                helping them meet their net-zero targets. Organicco has
                specifically designed a range of products to convert waste into
                natural assets.
              </p>
            </div>
            <div className="get-q-form-home   bg-white pt-2 pb-5 mx-auto">
              
              <form className="bg-white rounded-xl  sm:-mt-32 shadow-lg pt-2 pb-6 px-5 mx-auto">
              <p className="text-lg py-6  text-green">send a message</p>
              <h1 className="text-2xl font-bold my-3 text-purple">request a call back</h1>

                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Enail"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border  rounded w-full py-5 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="How can we help you ?"
                  />
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="terms-check "
                    id="TermsCheck"
                    className=""
                  />
                  <label htmlFor="terms-check" className="px-3">
                    I agree to the terms of service.
                  </label>
                </div>
                <div className="flex justify-center items-center w-full">
                  <button
                    className="w-full news-blog-btn mt-5  bg-green text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline news-blog-btn" 
                    type="button"
                  >
                    Get A Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>


        {/* featured products */}
        <section className="w-full py-10">
          <div className="container mx-auto">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-10 text-center text-purple">
                Featured Products
              </h1>
            </div>
            <div className="flex flex-row container gap-5 flex-wrap align-center justify-center flex-auto">
              {productcardDataArray.map((lala, id) => (
                <Card
                  key={id}
                  title={lala.title}
                  subtitle={lala.subtitle}
                  desc={lala.desc}
                  bgClass={lala.bgClass}
                  cardLink={lala.cardLink}
                />
              ))}
            </div>
          </div>
        </section>

        {/* video section */}
        <section className="container py-12">
          <h1 className="text-xl md:text-2xl font-bold  text-center text-purple mb-6">
            Organicco Presentation
          </h1>
          <div className="mx-auto">
            <video
              className="mx-auto w-[90%] sm:w-[70%]"
              width="70%"
              height="240"
              controls
              muted
              poster="/assets/organicco-vid-poster.jpg"
            >
              <source
                src="https://organicco.uk/video/Organicco%20presentation-1222.mp4"
                type="video/mp4"
              />
              <source
                src="https://organicco.uk/video/Organicco%20presentation-1222.ogg"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* featured services */}
        <section className="w-full sm:py-20 p-6 mx-auto bg-green-light">
          <div className="container max-w-[1154px] mx-auto ">
            <div>
              <h1 className="text-xl md:text-2xl  font-bold mb-4 text-center text-purple">
                Featured Solutions
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {servicescardDataArray.map((lala, id) => (
                <BlogCard
                  key={id}
                  title={lala.title}
                  subtitle={lala.subtitle}
                  desc={lala.desc}
                  cardImage={lala.cardImage}
                  cardLink={lala.cardLink}
                />
                
              ))}
            </div>
          </div>
        </section>

        
        {/* accordian section */}

        <section className="w-full py-12  ">
          <div className="container mx-auto grid sm:grid-cols-2">
            <div className="p-5 my-auto">
              <h1 className=" sm:text-xl md:text-3xl font-extrabold  text-green py-3">
                Frequently Asked Questions{" "}
              </h1>
              <p className="text-sm sm:text-xl ">
                Everything you need to know about the products and services.
                <br />
                Can't find the answer you're looking for ?{" "}
                <span className="block">
                  <a href="tel:950248458" className="text-purple">
                    Please Talk to our friendly team
                  </a>
                </span>{" "}
              </p>
            </div>
            <div className="p-5">
            <Accordion defaultExpandedKeys={["1"]}>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={<span className={`${activeItem === "1" ? "text-black" : "text-green"}`}>What is organicco?</span>}
        onClick={() => toggleAccordion("1")}
        className={`outline-none ${activeItem === "1" ? "bg-green-200" : ""}`}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title={<span className={`${activeItem === "2" ? "text-black" : "text-green"}`}>Who we Are?</span>}
        onClick={() => toggleAccordion("2")}
      
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={<span className={`${activeItem === "3" ? "text-black" : "text-green"}`}>What we Do?</span>}
        onClick={() => toggleAccordion("3")}
       
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title={<span className={`${activeItem === "4" ? "text-black" : "text-green"}`}>How we Do?</span>}
       
       
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
            </div>
          </div>
        </section>



{/* news and blog */}
<section className=" py-24 px-6   w-full">
          <div className="w-100 container mx-auto gap-5 md:gap-20 news-main-div">
            <div className="mx-auto text-center">
              <h1 className="text-xl md:text-3xl my-5 font-bold text-green">
                hub news
              </h1>
             
            </div>
  
            <div className="w-full ">
            <Slider {...settings} className="flex gap-15 justify-center">
            {BlogscardDataArray.map((lala, id) => (
                  <div
                    key={id}
                    className="carousel-item p-10 news-car-inner-div flex justify-center my-auto "
                  >
                    <BlogCard
                      title={lala.title}
                      desc={lala.desc}
                      cardImage={lala.cardImage}
                      cardLink={lala.cardLink}
                    />
                  </div>
                ))}
                </Slider>
            </div>
          </div>
        </section>


      </main>
    </>
  );
}
