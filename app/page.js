// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import {
//   Fade,
//   Slide,
//   Rotate,
//   Hinge,
//   JackInTheBox,
//   Roll,
//   Bounce,
//   Zoom,
// } from "react-awesome-reveal";

// import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// import { TypeAnimation } from "react-type-animation";
// import CardTwo from "./component/cardtwo";

// import ReactPlayer from "react-player";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import VideoPlayer from "./component/VideoPlayer ";
// import Button from "./component/button"
// import {
//   BlogscardDataArray,
//   servicescardDataArray,
//   productcardDataArray,
//   BannerSlidesData,
// } from "../public/assets/data";
// import Image from "next/image";
// import Card from "./component/card";
// import DoneAllIcon from "@mui/icons-material/DoneAll";
// import BlogCard from "./component/BlogCard";
// import { Accordion, AccordionItem } from "@nextui-org/react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Home() {
//   const [activeItem, setActiveItem] = useState(null);
//   const playerRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };
//   const handlePlay = () => {
//     if (playerRef.current) {
//       // Seek to 10 seconds when the video starts playing
//       playerRef.current.seekTo(11);
//     }
//   };
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger animation once
//     threshold: 0.5, // Trigger animation when 50% of element is in view
//   });

//   const settingsSlider = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     centerPadding: "20px",
//     pauseOnHover: false,
//   };

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerPadding: "30px",
//     arrows: true, // Enable arrows for navigation
//     responsive: [
//       {
//         breakpoint: 1424,
//         settings: {
//           slidesToShow: 3,
//           centerPadding: "30px",
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 2,
//           centerPadding: "20px",
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "10px",
//         },
//       },
//       // Add more responsive settings as needed
//     ],
//   };

//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   // init Swiper:
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phoneNum: "",
//     errors: {},
//   });
//   const [loading, setLoading] = useState(false);
//   const [contactSuccess, setContactSuccess] = useState(false);
//   const onContactChangeHandler = (e) => {
//     const { name, value } = e.target;
//     const error = validateInput(name, value);
//     setContactData((prev) => ({
//       ...prev,
//       [name]: value,
//       errors: { ...prev.errors, [name]: error },
//     }));
//   };
//   const onSubmitContactForm = async (e) => {
//     e.preventDefault();
//     const { name, email, message, phoneNum, errors } = contactData;

//     const nameError = validateInput("name", name);
//     const emailError = validateInput("email", email);
//     const phoneNumError = validateInput("phoneNum", phoneNum);
//     const messageError = validateInput("message", message);

//     const hasErrors = nameError || emailError || phoneNumError || messageError;

//     if (!hasErrors) {
//       setLoading(true);
//       try {
//         const response = await fetch("/api/mail", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name, email, phoneNum, message }),
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         if (result.message) {
//           setContactSuccess(true);
//           setContactData({
//             name: "",
//             email: "",
//             phoneNum: "",
//             message: "",
//             errors: {},
//           });
//         } else {
//           console.error("Failed to send email");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.warn("Form submission failed due to errors:", errors);
//     }
//   };
//   const validateInput = (fieldName, value) => {
//     let error = "";
//     switch (fieldName) {
//       case "name":
//         if (!value) {
//           error = "Name is required";
//         }
//         break;
//       case "email":
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//           error = "Invalid email format";
//         }
//         break;
//       case "message":
//         if (value.length < 10) {
//           error = "Message must be at least 10 characters long";
//         }
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   return (
//     <>
//       <main className="flex w-full flex-col items-center bg-white overflow-x-hidden">
//         <section className="w-full ">
//           <Slider {...settingsSlider} className="flex gap-10 ">
//             {BannerSlidesData.map((item, id) => (
//               <div
//                 key={id}
//                 className={`w-full h-screen main-hero-slide 
//           ${item.bgClass}`}
//               >
//                 <div className=" min-h-screen container flex justify-start mx-auto my-auto">
//                   <div className="my-auto w-full lg:w-[60%]">
//                     <h2 className="text-[32px] lg:text-[70px] text-white">
//                       <TypeAnimation
//                         sequence={[
//                           item.heading, // Type the heading
//                           5000,
//                           "", // Clear the text
//                           3000, // Wait for 1 second before restarting
//                         ]}
//                         speed={30} // Adjust typing speed
//                         deletionSpeed={50} // Adjust deletion speed
//                         wrapper="span"
//                         cursor={false}
//                         repeat={Infinity}
//                         style={{
//                           display: "inline-block",
//                           transition: "all 0.3s ease-in-out",
//                           height: "fit-content",
//                         }}
//                       />
//                     </h2>
//                     <p className="text-[15px] lg:text-[20px] text-white my-5">
//                       {item.desc}
//                     </p>
//                     <Button text="Learn More"></Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <div className="my-auto w-full lg:w-[40%] flex justify-end absolute top-1/2 right-0 z-10 banner-form-div">

//             <Zoom>
//               <form onSubmit={onSubmitContactForm} className="bg-white shadow-lg pt-2 pb-6 px-7 ">
//                 <p className="text-xl mt-5 text-green">send a message</p>
//                 <h1 className="text-3xl mb-6 font-bold text-purple">
//                   Request a call back
//                 </h1>

//                 <div className="mb-4">
//                   <input
//                     className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl text-green"
//                     id="Name"
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                     value={contactData.name}
//                     onChange={onContactChangeHandler}
//                   />
//                   {contactData.errors.name && (
//                     <p className="error-message text-[red]">{contactData.errors.name}</p>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="Email"
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     required
//                     value={contactData.email}
//                     onChange={onContactChangeHandler}
//                   />
//                   {contactData.errors.email && (
//                     <p className="error-message text-[red]">{contactData.errors.email}</p>
//                   )}
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="Phone"
//                     type="tel"
//                     placeholder="Phone Number"
//                     name="phoneNum"
//                     required
//                     value={contactData.phoneNum}
//                     onChange={onContactChangeHandler}
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <input
//                     className="shadow appearance-none border  rounded w-full py-5 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
//                     id="message"
//                     type="text"
//                     placeholder="How can we help you ?"
//                     name="message"
//                     required
//                     value={contactData.message}
//                     onChange={onContactChangeHandler}
//                   />
//                   {contactData.errors.message && (
//                     <p className="error-message text-[red]">{contactData.errors.message}</p>
//                   )}
//                 </div>
//                 <div className="flex">
//                   <input
//                     type="checkbox"
//                     name="terms-check "
//                     id="TermsCheck"
//                     className=""
//                     required
//                   />
//                   <label htmlFor="terms-check " className="px-3 text-black">
//                     I agree to the terms of service.{" "}
//                     <span>
//                       <Link
//                         href="/privacy-policy"
//                         className="text-green text-sm"
//                       >
//                         Privacy Policy
//                       </Link>
//                     </span>
//                   </label>
//                 </div>
//                 <div className="flex py-5">

//                   <Button text="Get A Quote" />
//                   {contactSuccess && (
//                 <p className="success-message text-[green] pl-3">Message sent successfully!</p>
//               )}
//                   {/* <button
//                     className="w-full news-blog-btn mt-5  bg-green text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline news-blog-btn"
//                     type="button"
//                   >
//                     Get A Quote
//                   </button> */}
//                 </div>
//               </form>

//             </Zoom>
//           </div>
//         </section>

//         {/* below banner */}
//         <section className="w-full z-10 py-2 md:py-20 bg-grey-texture" >
//           <div className="w-full mx-auto justify-center z-40">
//             <div className="container mx-auto grid md:grid-cols-2 grid-cols-1">
//               <Zoom triggerOnce>
//                 <div className="p-5 flex flex-col justify-between">
//                   <p className="text-base md:text-lg font-bold  text-green mb-3 ">
//                     Our Introduction
//                   </p>
//                   <p className="text-5xl text-purple font-semibold mb-4  block">
//                     <i>
//                       <TypeAnimation
//                         sequence={[
//                           "The Most Advanced Organic Waste And Food Waste Recycling Solution In The World !",
//                           4000, // Waits 1s
//                           "",
//                           500,
//                           () => {
//                             console.log("Done typing!");
//                           },
//                         ]}
//                         wrapper="span"
//                         cursor={false}
//                         repeat={Infinity}
//                         style={{ display: "block", height: "150px" }}
//                       />
//                     </i>
//                   </p>
//                   <p className="text-justify my-auto text-xl about-text">
//                     Organicco is an innovative and modern biotechnology company
//                     specialising in
//                   </p>
//                   <ul className="grid grid-cols-2 my-4">
//                     <li className="text-xl intro-links">
//                       <span>
//                         <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
//                       </span>
//                       <i>organic and food waste recycling</i>
//                     </li>
//                     <li className="text-xl intro-links">
//                       <span>
//                         <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
//                       </span>
//                       <i>waste to energy</i>
//                     </li>
//                     <li className="text-xl intro-links">
//                       <span>
//                         <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
//                       </span>
//                       <i>organic fertiliser</i>
//                     </li>
//                     <li className="text-xl intro-links">
//                       <span>
//                         <CheckCircleRoundedIcon className="text-green hover:text-white rounded-full  mr-2 circle-icon" />
//                       </span>
//                       <i>sustainable engineering consultancy</i>
//                     </li>
//                   </ul>
//                 </div>
//               </Zoom>

//               <Zoom triggerOnce>
//                 <div className="relative">

//                   <Image
//                     src="/uk-house-solar.webp"
//                     width={100}
//                     height={100}
//                     alt="home-below-banner"
//                     className="w-3/4 md:absolute right-0"
//                     unoptimized
//                   ></Image>

//                 </div>
//                 <div className="p-5 ">
//                   <p className="m-0 p-0 mb-4 text-justify">
//                     <i>
//                       Our business offers affordable technology for solving
//                       escalating food security problems. The main focus
//                       concentrates on decarbonisation whilst reducing costs and
//                       providing environmental benefits for all.
//                     </i>
//                   </p>
//                   <p className="mb-4 text-justify">
//                     <i>
//                       This has been achieved with the continuous development of
//                       Organicco’s closed-loop solution where we waste nothing.
//                       Depending on the input material our technologies convert
//                       organic waste into other useful resources, such as
//                       fertiliser, animal feed, animal protein meal, electricity,
//                       heat, steam, grey water, fuel, and compressed CO2 i.e., the
//                       input material is recycled into a commodity with financial
//                       value.
//                     </i>
//                   </p>
//                   <h3 className="text-xl my-4 text-green font-bold">
//                     Empowering Businesses
//                   </h3>
//                   <p className="text-justify">
//                     Organicco provides solutions for empowering businesses to
//                     divert waste away from expensive traditional disposal options
//                     whilst helping them meet their net-zero targets. Organicco has
//                     specifically designed a range of products to convert waste
//                     into natural assets.
//                   </p>
//                 </div>
//               </Zoom>
//               <div className="relative">
//                 <Zoom triggerOnce>
//                   <Image
//                     src="/uk-house-solar1.jpg"
//                     width={100}
//                     height={100}
//                     alt="home-below-banner "
//                     className="w-[60%] md:absolute home-abt-img left-10"
//                     unoptimized
//                   ></Image>
//                 </Zoom>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* featured products */}
//         <Fade>
//           <section className="w-full py-20">
//             <div className="container mx-auto flex flex-col">
//               <div>
//                 <h1 className="text-3xl font-bold  text-center text-purple mb-5">
//                   <i>Featured Products</i>
//                 </h1>
//               </div>
//               <div className="flex flex-row container gap-10 flex-wrap align-center justify-center flex-auto">
//                 {productcardDataArray.map((lala, id) => (
//                   <Card
//                     key={id}
//                     title={lala.title}
//                     subtitle={lala.subtitle}
//                     desc={lala.desc}
//                     bgClass={lala.bgClass}
//                     cardLink={lala.cardLink}
//                   />
//                 ))}
//               </div>
//               {/* <div className="grid grid-cols-4">
//               {productcardDataArray.map((lala, id) => (
//                 <CardTwo
//                   key={id}
//                   title={lala.title}
//                   subtitle={lala.subtitle}
//                   desc={lala.desc}
//                   bgClass={lala.bgClass}
//                   cardLink={lala.cardLink}
//                   ImgSrc={lala.ImgSrc}
//                 />
//               ))}
//             </div> */}
//             </div>
//           </section>
//         </Fade>

//         {/* image section */}
//         {/* <section className="z-40 w-full mx-auto ">
//           <div className="image-section w-full flex justify-center py-20 lg:py-40 px-10">
//             <div className="flex justify-center z-50 container ">
//               <div className="text-white text-[20px] lg:text-[40px] font-bold text-center my-auto">
//                 We're committed to leading the charge in tackling environmental
//                 challenges through{" "}
//                 <span className="text-[#79db52] text">
//                   our innovative solutions
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* video section */}

//         <section className="w-full bg-white bg-grey">
//           <div className="relative  flex lg:flex-row flex-col gap-8">
//             <div className="  w-[100%] lg:w-[40%]  my-auto p-4 py-20 ">
//               <Fade cascade damping={0.1}>
//                 <h3 className="text-xl md:text-4xl font-bold mb-3 text-purple">
//                   <i>Get to Know the Heart Behind Organicco</i>
//                 </h3>
//                 <p className="text-green text-[20px] text-justify">
//                   <i>
//                     Embark on a visual journey through Organicco's ethos,
//                     innovations, and commitment to sustainability with our
//                     compelling About Us video. Discover the faces and stories
//                     behind our groundbreaking work, as we strive to redefine the
//                     future of waste management and environmental stewardship.
//                     Join us in our mission to create a greener, more sustainable
//                     world for generations to come.
//                   </i>
//                 </p>
//               </Fade>
//             </div>

//             <VideoPlayer />
//           </div>
//         </section>

//         {/* Featured Services */}

//         <section className="w-full py-20 px-4  mx-auto  flex justify-center ">
//           <Fade>
//             <div className="container mx-auto my-auto flex flex-col gap-6">
//               <div>
//                 <h1 className="text-xl md:text-2xl font-bold mb-10 text-center text-purple">
//                   Featured Services
//                 </h1>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {servicescardDataArray.map((lala, id) => (
//                   <BlogCard
//                     key={id}
//                     title={lala.title}
//                     subtitle={lala.subtitle}
//                     desc={lala.desc}
//                     cardImage={lala.cardImage}
//                     cardLink={lala.cardLink}
//                   />
//                 ))}
//               </div>
//             </div>
//           </Fade>
//         </section>

//         {/* accordian section */}
//         <Zoom>
//           <section className="py-10 md:py-20 w-full">
//             <div className="container p-5 mx-auto flex md:flex-row flex-col">
//               <div className=" my-auto w-full lg:w-[80%]">
//                 <h1 className="  text-xl md:text-5xl font-bold mb-4 text-purple">
//                   Frequently Asked Questions{" "}
//                 </h1>
//                 <p className="text-sm sm:text-xl mb-5">
//                   Find quick solutions to your questions about our services,
//                   operations, and sustainability efforts.
//                 </p>
//                 {/* <a
//                   href="tel:950248458"
//                   className=" bg-green text-white news-blog-btn font-bold  py-3 px-4 my-5 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Learn More
//                 </a> */}
//                 <Button text="Learn More" />
//               </div>
//               <div className=" w-full lg:w-[120%]">
//                 <Accordion defaultExpandedKeys={["1"]} variant="splitted">
//                   <AccordionItem
//                     key="1"
//                     aria-label="Accordion 1"
//                     title={
//                       <span
//                         className={`${activeItem === "1" ? "text-black" : "text-green"
//                           }`}
//                       >
//                         What is organicco?
//                       </span>
//                     }
//                     className={`outline-none ${activeItem === "1" ? "bg-green " : ""
//                       }`}
//                   >
//                     {defaultContent}
//                   </AccordionItem>
//                   <AccordionItem
//                     key="2"
//                     aria-label="Accordion 2"
//                     title={
//                       <span
//                         className={`${activeItem === "2" ? "text-black" : "text-green"
//                           }`}
//                       >
//                         Who we Are?
//                       </span>
//                     }
//                     onClick={() => toggleAccordion("2")}
//                   >
//                     {defaultContent}
//                   </AccordionItem>
//                   <AccordionItem
//                     key="3"
//                     aria-label="Accordion 3"
//                     title={
//                       <span
//                         className={`${activeItem === "3" ? "text-black" : "text-green"
//                           }`}
//                       >
//                         What we Do?
//                       </span>
//                     }
//                     onClick={() => toggleAccordion("3")}
//                   >
//                     {defaultContent}
//                   </AccordionItem>
//                   <AccordionItem
//                     key="4"
//                     aria-label="Accordion 4"
//                     title={
//                       <span
//                         className={`${activeItem === "4" ? "text-black" : "text-green"
//                           }`}
//                       >
//                         How we Do?
//                       </span>
//                     }
//                   >
//                     {defaultContent}
//                   </AccordionItem>
//                 </Accordion>
//               </div>
//             </div>
//           </section>
//         </Zoom>

//         {/* companies vision */}

//         <section className="w-full  md:py-10 bg-grey ">
//           <div className="container flex md:flex-row flex-col justify-center my-auto mx-auto gap-0">
//             <div className="flex lg:w-[40%] w-[100%] justify-center md:justify-end">
//               <Zoom>
//                 <Image
//                   src="/faq1.png"
//                   width={100}
//                   height={100}
//                   className=" w-[471px] h-[500px] rounded-xl"
//                   unoptimized
//                   alt="picture"
//                 ></Image>
//               </Zoom>
//             </div>
//             <div className="px-5 pb-5 flex lg:w-[60%] flex-col justify-center w-[100%]">
//               <Zoom>
//                 <p className="text-xl md:text-2xl font-bold text-purple mb-4 tracking-in-contract-bck-top">
//                   Our Vision
//                 </p>
//                 <h1 className="text-5xl font-bold mb-3 text-green">
//                   Innovation Driving Sustainable Environmental Solutions.
//                 </h1>
//                 <p className="font-lighter">
//                   By investing in sustainable practices and cutting-edge
//                   technologies, we're paving the way for a brighter, cleaner
//                   future for generations to come.
//                 </p>
//                 <ul className="flex flex-col gap-5 my-4">
//                   <li>
//                     {" "}
//                     <span>
//                       <DoneAllIcon className="text-green text-2xl" />
//                     </span>{" "}
//                     Environmental Innovation
//                   </li>
//                   <li>
//                     {" "}
//                     <span className="text">
//                       <DoneAllIcon className="text-green" />
//                     </span>{" "}
//                     Sustainable Impact
//                   </li>
//                 </ul>
//               </Zoom>
//             </div>
//           </div>
//         </section>

//         {/* news and blog */}
//         <Zoom>
//           <section className="w-full my-auto flex justify-center pb-10 pt-20">
//             <div className="w-100 container mx-auto gap-5 md:gap-20 news-main-div  my-auto">
//               <div className="mx-auto text-center">
//                 <h1 className="text-xl md:text-2xl font-bold mb-4 text-center text-purple">
//                   News & Blog
//                 </h1>
//                 <p className="pb-5">
//                   Stay Updated on the Latest Innovations and Developments in
//                   Organic Waste Recycling and Energy Generation.
//                 </p>
//               </div>

//               <div className="w-full ">
//                 {/* <Slider {...settings} className="flex gap-15 justify-center">
//               <div className="grid grid-cols-4">
//               {productcardDataArray.map((lala, id) => (
//                 <CardTwo
//                   key={id}
//                   title={lala.title}
//                   subtitle={lala.subtitle}
//                   desc={lala.desc}
//                   bgClass={lala.bgClass}
//                   cardLink={lala.cardLink}
//                   ImgSrc={lala.ImgSrc}
//                 />
//               ))}
//             </div>
//               </Slider> */}
//                 <Slider {...settings} className="flex gap-15 justify-center">
//                   {BlogscardDataArray.map((lala, id) => (
//                     <div
//                       key={id}
//                       className="carousel-item p-[10px] news-car-inner-div flex justify-center my-auto "
//                     >
//                       <BlogCard
//                         title={lala.title}
//                         desc={lala.desc}
//                         cardImage={lala.cardImage}
//                         cardLink={lala.cardLink}
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </section>
//         </Zoom>
//       </main>
//     </>
//   );
// }
"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css'
import VideoPlayer from "./component/VideoPlayer ";
import { FaArrowRight } from "react-icons/fa6";
import CardComponent from './component/CardComponent/CardComponent'
import Accordion from './component/acc'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const verticalSlider = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding: "30px",
  vertical: true,
  arrows: false,
  dots: false,
  pauseOnHover: false,
};



const page = () => {

  const items_acc = [
    {
      header: 'What is organicco?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      header: 'Who we Are?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      header: 'What we Do?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      header: 'How we Do?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      header: 'How we Connect with you?',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
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

  useEffect(() => {
    Aos.init({});
  }, []);


  const cursorRef = useRef(null);
  useEffect(() => {
    console.log('cursorRef:', cursorRef.current);
    const handleMouseEnter = () => {
        console.log('Mouse entered card container');
        gsap.to(cursorRef.current, {
            scale: 4,
            backgroundColor: "rgba(255,255,255,0.5)",
            duration: 0.3,
            ease: 'power1.inOut',
        });
    };
    const handleMouseLeave = () => {
        console.log('Mouse left card container');
        gsap.to(cursorRef.current, {
            scale: 0,
            backgroundColor: "#f5f5f5",
            duration: 0.3,
            ease: 'power1.inOut',
        });
    };

    const handleMouseMove = (e) => {

        console.log('Mouse move:', e.clientX, e.clientY);
        gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY }); // set initial position
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power1.out',
        });
      };

    const cardContainer = document.querySelector('.faq_section');
    if (cardContainer) {
        cardContainer.addEventListener('mouseenter', handleMouseEnter);
        cardContainer.addEventListener('mouseleave', handleMouseLeave);
        cardContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
        if (cardContainer) {
            cardContainer.removeEventListener('mouseenter', handleMouseEnter);
            cardContainer.removeEventListener('mouseleave', handleMouseLeave);
            cardContainer.removeEventListener('mousemove', handleMouseMove);
        }
    };
}, []);

useEffect(() => {
  gsap.fromTo(
    '.animate-div',
    { x: 500, opacity: 1 },
    {
      x: 0,
      opacity: 1,
      duration: 3,
      stagger:1,
ease: "circ.out",
      scrollTrigger: {
        trigger: '.animate-div',
        start: 'top 80%', // Adjust this value to change when the animation should start
        end: 'bottom 70%', // Adjust this value to change when the animation should end
        scrub: true,
      },
    }
  );
}, []);
useEffect(() => {
  gsap.fromTo(
    '.animate-div-left',
    { x: -500, opacity: 1 },
    {
      x: 0,
      opacity: 1,
      duration: 3,
      stagger:1,
ease: "circ.out",
      scrollTrigger: {
        trigger: '.animate-div',
        start: 'top 80%', // Adjust this value to change when the animation should start
        end: 'bottom 70%', // Adjust this value to change when the animation should end
        scrub: true,
      },
    }
  );
}, []);


const titleRef = useRef(null);
const title_Ref = useRef(null);

useEffect(() => {
  const title = title_Ref.current;

  // Manually split text into spans
  const chars = title.innerText.split('').map((char, index) => {
    const span = document.createElement('span');
    span.innerText = char === ' ' ? '\u00A0' : char; // Handle spaces
    span.style.display = 'inline-block'; // Ensuring each character is an inline-block for animation
    return span;
  });

  title.innerHTML = '';
  chars.forEach(span => title.appendChild(span));

  gsap.from(chars, {
    scrollTrigger: {
      trigger: title,
      toggleActions: "restart pause resume reverse",
      start: "top 80%", // Adjust start position if necessary
    },
    duration: 0.6,
    ease: "circ.out",
    y: 80,
    stagger: 0.02,
  });

  return () => {
    // Clean up
    title.innerHTML = chars.map(span => span.innerText).join('');
  };
}, []);
useEffect(() => {
  const title = titleRef.current;

  // Manually split text into spans
  const chars = title.innerText.split('').map((char, index) => {
    const span = document.createElement('span');
    span.innerText = char === ' ' ? '\u00A0' : char; // Handle spaces
    span.style.display = 'inline-block'; // Ensuring each character is an inline-block for animation
    return span;
  });

  title.innerHTML = '';
  chars.forEach(span => title.appendChild(span));

  gsap.from(chars, {
    scrollTrigger: {
      trigger: title,
      toggleActions: "restart pause resume reverse",
      start: "top 80%", // Adjust start position if necessary
    },
    duration: 0.6,
    ease: "circ.out",
    y: 80,
    stagger: 0.02,
  });

  return () => {
    // Clean up
    title.innerHTML = chars.map(span => span.innerText).join('');
  };
}, []);

  return (
    <main className='flex flex-col'>

{/* banner */}
      <section className='w-full md:h-full h-[864px]  bannner_img md:mt-[102px] flex '>
        <div className='h-[100%] md:w-[70%]  flex flex-col  md:gap-8 gap-2 justify-center'>
          <Slider {...verticalSlider} className='manrope tracking-wider' >
            <div className="carousel-item  text_left">
              <h1 className="md:text-[70px] text-[35.88px] font-extrabold text-white">
                Completing <br /> The Food Cycle!
              </h1>
            </div>
            <div className="carousel-item  text_left  ">
              <h1 className="md:text-[70px] text-[35.88px] font-extrabold text-white">
                Affordable Organic <br />Waste Management
              </h1>
            </div>
            <div className="carousel-item text_left  ">
              <h1 className="md:text-[70px] text-[35.88px] font-extrabold text-white">
                Efficient Dryer <br />Technology
              </h1>
            </div>
          </Slider>


          <Slider {...verticalSlider} className='manrope ' >
            <div className="carousel-item h-14 w-[100%]">
              <h1 className="md:text-[20px] text-[16px] font-medium text-white">
                Organicco is an innovative and modern biotechnology company.
              </h1>

            </div>
            <div className="carousel-item h-14 w-[100%]">
              <h1 className="md:text-[20px] text-[16px] font-medium text-white">
                We specialise in solving the organic & food waste <br />problems by converting waste into valuable resources.
              </h1>
            </div>
            <div className="carousel-item h-14 w-[100%]">
              <h1 className="md:text-[20px] text-[16px] font-medium text-white">
                Using our innovative rotary drum design.
              </h1>
            </div>
          </Slider>
          <button className='bg-[#312C85] w-[183px] md:h-[45px] h-[35.41px]  text-center pl-9 manrope banner_btn font-semibold md:text-[20px] text-[16px]'>
            Learn More
            <FaArrowRight className="arrow-icon" />
          </button>
        </div>
        <div className='md:h-[100%] h-[488px] md:w-[30%] w-[100%] flex flex-col items-center justify-center '>
          <div className="my-auto w-full lg:w-[40%] flex justify-center md:justify-end absolute md:top-1/2 md:right-0  z-10 banner-form-div top-[650px]  " >
            <form onSubmit={onSubmitContactForm} className="bg-white  shadow-lg pt-7 pb-6 px-7 rounded-[10px] w-[371px] " data-aos="fade-left" data-aos-duration="600">
              <h1 className="text-3xl mb-6 font-bold text-[22px] text-[#3CAA35]">
                Request a call back
              </h1>
              <div className="mb-4">
                <input
                  className="border-[#A6A6A6] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  id="Name"
                  type="text"
                  placeholder="name"
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
                  className="border-[#A6A6A6] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="email"
                  placeholder="email"
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
                  className="border-[#A6A6A6] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Phone"
                  type="tel"
                  placeholder="phone no."
                  name="phoneNum"
                  required
                  value={contactData.phoneNum}
                  onChange={onContactChangeHandler}
                />
              </div>
              <div className="mb-6">
                <input
                  className="border-[#A6A6A6] appearance-none border  rounded w-full py-3 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  type="text"
                  placeholder="how can we help you ..."
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
                <label htmlFor="terms-check " className="px-3 text-[12px] text-[#A6A6A6]">
                  I agree to the terms of service.{" "}
                  <span>
                    <Link
                      href="/privacy-policy"
                      className="text-[#312C85] text-sm font-semibold"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>
              <div className="flex py-5">


                <button
                  className="w-[155px] h-[45px] news-blog-btn mt-5 border border-[#3CAA35]  text-[#3CAA35] font-bold py-3 px-4 focus:outline-none focus:shadow-outline news-blog-btn"
                  type="button"
                >
                  Get A Quote
                </button>
                {contactSuccess && (
                  <p className="success-message text-[#3CAA35] pl-3">Message sent successfully!</p>
                )}
              </div>
            </form>


          </div>

        </div>
      </section>
      
{/* intro */}
      <section className='w-full h-[1215px] md:h-[877px] flex flex-col md:flex-row md:mt-0  mt-[500px]'>
        <div className='h-[100%] w-[100%] md:w-[50%] md:py-[158px] md:px-[164px] pt-[20px]'>

          <Image
            src="/img11recycle.svg"
            width={100}
            height={100}
            alt="home-below-banner"
            className="w-full h-full"
            unoptimized
          />


        </div>
        <div className='h-[100%] w-[100%] md:w-[50%] flex flex-col gap-2 md:gap-6 md:py-[90px] md:pr-[121px] p-6' >
          <h3 className='mcLarenFont text-[#312C85] md:text-[22px] text-[20px]'>Introduction</h3>
          <h1 className=' text-[#3CAA35] font-extrabold md:text-[50px] text-[30px]'>The most advanced organic waste and food waste recycling solution in the world</h1>
          <p className=' text-[#7E8287] font-semibold md:text-[18px] text-[15px]'>Organicco is an innovative and modern biotechnology company specialising in <span className=' text-[#3CAA35]'>organic and food waste recycling, waste to energy, organic fertiliser,</span> and
            <span className=' text-[#3CAA35]'>sustainable engineering consultancy</span> services.</p>
          <p className=' text-[#7E8287] font-semibold text-[18px]'>Our business offers <span className=' text-[#3CAA35]'>affordable technology</span> for solving escalating food security problems. The main focus concentrates on decarbonisation whilst reducing costs and providing environmental benefits for all.</p>
          <p className=' text-[#7E8287] font-semibold text-[18px]'>This has been achieved with the continuous development of Organicco’s closed-loop solution <span className=' text-[#3CAA35]'>where we waste nothing</span>. Depending on the input material our technologies convert organic waste into other useful resources, such as fertiliser, animal feed, animal protein meal, electricity, heat, steam, grey water, fuel, and compressed CO2 i.e., the input material is recycled into a commodity with financial value.</p>

        </div>
      </section>
{/* 10year */}
      <section className='w-full h-[612.21px] md:h-[327px] flex flex-col md:flex-row'>
        <div className='h-[50%] md:h-[100%] w-[100%] md:w-[70%] bg-[#3CAA35] md:py-[60px] md:pl-[121px] md:pr-[181px] p-6 flex flex-col md:gap-3 gap-2'>
          <h3 className='mcLarenFont text-[#fff] md:text-[22px] text-[18px]'>Revolutionizing Organic Waste Management</h3>
          <h1 className=' text-[#fff] font-extrabold md:text-[50px] text-[30px]'>Empowering Businesses</h1>
          <p className=' text-[#fff] font-semibold md:text-[18px] text-[16px]'>Organicco provides solutions for empowering businesses to divert waste away from expensive traditional disposal options whilst helping them meet their net-zero targets. Organicco has specifically designed a range of products to convert waste into natural assets.</p>

        </div>
        <div className='h-[100%] w-full md:w-[30%] p-0 overflow-hidden'>
          <Image
            src="/img12recycle.svg"
            width={100}
            height={100}
            alt="home-below-banner"
            className="w-full  overflow-hidden"
            unoptimized
          />

        </div>
      </section>
{/* featuredprod */}
      <section className='w-full h-[1733px] md:h-[801px] flex flex-col bg-[#f5f5f5]'>
        <div className='md:py-[60px] py-9 text-center'>
          <h1 className='text-[#3CAA35] font-extrabold text-[30px] md:text-[50px]' ref={title_Ref}>Featured Products</h1>
        </div>
        <div className='flex px-[120px] justify-between items-center flex-col md:flex-row gap-5'>

          <div className='w-[438px] h-[518px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
            <div className='relative h-[50%] w-full overflow-hidden'>

              <Image
                src="/assets/ecohero-loctroi-1.jpg"
                width={100}
                height={100}
                alt="home-below-banner"
                className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
                unoptimized
              />

              <div className='absolute top-3 left-3 flex items-center justify-center z-20'>
                <div className='bg-[#3CAA35] text-white rounded-full py-1 px-4 '>
                  <i>eco</i>HERO
                </div>
              </div>

            </div>
            <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
              <h3 className='text-[#312C85] text-[22px] font-bold'>Organic Fertiliser Plant</h3>
              <p className='text-[#7e8287] text-[18px] font-semibold'>The ‘ecoHERO’ is a revolutionary accelerated thermophilic aerobic digestion (ATAD) system. It is an energy efficient unit, which digests, stabilises and dries organic waste. </p>
              <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
            </div>
          </div>


          <div className='w-[438px] h-[518px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
            <div className='relative h-[50%] w-full overflow-hidden'>

              <Image
                src="/assets/ecodryer.jpg"
                width={100}
                height={100}
                alt="home-below-banner"
                className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
                unoptimized
              />

              <div className='absolute top-3 left-3 flex items-center justify-center z-20'>
                <div className='bg-[#3CAA35] text-white rounded-full py-1 px-4 '>
                  <i>eco</i>DRYER
                </div>
              </div>

            </div>
            <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
              <h3 className='text-[#312C85] text-[22px] font-bold'>Digestate Dryer</h3>
              <p className='text-[#7e8287] text-[18px] font-semibold'>The ‘ecoDRYER’ is Organicco’s unique efficient dryer. It uses a combination of hot water and a microwave heating system. It can be configured to suit many applications... </p>
              <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
            </div>
          </div>


          <div className='w-[438px] h-[518px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
            <div className='relative h-[50%] w-full overflow-hidden'>

              <Image
                src="/assets/ecoenergy-banner.jpg"
                width={100}
                height={100}
                alt="home-below-banner"
                className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
                unoptimized
              />

              <div className='absolute top-3 left-3 flex items-center justify-center z-20'>
                <div className='bg-[#3CAA35] text-white rounded-full py-1 px-4 '>
                  <i>eco</i>ENERGY
                </div>
              </div>

            </div>
            <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
              <h3 className='text-[#312C85] text-[22px] font-bold'>Waste-to-Energy</h3>
              <p className='text-[#7e8287] text-[18px] font-semibold'>Organicco’s ‘ecoENERGY’ is an integrated waste to energy solution. Carefully selected combinations of components are used to construct a reliable and economical... </p>
              <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
            </div>
          </div>


        </div>


      </section>
{/* vedio */}
      <section className='w-full h-[790px] md:h-[569px] flex flex-col md:flex-row'>
        <div className='flex flex-col p-6 md:p-[90px] flex-1 gap-2 md:gap-4'>
          <h3 className='text-[#312C85] mcLarenFont md:text-[22px] text-[18px]'>Organicco Presentation</h3>
          <h1 className='text-[#3CAA35] font-extrabold md:text-[50px] text-[30px] md:leading-[55px]'>Get to Know the Heart Behind Organicco</h1>
          <p className='text-[#7E8287] font-semibold md:text-[18px] text-[16px]'>Embark on a visual journey through Organicco's ethos, innovations, and commitment to sustainability with our compelling About Us video. Discover the faces and stories behind our groundbreaking work, as we strive to redefine the future of waste management and environmental stewardship. Join us in our mission to create a greener, more sustainable world for generations to come.</p>
        </div>
        <div className='flex-1 p-6 md:p-[20px] '>
          <VideoPlayer />

        </div>

      </section>

{/* featuredsolution */}
      <section className='w-full h-[2680px] md:h-[769px] flex flex-col bg-[#f5f5f5]'>
        <div className='pt-[54px]'>
          <h1 ref={titleRef} className='text-[30px] md:text-[50px]  items-center text-center font-extrabold text-[#3CAA35] '>Featured Solutions</h1>
        </div>

        <div className=' block md:hidden flex px-[120px] justify-between items-center flex-col md:flex-row gap-5 pt-10'>

<div className='w-[438px] h-[600px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
  <div className='relative h-[50%] w-full overflow-hidden'>

    <Image
      src="/assets/odour-control.jpg"
      width={100}
      height={100}
      alt="home-below-banner"
      className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
      unoptimized
    />


  </div>
  <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
    <h3 className='text-[#312C85] text-[22px] font-bold'>Odour Control</h3>
    <p className='text-[#7e8287] text-[18px] font-semibold'>We have a range of odour control and management systems based on wet scrubbers, venturi scrubbers, carbon filter, regenerative catalyst,centrifugal separators, and plasma systems. </p>
    <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
  </div>
</div>


<div className='w-[438px] h-[600px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
  <div className='relative h-[50%] w-full overflow-hidden'>

    <Image
      src="/assets/automation.jpg"
      width={100}
      height={100}
      alt="home-below-banner"
      className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
      unoptimized
    />



  </div>
  <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
    <h3 className='text-[#312C85] text-[22px] font-bold'>Automation & IoT</h3>
    <p className='text-[#7e8287] text-[18px] font-semibold'>We are mechatronic engineering experts and have more than 15 years of experience of delivering complex electrical control panels, with integrated automation and internet of things (IoT).</p>
    <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
  </div>
</div>


<div className='w-[438px] h-[600px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
  <div className='relative h-[50%] w-full overflow-hidden'>

    <Image
      src="/assets/net-zero.jpg"
      width={100}
      height={100}
      alt="home-below-banner"
      className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
      unoptimized
    />



  </div>
  <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
    <h3 className='text-[#312C85] text-[22px] font-bold'>Net-zero</h3>
    <p className='text-[#7e8287] text-[18px] font-semibold'>In today’s business environment, no company can afford to waste money - or waste the planet! It’s a fact that waste is an essential part of providing food products and services.</p>
    <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
  </div>
</div>


<div className='w-[438px] h-[600px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
  <div className='relative h-[50%] w-full overflow-hidden'>

    <Image
      src="/assets/epc-feed.jpg"
      width={100}
      height={100}
      alt="home-below-banner"
      className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
      unoptimized
    />



  </div>
  <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
    <h3 className='text-[#312C85] text-[22px] font-bold'>Consultancy</h3>
    <p className='text-[#7e8287] text-[18px] font-semibold'>Our project development arm offering Engineering, Procurement, Construction (EPC) and Project Management is a leader in facility design for the refined fuels, renewable fuels, renewable energy, 
fertiliser, and transportation 
industries. </p>
    <button className='border border-[#312C85] p-2 w-[148px] rounded text-[18px] text-[#312C85] font-semibold group-hover:text-[#fff] group-hover:bg-[#312C85] transition-all ease-in-out duration-300 flex items-center gap-1 justify-center'>View More             <FaArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300 " /></button>
  </div>
</div>


</div>
<div className='md:block hidden'>
<CardComponent />
</div>

      </section>

{/* smartSolution */}
      <section className='w-full h-[1200px] md:h-[969px] flex flex-col'>
        <div className='flex flex-col items-center justify-center md:py-[100px] md:px-[300px] p-6 md:gap-4' >
          <h3 className='text-[#312C85] mcLarenFont text-[22px]'>Management</h3>
          <h1 className=' font-extrabold md:text-[50px] text-[30px] md:leading-[55px] text-center text-[#3CAA35]'>Smart Solutions for Waste and Recycling</h1>
          <p className='text-[#7E8287] font-semibold text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt faucibus velit eget condimentum. Curabitur pharetra, urna ac tristique congue, orci orci hendrerit dolor, et vulputate metus dui ut justo.</p>

        </div>
        <div className='h-full w-full homepage_  flex justify-center md:justify-between overflow-hidden '>
          <div className='h-full w-[600px]  flex flex-col ' >
            <div className='flex flex-1  p-2 justify-center items-center flex-col pl-[120px] animate-div-left'  >
              <Image
                src="/Group 533.svg"
                width={70}
                height={70}
                alt="home-below-banner"
                unoptimized
                
              />
              <h1 className='text-[#3CAA35] font-extrabold text-[30px] md:leading-[55px] text-center'>Operations Management</h1>
              <p className='text-[#7E8287] font-semibold text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

            </div>
            <div className=' flex flex-col flex-1  p-2 justify-center items-center pl-[120px] animate-div-left'>
              <Image
                src="/Group 534.svg"
                width={70}
                height={70}
                alt="home-below-banner"
                unoptimized
              />
              <h1 className='text-[#3CAA35] font-extrabold text-[30px] md:leading-[55px] text-center'>Environmental Compliance</h1>
              <p className='text-[#7E8287] font-semibold text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>

          </div>

          <div className='h-full w-[600px]  flex flex-col ' >
            <div className=' flex flex-col flex-1  p-2 justify-center items-center pr-[120px] animate-div'>
              <Image
                src="/Group 535.svg"
                width={70}
                height={70}
                alt="home-below-banner"
                unoptimized
              />
              <h1 className='text-[#3CAA35] font-extrabold text-[30px] md:leading-[55px] text-center'>Customer Service</h1>
              <p className='text-[#7E8287] font-semibold text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className=' flex flex-col flex-1  p-2 justify-center items-center pr-[120px] animate-div'>
              <Image
                src="/Group 536.svg"
                width={70}
                height={70}
                alt="home-below-banner"
                unoptimized
              />
              <h1 className='text-[#3CAA35] font-extrabold text-[30px] md:leading-[55px] text-center'>Sustainability and Innovation</h1>
              <p className='text-[#7E8287] font-semibold text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>

          </div>

        </div>

      </section>

{/* faq */}
      <section className='faq_section w-full h-[701px] flex flex-col bg-[#3CAA35] md:py-[100px] md:px-[390px] gap-2 p-4'>
      <div ref={cursorRef} className="cur__sor z-50">
      </div>
        <h3 className='text-[22px] text-center text-white mcLarenFont'>FAQ</h3>
        <h1 className='text-[50px] text-center text-white font-extrabold'>Frequently Asked Questions</h1>
        <p className='text-[18px] text-center text-white font-semibold'>Find quick solutions to your questions about our services, operations, and sustainability efforts.</p>

        <div>
          <Accordion items={items_acc} />
        </div>

      </section>
{/* newsblog */}
      <section className='w-full h-[1870px] md:h-[939px] flex flex-col bg-[#f5f5f5]'>
        <div className='flex flex-col items-center justify-center md:py-[100px] md:px-[300px] gap-4 p-4'>
          <h3 className='text-[#312C85] mcLarenFont text-[22px]'>News & Blog</h3>
          <h1 className='text-[#3CAA35] font-extrabold text-[30px] md:text-[50px] md:leading-[55px]'>Read Our Latest News & Blog</h1>
          <p className='text-[#7E8287] font-semibold text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt faucibus velit eget condimentum. Curabitur pharetra, urna ac tristique congue, orci orci hendrerit dolor, et vulputate metus dui ut justo.</p>
        </div>

        <div className='flex md:px-[120px] items-center justify-between flex-col md:flex-row gap-3'>

          <div className='w-[438px] h-[518px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
            <div className='relative h-[50%] w-full overflow-hidden'>

              <Image
                src="/climate-change 2.svg"
                width={100}
                height={100}
                alt="home-below-banner"
                className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
                unoptimized
              />


            </div>
            <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
              <h3 className='text-[#312C85] text-[22px] font-bold'>Climate change is scientifically proven fact!</h3>
              <p className='text-[#7e8287] text-[18px] font-semibold'>As the world slowly reacts to the environmental Armageddon it has created for itself it is imperative that urgent action is undertaken.  </p>
              <button className='border border-[#3CAA35] p-2 w-[148px] rounded text-[18px] text-[#3CAA35] font-semibold hover:text-[#fff]  transition-all ease-in-out duration-300 flex items-center gap-1 justify-center news_btn bg-transparent z-50'>
                Read More
              </button>


            </div>
          </div>


          <div className='w-[438px] h-[518px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
            <div className='relative h-[50%] w-full overflow-hidden'>

              <Image
                src="/agriculture 2.svg"
                width={100}
                height={100}
                alt="home-below-banner"
                className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
                unoptimized
              />


            </div>
            <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
              <h3 className='text-[#312C85] text-[22px] font-bold'>Agricultural Waste and Pollution</h3>
              <p className='text-[#7e8287] text-[18px] font-semibold'>At a 2014 forum held in Rome and organised by the UN Food & Agriculture Organisation (FAO), Maria – Helena Semedo gave a stark warning to all those attending that.. </p>
              <button className='border border-[#3CAA35] p-2 w-[148px] rounded text-[18px] text-[#3CAA35] font-semibold hover:text-[#fff]  transition-all ease-in-out duration-300 flex items-center gap-1 justify-center news_btn bg-transparent z-50'>
                Read More
              </button>
            </div>
          </div>


          <div className='w-[438px] h-[518px] bg-white flex flex-col group hover:shadow-xl transition-all ease-in-out duration-300'>
            <div className='relative h-[50%] w-full overflow-hidden'>

              <Image
                src="/river-wye 2.svg"
                width={100}
                height={100}
                alt="home-below-banner"
                className="h-full w-full object-cover transition-all ease-in-out duration-300 group-hover:scale-110 z-[-1]"
                unoptimized
              />



            </div>
            <div className='h-[50%] w-full flex flex-col gap-4 p-4 ' >
              <h3 className='text-[#312C85] text-[22px] font-bold'>Unmasking the Environmental Crisis</h3>
              <p className='text-[#7e8287] text-[18px] font-semibold'>The blame has been squarely directed at the numerous livestock production facilities, notably poultry farms, that have emerged within the River Wye's catchment area. </p>
              <button className='border border-[#3CAA35] p-2 w-[148px] rounded text-[18px] text-[#3CAA35] font-semibold hover:text-[#fff]  transition-all ease-in-out duration-300 flex items-center gap-1 justify-center news_btn bg-transparent z-50'>
                Read More
              </button>
            </div>
          </div>


        </div>
      </section>




    </main>
  )
}

export default page
