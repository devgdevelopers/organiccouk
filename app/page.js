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
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const toggleAccordion = () => {
    setIsActive(!isActive);
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1424, // Breakpoint at which these settings will apply
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time on smaller screens
        },
      }
      
      // Add more responsive settings as needed
    ],
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // init Swiper:

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between banner-section bg-white">
        <section className="w-full overflow-hidden">
          <Slider {...settingsSlider} className="flex gap-10 w-full">
            {BannerSlidesData.map((item, id) => (
              <div
                key={id}
                className={`main-hero-slide flex justify-center align-center h-[60vh] p-12 ${item.bgClass}`}
              >
                <div className="my-auto w-inline">
                  <h2>{item.heading}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* below banner */}
        <section className="w-full mx-auto grid justify-center flex-auto gap-5 p-12 ">
          <div className="container mx-auto max-w-[1154px] pb-7">
            <p className=" text-2xl pb-4 text-purple font-semibold mb-4">
              The most advanced organic waste and food waste recycling solution
              in the world
            </p>
            <p className="sm:text-justify mb-4">
              Organicco is an innovative and modern biotechnology company
              specialising in
              <i className="font-bold "> organic and food waste recycling</i>,
              <i className="font-bold "> waste to energy</i>,
              <i className="font-bold "> organic fertiliser</i>, and
              <i className="font-bold "> sustainable engineering consultancy </i>
              services.
            </p>

            <p className="m-0 p-0 mb-4">
              Our business offers affordable technology for solving escalating
              food security problems. The main focus concentrates on
              decarbonisation whilst reducing costs and providing environmental
              benefits for all.
            </p>
            <p className="mb-4">
              This has been achieved with the continuous development of
              Organicco’s closed-loop solution where we waste nothing. Depending
              on the input material our technologies convert organic waste into
              other useful resources, such as fertiliser, animal feed, animal
              protein meal, electricity, heat, steam, grey water, fuel, and
              compressed CO2 i.e., the input material is recycled into a
              commodity with financial value.
            </p>
            <h3 className="text-xl my-4 text-purple">Empowering Businesses</h3>
            <p>
              Organicco provides solutions for empowering businesses to divert
              waste away from expensive traditional disposal options whilst
              helping them meet their net-zero targets. Organicco has
              specifically designed a range of products to convert waste into
              natural assets.
            </p>
          </div>
        </section>

        {/* featured products */}
        <section className="w-full bg-purple-light py-10">
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
        <section className="w-full sm:py-20 p-6 mx-auto">
          <div className="container max-w-[1154px] mx-auto ">
            <div>
              <h1 className="text-xl md:text-2xl  font-bold mb-4 text-center text-purple">
                Featured Solutions
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

        {/* news and blog */}
        <section className=" py-24 px-6 bg-green-light   w-full">
          <div className="w-100 container mx-auto gap-5 md:gap-10 news-main-div">
            <div className="news-text-div my-auto">
              <h1 className="text-xl md:text-2xl font-bold text-start text-green">
                News and Blogs
              </h1>
              <a href="">
                <strong>Climate change is a scientifically proven fact!</strong>
              </a>
              <p className="text-justify">
                As the world slowly reacts to the environmental Armageddon it
                has created for itself it is imperative that urgent action is
                undertaken. The time for sitting on our hands and leaving it to
                others has long past its sell by date. We are all responsible
                for our actions and can and must contribute to solving the
                problems whilst there is still time to make a difference.
              </p>
              <button className="btn bg-green news-blog-btn text-white p-2 rounded-sm my-5">
                Read More
              </button>
            </div>
            <div className="news-slide-div">
              <Slider {...settings} className="flex gap-10">
                {BlogscardDataArray.map((lala, id) => (
                  <div key={id} className="carousel-item p-4 news-car-inner-div">
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

        {/* accordian section */}

        <section className="w-full py-12 max-w-[1154px] ">
          <div className="container mx-auto ">
            <div className=" p-5">
              <h1 className="text-xl md:text-2xl font-extrabold text-center text-green py-3">
                Frequently Asked Questions{" "}
              </h1>
              <p className="text-sm text-center">
                Everything you need to know about the products and services.
                Can't find the answer you're looking for ?{" "}
                <span className="block">
                  <a href="tel:950248458" className="text-purple">
                    Please Talk to our friendly team
                  </a>
                </span>{" "}
              </p>
            </div>
            <div className="">
              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="What is organicco?"
                  onClick={toggleAccordion}
                  className={` outline-none `}
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Who we Are?"
                  className=""
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="What we Do?"
                  className=""
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 4"
                  title="How we Do?"
                  className=""
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
