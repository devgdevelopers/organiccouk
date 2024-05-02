"use client";
import React from "react";

import Image from "next/image";
import Card from "./component/card";
import BlogCard from "./component/BlogCard";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   // Enable center mode to display partial slides on sides
  // Add padding to center mode to create margin between items
  };
  
  

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // init Swiper:

  const productcardDataArray = [
    {
      title: "ecoHERO",
      subtitle: "Organic Fertiliser Plant",
      desc: "The ‘ecoHERO’ is a revolutionary accelerated thermophilic aerobic digestion (ATAD) system. It is an energy efficient unit, which digests, stabilises and dries organic waste. Depending on the feedstock, it does this in as little as 24 hours without the help of any enzymes or additives. Unlike our ecoDRYER, it is slow a drier instead uses aerobic conditions.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "ecoDRYER",
      subtitle: "Digestate Dryer",
      desc: "The ‘ecoDRYER’ is Organicco’s unique efficient dryer. It uses a combination of hot water and a microwave heating system. It can be configured to suit many applications, including dehydrating high moisture content materials, such as drying digestate for an anaerobic / biogas plant. Unlike the ecoHERO, it does not stablise bioactive materials.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "ecoENERGY",
      subtitle: "Waste-to-Energy",
      desc: "Organicco’s ‘ecoENERGY’ is an integrated waste to energy solution. Carefully selected combinations of components are used to construct a reliable and economical answer to organic waste problems, providing a “total solution” for agricultural and commercial purposes. It can be configured with ecoHERO and ecoDRYER units to handle many types of organic waste",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
  ];

  const servicescardDataArray = [
    {
      title: "Odour Control",
      subtitle: "Regenerative Catalyst",
      desc: "Organicco have a range of scrubbers and a regenerative catalyst system for the removal of gaseous compounds and odour such as sulphur compounds (e.g., hydrogen sulphide and mercaptans), aromatics, ammonia and other types of VOCs. These compounds are formed in for example biogas production, biogas upgrading, sludge holding tanks, hygienisation tanks, sewage pipelines, sewage pumping stations and sewage treatment plants. Typically, odour reduction of 98 – 99.5% is achieved.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "Net Zero",
      subtitle: "Organic Waste Management",
      desc: "There is no better solution than avoiding waste in the first place. Consequently, Organicco offer options to avoid producing waste or ways to help reduce it. Where it is not possible to reduce waste, Organicco offer a number of solutions, which not only transforms waste into useful resources, but can help meet net-zero targets. Organicco will provide data driven factual numbers, demonstrating the carbon reduction to help with net-zero carbon calculations.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "EPC and FEED",
      subtitle: "Consultancy Services",
      desc: "Organicco have a consulting team and offer engineering, procurement and construction services, (EPC), front-end engineering design services (FEED), feasibility studies, technical design and project management services. Organicco specialise in net-zero, carbon capture, renewable and cleantech infrastructure projects.Organicco is developing an integrated carbon capture technology which cleans the emissions from fuel driven renewable energy sources, such as anaerobic digesters waste to energy plant where carbon is captured and stored.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
  ];

  const BlogscardDataArray = [
    {
      title: "Climate change is scientifically proven fact!",
      subtitle: "",
      desc: "As the world slowly reacts to the environmental Armageddon it has created for itself it is imperative that urgent action is undertaken. The time for sitting on our hands and leaving it to others has long past its sell by date. We are all responsible for our actions and can and must do all we can to help avoid the oncoming ecological disaster whilst there is still time to make a difference.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "Soil degradation",
      subtitle: "",
      desc: "At a 2014 forum held in Rome and organised by the UN Food & Agriculture Organisation (FAO), Maria – Helena Semedo gave a stark warning to all those attending that it takes 1,000 years to generate 3 centimetres of top soil and approximately one-third has been lost. If the present rate of soil degradation continued, all the World’s topsoil would be gone within 60 years. She went to say that degraded soil means the amount of arable and productive land per person in 2050 will be only 25% of what is was in 1960.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "Agricultural Waste and Pollution",
      subtitle: "",
      desc: "As the population of the world increases so does the demand for food. This in turn leads to pressure on the agricultural sector to increase yields whilst doing so at affordable pricing. This has caused farmers to abandon traditional methods in favour of the intensive farming we see employed today resulting in greater agricultural waste and pollution.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
    {
      title: "Unmasking the Environmental Crisis",
      subtitle: "",
      desc: "The blame has been squarely directed at the numerous livestock production facilities, notably poultry farms, that have emerged within the River Wye's catchment area. The gravity of the situation has reached such levels that the Wildlife Trust is urging the governments of England and Wales to halt any further developments in this region.",
      cardImage: "/assets/ecohero-loctroi-1.jpg",
      cardLink: "/products/ecohero-loctroi",
    },
  ];
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between banner-section bg-white">
        <Image
          src="/assets/people-taking-community-action.jpg"
          className="w-full "
          width={100}
          height={100}
          quality={100}
          alt="lalla"
          unoptimized
        ></Image>

        {/* below banner  */}
        <section className="w-full mx-auto grid justify-center flex-auto gap-5 p-6  t">
          <div className="container mx-auto text-justify max-w-[1154px] pt-7 pb-7">
            <p className=" text-xl pb-4 text-green">
              The most advanced organic waste and food waste recycling solution
              in the world
            </p>
            <p className="sm:text-justify">
              Organicco is an innovative and modern biotechnology company
              specialising in
              <i> organic and food waste recycling</i>,
              <i className="text-brown"> waste to energy</i>,
              <i> organic fertiliser</i>, and
              <i> sustainable engineering consultancy </i>
              services.
            </p>

            <p className="m-0 p-0">
              Our business offers affordable technology for solving escalating
              food security problems. The main focus concentrates on
              decarbonisation whilst reducing costs and providing environmental
              benefits for all.
            </p>
            <p>
              This has been achieved with the continuous development of
              Organicco’s closed-loop solution where we waste nothing. Depending
              on the input material our technologies convert organic waste into
              other useful resources, such as fertiliser, animal feed, animal
              protein meal, electricity, heat, steam, grey water, fuel, and
              compressed CO2 i.e., the input material is recycled into a
              commodity with financial value.
            </p>
            <h3 className="text-xl my-4 text-green">Empowering Businesses</h3>
            <p>
              Organicco provides solutions for empowering businesses to divert
              waste away from expensive traditional disposal options whilst
              helping them meet their net-zero targets. Organicco has
              specifically designed a range of products to convert waste into
              natural assets.
            </p>
          </div>
        </section>

        {/* featured products  */}
        <section className="w-full bg-purple-light py-20">
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
                  cardImage={lala.cardImage}
                  cardLink={lala.cardLink}
                />
              ))}
            </div>
          </div>
        </section>

        {/* video section  */}
        <section className="container">
          <h1 className="text-xl md:text-2xl font-bold my-10 text-center text-purple">
            Organicco Presentation
          </h1>
          <div className="mx-auto">
            <video
              className="mx-auto"
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
          <div className="container mx-auto ">
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

        {/* news and blog  */}
        <section className=" p-6 bg-green-light sm:p-24  w-full">
          <div className="container mx-auto grid grid-cols-2 gap-10">
            <div>
            <h1 className="text-xl md:text-2xl font-bold my-10 text-green">
              News and Blogs
            </h1>
            <a href="">
              <strong>Climate change is a scientifically proven fact!</strong>
            </a>
            <p className="text-justify">
              As the world slowly reacts to the environmental Armageddon it has
              created for itself it is imperative that urgent action is
              undertaken. The time for sitting on our hands and leaving it to
              others has long past its sell by date. We are all responsible for
              our actions and can and must contribute to solving the problems
              whilst there is still time to make a difference.
            </p>
            <button className="btn bg-green text-white p-2 rounded-sm my-5">
              Read More
            </button>
            </div>
            <div>
            <Slider {...settings} className="flex gap-10 tilted-item">
            {BlogscardDataArray.map((lala, id) => (
                <BlogCard 
                  key={id}
                  title={lala.title}
                 
                  desc={lala.desc}
                  cardImage={lala.cardImage}
                  cardLink={lala.cardLink}
                />
              ))}
          </Slider>
            </div>
           
          </div>
        </section>

    
        {/* accordian section  */}

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
                  className="p-5 
            outline-none"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Who we Are?"
                  className="p-5"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="What we Do?"
                  className="p-5"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 4"
                  title="How we Do?"
                  className="p-5"
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
