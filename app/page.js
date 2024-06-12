"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Fade,
  Slide,
  Rotate,
  Hinge,
  JackInTheBox,
  Roll,
  Bounce,
  Zoom,
} from "react-awesome-reveal";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import CardTwo from "./component/cardtwo";

import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VideoPlayer from "./component/VideoPlayer ";
import Button from "./component/button"
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
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of element is in view
  });

  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "20px",
    pauseOnHover: false,
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
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNum: "",
    errors: {},
  });
  const [loading, setLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const onContactChangeHandler = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setContactData((prev) => ({
      ...prev,
      [name]: value,
      errors: { ...prev.errors, [name]: error },
    }));
  };
  const onSubmitContactForm = async (e) => {
    e.preventDefault();
    const { name, email, message, phoneNum, errors } = contactData;

    const nameError = validateInput("name", name);
    const emailError = validateInput("email", email);
    const phoneNumError = validateInput("phoneNum", phoneNum);
    const messageError = validateInput("message", message);

    const hasErrors = nameError || emailError || phoneNumError || messageError;

    if (!hasErrors) {
      setLoading(true);
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phoneNum, message }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        if (result.message) {
          setContactSuccess(true);
          setContactData({
            name: "",
            email: "",
            phoneNum: "",
            message: "",
            errors: {},
          });
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Form submission failed due to errors:", errors);
    }
  };
  const validateInput = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "message":
        if (value.length < 10) {
          error = "Message must be at least 10 characters long";
        }
        break;
      default:
        break;
    }
    return error;
  };

  return (
    <>
      <main className="flex w-full flex-col items-center bg-white overflow-x-hidden">
        <section className="w-full ">
          <Slider {...settingsSlider} className="flex gap-10 ">
            {BannerSlidesData.map((item, id) => (
              <div
                key={id}
                className={`w-full h-screen main-hero-slide 
          ${item.bgClass}`}
              >
                <div className=" min-h-screen container flex justify-start mx-auto my-auto">
                  <div className="my-auto w-full lg:w-[60%]">
                    <h2 className="text-[32px] lg:text-[70px] text-white">
                      <TypeAnimation
                        sequence={[
                          item.heading, // Type the heading
                          5000,
                          "", // Clear the text
                          3000, // Wait for 1 second before restarting
                        ]}
                        speed={30} // Adjust typing speed
                        deletionSpeed={50} // Adjust deletion speed
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        style={{
                          display: "inline-block",
                          transition: "all 0.3s ease-in-out",
                          height: "fit-content",
                        }}
                      />
                    </h2>
                    <p className="text-[15px] lg:text-[20px] text-white my-5">
                      {item.desc}
                    </p>
                    <Button text="Learn More"></Button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="my-auto w-full lg:w-[40%] flex justify-end absolute top-1/2 right-0 z-10 banner-form-div">

            <Zoom>
              <form onSubmit={onSubmitContactForm} className="bg-white shadow-lg pt-2 pb-6 px-7 ">
                <p className="text-xl mt-5 text-green">send a message</p>
                <h1 className="text-3xl mb-6 font-bold text-purple">
                  Request a call back
                </h1>

                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl text-green"
                    id="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={contactData.name}
                    onChange={onContactChangeHandler}
                  />
                  {contactData.errors.name && (
                    <p className="error-message text-[red]">{contactData.errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={contactData.email}
                    onChange={onContactChangeHandler}
                  />
                  {contactData.errors.email && (
                    <p className="error-message text-[red]">{contactData.errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Phone"
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNum"
                    required
                    value={contactData.phoneNum}
                    onChange={onContactChangeHandler}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border  rounded w-full py-5 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    type="text"
                    placeholder="How can we help you ?"
                    name="message"
                    required
                    value={contactData.message}
                    onChange={onContactChangeHandler}
                  />
                  {contactData.errors.message && (
                    <p className="error-message text-[red]">{contactData.errors.message}</p>
                  )}
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="terms-check "
                    id="TermsCheck"
                    className=""
                    required
                  />
                  <label htmlFor="terms-check " className="px-3 text-black">
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
                <div className="flex py-5">

                  <Button text="Get A Quote" />
                  {contactSuccess && (
                <p className="success-message text-[green] pl-3">Message sent successfully!</p>
              )}
                  {/* <button
                    className="w-full news-blog-btn mt-5  bg-green text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline news-blog-btn"
                    type="button"
                  >
                    Get A Quote
                  </button> */}
                </div>
              </form>

            </Zoom>
          </div>
        </section>

        {/* below banner */}
        <section className="w-full z-10 py-2 md:py-20 bg-grey-texture" >
          <div className="w-full mx-auto justify-center z-40">
            <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
              <Zoom triggerOnce>
                <div className="p-5 flex flex-col justify-between">
                  <p className="text-base md:text-lg font-bold  text-green mb-3 ">
                    Our Introduction
                  </p>
                  <p className="text-5xl text-purple font-semibold mb-4  block">
                    <i>
                      <TypeAnimation
                        sequence={[
                          "The Most Advanced Organic Waste And Food Waste Recycling Solution In The World !",
                          4000, // Waits 1s
                          "",
                          500,
                          () => {
                            console.log("Done typing!");
                          },
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        style={{ display: "block", height: "150px" }}
                      />
                    </i>
                  </p>
                  <p className="text-justify my-auto text-xl about-text">
                    Organicco is an innovative and modern biotechnology company
                    specialising in
                  </p>
                  <ul className="grid grid-cols-2 my-4">
                    <li className="text-xl intro-links">
                      <span>
                        <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
                      </span>
                      <i>organic and food waste recycling</i>
                    </li>
                    <li className="text-xl intro-links">
                      <span>
                        <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
                      </span>
                      <i>waste to energy</i>
                    </li>
                    <li className="text-xl intro-links">
                      <span>
                        <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
                      </span>
                      <i>organic fertiliser</i>
                    </li>
                    <li className="text-xl intro-links">
                      <span>
                        <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
                      </span>
                      <i>sustainable engineering consultancy</i>
                    </li>
                  </ul>
                </div>
              </Zoom>

              <Zoom triggerOnce>
                <div className="relative">

                  <Image
                    src="/uk-house-solar.webp"
                    width={100}
                    height={100}
                    alt="home-below-banner"
                    className="w-3/4 md:absolute right-0"
                    unoptimized
                  ></Image>

                </div>
                <div className="p-5 ">
                  <p className="m-0 p-0 mb-4 text-justify">
                    <i>
                      Our business offers affordable technology for solving
                      escalating food security problems. The main focus
                      concentrates on decarbonisation whilst reducing costs and
                      providing environmental benefits for all.
                    </i>
                  </p>
                  <p className="mb-4 text-justify">
                    <i>
                      This has been achieved with the continuous development of
                      Organicco’s closed-loop solution where we waste nothing.
                      Depending on the input material our technologies convert
                      organic waste into other useful resources, such as
                      fertiliser, animal feed, animal protein meal, electricity,
                      heat, steam, grey water, fuel, and compressed CO2 i.e., the
                      input material is recycled into a commodity with financial
                      value.
                    </i>
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
              </Zoom>
              <div className="relative">
                <Zoom triggerOnce>
                  <Image
                    src="/uk-house-solar1.jpg"
                    width={100}
                    height={100}
                    alt="home-below-banner "
                    className="w-[60%] md:absolute home-abt-img left-10"
                    unoptimized
                  ></Image>
                </Zoom>
              </div>
            </div>
          </div>
        </section>

        {/* featured products */}
        <Fade>
          <section className="w-full py-20">
            <div className="container mx-auto flex flex-col">
              <div>
                <h1 className="text-3xl font-bold  text-center text-purple mb-5">
                  <i>Featured Products</i>
                </h1>
              </div>
              <div className="flex flex-row container gap-10 flex-wrap align-center justify-center flex-auto">
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
              {/* <div className="grid grid-cols-4">
              {productcardDataArray.map((lala, id) => (
                <CardTwo
                  key={id}
                  title={lala.title}
                  subtitle={lala.subtitle}
                  desc={lala.desc}
                  bgClass={lala.bgClass}
                  cardLink={lala.cardLink}
                  ImgSrc={lala.ImgSrc}
                />
              ))}
            </div> */}
            </div>
          </section>
        </Fade>

        {/* image section */}
        {/* <section className="z-40 w-full mx-auto ">
          <div className="image-section w-full flex justify-center py-20 lg:py-40 px-10">
            <div className="flex justify-center z-50 container ">
              <div className="text-white text-[20px] lg:text-[40px] font-bold text-center my-auto">
                We're committed to leading the charge in tackling environmental
                challenges through{" "}
                <span className="text-[#79db52] text">
                  our innovative solutions
                </span>
              </div>
            </div>
          </div>
        </section> */}

        {/* video section */}

        <section className="w-full bg-white bg-grey">
          <div className="relative  flex lg:flex-row flex-col gap-8">
            <div className="  w-[100%] lg:w-[40%]  my-auto p-4 py-20 ">
              <Fade cascade damping={0.1}>
                <h3 className="text-xl md:text-4xl font-bold mb-3 text-purple">
                  <i>Get to Know the Heart Behind Organicco</i>
                </h3>
                <p className="text-green text-[20px] text-justify">
                  <i>
                    Embark on a visual journey through Organicco's ethos,
                    innovations, and commitment to sustainability with our
                    compelling About Us video. Discover the faces and stories
                    behind our groundbreaking work, as we strive to redefine the
                    future of waste management and environmental stewardship.
                    Join us in our mission to create a greener, more sustainable
                    world for generations to come.
                  </i>
                </p>
              </Fade>
            </div>

            <VideoPlayer />
          </div>
        </section>

        {/* Featured Services */}

        <section className="w-full py-20 px-4  mx-auto  flex justify-center ">
          <Fade>
            <div className="container mx-auto my-auto flex flex-col gap-6">
              <div>
                <h1 className="text-xl md:text-2xl font-bold mb-10 text-center text-purple">
                  Featured Services
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
          </Fade>
        </section>

        {/* accordian section */}
        <Zoom>
          <section className="py-10 md:py-20 w-full">
            <div className="container p-5 mx-auto flex md:flex-row flex-col">
              <div className=" my-auto w-full lg:w-[80%]">
                <h1 className="  text-xl md:text-5xl font-bold mb-4 text-purple">
                  Frequently Asked Questions{" "}
                </h1>
                <p className="text-sm sm:text-xl mb-5">
                  Find quick solutions to your questions about our services,
                  operations, and sustainability efforts.
                </p>
                {/* <a
                  href="tel:950248458"
                  className=" bg-green text-white news-blog-btn font-bold  py-3 px-4 my-5 rounded focus:outline-none focus:shadow-outline"
                >
                  Learn More
                </a> */}
                <Button text="Learn More" />
              </div>
              <div className=" w-full lg:w-[120%]">
                <Accordion defaultExpandedKeys={["1"]} variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title={
                      <span
                        className={`${activeItem === "1" ? "text-black" : "text-green"
                          }`}
                      >
                        What is organicco?
                      </span>
                    }
                    className={`outline-none ${activeItem === "1" ? "bg-green " : ""
                      }`}
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title={
                      <span
                        className={`${activeItem === "2" ? "text-black" : "text-green"
                          }`}
                      >
                        Who we Are?
                      </span>
                    }
                    onClick={() => toggleAccordion("2")}
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title={
                      <span
                        className={`${activeItem === "3" ? "text-black" : "text-green"
                          }`}
                      >
                        What we Do?
                      </span>
                    }
                    onClick={() => toggleAccordion("3")}
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title={
                      <span
                        className={`${activeItem === "4" ? "text-black" : "text-green"
                          }`}
                      >
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
        </Zoom>

        {/* companies vision */}

        <section className="w-full  md:py-10 bg-grey ">
          <div className="container flex md:flex-row flex-col justify-center my-auto mx-auto gap-0">
            <div className="flex lg:w-[40%] w-[100%] justify-center md:justify-end">
              <Zoom>
                <Image
                  src="/faq1.png"
                  width={100}
                  height={100}
                  className=" w-[471px] h-[500px] rounded-xl"
                  unoptimized
                  alt="picture"
                ></Image>
              </Zoom>
            </div>
            <div className="px-5 pb-5 flex lg:w-[60%] flex-col justify-center w-[100%]">
              <Zoom>
                <p className="text-xl md:text-2xl font-bold text-purple mb-4 tracking-in-contract-bck-top">
                  Our Vision
                </p>
                <h1 className="text-5xl font-bold mb-3 text-green">
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
              </Zoom>
            </div>
          </div>
        </section>

        {/* news and blog */}
        <Zoom>
          <section className="w-full my-auto flex justify-center pb-10 pt-20">
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
                {/* <Slider {...settings} className="flex gap-15 justify-center">
              <div className="grid grid-cols-4">
              {productcardDataArray.map((lala, id) => (
                <CardTwo
                  key={id}
                  title={lala.title}
                  subtitle={lala.subtitle}
                  desc={lala.desc}
                  bgClass={lala.bgClass}
                  cardLink={lala.cardLink}
                  ImgSrc={lala.ImgSrc}
                />
              ))}
            </div>
              </Slider> */}
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
        </Zoom>
      </main>
    </>
  );
}
