"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const page = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleEnlarge = () => {
    setIsEnlarged(true);
  };

  const handleClose = () => {
    setIsEnlarged(false);
  };
  useEffect(() => {
    Aos.init({});
  }, []);
  return (

    <>
      <section className="flex flex-col items-center justify-start md:mt-[8rem] ">
        <div className="bg-white  w-full">
          <section className="bg-[#52c42f1f] py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2e2e84] tracking-in-contract-bck">
                Net-zero
              </h1>
              <p className="text-[#388521] font-semibold ">
                Organic & food waste management. The most advanced organic waste to resources solution in the world!
              </p>
            </div>
          </section>
          <section className="py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6 md:flex md:justify-center">
              <div className="md:w-1/2 md:pr-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
                    A fantastic opportunity for change
                  </h2>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    You’re certainly in good company. Organicco is an innovative, world class professional organisation which exists to promote best value in your business by turning your waste into useful products.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Our
                    '<Link href="/products/ecohero" className="font-semibold text-black hover:underline">
                      <i>eco</i>HERO
                    </Link>'

                    range converts organic waste into useful resources, such as fertiliser, animal feed, fish meal and protein meal for farming.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    In today’s business environment, no company can afford to waste money - or waste the planet! It’s a fact that waste is an essential part of providing food products and services. By working with Organicco you will eliminate sending waste to landfill, waterways or to incineration, while reducing your costs.
                  </p>

                </div>
              </div>
              <div className="md:w-1/2 md:m-0 m-5">
                <div>
                  <Image
                    src="/assets/net-zero-food-waste-1.jpg"
                    width={600}
                    height={600}
                    alt="Product Image"
                    className="w-full rounded-lg overflow-hidden object-cover transition-all ease-in-out duration-300"
                  />
                </div>

              </div>

            </div>

          </section>
          <hr />


          <section className="py-12 ">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start ">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
                    Reduce cost with the '<Link href="/products/ecohero" className="font-semibold text-black hover:underline">
                      <i>eco</i>HERO
                    </Link>' Digester
                  </h2>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    At Organicco, we don’t just focus on reducing your cost and reducing your waste, we are offering you the opportunity and the tools to transform your waste into a commodity - fertiliser - which Organicco offer to purchase back from you. No other company offers you an income from food waste disposal.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
                    Accelerated thermophilic aerobic digester for food waste
                  </h2>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Our ‘ecoHERO’ Digesters are simple to operate. They require minimal maintenance, they’re quiet, safe, hygienic, sealed and neatly packaged and therefore emit no odours. They have a relatively small footprint, too.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Our new range of ‘ecoHERO’s have greater modular flexibility, which allows the front end to be expanded should the demand on the machine’s capacity increase, without the expense of upgrading to a larger model.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    We have expanded the range of models too - a new mini ‘ecoHERO’ can process from as little as 100kgs a day, at the other end of the scale, we can build ‘ecoHERO’s to process more than 100 tonnes a day.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    This now allows virtually every business and organisation with a organic waste disposal requirement, a cost effective, alternative to expensive landfill, incineration or waterway disposal. Whilst giving them an income from the fertiliser our Biotech solution offers.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Further still our new electrical control system ensures they remain incredibly economical to run.
                  </p>


                </div>
                <div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
                    Organicco’s Quality Assurance
                  </h2>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Organicco is a highly regarded organisation that has scientifically designed and built its own products from scratch. We have the experience and expertise to offer all customers effective solutions to all organic waste problems whist helping achieve carbon reduction targets. All customers can be assured that Organicco will stand accountable for every product they manufacture.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    By using the Organicco to help achieve your goals, you will receive the best practical and personal support to successfully change to an ecologically sound practice, which will reduce your current spend on organic waste disposal.
                  </p>


                </div>
                <div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]">
                    Features and benefits
                  </h2>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Separated organic waste is bin lifted into the ‘ecoHERO’, on a continuous feeding cycle, which allows you to input the organic waste at any time and with any volume up to the capacity of the machine. Once bin lifted, it’s shredded and slowly aerobically digested in a homogeniser tank. Afterwards, homogeneous matter is then fed into the rotary bioreactor where it goes through accelerated thermophilic aerobic digestion and finally the microwave drying process occurs, from which the fertiliser granules are produced.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Once processed, the organic waste will have reduced by around 70% in both weight and volume, leaving a commodity that is manageable, packageable and easily transportable.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Fertiliser is a commodity in demand, so to make life easy, we will buy all the fertiliser you produce at an agreed rate per tonne. We even collect your fertiliser for free from anywhere in the world.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    The ‘ecoHERO’ Digester offers the best cost-effective solution to recycle food waste. It is a closed-loop system where nothing is wasted, everything is recycled into a useful form. We can even recover the water that is condensed in the process.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    This system completes the natural process of the food cycle where organic/food waste is converted into a nutrient, carbon rich fertiliser to be applied to the soil to produce a new crop for the cycle to start once more.
                  </p>

                </div>




              </div>
              <div className="md:flex md:items-center md:justify-center bg-[#e9ecef]">
                <div className="flex flex-col p-5 w-full max-w-md mx-auto md:h-[170vh] h-[130vh]  gap-5 ">
                  <div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]" data-aos="fade-left" data-aos-duration="600" data-aos-ofset="50">
                      The Technology
                    </h2>
                    <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                      Organicco’s patented ‘ecoHERO’ Digester is the first of its kind anywhere in the world, it makes recycling organic waste easy and profitable. The system is based on accelerated thermophilic aerobic digestion (ATAD) which breaks down organic materials very quickly. So quickly, in fact, that the ‘ecoHERO’ will shred and digest the waste material and produce a non-toxic, stable fertiliser pellet in less than a day in some cases, without the need for expensive enzymes or chemical additives.
                    </p>

                  </div>
                  <div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]" data-aos="fade-left" data-aos-duration="600" data-aos-ofset="50">
                      About the Fertiliser
                    </h2>
                    <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                      Numerous tests have been carried out on the fertiliser pellets and show that it has good soil nutrient properties. It is stable and slow releasing, thus usable for farming. The stability test of fertiliser shown by blue trace outperforms PAS100 material shown by black trace. (See graph on CO2 production)
                    </p>

                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <Image
                      src="/assets/net-zero-fertiliser-1.jpg"
                      width={500}
                      height={100}
                      alt="Product Image"
                    />
                    <button
                      onClick={handleEnlarge}
                      className="inline-flex items-center justify-center rounded-md bg-[#52c42f1f] px-4 py-2 text-sm font-medium text-[#2e2e84] transition-colors duration-300 hover:bg-[#52c42f33]"
                    >
                      Enlarge Image
                    </button>

                    {isEnlarged && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative">
                          <Image
                            src="/assets/net-zero-fertiliser-1.jpg"
                            width={1000}
                            height={200}
                            alt="Product Image Enlarged"
                          />
                          <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-red-500 sm:p-2 sm:px-4 p-1 px-3 hover:bg-[#2e2e84] text-white transition-all ease-soft-spring duration-100 "
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6 md:flex md:justify-center">
              <div className="md:w-1/2 md:pr-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e2e84]" data-aos="fade-right" data-aos-duration="600" data-aos-ofset="50" >
                    ecoHERO case study
                  </h2>
                  <p className="text-[#388521] font-semibold " data-aos="fade-right" data-aos-duration="600" data-aos-ofset="50" data-aos-delay="200">The Need
                  </p>
                  <hr className="font-bold my-4 bg-black h-[1.5px]" data-aos="fade-right" data-aos-duration="600" data-aos-ofset="50" data-aos-delay="400"/>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Loc Troi Group, formally known as An Giang Plant Protection, are a Vietnamese agricultural company, established in 1993 in the An Giang Province. Growing from a small start-up company of 23 people, Loc Troi is now one of Vietnams leading agricultural distributers, working in fields of crop protection chemicals, seed production, paper packing, tourism and rice processing for export and domestic consumption. Currently, Loc Troi employ in excess of 2,000 people and are working closely with Vietnamese farmers to develop sustainable cultivation techniques.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Loc Troi pride themselves on both sustainability and their close relationship with Vietnam’s farmers. In 2006 they launched the ‘To the Fields with the Farmers’ campaign, which saw Loc Troi Scientists and Developers live and work among the farmers to gain a true insight into their needs. This commitment was aimed at developing truly sustainable farming methods, to match the group’s philosophy that ‘Farmers are the group’s real owners.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Such commitment to sustainability, however, was found lacking in certain areas of the company. As a producer of sugar, Loc Tori found itself dealing with 700 tonnes of waste sugar cane dust and peat a week. Due to its high moisture content of 40-50%, the use of sugar cane dust as a combustible fuel was problematic, and landfill costs were in the region of 50 USD per tonne. Clearly, a solution was needed to create a sustainable sugar production operation, which maximised efficiency and minimised costs, in line with the value of sustainability that the company advocated.
                  </p>

                </div>
              </div>
              <div className="md:w-1/2 md:m-0 m-5 bg-[#e9ecef]">



              </div>

            </div>

          </section>
          <section className="py-8 ">
            <div className="max-w-6xl mx-auto px-4 md:px-6 md:flex md:justify-center gap-4">

              <div className="md:w-1/2 md:m-0 m-5 bg-[#e9ecef]">



              </div>



              <div className="md:w-1/2 md:pr-4">
                <div>

                  <p className="text-[#388521] font-semibold " data-aos="fade-left" data-aos-duration="600" data-aos-ofset="50" data-aos-delay="200">The Benefits
                  </p>
                  <hr className="font-bold my-4 bg-black h-[2px]" data-aos="fade-left" data-aos-duration="600" data-aos-ofset="50" data-aos-delay="400"/>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    Once the system was successfully installed across a 1000m2 area of Loc Troi’s production facility, the benefits soon became apparent. From an operational perspective, the system had to handle waste coming from a range of sites. Incorporating a nearby river into the design allowed waste to be brought to the site via boat and then loaded directly into the ecoHERO, allowing waste to come directly from a wide area. Once loaded, the operator simply pushed a button, initiating the sequence. The rest happens automatically, with the operator collecting the fertiliser at the end of the process, ensuring that maximum waste could be processed with minimal effort.
                  </p>
                  <p className="text-gray-500  mt-4 leading-relaxed text-justify">
                    The 'ecoHERO' also helped Loc Troi achieve a higher level of sustainability. Previously, the sugar cane dust was sent to costly landfills, but now it was a transformed useful resource, one that could be utilised by the company and the farmers. Not only were waste disposal costs reduced, but Loc Troi became a producer of one of agriculture’s most important resources-fertiliser. No longer would they have to spend money sourcing this commodity from elsewhere thus achieving huge savings.
                  </p>


                </div>
              </div>

            </div>

          </section>



        </div>
      </section>


      <section className="  text-[#2e2e84] py-12 section_bg  ">
        <div className="max-w-6xl mx-auto text-center space-y-4 ">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to contact us?
          </h2>
          <p className="text-gray-500  max-w-xl mx-auto">
            If so, please complete
            <Link
              href={`/contact`}>
              <span className="text-[#2e2e84] font-medium"> the form </span>
            </Link>
            and we will endeavour to provide you with a competitive quote.
          </p>
        </div>
      </section>



    </>

  );
};

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default page;
