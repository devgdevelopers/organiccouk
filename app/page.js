"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VideoPlayer from './component/VideoPlayer '

import {
  BlogscardDataArray,
  servicescardDataArray,
  productcardDataArray,
  BannerSlidesData,
} from "../public/assets/data";
import Image from "next/image";
import Card from "./component/card";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BlogCard from "./component/BlogCard";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);
  const playerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handlePlay = () => {
    if (playerRef.current) {
      // Seek to 10 seconds when the video starts playing
      playerRef.current.seekTo(11);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease",
      mirror: true,
      delay: "0",
    });
  }, []);

  const settingsSlider = {
    dots: false,
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
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
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
      <main className="flex w-full flex-col items-center bg-white overflow-x-hidden">
        <section className="w-full ">
          <Slider {...settingsSlider} className="flex gap-10 w-full">
            {BannerSlidesData.map((item, id) => (
              <div
                key={id}
                className={`w-full h-[65vh] md:h-[100vh] main-hero-slide flex justify-center align-center p-12
          ${item.bgClass}`}
              >
                <div className="container mx-auto flex flex-col justify-center h-full">
                  <h2 className="text-[32px] lg:text-[60px]  text-white">
                    {item.heading}
                  </h2>
                  <p className="text-[15px] lg:text-[20px] text-white">
                    {item.desc}
                  </p>
                  <a
                    href="/about"
                    type="submit"
                    className="my-5 p-3 text-center text-sm bg-white text-green inline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* below banner */}
        <section className="w-full z-10 bg-green-light py-2 md:py-10">
          <div className="w-full mx-auto justify-center z-40">
            <div className="container mx-auto block lg:flex">
              <div className="p-5 md:p-10 w-[100%]  lg:w-[130%] ">
                <p className="text-xl md:text-2xl font-bold mb-4 text-purple">
                  About Us
                </p>
                <p className=" text-xl pb-4 text-purple font-semibold mb-2">
                  The most advanced organic waste and food waste recycling
                  solution in the world
                </p>
                <p className="text-justify mb-4">
                  Organicco is an innovative and modern biotechnology company
                  specialising in
                  <i className="font-bold ">
                    {" "}
                    organic and food waste recycling
                  </i>
                  ,<i className="font-bold "> waste to energy</i>,
                  <i className="font-bold "> organic fertiliser</i>, and
                  <i className="font-bold ">
                    {" "}
                    sustainable engineering consultancy{" "}
                  </i>
                  services.
                </p>

                <p className="m-0 p-0 mb-4 text-justify">
                  Our business offers affordable technology for solving
                  escalating food security problems. The main focus concentrates
                  on decarbonisation whilst reducing costs and providing
                  environmental benefits for all.
                </p>
                <p className="mb-4 text-justify">
                  This has been achieved with the continuous development of
                  Organicco’s closed-loop solution where we waste nothing.
                  Depending on the input material our technologies convert
                  organic waste into other useful resources, such as fertiliser,
                  animal feed, animal protein meal, electricity, heat, steam,
                  grey water, fuel, and compressed CO2 i.e., the input material
                  is recycled into a commodity with financial value.
                </p>
                <h3 className="text-xl my-4 text-green font-bold">
                  Empowering Businesses
                </h3>
                <p className="text-justify">
                  Organicco provides solutions for empowering businesses to
                  divert waste away from expensive traditional disposal options
                  whilst helping them meet their net-zero targets. Organicco has
                  specifically designed a range of products to convert waste
                  into natural assets.
                </p>
              </div>
              <div className="get-q-form-home w-[85%] lg:w-[70%]  pt-2 pb-5 mx-auto">
                <form className="bg-white rounded-xl  lg:-mt-32 shadow-lg pt-2 pb-6 px-7 mx-auto">
                  <p className="text-lg py-6  text-green">send a message</p>
                  <h1 className="text-2xl font-bold my-3 text-purple">
                    Request a call back
                  </h1>

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
                      id="Email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="Phone"
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      className="shadow appearance-none border  rounded w-full py-5 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      type="text"
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
                      I agree to the terms of service.{" "}
                      <span>
                        <Link
                          href="/privacy-policy"
                          className="text-green text-sm"
                        >
                          Privacy Policy
                        </Link>
                      </span>
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
          </div>
        </section>

        {/* featured products */}

    <section className="w-full  py-20">
      <div className="container mx-auto flex gap-10 flex-col">
        <div>
          <h1 className="text-xl md:text-2xl font-bold  text-center text-purple">
            Featured Products
          </h1>
        </div>
        <div data-aos="zoom-in"
          className="flex flex-row container gap-10 flex-wrap align-center justify-center flex-auto">
          {productcardDataArray.map((lala, id) => (
          <Card key={id} title={lala.title} subtitle={lala.subtitle} desc={lala.desc} bgClass={lala.bgClass}
            cardLink={lala.cardLink} />
          ))}
        </div>
      </div>
    </section>

    {/* image section */}
    <section className="z-40 w-full mx-auto ">
      <div className="image-section w-full flex justify-center py-20 lg:py-40 px-10">
        <div className="flex justify-center z-50 container " data-aos="fade-up">
          <div className="text-white text-[20px] lg:text-[40px] font-bold text-center my-auto">
            We're committed to leading the charge in tackling
            environmental challenges through{" "}
            <span className="text-[#32d900] text">our innovative solutions</span>
          </div>
        </div>
      </div>
    </section>

        {/* video section */}
        <section className="w-full bg-white">
          <div className="relative container my-auto mx-auto flex lg:flex-row flex-col p-5">
            <div className="  w-[100%] lg:w-[50%]  my-auto p-2 ">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-purple">
                Get to Know the Heart Behind Organicco
              </h3>
              <p className="text-green text-[15px] text-justify">
                Embark on a visual journey through Organicco's ethos,
                innovations, and commitment to sustainability with our
                compelling About Us video. Discover the faces and stories behind
                our groundbreaking work, as we strive to redefine the future of
                waste management and environmental stewardship. Join us in our
                mission to create a greener, more sustainable world for
                generations to come.
              </p>
            </div>

            {/* <div className="relative  w-[100%] lg:w-[50%]">
              <div onClick={togglePlay}>
                {!isPlaying && <PlayCircleIcon className="play-icon" />}
              </div>
              <ReactPlayer
                ref={playerRef}
                className="react-player bg-none rounded-lg my-20 w-full z-20 mx-auto"
                url="/assets/videoSec.mp4"
                playing={isPlaying}
                width="90%"
                height="auto"
                onPlay={handlePlay}
              />  
            </div>   */}
            <VideoPlayer />
          </div>  
        </section>  

        {/* featured services */}
        <section
          data-aos="fade-in"
          className="w-full py-20 px-4  mx-auto bg-grey flex justify-center "
        >
          <div className="container mx-auto my-auto flex flex-col gap-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-10 text-center text-purple">
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

    <section className="py-10 md:py-20 w-full  ">
      <div className="container p-5 mx-auto flex md:flex-row flex-col">
        <div data-aos="fade-right" className=" my-auto w-full lg:w-[80%]">
          <h1 className="  text-xl md:text-2xl font-bold mb-4 text-purple">
            Frequently Asked Questions{" "}
          </h1>
          <p className="text-sm sm:text-sm mb-5">
            Find quick solutions to your questions about our services,
            operations, and sustainability efforts.
          </p>
          <a href="tel:950248458"
            className=" bg-green text-white news-blog-btn font-bold  py-3 px-4 my-5 rounded focus:outline-none focus:shadow-outline">
            Learn More
          </a>
        </div>
        <div className=" w-full lg:w-[120%]" data-aos="fade-left">
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title={ <span className={`${ activeItem==="1" ? "text-black"
              : "text-green" }`}>
              What is organicco?
              </span>
              }

              className={`outline-none ${
              activeItem === "1" ? "bg-green-200" : ""
              }`}
              >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title={ <span className={`${ activeItem==="2" ? "text-black"
              : "text-green" }`}>
              Who we Are?
              </span>
              }
              onClick={() => toggleAccordion("2")}
              >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title={ <span className={`${ activeItem==="3" ? "text-black"
              : "text-green" }`}>
              What we Do?
              </span>
              }
              onClick={() => toggleAccordion("3")}
              >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title={ <span className={`${ activeItem==="4" ? "text-black"
              : "text-green" }`}>
              How we Do?
              </span>
              }
              >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

        {/* companies vision */}

        <section className="w-full  md:py-10 bg-grey ">
          <div className="container flex md:flex-row flex-col justify-center my-auto mx-auto gap-0">
            <div className="flex lg:w-[40%] w-[100%] justify-center md:justify-end">
              <Image
                src="/faq1.png"
                width={100}
                height={100}
                className=" w-[471px] h-[500px] rounded-xl"
                unoptimized
                alt="picture"
              ></Image>
            </div>
            <div
              className="px-5 pb-5 flex lg:w-[60%] flex-col justify-center w-[100%]"
              data-aos="flip-right"
            >
              <p className="text-xl md:text-2xl font-bold text-purple mb-4">
                Our Vision
              </p>
              <h1 className="text-3xl font-bold mb-3 text-green">
                Innovation Driving Sustainable Environmental Solutions.
              </h1>
              <p className="font-lighter">
                By investing in sustainable practices and cutting-edge
                technologies, we're paving the way for a brighter, cleaner
                future for generations to come.
              </p>
              <ul className="flex flex-col gap-5 my-4">
                <li>
                  {" "}
                  <span>
                    <DoneAllIcon className="text-green text-2xl" />
                  </span>{" "}
                  Environmental Innovation
                </li>
                <li>
                  {" "}
                  <span className="text">
                    <DoneAllIcon className="text-green" />
                  </span>{" "}
                  Sustainable Impact
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* news and blog */}

        <section
          className="w-full my-auto flex justify-center pb-10 pt-20"
          data-aos-duration="300"
          data-aos="fade-down"
        >
          <div className="w-100 container mx-auto gap-5 md:gap-20 news-main-div  my-auto">
            <div className="mx-auto text-center">
              <h1 className="text-xl md:text-2xl font-bold mb-4 text-center text-purple">
                News & Blog
              </h1>
              <p className="pb-5">
                Stay Updated on the Latest Innovations and Developments in
                Organic Waste Recycling and Energy Generation.
              </p>
            </div>

            <div className="w-full ">
              <Slider {...settings} className="flex gap-15 justify-center">
                {BlogscardDataArray.map((lala, id) => (
                  <div
                    key={id}
                    className="carousel-item p-[10px] news-car-inner-div flex justify-center my-auto "
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
